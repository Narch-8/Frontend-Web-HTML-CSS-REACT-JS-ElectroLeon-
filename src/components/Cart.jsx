export default function Cart({ open, items, onClose, onChangeQty, onRemove, onClear }) {
  const total = items.reduce((s, i) => s + i.precio * i.qty, 0);

  return (
    <>
      <div className={"overlay" + (open ? " show" : "")} onClick={onClose} />
      <aside className={"drawer" + (open ? " open" : "")} aria-hidden={!open} aria-label="Carrito de compras">
        <div className="d-head">
          <h3>Tu carrito</h3>
          <button className="x" onClick={onClose} aria-label="Cerrar carrito">✕</button>
        </div>

        <div className="d-body">
          {items.length === 0 && <p className="empty-cart">Tu carrito está vacío. Agrega productos para verlos aquí.</p>}
          {items.map((i) => (
            <div className="line" key={i.id}>
              <div className="line-info">
                <span className="name">{i.nombre}</span>
                <span className="cat">{i.marca} · ${i.precio}</span>
              </div>
              <div className="qty">
                <button onClick={() => onChangeQty(i.id, -1)} aria-label="Quitar uno">−</button>
                <span>{i.qty}</span>
                <button onClick={() => onChangeQty(i.id, 1)} aria-label="Agregar uno">+</button>
              </div>
              <button className="del" onClick={() => onRemove(i.id)}>Eliminar</button>
            </div>
          ))}
        </div>

        <div className="d-foot">
          <div className="total"><span>Total</span><b>${total}</b></div>
          {items.length > 0 && <button className="reset" onClick={onClear}>Vaciar carrito</button>}
        </div>
      </aside>
    </>
  );
}
