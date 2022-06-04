import React from 'react';
import ServiceItem from "./ServiceItem"
import '../../styles/service_styles/Serv.css'
import { IoPersonOutline } from 'react-icons/io5'
import { ImTarget, ImStatsDots } from 'react-icons/im'
import { AiOutlineMail } from 'react-icons/ai'
import { BsHeadphones, BsFileEarmarkSpreadsheet } from 'react-icons/bs'


const ServiceItemList = () => {
    const posts = [
        { id:1, title:'Join Volunteers', description: 'Join volunteers and help Ukrainian Army and refugees ',buttonLink:"https://portal.lviv.ua/news/2022/03/03/iak-dopomohty-volonterski-orhanizatsii-ta-tsentry-u-lvovi", iconElement: <IoPersonOutline className='post-icon' /> },
        { id:2, title:'Our Mission', description: 'The goal of this organization is to help Ukrainian Army and refugees',buttonLink:"https://bank.gov.ua/ua/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi",iconElement: <ImTarget className='post-icon' /> },
        { id:3, title:'Become Volunteer', description: 'You can become volonteer and help alot',buttonLink:"https://portal.lviv.ua/news/2022/03/03/iak-dopomohty-volonterski-orhanizatsii-ta-tsentry-u-lvovi",iconElement: <AiOutlineMail className='post-icon' /> },
        { id:4, title:'24/7 support', description: 'Any questions? Contact support',buttonLink:"https://www.mil.gov.ua/kontakti/garyacha-liniya.html",iconElement: <BsHeadphones className='post-icon' /> },
        { id:5, title:'Education Policy', description: 'The educational policy  here',buttonLink:"https://www.youtube.com/",iconElement: <BsFileEarmarkSpreadsheet className='post-icon' /> },
        { id:6, title:'Party Growing', description: 'The results we made by now',buttonLink:"https://www.mil.gov.ua/kontakti/garyacha-liniya.html",iconElement: <ImStatsDots className='post-icon' /> },
    ]

    return (
        <div className='services-page' >
            <div className="post-list">
                {posts.map(post =>
                    <ServiceItem key = { post.id } post ={ post }/>
                )}
            </div>
            
        </div>
    )
}

export default ServiceItemList;