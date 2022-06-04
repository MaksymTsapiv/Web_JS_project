import React,  { useNavigate } from "react";
import '../Styles/Serv.css'
import { Link , Route} from 'react-router-dom';




const ServiceItem = (props) => {


    let l = props.post.button_link;

    return (
        <div className="post">
            <div className="icon">
                <img src={props.post.icon_link} alt="mail icon" width="17"/>
            </div>

            <div class="title">
                <h3>{props.post.title}</h3>
            </div>
            
            <div className="post_content">
                <div>
                    {props.post.description}
                </div>
            </div>
            <div className="post_btn">
                
                <td onClick={()=> window.open(l, "_blank")}>Read More</td>
               
            </div>

            
        </div>
    );
};

export default ServiceItem