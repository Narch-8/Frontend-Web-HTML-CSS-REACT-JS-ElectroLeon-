import { useEffect, useMemo, useRef, useState } from "react";
import { PRODUCTS, SUGGESTED_IDS, brandsOf } from "./data/products.js";
import Header from "./components/Header.jsx";
import Filters from "./components/Filters.jsx";
import ProductCard from "./components/ProductCard.jsx";
import Cart from "./components/Cart.jsx";
import Footer from "./components/Footer.jsx";
import Icon from "./components/Icon.jsx";
import SmartImage from "./components/SmartImage.jsx";
import { HERO, asset } from "./config.js";

// Esta funcion sirve para para guardar los productos y no se pierdan al hacer refresh a la pagina
const loadCart = () => {
  try { return JSON.parse(localStorage.getItem("electroleon-cart")) || []; }
  catch { return []; }
};

export default function App() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState(null);
  const [brand, setBrand] = useState(null);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [cart, setCart] = useState(loadCart);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState("");
  const toastTimer = useRef();
  const catalogRef = useRef();

  useEffect(() => {
    try { localStorage.setItem("electroleon-cart", JSON.stringify(cart)); } catch {}
  }, [cart]);

  // Filtro
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) =>
      (!cat || p.categoria === cat) &&
      (!brand || p.marca === brand) &&
      (!q || `${p.marca} ${p.nombre} ${p.categoria}`.toLowerCase().includes(q)) &&
      (min === "" || p.precio >= Number(min)) &&
      (max === "" || p.precio <= Number(max))
    );
  }, [query, cat, brand, min, max]);

  //  Carrito 
  const addToCart = (p) => {
    setCart((c) => c.some((i) => i.id === p.id)
      ? c.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i))
      : [...c, { ...p, qty: 1 }]);
    setToast(`${p.nombre} agregado al carrito`);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 1800);
  };
  const changeQty = (id, d) =>
    setCart((c) => c.map((i) => (i.id === id ? { ...i, qty: i.qty + d } : i)).filter((i) => i.qty > 0));
  const removeItem = (id) => setCart((c) => c.filter((i) => i.id !== id));
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  //  Navegación 
  const resetFilters = () => { setBrand(null); setMin(""); setMax(""); };
  const selectCategory = (c, b = null) => { setCat(c); setBrand(b); setQuery(""); };
  const goHome = () => { setCat(null); setQuery(""); resetFilters(); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const searching = query.trim() !== "";
  const filtering = brand || min !== "" || max !== "";
  const showHome = !cat && !searching && !filtering;
  const suggestions = SUGGESTED_IDS.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean);

  return (
    <>
      <Header
        query={query} setQuery={setQuery} cat={cat} onSelect={selectCategory}
        cartCount={cartCount} openCart={() => setCartOpen(true)} goHome={goHome}
      />

      <main>
        {showHome && (
          <section className="hero">
            <div className="l">
              <h1>Bienvenido a ElectroLeon</h1>
              <p>Todo para armar y mejorar tu PC: tarjetas gráficas, procesadores, placas madres, memoria RAM y los accesorios que completan tu setup.</p>
              <button className="btn" onClick={() => catalogRef.current.scrollIntoView({ behavior: "smooth" })}>Ver productos</button>
            </div>
            <div className="r">
              <SmartImage
                src={asset(HERO)}
                alt="Componentes para PC"
                fallback={<div className="fb"><Icon name="Tarjetas gráficas" /></div>}
              />
            </div>
          </section>
        )}

        {showHome && (
          <section className="block">
            <h2>Sugerencias para ti</h2>
            <div className="grid">{suggestions.map((p) => <ProductCard key={p.id} product={p} onAdd={addToCart} />)}</div>
          </section>
        )}

        <section ref={catalogRef}>
          <h2>{searching ? `Resultados para “${query.trim()}”` : cat || "Catálogo completo"}</h2>
          <Filters
            brands={brandsOf(cat)} brand={brand} setBrand={setBrand}
            min={min} max={max} setMin={setMin} setMax={setMax} onReset={resetFilters}
          />
          {results.length ? (
            <div className="grid">{results.map((p) => <ProductCard key={p.id} product={p} onAdd={addToCart} />)}</div>
          ) : (
            <div className="empty">No hay productos con estos criterios. Cambia la búsqueda o limpia los filtros.</div>
          )}
        </section>
      </main>

      <Footer />
      <Cart open={cartOpen} items={cart} onClose={() => setCartOpen(false)} onChangeQty={changeQty} onRemove={removeItem} onClear={() => setCart([])} />
      <div className={"toast" + (toast ? " show" : "")} role="status">{toast}</div>
    </>
  );
}
