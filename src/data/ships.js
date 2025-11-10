// src/data/ships.js
export const ships = [
  {
    id: 1,
    name: "Atlas Builder Mk-V",
    code: "PW-CB-001",
    category: "construcao",
    tagline: "Montagem modular de estações",
    model: "/models/atlas.glb",
    specs: [
      { label: "Comprimento", value: "180m" },
      { label: "Massa", value: "2.1M kg" },
      { label: "Propulsão", value: "Íons + LOX/LH2" },
      { label: "Vel. Máx", value: "12 km/s" },
      { label: "Capacidade", value: "8 braços robóticos" },
      { label: "Preço", value: "$2.8B" }
    ]
  },
  {
    id: 2,
    name: "Prometheus Forge",
    code: "PW-CB-002",
    category: "construcao",
    tagline: "Impressão 3D orbital",
    model: "/models/forge.glb",
    specs: [
      { label: "Comprimento", value: "220m" },
      { label: "Massa", value: "3.4M kg" },
      { label: "Propulsão", value: "Fusão He-3" },
      { label: "Vel. Máx", value: "18 km/s" },
      { label: "Produção", value: "500t/mês" },
      { label: "Preço", value: "$4.1B" }
    ]
  },
  {
    id: 3,
    name: "Odyssey Seeker",
    code: "PW-EX-001",
    category: "exploracao",
    tagline: "Missões de 10+ anos",
    model: "/models/odyssey.glb",
    specs: [
      { label: "Comprimento", value: "160m" },
      { label: "Massa", value: "1.8M kg" },
      { label: "Propulsão", value: "Íons + Vela Laser" },
      { label: "Vel. Máx", value: "0.12c" },
      { label: "Tripulação", value: "12 (hibernação)" },
      { label: "Preço", value: "$3.9B" }
    ]
  },
  {
    id: 4,
    name: "Aether Pathfinder",
    code: "PW-EX-002",
    category: "exploracao",
    tagline: "Exploração de cometas",
    model: "/models/aether.glb",
    specs: [
      { label: "Comprimento", value: "95m" },
      { label: "Massa", value: "680k kg" },
      { label: "Propulsão", value: "Nuclear" },
      { label: "Vel. Máx", value: "18 km/s" },
      { label: "Sondas", value: "6 autônomas" },
      { label: "Preço", value: "$1.2B" }
    ]
  },
  {
    id: 5,
    name: "Titan Hauler",
    code: "PW-LG-001",
    category: "logistica",
    tagline: "Carga interplanetária",
    model: "/models/titan.glb",
    specs: [
      { label: "Comprimento", value: "300m" },
      { label: "Massa", value: "5.2M kg" },
      { label: "Propulsão", value: "Químico + Íons" },
      { label: "Vel. Máx", value: "15 km/s" },
      { label: "Carga", value: "500k ton" },
      { label: "Preço", value: "$1.9B" }
    ]
  },
  {
    id: 6,
    name: "Nexus Carrier",
    code: "PW-LG-002",
    category: "logistica",
    tagline: "Rota LEO → Marte",
    model: "/models/nexus.glb",
    specs: [
      { label: "Comprimento", value: "240m" },
      { label: "Massa", value: "4.1M kg" },
      { label: "Propulsão", value: "Íons" },
      { label: "Vel. Máx", value: "11 km/s" },
      { label: "Contêineres", value: "80 modulares" },
      { label: "Preço", value: "$1.6B" }
    ]
  },
  {
    id: 7,
    name: "Vanguard Interceptor",
    code: "PW-ML-001",
    category: "militar",
    tagline: "Defesa orbital",
    model: "/models/vanguard.glb",
    specs: [
      { label: "Comprimento", value: "75m" },
      { label: "Massa", value: "420k kg" },
      { label: "Propulsão", value: "Fusão Compacta" },
      { label: "Vel. Máx", value: "25 km/s" },  // ← CORRIGIDO: vírgula removida
      { label: "Armamento", value: "Railgun + Laser" },
      { label: "Preço", value: "CLASSIFICADO" }
    ]
  }
]