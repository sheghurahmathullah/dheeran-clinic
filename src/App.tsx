import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
// import Services from "./sections/Services";
import PremiumServices from "./sections/PremiumServices";
import Approach from "./sections/Approach";
import ConsultationForm from "./sections/ConsultationForm";
import Testimonials from "./sections/Testimonials";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import DiabetesManagementPage from "./pages/DiabetesManagementPage";
import PodiatryPage from "./pages/PodiatryPage";
import SkinCarePage from "./pages/SkinCarePage";
import GeneralHealthcarePage from "./pages/GeneralHealthcarePage";
import HomeVisitCarePage from "./pages/HomeVisitCarePage";
import LabAndDiagnosticsPage from "./pages/LabAndDiagnosticsPage";
import PatientResourcesPage from "./pages/PatientResourcesPage";
import ContactUsPage from "./pages/ContactUsPage";
import AppointmentBookingPage from "./pages/AppointmentBookingPage";
import SymptomsSection from "./sections/SymptomsSection";
import ChronicDiseaseManagementPage from "./pages/ChronicDiseaseManagementPage";
import WoundCarePage from "./pages/WoundCarePage";
import PreventiveCarePage from "./pages/PreventiveCarePage";
import FootUlcerCarePage from "./pages/FootUlcer";
import HomeTreatmentPage from "./pages/HomeTreatmentPage";
import ScrollToTopButton from "./components/ScrollToTopButton";

interface AppProps {
  initialPage?: string;
}

function App({ initialPage = "home" }: AppProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(initialPage);

  useEffect(() => {
    // Sync current page with URL
    const pathToPageMap: { [key: string]: string } = {
      "/": "home",
      "/about": "about-page",
      "/general-services/diabetes-management":
        "general-services/diabetes-management",
      "/general-services/chronic-disease-management":
        "general-services/chronic-disease-management",
      "/general-services/wound-care": "general-services/wound-care",
      "/general-services/preventive-care": "general-services/preventive-care",
      "/general-services/podiatry": "general-services/podiatry",
      "/general-services/skin-care": "general-services/skin-care",
      "/general-services/lab-diagnostics": "general-services/lab-diagnostics",
      "/general-services/general-healthcare":
        "general-services/general-healthcare",
      "/general-services/home-visit-care": "general-services/home-visit-care",
      "/general-services/home-treatment": "general-services/home-treatment",
      "/patient-resources": "patient-resources",
      "/contact-us": "contact-us",
      "/book-appointment": "book-appointment",
      "/foot-diabetics-treatment/foot-ulcer":
        "foot-diabetics-treatment/foot-ulcer",
    };

    setCurrentPage(pathToPageMap[location.pathname] || "home");
  }, [location.pathname]);

  type PageComponentType = {
    [key: string]: () => JSX.Element;
  };

  const pageComponents: PageComponentType = {
    home: () => (
      <>
        <Hero setCurrentPage={setCurrentPage} />
        <About />
        {/* <Services setCurrentPage={setCurrentPage} /> */}
        <PremiumServices />
        <SymptomsSection />
        <Approach />
        <ConsultationForm />
        <Testimonials />
      </>
    ),
    "about-page": () => <AboutPage />,
    "general-services/diabetes-management": () => <DiabetesManagementPage />,
    "general-services/chronic-disease-management": () => (
      <ChronicDiseaseManagementPage />
    ),
    "general-services/wound-care": () => <WoundCarePage />,
    "general-services/preventive-care": () => <PreventiveCarePage />,
    "general-services/podiatry": () => <PodiatryPage />,
    "general-services/skin-care": () => <SkinCarePage />,
    "general-services/general-healthcare": () => <GeneralHealthcarePage />,
    "general-services/home-visit-care": () => <HomeVisitCarePage />,
    "general-services/home-treatment": () => <HomeTreatmentPage />,
    "general-services/lab-diagnostics": () => <LabAndDiagnosticsPage/>,
    "patient-resources": () => <PatientResourcesPage />,
    "contact-us": () => <ContactUsPage />,
    "book-appointment": () => <AppointmentBookingPage />,
    "foot-diabetics-treatment/foot-ulcer": () => <FootUlcerCarePage />,
  };

  const renderPage = () => {
    const PageComponent = pageComponents[currentPage] || pageComponents["home"];
    return PageComponent();
  };

  const customSetCurrentPage = (page: string) => {
    // Map page to corresponding route
    const pageToRouteMap: { [key: string]: string } = {
      home: "/",
      "about-page": "/about",
      "general-services/diabetes-management":
        "/general-services/diabetes-management",
      "general-services/chronic-disease-management":
        "/general-services/chronic-disease-management",
      "general-services/wound-care": "/general-services/wound-care",
      "general-services/preventive-care": "/general-services/preventive-care",
      "general-services/podiatry": "/general-services/podiatry",
      "general-services/skin-care": "/general-services/skin-care",
      "general-services/general-healthcare":
        "/general-services/general-healthcare",
      "general-services/home-visit-care": "/general-services/home-visit-care",
      "general-services/lab-diagnostics": "/general-services/lab-diagnostics",
      "general-services/home-treatment": "/general-services/home-treatment",
      "patient-resources": "/patient-resources",
      "contact-us": "/contact-us",
      "book-appointment": "/book-appointment",
      "foot-diabetics-treatment/foot-ulcer":
        "/foot-diabetics-treatment/foot-ulcer",
    };

    // Navigate to the corresponding route
    const route = pageToRouteMap[page] || "/";
    navigate(route);

    // Update current page state
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen">
      <Header currentPage={currentPage} setCurrentPage={customSetCurrentPage} />
      {renderPage()}
      <Footer currentPage={currentPage} setCurrentPage={customSetCurrentPage} />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
