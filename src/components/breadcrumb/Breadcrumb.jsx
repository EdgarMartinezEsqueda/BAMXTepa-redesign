import PageTitle from "components/title/PageTitle";

const Breadcrumb = ( { titulo } ) => {
  return (
    <div className="relative min-h-[250px] flex justify-center items-center bg-breadcrumb bg-cover bg-center -mt-12 z-10 sm:min-h-[350px]">
      {/* Overlay con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(2,25,41,0.48)] to-[rgba(34,35,37,0.98)] z-10" />

      {/* Contenido principal */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center pt-12 sm:pt-8">
          <h2 className="text-amarilloLogo font-edu-hand text-xl font-semibold mb-2">
            Confianza, compromiso y solodaridad
          </h2>
          <PageTitle titulo={titulo} color="text-white"/>
        </div>
      </div>

      {/* Shapes decorativas */}
      <div className="absolute left-11 bottom-12 animate-zoom max-sm:hidden">
        <img src="assets/images/slider/shape-3.svg" alt="" />
      </div>
    </div>
  );
};

export default Breadcrumb;