import React , { useState , Fragment , useRef} from 'react'
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel  } from 'react-tabs';
import Countdown from "react-countdown";
import CardModal from '../CardModal';
import { Dropdown } from 'react-bootstrap';

import img1 from '../../../assets/images/box-item/image-box-47.jpg'
import imga1 from '../../../assets/images/avatar/author_rank.jpg'
import img2 from '../../../assets/images/box-item/image-box-48.jpg'
import imga2 from '../../../assets/images/avatar/avt-3.jpg'
import img3 from '../../../assets/images/box-item/image-box-34.jpg'
import imga3 from '../../../assets/images/avatar/avt-27.jpg'
import img4 from '../../../assets/images/box-item/image-box-35.jpg'
import imga4 from '../../../assets/images/avatar/avt-10.jpg'
import img5 from '../../../assets/images/box-item/image-box-36.jpg'
import imga5 from '../../../assets/images/avatar/avt-5.jpg'
import img6 from '../../../assets/images/box-item/image-box-32.jpg'
import img7 from '../../../assets/images/box-item/image-box-33.jpg'
import img8 from '../../../assets/images/box-item/image-box-52.jpg'
import img9 from '../../../assets/images/box-item/image-box-53.jpg'
import img10 from '../../../assets/images/box-item/image-box-49.jpg'
import img11 from '../../../assets/images/box-item/image-box-54.jpg'
import img12 from '../../../assets/images/box-item/image-box-55.jpg'
import img13 from '../../../assets/images/box-item/image-box-56.jpg'
import img14 from '../../../assets/images/box-item/image-box-50.jpg'
import img15 from '../../../assets/images/box-item/image-box-51.jpg'

const ItemContent = () => {
    const [dataTab] = useState(
        [
            {
                id: 1,
                title: "Live Auctions",
            },
            {
                id: 2,
                title: "Today's Picks",
            },
            {
                id: 3,
                title: "Land",
            },
            {
                id: 4,
                title: "Items",
            },
        ]
    )
    const [dataPanel] = useState(
        [
            {
                id: 1,
                dataContent: [
                    {
                        id: 1,
                        img: img1,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga1,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 2,
                        img: img2,
                        title: "Hamlet Comtemplates... ",
                        tags: "bsc",
                        imgAuthor: imga2,
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 3,
                        img: img3,
                        title: "Loving Vase 01 by Lanza... ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 4,
                        img: img4,
                        title: "Triumphant awakening... ",
                        tags: "bsc",
                        imgAuthor: imga4,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 5,
                        img: img5,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga5,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 6,
                        img: img6,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga1,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 7,
                        img: img7,
                        title: "Hamlet Comtemplates... ",
                        tags: "bsc",
                        imgAuthor: imga2,
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 8,
                        img: img8,
                        title: "Loving Vase 01 by Lanza... ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 9,
                        img: img9,
                        title: "Triumphant awakening... ",
                        tags: "bsc",
                        imgAuthor: imga4,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 10,
                        img: img10,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga5,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 11,
                        img: img11,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga1,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 12,
                        img: img12,
                        title: "Hamlet Comtemplates... ",
                        tags: "bsc",
                        imgAuthor: imga2,
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 13,
                        img: img13,
                        title: "Loving Vase 01 by Lanza... ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 14,
                        img: img14,
                        title: "Triumphant awakening... ",
                        tags: "bsc",
                        imgAuthor: imga4,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 15,
                        img: img15,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga5,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 16,
                        img: img1,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga1,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 17,
                        img: img2,
                        title: "Hamlet Comtemplates... ",
                        tags: "bsc",
                        imgAuthor: imga2,
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 18,
                        img: img3,
                        title: "Loving Vase 01 by Lanza... ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 19,
                        img: img4,
                        title: "Triumphant awakening... ",
                        tags: "bsc",
                        imgAuthor: imga4,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 20,
                        img: img5,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga5,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    
                ]
            },
            {
                id: 2,
                dataContent: [
                    {
                        id: 1,
                        img: img11,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga1,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 2,
                        img: img12,
                        title: "Hamlet Comtemplates... ",
                        tags: "bsc",
                        imgAuthor: imga2,
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 3,
                        img: img13,
                        title: "Loving Vase 01 by Lanza... ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 4,
                        img: img14,
                        title: "Triumphant awakening... ",
                        tags: "bsc",
                        imgAuthor: imga4,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 5,
                        img: img15,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga5,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 6,
                        img: img1,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga1,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 7,
                        img: img2,
                        title: "Hamlet Comtemplates... ",
                        tags: "bsc",
                        imgAuthor: imga2,
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 8,
                        img: img3,
                        title: "Loving Vase 01 by Lanza... ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 9,
                        img: img4,
                        title: "Triumphant awakening... ",
                        tags: "bsc",
                        imgAuthor: imga4,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 10,
                        img: img5,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga5,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                ]
            },
            {
                id: 3,
                dataContent: [
                    {
                        id: 1,
                        img: img1,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga1,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 2,
                        img: img2,
                        title: "Hamlet Comtemplates... ",
                        tags: "bsc",
                        imgAuthor: imga2,
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 3,
                        img: img3,
                        title: "Loving Vase 01 by Lanza... ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 4,
                        img: img4,
                        title: "Triumphant awakening... ",
                        tags: "bsc",
                        imgAuthor: imga4,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 5,
                        img: img5,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga5,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 6,
                        img: img6,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga1,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 7,
                        img: img7,
                        title: "Hamlet Comtemplates... ",
                        tags: "bsc",
                        imgAuthor: imga2,
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 8,
                        img: img8,
                        title: "Loving Vase 01 by Lanza... ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 9,
                        img: img9,
                        title: "Triumphant awakening... ",
                        tags: "bsc",
                        imgAuthor: imga4,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 10,
                        img: img10,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga5,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                ]
            },
            {
                id: 4,
                dataContent: [
                    {
                        id: 1,
                        img: img11,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga1,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 2,
                        img: img12,
                        title: "Hamlet Comtemplates... ",
                        tags: "bsc",
                        imgAuthor: imga2,
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 3,
                        img: img13,
                        title: "Loving Vase 01 by Lanza... ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 4,
                        img: img14,
                        title: "Triumphant awakening... ",
                        tags: "bsc",
                        imgAuthor: imga4,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 5,
                        img: img15,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga5,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 6,
                        img: img1,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga1,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 7,
                        img: img2,
                        title: "Hamlet Comtemplates... ",
                        tags: "bsc",
                        imgAuthor: imga2,
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 8,
                        img: img3,
                        title: "Loving Vase 01 by Lanza... ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 9,
                        img: img4,
                        title: "Triumphant awakening... ",
                        tags: "bsc",
                        imgAuthor: imga4,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 10,
                        img: img5,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga5,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                ]
            },
        ]
    )

    const [visible , setVisible] = useState(15);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 5);
    }

    const listBtn = useRef(null)
    const gridBtn = useRef(null)
    const listContent = useRef(null)
    const gridContent = useRef(null)

    const listToggle = () => {
        listBtn.current.classList.add('active');
        gridBtn.current.classList.remove('active');
        listContent.current.classList.add('open');
        gridContent.current.classList.remove('open');
    }
    const gridToggle = () => {
        gridBtn.current.classList.add('active');
        listBtn.current.classList.remove('active');
        gridContent.current.classList.add('open');
        listContent.current.classList.remove('open');
    }

    const [modalShow, setModalShow] = useState(false);
  return (
    <Fragment>
        <div className="flat-tabs items">
            
     
        </div>
        <CardModal
        show={modalShow}
        onHide={() => setModalShow(false)}
         />
        
    </Fragment>
  )
}

export default ItemContent