import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';  // Importa I18nextProvider
import global_en from './translations/en/global.json';
import global_es from './translations/es/global.json';
i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",  // Lenguaje inicial
  resources: {  // Corrección aquí: debe ser 'resources'
    en: {
      global: global_en
    },
    es: {
      global: global_es
    }
  }
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next}> 

    <ScrollToTop />
    <App />
    </I18nextProvider>


  </BrowserRouter>
);
