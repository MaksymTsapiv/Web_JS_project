import Member from "./Member";
import '../../styles/about_us_styles/TeamMemberList.css'
import {useEffect, useState} from "react";

const TeamMemberList = () => {
    const [memberList, setMemberList] = useState([]);

    // console.log('a')

    useEffect(() => {
        fetch('members').then(response => response.json()).then(members => {
            setMemberList(members);
        })
    }, [])


    return <div className='team-member-list'>
        {
            memberList.map(member => (
                <Member key={member.id} {...member} />
            ))
        }
    </div>
}

export default TeamMemberList;