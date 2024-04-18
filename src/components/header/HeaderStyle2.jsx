import React , { useRef , useState , useEffect, useContext } from 'react';
import { Link , useLocation } from "react-router-dom";
import menus from "../../translations/en/menu";
import menus_es from "../../translations/es/menus_es";
import CardModal from '../layouts/CardModal';
import DarkMode from './DarkMode';
import logodark from '../../assets/images/logo/logo.png'
import avt from '../../assets/images/avatar/avt-2.jpg'
import coin from '../../assets/images/logo/coin.svg'
import { useTranslation } from 'react-i18next';
import en from '../../assets/flags/en.png';
import es from '../../assets/flags/es.png';

const HeaderStyle2 = ()=> {
    const [modalShow, setModalShow] = useState(false);

    const [language, setLanguage] = useState('en');

    const [t, i18n] = useTranslation("global");
    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setLanguage(lang); 
    };
    const { pathname } = useLocation();

    const headerRef = useRef (null)
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    const currentMenu = language === 'en' ? menus : menus_es;

    const isSticky = (e) => {
        const header = document.querySelector('.js-header');
        const scrollTop = window.scrollY;
        scrollTop >= 300 ? header.classList.add('is-fixed') : header.classList.remove('is-fixed');
        scrollTop >= 400 ? header.classList.add('is-small') : header.classList.remove('is-small');
    };

    const menuLeft = useRef(null)
    const btnToggle = useRef(null)

    const menuToggle = () => {
        menuLeft.current.classList.toggle('active');
        btnToggle.current.classList.toggle('active');
    }


    const [activeIndex, setActiveIndex] = useState(null);
    const handleOnClick = index => {
        setActiveIndex(index); 
    };

    return (
        <header id="header_main" className="header_1 header_2 style2 js-header" ref={headerRef}>
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">                              
                        <div id="site-header-inner"> 
                            <div className="wrap-box flex">
                                <div id="site-logo" className="clearfix">
                                    <div id="site-logo-inner">
                                        <Link to="/" rel="home" className="main-logo">
                                            <img   id="logo_header" src={logodark} alt="nft-gaming" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="mobile-button" ref={btnToggle} onClick={menuToggle}><span></span></div>

                                <nav id="main-nav" className="main-nav" ref={menuLeft} >
                                    <ul id="menu-primary-menu" className="menu">
                                        {
                                            currentMenu.map((data,index) => (
                                                <li key={index} onClick={()=> handleOnClick(index)} className={`menu-item ${data.namesub ? 'menu-item-has-children' : '' } ${activeIndex === index ? 'active' : ''} ` }   >
                                                    <Link to={data.links}>{data.name}</Link>
                                                    {
                                                        data.namesub &&
                                                        <ul className="sub-menu" >
                                                        {
                                                            data.namesub.map((submenu) => (
                                                                <li key={submenu.id} className={
                                                                    pathname === submenu.links
                                                                      ? "menu-item current-item"
                                                                      : "menu-item"
                                                                  }><Link to={submenu.links}>{submenu.sub}</Link></li>
                                                            ))
                                                        }
                                                    </ul>
                                                    }
                                                </li>
                                            ))
                                        }
                                                        <button className={`language-button ${language === 'en' ? 'active' : ''}`} onClick={() => handleChangeLanguage("en")}>
                                                            <img src={en} alt="English" />
                                                        </button>
                                                        <button className={`language-button ${language === 'es' ? 'active' : ''}`} onClick={() => handleChangeLanguage("es")}>
                                                            <img src={es} alt="Español" />
                                                        </button>
                                    </ul>
                                </nav>
                                <div className="flat-search-btn flex">
                                
                                        <div className="sc-btn-top mg-r-12" id="site-header">
                                       
                                        <button 
                                        type="button"
                                        onClick={() => setModalShow(true)}
                                        className="sc-button header-slider style style-1 rocket fl-button pri-2 mg-r-12" >
                                        <span>{t("header.button_contact")}</span>
                                        </button>
                                        </div>

                                    <div className="sc-btn-top mg-r-12" id="site-header">
                                       
                                        <button 
                                        type="button"
                                        onClick={() => window.location.href='https://app.assetsweb3.com'}
                                        className="sc-button header-slider style style-1 wallet fl-button pri-1" >
                                        <span>{t("header.button_app")}</span>
                                    </button>


                                    </div>

                                    <div className="admin_active" id="header_admin">
                                        <div className="header_avatar">
                                            <div className="price">
                                                <span>2.45 <strong>ETH</strong> </span>
                                            </div>
                                            <img
                                                className="avatar"
                                                src={avt}
                                                alt="avatar"
                                                />
                                            <div className="avatar_popup mt-20">
                                                <div className="d-flex align-items-center copy-text justify-content-between">
                                                    <span> 13b9ebda035r178... </span>
                                                    <Link to="/" className="ml-2">
                                                        <i className="fal fa-copy"></i>
                                                    </Link>
                                                </div>
                                                <div className="d-flex align-items-center mt-10">
                                                    <img
                                                        className="coin"
                                                        src={coin}
                                                        alt="/"
                                                        />
                                                    <div className="info ml-10">
                                                        <p className="text-sm font-book text-gray-400">Balance</p>
                                                        <p className="w-full text-sm font-bold text-green-500">16.58 ETH</p>
                                                    </div>
                                                </div>
                                                <div className="hr"></div>
                                                <div className="links mt-20">
                                                    <Link to="#">
                                                        <i className="fab fa-accusoft"></i> <span> My items</span>
                                                    </Link>
                                                    <a className="mt-10" href="/edit-profile">
                                                        <i className="fas fa-pencil-alt"></i> <span> Edit Profile</span>
                                                    </a>
                                                    <a className="mt-10" href="/login" id="logout">
                                                        <i className="fal fa-sign-out"></i> <span> Logout</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <DarkMode />
            <CardModal show={modalShow} onHide={() => setModalShow(false)} />

        </header>
        
    );
}

export default HeaderStyle2;
