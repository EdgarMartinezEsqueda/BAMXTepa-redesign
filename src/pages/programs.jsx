import Header from "components/header/Header";
import Programs from "components/programs/Programs";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import Footer from "components/footer/Footer";

const ProgramsPage = () =>{
    return (
      <main className="bg-gray-50">
        <Header/>
        <Breadcrumb titulo="Nuestros programas" />
        <Programs />
        <Footer />
      </main>
    );
};

export default ProgramsPage;