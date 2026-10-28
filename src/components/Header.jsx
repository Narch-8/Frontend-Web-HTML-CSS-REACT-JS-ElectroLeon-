import { CATEGORIES, brandsOf } from "../data/products.js";
import SmartImage from "./SmartImage.jsx";
import { LOGO, asset } from "../config.js";

export default function Header({ query, setQuery, cat, onSelect, cartCount, openCart, goHome }) {
  return (
    <header className="top">
      <div className="bar">
        <button className="logo" onClick={goHome} aria-label="Ir al inicio">
          <SmartImage src={asset(LOGO)} alt="" />
          <span>Electro<em>Leon</em></span>
        </button>

        <div className="search" role="search">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar tarjetas gráficas, procesadores, mouses..."
            aria-label="Buscar productos"
          />
          {query && <button onClick={() => setQuery("")}>Borrar</button>}
        </div>

        <div className="user">
          <button className="chip" title="Mi cuenta">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" /></svg>
            Hola, Usuario
          </button>
          <button className="chip" onClick={openCart}>Carrito <span className="cnt">{cartCount}</span></button>
        </div>
      </div>

      <nav className="nav" aria-label="Categorías">
        <ul>
          <li><button className={!cat ? "on" : ""} onClick={() => onSelect(null)}>Todo</button></li>
          {CATEGORIES.map((c) => (
            <li key={c}>
              <button className={cat === c ? "on" : ""} onClick={() => onSelect(c)}>{c}</button>
              <div className="sub">
                <button onClick={() => onSelect(c)}>Ver todo</button>
                {brandsOf(c).map((b) => (
                  <button key={b} onClick={() => onSelect(c, b)}>{b}</button>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
