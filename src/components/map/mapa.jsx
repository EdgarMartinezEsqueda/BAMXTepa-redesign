import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";
import data from "./jalisco.json";

const options = {
  series: data,
  title: { text: "" },
  legend: { enabled: false },
  credits: { enabled: false },
  tooltip: {
    shared: true,
    useHTML: true,
    headerFormat: "<table>",
    pointFormat:
      "<tr><td>Localidad:</td><td style='text-align:right'><b>{point.name}</b></td></tr>",
    footerFormat: "</table>",
  },
  chart: {
    backgroundColor: "transparent",
    map: "countries/mx/ja-mx-all",
  },
};

const Mapa = () => {
  return (
<section className="md:py-8">
  <div className="container mx-auto px-6 lg:px-12">
    <div className="flex flex-col lg:flex-row items-center gap-12">
      {/* Texto */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-verdeLogo font-edu-hand text-xl font-semibold mb-3 flex items-center justify-center lg:justify-start">
          Unidos por un mismo propósito.
        </h2>

        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Municipios a los que <span className="text-amarilloLogo relative inline-block">llegamos</span>
        </h3>

        <p className="text-gray-800 text-lg mb-4">
          Gracias a la dedicación de nuestro equipo y al respaldo de empresas, voluntarios y aliados, hoy llegamos a más de <span className="font-semibold text-rojoLogo">90 comunidades</span> en 14 municipios —13 en Jalisco y 1 en Zacatecas— llevando alimentos, apoyo y esperanza a miles de familias.
        </p>

        <p className="text-gray-700 text-lg">
          Nuestra labor se extiende desde rancherías hasta colonias urbanas, tejiendo una red solidaria que combate el hambre y fortalece el bienestar de nuestra región.
        </p>
      </div>

      {/* Mapa */}
      <div className="lg:w-1/2 w-full rounded-xl shadow-lg md:p-4">
        <HighchartsReact
          highcharts={Highcharts}
          constructorType="mapChart"
          options={options}
        />
      </div>
    </div>
  </div>
</section>

  );
};

export default Mapa;