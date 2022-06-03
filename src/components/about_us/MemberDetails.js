import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'
import '../../styles/about_us_styles/MemberDetails.css'

const MemberDetails = ( {name, details, facebookLink, gitHubLink, linkedInLink} ) => {
    return <div className='member-details'>
        <span>{name}</span>
        <span>{details}</span>
        <div className='links'>
            <a className='icon-member' href={facebookLink}>
                <FaFacebook />
            </a>
            <a className='icon-member' href={gitHubLink}>
                <FaGithub />
            </a>
            <a className='icon-member' href={linkedInLink}>
                <FaLinkedin />
            </a>
        </div>
    </div>
}

export default MemberDetails;