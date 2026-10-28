const PATHS = {
  "Tarjetas gráficas": <><rect x="4" y="22" width="56" height="26" rx="3" /><circle cx="22" cy="35" r="8" /><circle cx="42" cy="35" r="8" /><path d="M8 48v6M14 48v6M20 48v6" /></>,
  "Procesadores": <><rect x="16" y="16" width="32" height="32" rx="2" /><rect x="24" y="24" width="16" height="16" /><path d="M24 8v8M32 8v8M40 8v8M24 48v8M32 48v8M40 48v8M8 24h8M8 32h8M8 40h8M48 24h8M48 32h8M48 40h8" /></>,
  "Placas madres": <><rect x="8" y="8" width="48" height="48" rx="3" /><rect x="16" y="16" width="14" height="14" /><path d="M38 14v20M44 14v20M16 40h32M16 48h20" /></>,
  "Memoria RAM": <><rect x="4" y="20" width="56" height="20" rx="2" /><path d="M10 40v6M16 40v6M22 40v6M28 40v6M34 40v6M40 40v6M46 40v6M52 40v6" /><rect x="12" y="26" width="8" height="8" /><rect x="28" y="26" width="8" height="8" /><rect x="44" y="26" width="8" height="8" /></>,
  mouse: <><rect x="20" y="8" width="24" height="48" rx="12" /><path d="M32 8v18M20 26h24" /></>,
  teclado: <><rect x="4" y="18" width="56" height="28" rx="3" /><path d="M12 26h4M22 26h4M32 26h4M42 26h4M50 26h2M12 34h4M22 34h4M32 34h4M42 34h4M50 34h2M18 41h28" /></>,
  audifonos: <><path d="M12 38V32a20 20 0 0 1 40 0v6" /><rect x="8" y="36" width="10" height="16" rx="3" /><rect x="46" y="36" width="10" height="16" rx="3" /></>,
  adaptador: <><rect x="22" y="8" width="20" height="14" rx="2" /><path d="M28 22v8h8v-8M32 30v12" /><rect x="26" y="42" width="12" height="14" rx="2" /></>,
};

export default function Icon({ name }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="#000" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
      {PATHS[name]}
    </svg>
  );
}
