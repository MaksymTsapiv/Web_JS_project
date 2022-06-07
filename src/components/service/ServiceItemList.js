import React, {useEffect, useState} from 'react';
import ServiceItem from "./ServiceItem"
import '../../styles/service_styles/Serv.css'
import { IoPersonOutline } from 'react-icons/io5'
import { ImTarget, ImStatsDots } from 'react-icons/im'
import { AiOutlineMail } from 'react-icons/ai'
import { BsHeadphones, BsFileEarmarkSpreadsheet } from 'react-icons/bs'


const ServiceItemList = () => {
    const [posts, setPosts] = useState([]);

    const iconlist = {
        "IoPersonOutline": <IoPersonOutline className='post-icon' />,
        "ImTarget": <ImTarget className='post-icon' />,
        "AiOutlineMail": <AiOutlineMail className='post-icon' />,
        "BsHeadphones": <BsHeadphones className='post-icon' />,
        "BsFileEarmarkSpreadsheet": <BsFileEarmarkSpreadsheet className='post-icon' />,
        "ImStatsDots": <ImStatsDots className='post-icon' />
    }

    useEffect(() => {
        fetch('posts').then(response => response.json()).then(posts => {
            setPosts(posts);
        })
    }, [])

    return (
        <div className='services-page' >
            <div className="post-list">
                {posts.map(post =>
                    <ServiceItem key={post.id} post={post} icon={iconlist[post.iconElement]} />
                )}
            </div>

        </div>
    )
}

export default ServiceItemList;