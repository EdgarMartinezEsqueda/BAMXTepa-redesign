export default function Donate() {
  return (
    <section className="max-w-6xl mx-auto py-12 md:py-20 lg:py-24 px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* IZQUIERDA: Texto principal y datos para donar */}
        <div className="space-y-6">
          <h2 className="text-verdeLogo font-edu-hand text-xl font-semibold mb-3 flex items-center justify-center lg:justify-start">
            Tú puedes ser parte del cambio
          </h2>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Haz la diferencia <span className="text-amarilloLogo relative inline-block"> hoy
              <img 
                src="assets/images/about/shape9.svg" 
                alt="" 
                className="absolute -bottom-2 hidden md:block"
              />
            </span>
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl">
            Apoyamos a más de <strong>9,000 familias</strong> mensualmente en Los Altos de Jalisco y Nochistlán en Zacatecas.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl">
            Con tu ayuda, podemos continuar nuestra misión de <strong>combatir el hambre</strong> y brindar esperanza a quienes más lo necesitan.
          </p>

          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 space-y-4 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-verdeLogo">Datos para Donar</h2>

            {/* CLABE */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <span className="text-amarilloLogo font-medium">CLABE Interbancaria:</span>
              <div className="flex items-center gap-2 mt-1 sm:mt-0">
                <span className="text-gray-700 dark:text-gray-300">{import.meta.env.VITE_clabe}</span>
                <button
                  aria-label="Copiar CLABE"
                  onClick={() => navigator.clipboard.writeText(import.meta.env.VITE_clabe)}
                  className="hover:text-verdeLogo transition-colors cursor-pointer"
                >
                  <ContentCopyIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* CUENTA */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <span className="text-amarilloLogo font-medium">Cuenta BANBAJIO:</span>
              <div className="flex items-center gap-2 mt-1 sm:mt-0">
                <span className="text-gray-700 dark:text-gray-300">{import.meta.env.VITE_cuenta}</span>
                <button
                  aria-label="Copiar cuenta BANBAJIO"
                  onClick={() => navigator.clipboard.writeText(import.meta.env.VITE_cuenta)}
                  className="hover:text-verdeLogo transition-colors cursor-pointer"
                >
                  <ContentCopyIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* PAYPAL */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <span className="text-amarilloLogo font-medium">Paypal:</span>
              <a
                className="text-azulCielo font-medium hover:text-verdeLogo mt-1 sm:mt-0"
                href={import.meta.env.VITE_paypal}
                target="_blank"
                rel="noopener noreferrer"
              >
                Donar aquí
              </a>
            </div>
          </div>
        </div>

        {/* DERECHA: Información sobre la misión */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 space-y-5 text-lg">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Nuestra Misión</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Combatimos el hambre rescatando alimentos en la región y distribuyéndolos a familias, comunidades e instituciones.
          </p>
          <p className="text-gray-600 dark:text-gray-400 hidden sm:block">
            Cada donación contribuye a ampliar nuestro impacto. Nos comprometemos a usar tu apoyo de forma responsable y transparente, asegurando que cada peso se transforme en alimentos y esperanza.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Gracias por confiar en nosotros. ¡Juntos, hacemos la diferencia!
          </p>
        </div>
      </div>
    </section>
  );
}

function ContentCopyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}