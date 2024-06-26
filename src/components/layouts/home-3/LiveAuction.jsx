import React , { useState , Fragment } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Countdown from "react-countdown";
import CardModal from '../CardModal';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const LiveAuction = ({data}) => {

    return (
        <Fragment>
            <section className="tf-section live-auctions">
                <div className="themesflat-container">
                    <div className="row">

                        <div className="col-md-12">
                            <div className="">
                                <h2 className="tf-title">Assets</h2>
                                <div className="heading-line"></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={30}

                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    767: {
                                    slidesPerView: 2,
                                    },
                                    991: {
                                    slidesPerView: 3,
                                    },
                                    1300: {
                                        slidesPerView: 4,
                                    },
                                }}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                            >
                                    {
                                        data.slice(0,7).map((item,index) => (
                                            <SwiperSlide key={index}>
                                                <div className="swiper-container show-shadow carousel auctions">
                                                    <div className="swiper-wrapper">
                                                        <div className="swiper-slide">
                                                            <div className="slider-item">										
                                                                <div className="sc-card-product">
                                                                    <div className="card-media">
                                                                        <Link to="https://app.assetsweb3.com/nft-details"><img src={item.img} alt="axies" /></Link>
                                                                        <div className="featured-countdown">
                                                                            <span className="slogan"></span>
                                                                                <span></span> tokens
                                                                        </div>
                                                                        <div className="button-place-bid">
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-title">
                                                                        <h5><Link to="https://app.assetsweb3.com/nft-details">"{item.title}"</Link></h5>
                                                                        <div className="tags">{item.tags}</div>
                                                                    </div>
                                                                    <div className="meta-info">
                                                                        <div className="author">
                                                                           
                                                                            <div className="info">
                                                                                <span>Project</span>
                                                                                <h6> <Link to="/authors-02">{item.title}
                                                                                </Link> </h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="price">
                                                                            <span>Price</span>
                                                                            <h5> {item.price}</h5>
                                                                        </div>
                                                                    </div>
                                                                </div>    	
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>

        </Fragment>
    );
}

LiveAuction.propTypes = {
    data: PropTypes.array.isRequired,
}


export default LiveAuction;
