import '../../styles/service_styles/Serv.css'


const ServiceItem = ({ post }) => {
    let l = post.buttonLink;

    return (
        <div className="post">
            <div>
                { post.iconElement }
            </div>
            <div className="title">
                <h3>{ post.title }</h3>
            </div>
            <div className="post-content">
                <span >{ post.description }</span>
            </div>
            <a className="post-btn" href={post.buttonLink}>Read More</a>
            {/*<td className="post-btn" onClick={()=> window.open(l, "_blank")}>Read More</td>*/}
        </div>
    );
};

export default ServiceItem