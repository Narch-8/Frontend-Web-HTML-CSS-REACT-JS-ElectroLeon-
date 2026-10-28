import Icon from "./Icon.jsx";
import SmartImage from "./SmartImage.jsx";
import { asset } from "../config.js";

export default function ProductCard({ product, onAdd }) {
  // Imagen: el campo "imagen" del producto, o por defecto "<id>.jpg" en public/images
  const src = asset("images/" + (product.imagen || `${product.id}.jpg`));
  return (
    <article className="card">
      <div className="pic">
        <SmartImage
          key={src}
          src={src}
          alt={product.nombre}
          fallback={<Icon name={product.icono || product.categoria} />}
        />
      </div>
      <div className="info">
        <span className="cat">{product.marca} · {product.categoria}</span>
        <span className="name">{product.nombre}</span>
        <div className="row">
          <span className="price">${product.precio}</span>
          <button className="add" onClick={() => onAdd(product)}>Agregar</button>
        </div>
      </div>
    </article>
  );
}
