import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Countdown from "react-countdown";
import CardModal from "./CardModal";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const LiveAuction = (props) => {
  const data = props.data;

  const [modalShow, setModalShow] = useState(false);

  return (
    <Fragment>
      <section className="tf-section live-auctions">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-live-auctions">
                <h2 className="tf-title pb-20">Mercado en Vivo</h2>
                <Link to="" className="exp style2">
                  Ver Todos
                </Link>
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
                {data.slice(0, 7).map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="swiper-container show-shadow carousel auctions">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="slider-item">
                            <div className="sc-card-product">
                              <div className="card-media">
                                <Link to="/item-details-01">
                                  <img src={item.img} alt="proyecto" />
                                </Link>
                              
                              
                                <div className="button-place-bid">
                                  <button
                                    onClick={() => setModalShow(true)}
                                    className="sc-button style-place-bid style bag fl-button pri-3"
                                  >
                                    <span>Invertir</span>
                                  </button>
                                </div>
                              </div>
                              <div className="card-title">
                                <h5>
                                  <Link to="/item-details-01">
                                    {item.title}
                                  </Link>
                                </h5>
                                <div className="tags">{item.tags}</div>
                              </div>
                              <div className="meta-info">
                                <div className="author">
                                  <div className="avatar">
                                    <img src={item.imgAuthor} alt="axies" />
                                  </div>
                                  <div className="info">
                                    <span>Contrato</span>
                                    <h6>
                                      {" "}
                                      <Link to="/https://goerli.etherscan.io/address/0xaebcc73995c009c2a0e85cfecbb7730b568bf61a">
                                        {item.nameAuthor}
                                      </Link>{" "}
                                    </h6>
                                  </div>
                                </div>
                                <div className="price">
                                  <span>Participación</span>
                                  <h5> {item.price}</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <CardModal show={modalShow} onHide={() => setModalShow(false)} />
    </Fragment>
  );
};

LiveAuction.propTypes = {
  data: PropTypes.array.isRequired,
};

export default LiveAuction;
