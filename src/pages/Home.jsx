import React from 'react';
import Header from '../components/header/HeaderStyle2';
import Fq from '../components/layouts/home-2/FAQ';

import Footer from '../components/footer/Footer';
import liveAuctionData from '../assets/fake-data/data-live-auction';
import heroSliderData from '../assets/fake-data/data-slider-3';
import Create from '../components/layouts/home-2/Create';
import LiveAuction from '../components/layouts/home-3/LiveAuction';
import TopSeller from '../components/layouts/home-3/TopSeller';
import Slider from '../components/slider/Slider';
import topSellerData from '../assets/fake-data/data-top-seller';
import TodayPicks from '../components/layouts/home-3/TodayPicks';
import todayPickData from '../assets/fake-data/data-today-pick';
import PopularCollection from '../components/layouts/home-3/PopularCollection';
import popularCollectionData from '../assets/fake-data/data-popular-collection';
import { useStateContext } from "../context/index";

const Home03 = () => {
    const {
        transferNativeToken,
        buyToken,
        currentHolder,
        tokenSale,
        tokenHolders,
        nativeToken,
        balance,
        address,
        setAddress,
        connectWallet,
      } = useStateContext();    
    return (
        <div className='home-3'>
            <Header         
            address={address}
            setAddress={setAddress}
            connectWallet={connectWallet}/>
            <Slider data={heroSliderData} />
            <LiveAuction 
            data={liveAuctionData} 
            tokenSale={tokenSale} 
            buyToken={buyToken} 

            />

            <Create />
            <Fq />

            <Footer />
        </div>
    );
}

export default Home03;
