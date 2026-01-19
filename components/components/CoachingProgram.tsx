const weeks = [
  { week: 1, title: "Cerebro adolescente", emoji: "🧠" },
  { week: 2, title: "Gestión de emociones", emoji: "💛" },
  { week: 3, title: "Comunicación asertiva", emoji: "🗣️" },
  { week: 4, title: "Límites en el uso del celular", emoji: "📱" },
  { week: 5, title: "Motivación en el colegio", emoji: "🥊" },
  { week: 6, title: "Relaciones amorosas y de amistad", emoji: "❤️" },
  { week: 7, title: "Autoestima", emoji: "🌱" },
  { week: 8, title: "Vacío existencial", emoji: "🌌" },
];

const includes = [
  "Todas las sesiones quedan grabadas",
  "Video semanal previo a cada sesión grupal sobre el tema de la semana",
  "Grupo de WhatsApp de acompañamiento",
  "Grupos reducidos / grupos limitados",
  "Total confidencialidad entre los miembros del programa",
];

const pricing = [
  "1 pago: $120.000 pesos argentinos o USD 100",
  "2 pagos: $75.000 pesos argentinos o USD 120",
];

export default function CoachingProgram() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="card p-6">
        <h3 className="text-blue-700 font-semibold text-lg">
          8 encuentros semanales por Zoom
        </h3>
        <ol className="mt-4 space-y-3 text-gray-700">
          {weeks.map((item) => (
            <li key={item.week} className="flex gap-3">
              <span className="text-xl" aria-hidden="true">
                {item.emoji}
              </span>
              <span>
                <span className="font-semibold">Semana {item.week}:</span>{" "}
                {item.title}
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div className="card p-6">
        <h3 className="text-blue-700 font-semibold text-lg">Además incluye</h3>
        <ul className="mt-4 space-y-3 text-gray-700">
          {includes.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-xl" aria-hidden="true">
                ✅
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-blue-700 font-semibold text-lg">
            Valor del programa
          </h3>
          <ul className="mt-4 space-y-3 text-gray-700">
            {pricing.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-xl" aria-hidden="true">
                  💰
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <a
          href="https://wa.me/5492236861939?text=Hola%20Vale%2C%20quiero%20reservar%20el%20programa%20de%20coaching%20para%20padres"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded shadow transition-colors"
        >
          Quiero reservar mi lugar
        </a>
      </div>
    </div>
  );
}
