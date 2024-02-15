import React , { useState } from 'react';
import { Link } from 'react-router-dom'

import { Accordion } from 'react-bootstrap-accordion'

const FAQ = () => {
    const [data] = useState(
        [
            {   key: "0",
                show: "show",
                title: 'What is Assets Web 3??',
                text: 'Assets Web 3 is a blockchain-based platform that specializes in the tokenization of real-world assets, allowing users to invest in a diverse range of assets securely and transparently.'
            },
            {
                key: "1",
                title: 'How does asset tokenization work?',
                text: 'Asset tokenization involves converting the value of real-world assets into digital tokens on the blockchain. This process allows assets to be fractionally owned, traded, and managed more efficiently.'
            },
            {
                key: "2",
                title: 'What blockchain does Assets Web 3 use?',
                text: 'We utilize the Ethereum blockchain, leveraging its robust smart contract functionality to secure transactions and asset management.'
            },
            {
                key: "3",
                title: 'How secure is Assets Web 3?',
                text: 'Security is our top priority. We incorporate the latest blockchain security measures to protect our platform and our users'
            },
            {
                key: "4",
                title: 'What are the benefits of investing in tokenized assets?',
                text: 'Tokenized assets offer benefits such as fractional ownership, improved liquidity, and the potential for a global investment audience.'
            },
        ]
    )
    return (
        <div>
            
            <section className="tf-section wrap-accordion">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="tf-title-heading ct style-2 fs-30 mg-bt-10">
                                Frequently Asked Questions
                            </h2>
                            <h5 className="sub-title help-center mg-bt-32 ">
                            Here you will find answers to some of the most common questions about our platform, tokenization, and blockchain technology                            </h5>
                        </div>
                        <div className="col-md-12">
                            <div className="flat-accordion2">
                                {
                                    data.map((item,index) => (
                                        <Accordion key={index} title={item.title} >
                                            <p>{item.text}</p>
                                        </Accordion>
                                    ))
                                }                             
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FAQ;
