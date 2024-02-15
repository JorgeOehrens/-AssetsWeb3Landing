import React from 'react';
import { Link } from 'react-router-dom'
import icon1 from '../../../assets/images/icon/Wallet.png'
import icon2 from '../../../assets/images/icon/Category.png'
import icon3 from '../../../assets/images/icon/Image2.png'
import icon4 from '../../../assets/images/icon/Bookmark.png'

const Create = () => {
    const data = [
        {
            title: "What We Do",
            description: "Represents physical assets in the digital realm.",
            icon : icon1,
            colorbg : "icon-color1"
        },
        {
            title: "Create Your Collection",
            description: "Our approach is grounded in cutting-edge technology and a deep understanding of the dynamic asset investment landscape.",
            icon : icon2,
            colorbg : "icon-color2",
        },
        {
            title: "Deapps",
            description: "Investing with us means access to your personal dashboard through Deapps (Decentralized Applications).",
            icon : icon3,
            colorbg : "icon-color3",
        },
        {
            title: "Vision for the Future",
            description: "We envision a future where investing in assets is synonymous with opportunity, security, and trust for everyone",
            icon : icon4,
            colorbg : "icon-color4",
        },
    ]
    return (
        <section className="tf-box-icon create tf-section bg-home-3">
            <div className="themesflat-container">
                <div className="row">
                    {
                        data.map((item , index) => (
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
    
)

export default Create;
