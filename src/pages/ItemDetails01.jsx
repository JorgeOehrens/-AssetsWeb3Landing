import React, { useState, useContext } from "react";
import Header from "../components/header/HeaderStyle2";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
import Countdown from "react-countdown";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import liveAuctionData from "../assets/fake-data/data-live-auction";
import LiveAuction from "../components/layouts/LiveAuction";
import img1 from "../assets/images/avatar/avt-3.jpg";
import img2 from "../assets/images/avatar/avt-11.jpg";
import img3 from "../assets/images/avatar/avt-1.jpg";
import img4 from "../assets/images/avatar/avt-5.jpg";
import img5 from "../assets/images/avatar/avt-7.jpg";
import img6 from "../assets/images/avatar/document.png";
import img7 from "../assets/images/avatar/globo.png";
import imgdetail1 from "../assets/images/avatar/avt-18.jpg";
import CardModal from "../components/layouts/CardModal";
import doc1 from "../assets/images/documents/doc1.pdf";
import doc2 from "../assets/images/documents/doc2.pdf";
import doc3 from "../assets/images/documents/doc3.pdf";
import { useStateContext } from "../context/index";

const TransactionCard = () =>{
  return (
        <ul className="bid-history-list">
          <li key="">
            <div className="content">
              <div className="client">
                <div className="sc-author-box style-2">
                  <div className="author-avatar">
                    <Link to="#">
                      <img
                        src={img7}
                        alt="Axies"
                        className="avatar"
                      />
                    </Link>
                    <div className="badge"></div>
                  </div>
                  <div className="author-infor">
                    <div className="name">
                      <h6>
                        <Link to="#"> </Link>
                      </h6>{" "}
                    </div>
                    <span className="time"></span>
                  </div>
                </div>
              </div>
              <div className="price">
                <h5>ETH</h5>
                <span>= USD</span>
              </div>
            </div>
          </li>
      </ul>
  )
};

const ItemDetails01 = () => {
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
  const [modalShow, setModalShow] = useState(false);

 
  return (
    <div className="item-details">
      <Header />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">Tanglewood Racquet Village</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Inicio</Link>
                  </li>
                  <li>
                    <Link to="#">Marketplace</Link>
                  </li>
                  <li>Tanglewood Racquet Village </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="tf-section tf-item-details">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-xl-3 col-md-12">
              <div className="content-left">
                <div className="media">
                  <img src={imgdetail1} alt="Axies" />
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-md-12">
              <div className="content-right">
                <div className="sc-item-details">
                  <h2 className="style2">Tanglewood Racquet Village Token (TRV) </h2>
                  <div className="meta-item">
                    <div className="left">
                      <span className="viewed eye"> BALANCE USUARIO {nativeToken?.tokenBalance} tokens</span>
                      
                    </div>
           
                  </div>
                  <div className="client-infor sc-card-product">
                    <div className="meta-info">
                      <div className="author">
                        <div className="avatar">
                          <img src={img6} alt="Axies" />
                        </div>
                        <div className="info">
                          <span>Contrato</span>
                          <h6>
                            {" "}
                            <Link to="https://goerli.etherscan.io/address/0xaebcc73995c009c2a0e85cfecbb7730b568bf61a">
                            0xaEBCC73995C009c2A0E85CfEcBb7730B568Bf61a
                            </Link>{" "}
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="meta-info">
                      <div className="author">
                        <div className="avatar">
                          <img src={img7} alt="Axies" />
                        </div>
                        <div className="info">
                          <span>Autor</span>
                          <h6>
                            {" "}
                            <Link to="#">Tanglewood Racquet Village </Link>{" "}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>Descripción del proyecto</p>
                  <div className="meta-item-details style2">
                    <div className="item meta-price">
                      <span className="heading">Valor token</span>
                      <div className="price">
                        <div className="price-box">
                          <h5>0.41 ETH</h5>
                          <span>= $ 1.082 USD</span>
                        </div>
                      </div>
                    </div>
                    <div className="item count-down">
                      <span className="heading style-2">Segunda etapa</span>
                      <Countdown date={Date.now() + 500000000}>
                        <span>You are good to go!</span>
                      </Countdown>
                    </div>
                  </div>
                  <button
                  type="button"
                                    onClick={() => setModalShow(true)}
                                    className="sc-button style-place-bid style bag fl-button pri-3"
                                  >
                                    <span>Invertir</span>
                                  </button>
            
                </div>
              </div>
            </div>
          </div>

          <div className="row">
          
            <div className="col-xl-12 col-md-12">
            <div className="content-left">
                <div className="sc-item-details">
                <div className="flat-tabs themesflat-tabs">
                    <Tabs>
                      <TabList>
                        <Tab>Transtions</Tab>
                        <Tab>Information</Tab>
                        <Tab>Documents</Tab>
                      </TabList>

                      <TabPanel>
                      {/* {[ ...transactions].reverse().map((transaction, i) => (
                      <TransactionCard key={i} {...transaction} />
                      ))} */}
                      </TabPanel>
                      <TabPanel>
                      <div className="asset-details">
                    <ul>
                      <li><p>Loan Amount:</p> $5,300,000</li>
                      <li><p>Number of Participants:</p> 49</li>
                      <li><p>Quota per Participant:</p> $108,163</li>
                      <li><p>Ticket per Participant:</p> $100</li>
                      <li><p>Asset Unit (USD):</p> $1,082</li>
                      <li><p>Number of Transactions:</p> 4,900</li>
                      <li><p>Collateral Value:</p> $10,685,000</li>
                      <li><p>Liquidation Time:</p> 9 months</li>
                      <li><p>Total Return:</p> 9.50%</li>
                    </ul>
                  </div>
                      </TabPanel>
                      <TabPanel>
                        <div className="provenance">
                          <div className="client-infor sc-card-product">
                            <div className="meta-info">
                              <div className="author">
                                <div className="avatar">
                                  <img src={img6} alt="Axies" />
                                </div>
                                <div className="info">
                                  <span>Document</span>
                                  <h6>
                                    {" "}
                                    <a href={doc1} target="_blank" rel="noopener noreferrer">                                    
                                    APPRAISAL 
                                    </a>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            </div>
                            <div className="client-infor sc-card-product">

                            <div className="meta-info">
                              <div className="author">
                                <div className="avatar">
                                  <img src={img6} alt="Axies" />
                                </div>
                                <div className="info">
                                  <span>Contrato</span>
                                  <h6>

                                    {" "}
                                    <a href={doc2} target="_blank" rel="noopener noreferrer">     
                                    Reglamento Interno
                                    </a>
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="client-infor sc-card-product">
                            <div className="meta-info">
                              <div className="author">
                                <div className="avatar">
                                  <img src={img6} alt="Axies" />
                                </div>
                                <div className="info">
                                  <span>Document</span>
                                  <h6>
                                    {" "}
                                    <a href={doc3} target="_blank" rel="noopener noreferrer">     
                                    Closing Instruction 
                                    </a>
                                  </h6>
                                </div>
                              </div>
                            </div>
                        
                          </div>
                        </div>
                      </TabPanel>
                    </Tabs>
                  </div>               
                  
                  
                   </div>

              </div>

            </div>
            </div>

        </div>
      </div>
      <CardModal show={modalShow}
              buyToken={buyToken}

      onHide={() => setModalShow(false)} />

      <LiveAuction data={liveAuctionData} />
      <Footer />
    </div>
  );
};

export default ItemDetails01;
