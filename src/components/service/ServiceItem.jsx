import '../../styles/service_styles/Serv.css'


const ServiceItem = ({ post, icon }) => {

    return (
        <div className="post">
            <div>
                { icon }
            </div>
            <div className="title">
                <h3>{ post.title }</h3>
            </div>
            <div className="post-content">
                <span >{ post.description }</span>
            </div>
            <a className="post-btn" href={post.buttonLink}>Read More</a>
        </div>
    );
};

export default ServiceItem