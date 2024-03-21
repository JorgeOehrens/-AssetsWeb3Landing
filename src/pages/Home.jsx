import React from 'react';
import Header from '../components/header/HeaderStyle2';
import Fq from '../components/layouts/home-2/FAQ';
import Footer from '../components/footer/Footer';
import liveAuctionData from '../assets/fake-data/data-live-auction';
import heroSliderData from '../assets/fake-data/data-slider-3';
import Create from '../components/layouts/home-2/Create';
import LiveAuction from '../components/layouts/home-3/LiveAuction';
import Slider from '../components/slider/Slider';

import AppVisualizer from '../components/layouts/AppVisualizer';
const Home03 = () => {
   
    return (
        <div className='home-3'>
            <Header         
            />

            <Slider data={heroSliderData} />
            <AppVisualizer />

<Create />
            <LiveAuction 
            data={liveAuctionData} 
            />
          
            <Fq />

            <Footer />
        </div>
    );
}

export default Home03;
