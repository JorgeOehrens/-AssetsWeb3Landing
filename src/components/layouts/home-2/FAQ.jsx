import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data_fq from '../../../translations/en/data-fq';
import data_fq_es from '../../../translations/es/data-fq';

import { Accordion } from 'react-bootstrap-accordion';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
    
    const { t, i18n } = useTranslation("global");
    
    // Define el estado para los datos que será utilizado en los acordeones
    const [data, setData] = useState(data_fq);

    // Efecto para actualizar los datos cuando cambie el idioma
    useEffect(() => {
        setData(i18n.language.startsWith('es') ? data_fq_es : data_fq);
    }, [i18n.language]); // Depende del idioma actual para decidir qué datos cargar

    return (
        <div>
            <section className="tf-section wrap-accordion">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="tf-title-heading ct style-2 fs-30 mg-bt-10">
                                {t("FQ.tittle")}
                            </h2>
                            <h5 className="sub-title help-center mg-bt-32">
                                {t("FQ.subtittle")}
                            </h5>
                        </div>
                        <div className="col-md-12">
                            <div className="flat-accordion2">
                                {data.map((item, index) => (
                                    <Accordion key={index} title={item.title}>
                                        <p>{item.text}</p>
                                    </Accordion>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FAQ;
