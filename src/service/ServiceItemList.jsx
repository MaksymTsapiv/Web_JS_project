import React from 'react';
import ServiceItem from "./ServiceItem"
const ServiceItemList = ({posts}) => {
    

    

    return (
        <div >
            <div className="post-list">
                {posts.map(post =>
                    <ServiceItem post ={post} key = {post.id}/>
                )}
            </div>
            
        </div>
    )
}

export default ServiceItemList;