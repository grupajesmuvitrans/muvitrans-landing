export default function Home() {
  const benefits = [
    {
      title: "Gestión sencilla",
      description:
        "Centraliza la planificación diaria de camiones, cargas y conductores en un solo lugar intuitivo.",
    },
    {
      title: "Optimización de rutas",
      description:
        "Genera rutas eficientes para reducir kilómetros en vacío, tiempos de espera y costos operativos.",
    },
    {
      title: "Control total",
      description:
        "Monitorea el estado de cada servicio en tiempo real y detecta desvíos antes de que impacten al cliente.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-sky-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.14)_0,_transparent_55%)] opacity-70" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24 text-center sm:px-10 lg:flex-row lg:items-center lg:gap-16 lg:py-28 lg:text-left">
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-sm font-medium tracking-wide text-sky-100 ring-1 ring-inset ring-white/20">
                Software para transporte inteligente
              </span>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Planificador ZonaCamión
              </h1>
              <p className="text-lg text-slate-100/90 sm:text-xl">
                Optimiza la gestión de camiones, cargas y rutas en tu empresa de transporte con un sistema diseñado para equipos operativos exigentes.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start">
                <a
                  href="#solicitar-demo"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-indigo-900 shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Solicitar demo
                </a>
                <a
                  href="/login"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Iniciar sesión
                </a>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative mx-auto max-w-xl overflow-hidden rounded-3xl border border-white/20 bg-white/5 p-8 text-left shadow-2xl backdrop-blur-lg">
                <h2 className="text-xl font-semibold text-white/90">
                  Coordina cada envío con precisión
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-100/80">
                  Visualiza disponibilidad de camiones y conductores, agenda cargas urgentes en segundos y comparte itinerarios actualizados con tu equipo.
                </p>
                <div className="mt-6 grid gap-4 text-sm text-slate-100/80">
                  <div className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3">
                    Seguimiento en tiempo real de cada servicio.
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3">
                    Alertas automáticas ante desvíos de ruta o demoras.
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3">
                    Reportes operativos listos para compartir con clientes.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24 text-slate-900">
          <div className="mx-auto max-w-6xl px-6 sm:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold sm:text-4xl">Beneficios clave</h2>
              <p className="mt-4 text-lg text-slate-600">
                Automatiza tus operaciones logísticas y mantén a todos los equipos sincronizados sin esfuerzo.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="group rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                >
                  <h3 className="text-xl font-semibold text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-4 text-base text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="solicitar-demo" className="bg-slate-950 py-24">
          <div className="mx-auto max-w-5xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Solicita una demo personalizada
              </h2>
              <p className="mt-4 text-lg text-slate-200">
                Cuéntanos sobre tu operación y un especialista ZonaCamión te contactará para mostrarte el planificador en acción.
              </p>
            </div>

            <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <label className="flex flex-col gap-2 text-left text-sm font-medium text-slate-100/90">
                  Nombre de empresa
                  <input
                    type="text"
                    name="company"
                    placeholder="Ej. Logística Norte SA"
                    className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/60 focus:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-300/60"
                  />
                </label>
                <label className="flex flex-col gap-2 text-left text-sm font-medium text-slate-100/90">
                  Nombre completo
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Ej. María González"
                    className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/60 focus:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-300/60"
                  />
                </label>
                <label className="flex flex-col gap-2 text-left text-sm font-medium text-slate-100/90">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="nombre@empresa.com"
                    className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/60 focus:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-300/60"
                  />
                </label>
                <label className="flex flex-col gap-2 text-left text-sm font-medium text-slate-100/90">
                  Teléfono
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Ej. +54 9 11 2345-6789"
                    className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/60 focus:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-300/60"
                  />
                </label>
                <label className="md:col-span-2 flex flex-col gap-2 text-left text-sm font-medium text-slate-100/90">
                  Mensaje
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Cuéntanos cuántos camiones operas, qué rutas cubres y qué objetivos quieres alcanzar."
                    className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/60 focus:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-300/60"
                  />
                </label>
                <div className="md:col-span-2 flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-sky-400 px-8 py-3 text-base font-semibold text-slate-950 shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200"
                  >
                    Enviar solicitud
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
