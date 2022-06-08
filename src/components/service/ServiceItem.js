import '../../styles/service_styles/Serv.css'


const ServiceItem = ({ post, icon }) => {
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
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
            
            <input
                className="popup-btn1"
                type="button"
                value="Read More"
                onClick={togglePopup}
                />
                {isOpen && <Popup
                content={<>
                    <div className="popup-title"><b>{post.popup.title}</b></div>
                    <div className="popup-description"><p>{post.popup.description}</p></div>
                    
                    <a className="post-btn" href={post.buttonLink}><b>Visit site</b></a>
                </>}
                handleClose={togglePopup}
                />}
        </div>
    );
};

export default ServiceItem