import TeamMemberList from "./TeamMemberList";
import '../../styles/about_us_styles/Team.css'
import { AiFillStar } from 'react-icons/ai'

const Team = () => {
    return <div className='team'>
        <h1>Our Team</h1>
        <div className='icon-div'>
            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
        </div>
        <TeamMemberList />
    </div>
}

export default Team;