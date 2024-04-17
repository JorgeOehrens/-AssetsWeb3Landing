import React, { useState, useEffect } from 'react';
import Header from '../components/header/HeaderStyle2';
import Fq from '../components/layouts/home-2/FAQ';
import Footer from '../components/footer/Footer';
import liveAuctionData from '../assets/fake-data/data-live-auction';
import heroSliderData from '../translations/en/data-slider';
import heroSliderDataEs from '../translations/es/data-slider-es';

import Create from '../components/layouts/home-2/Create';
import LiveAuction from '../components/layouts/home-3/LiveAuction';
import Slider from '../components/slider/Slider';
import AppVisualizer from '../components/layouts/AppVisualizer';
import { useTranslation } from 'react-i18next';

const Home03 = () => {
    const [language, setLanguage] = useState('en');

    const [t, i18n] = useTranslation("global");
    
    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setLanguage(lang);
    };

    // useEffect para reaccionar a los cambios en i18n.language
    useEffect(() => {
        setLanguage(i18n.language);
    }, [i18n.language]);

    // Selección del conjunto de datos de slider según el idioma
    const sliderData = language === 'en' ? heroSliderData : heroSliderDataEs;

    return (
        <div className='home-3'>
            <Header changeLanguage={handleChangeLanguage} />

            <Slider data={sliderData} />
            <AppVisualizer />

            <Create />
            <LiveAuction data={liveAuctionData} />
          
            <Fq />

            <Footer />
        </div>
    );
}

export default Home03;
