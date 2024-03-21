import React from 'react';
import { Link } from 'react-router-dom'
import icon1 from '../../assets/images/avatar/avt-2.jpg'
import icon2 from '../../assets/images/avatar/avt-2.jpg'
import icon3 from '../../assets/images/avatar/avt-2.jpg'
import icon4 from '../../assets/images/avatar/hero-desktop.png'

const AppVisualizer = () => {
    const data = [
        {
            title: "Add Your NFTs",
            description: "Sed ut perspiciatis un de omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
            icon : icon3,
            colorbg : "icon-color3"
        },
        {
            title: "Create Your Collection",
            description: "Setting up your NFT collection and creating NFTs on NFTs is easy! This guide explains how to set up your first collection",
            icon : icon2,
            colorbg : "icon-color2"
        },
        {
            title: "Set Up Your Wallet",
            description: "Wallet that is functional for NFT purchasing. You may have a Coinbase account at this point, but very few are actually set up to buy an NFT.",
            icon : icon1,
            colorbg : "icon-color1"
        },
        {
            title: "List Them For Sale",
            description: "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!",
            icon : icon4,
            colorbg : "icon-color4"
        },
    ]
    return (
        <section className="tf-box-icon live-auctions tf-section style7 bg-style">
        <div className="themesflat-container">
            <div className="row">
                <div className="col-xl-4 col-lg-12 col-md-12">
                    <div className="heading-live-auctions style2 mg-t-3 mg-bt-22">
                        <h3 className="heading-fill mg-bt-16">App Assets Web 3</h3>
                        <h2 className="tf-title text-left pb-15">Buy and claim your investment</h2>                    
                        <p className="content">                      Simplify your journey into the world of Web 3.0 with our app. Purchase tokens across various projects all from one platform. From DeFi to Tokens and beyond, our seamless interface connects you to the heart of blockchain innovation. Secure, straightforward, and efficient — invest in the future, today.


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

const CreateItem = props => (
    <div className="sc-box-icon">
        <div className="image">
            <div className={`icon-create ${props.item.colorbg}`}>
                <img src={props.item.icon} alt="" />
            </div>                                                                           
        </div>
        <div className="wrap-box">
            <h3 className="heading"><Link to="/wallet-connect">{props.item.title}</Link></h3>
            <p className="content">{props.item.description}</p>
        </div>
    </div>
)

export default AppVisualizer;
