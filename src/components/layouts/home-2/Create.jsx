import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import dataIconsEn from "../../../translations/en/data-icons";
import dataIconsEs from "../../../translations/es/data-icons";

const Create = () => {
    const { i18n } = useTranslation();
    const data = i18n.language.startsWith('es') ? dataIconsEs : dataIconsEn;

    return (
        <section className="tf-box-icon create tf-section bg-home-3">
            <div className="themesflat-container">
                <div className="row">
                    {
                        data.map((item, index) => (
                            <CreateItem key={index} item={item} />
                        ))
                    }
                </div>                 
            </div>
        </section>
    );
}

const CreateItem = props => (
    <div className='col-lg-3 col-md-6 col-12'>
        <div className="sc-box-icon">
            <div className="image center">
                <div className={`icon-create ${props.item.colorbg}`}>
                    <img src={props.item.icon} alt="" />
                </div>                                                                           
            </div>
            <h3 className="heading"><Link to="https://docs.assetsweb3.com/">{props.item.title}</Link></h3>
            <p className="content">{props.item.description}</p>
        </div>
    </div>
);

export default Create;
