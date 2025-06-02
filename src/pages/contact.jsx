import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import ContactPage from "components/contact/ContactUs";

const ContactUsPage = () =>{
    return (
      <main className="bg-gray-50">
        <Header/>
        <Breadcrumb titulo="Contáctanos" />
        <ContactPage />
        <Footer />
      </main>
    );
};

export default ContactUsPage;