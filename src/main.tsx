import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";

// Import all page components
import AboutPage from "./pages/AboutPage";
import DiabetesManagementPage from "./pages/DiabetesManagementPage";
import PodiatryPage from "./pages/PodiatryPage";
import SkinCarePage from "./pages/SkinCarePage";
import GeneralHealthcarePage from "./pages/GeneralHealthcarePage";
import HomeVisitCarePage from "./pages/HomeVisitCarePage";
import PatientResourcesPage from "./pages/PatientResourcesPage";
import ContactUsPage from "./pages/ContactUsPage";
import AppointmentBookingPage from "./pages/AppointmentBookingPage";
import ChronicDiseaseManagementPage from "./pages/ChronicDiseaseManagementPage";
import WoundCarePage from "./pages/WoundCarePage";
import PreventiveCarePage from "./pages/PreventiveCarePage";
import FootUlcerCarePage from "./pages/FootUlcer";
import HomeTreatmentPage from "./pages/HomeTreatmentPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App initialPage="home" />} />
        <Route path="/about" element={<App initialPage="about-page" />} />
        <Route
          path="/general-services/diabetes-management"
          element={<App initialPage="general-services/diabetes-management" />}
        />
        <Route
          path="/general-services/podiatry"
          element={<App initialPage="general-services/podiatry" />}
        />
        <Route
          path="/general-services/skin-care"
          element={<App initialPage="general-services/skin-care" />}
        />
        <Route
          path="/general-services/general-healthcare"
          element={<App initialPage="general-services/general-healthcare" />}
        />
        <Route
          path="/general-services/home-visit-care"
          element={<App initialPage="general-services/home-visit-care" />}
        />
          <Route
          path="/general-services/lab-diagnostics"
          element={<App initialPage="general-services/lab-diagnostics" />}
        />
        <Route
          path="/general-services/home-treatment"
          element={<App initialPage="general-services/home-treatment" />}
        />
        <Route
          path="/general-services/wound-care"
          element={<App initialPage="general-services/wound-care" />}
        />
        <Route
          path="/general-services/preventive-care"
          element={<App initialPage="general-services/preventive-care" />}
        />
        <Route
          path="/patient-resources"
          element={<App initialPage="patient-resources" />}
        />
        <Route path="/contact-us" element={<App initialPage="contact-us" />} />
        <Route
          path="/book-appointment"
          element={<App initialPage="book-appointment" />}
        />
        <Route
          path="/general-services/chronic-disease-management"
          element={
            <App initialPage="general-services/chronic-disease-management" />
          }
        />
        <Route
          path="/foot-diabetics-treatment/foot-ulcer"
          element={<App initialPage="foot-diabetics-treatment/foot-ulcer" />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
