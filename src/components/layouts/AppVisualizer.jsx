import React , { useState } from 'react';
import { Link } from 'react-router-dom'
import icon1 from '../../assets/images/avatar/avt-2.jpg'
import icon2 from '../../assets/images/avatar/avt-2.jpg'
import icon3 from '../../assets/images/avatar/avt-2.jpg'
import icon4 from '../../assets/images/avatar/hero-desktop.png'
import { useTranslation } from 'react-i18next';

const AppVisualizer = () => {
    const [language, setLanguage] = useState('en');

    const [t, i18n] = useTranslation("global");
    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setLanguage(lang); 
    };
    return (
        <section className="tf-box-icon live-auctions tf-section style7 bg-style">
        <div className="themesflat-container">
            <div className="row">
                <div className="col-xl-4 col-lg-12 col-md-12">
                    <div className="heading-live-auctions style2 mg-t-3 mg-bt-22">
                        <h3 className="heading-fill mg-bt-16">{t("App.title.1")}</h3>
                        <h2 className="tf-title text-left pb-15">{t("App.title.2")}</h2>                    
                        <p className="content">                      
                        {t("App.subittle")}

                        </p>     
                    </div>
                </div>                          
                <div className="col-xl-8 col-lg-12 col-md-12">
                <img src={icon4} alt="Axies" />

                </div> 
            </div>                 
        </div>
    </section>
    );
}



export default AppVisualizer;
