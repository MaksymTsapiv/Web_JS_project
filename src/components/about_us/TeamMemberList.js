import Member from "./Member";
import '../../styles/about_us_styles/TeamMemberList.css'

const TeamMemberList = () => {
    const memberList = [
        {
            id: 1,
            img:'maksym.png',
            name: 'Maksym Tsapiv',
            details: 'CS UCU student',
            facebookLink: 'https://www.facebook.com/profile.php?id=100010098152610',
            gitHubLink: 'https://github.com/MaksymTsapiv',
            linkedInLink: 'https://www.facebook.com/profile.php?id=100010098152610'
        },
        {
            id: 2,
            img: 'bohdanb.jpg',
            name: 'Bogdan Bryk',
            details: 'CS UCU student',
            facebookLink: 'https://www.facebook.com/profile.php?id=100010098152610',
            gitHubLink: 'https://github.com/bbryk',
            linkedInLink: 'https://www.facebook.com/profile.php?id=100010098152610'
        },
        {
            id: 3,
            img: 'yura.jpg',
            name: 'Yurii Bodakovskyi',
            details: 'CS UCU student',
            facebookLink: 'https://www.facebook.com/profile.php?id=100010098152610',
            gitHubLink: 'https://github.com/YuraBD',
            linkedInLink: 'https://www.facebook.com/profile.php?id=100010098152610'
        },
        {
            id: 4,
            img: 'bohdans.jpg',
            name: 'Boghan Shevchyk',
            details: 'CS UCU student',
            facebookLink: 'https://www.facebook.com/profile.php?id=100010098152610',
            gitHubLink: 'https://github.com/shevdan',
            linkedInLink: 'https://www.facebook.com/profile.php?id=100010098152610'
        },
        {
            id: 5,
            img: 'orest.jpg',
            name: 'Orest Andrusyshyn',
            details: 'CS UCU student',
            facebookLink: 'https://www.facebook.com/profile.php?id=100010098152610',
            gitHubLink: 'https://github.com/Andrusyshyn-Orest',
            linkedInLink: 'https://www.facebook.com/profile.php?id=100010098152610'
        },
        {
            id: 6,
            img: 'yaroslav.jpg',
            name: 'Yaroslav Brovchenko',
            details: 'CS UCU student',
            facebookLink: 'https://www.facebook.com/profile.php?id=100010098152610',
            gitHubLink: 'https://github.com/firstgenius',
            linkedInLink: 'https://www.facebook.com/profile.php?id=100010098152610' }
    ]


    return <div className='team-member-list'>
        {
            memberList.map(member => (
                <Member key={member.id} {...member} />
            ))
        }
    </div>
}

export default TeamMemberList;