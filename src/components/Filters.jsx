export default function Filters({ brands, brand, setBrand, min, max, setMin, setMax, onReset }) {
  return (
    <div className="filters">
      <div className="f-group">
        <label htmlFor="marca">Marca</label>
        <select id="marca" value={brand || ""} onChange={(e) => setBrand(e.target.value || null)}>
          <option value="">Todas</option>
          {brands.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
      </div>
      <div className="f-group">
        <label htmlFor="pmin">Precio mínimo ($)</label>
        <input id="pmin" type="number" min="0" placeholder="0" value={min} onChange={(e) => setMin(e.target.value)} />
      </div>
      <div className="f-group">
        <label htmlFor="pmax">Precio máximo ($)</label>
        <input id="pmax" type="number" min="0" placeholder="Sin límite" value={max} onChange={(e) => setMax(e.target.value)} />
      </div>
      <button className="reset" onClick={onReset}>Limpiar filtros</button>
    </div>
  );
}
