import Member from "./Member";
import '../../styles/about_us_styles/TeamMemberList.css'

const TeamMemberList = () => {
    const memberList = [
        {
            id: 1,
            img:'maksym.png',
            name: 'Maksym Tsapiv',
            details: 'CS UCU student',
            facebookLink: 'https://react-icons.github.io/react-icons/search?q=linkedin',
            gitHubLink: 'https://react-icons.github.io/react-icons/search?q=linkedin',
            linkedInLink: 'https://react-icons.github.io/react-icons/search?q=linkedin'
        },
        {
            id: 2,
            img: 'bohdanb.jpg',
            name: 'Bogdan Bryk',
            details: 'CS UCU student',
            facebookLink: 'https://react-icons.github.io/react-icons/search?q=linkedin',
            gitHubLink: 'https://react-icons.github.io/react-icons/search?q=linkedin',
            linkedInLink: 'https://react-icons.github.io/react-icons/search?q=linkedin'
        },
        {
            id: 3,
            img: 'yura.jpg',
            name: 'Yurii Bodakovskyi',
            details: 'CS UCU student',
            facebookLink: 'https://react-icons.github.io/react-icons/search?q=linkedin',
            gitHubLink: 'https://react-icons.github.io/react-icons/search?q=linkedin',
            linkedInLink: 'https://react-icons.github.io/react-icons/search?q=linkedin',
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
            facebookLink: 'https://react-icons.github.io/react-icons/search?q=linkedin',
            gitHubLink: 'https://react-icons.github.io/react-icons/search?q=linkedin',
            linkedInLink: 'https://react-icons.github.io/react-icons/search?q=linkedin'
        },
        {
            id: 6,
            img: 'yaroslav.jpg',
            name: 'Yaroslav Brovchenko',
            details: 'CS UCU student',
            facebookLink: 'https://react-icons.github.io/react-icons/search?q=linkedin',
            gitHubLink: 'https://react-icons.github.io/react-icons/search?q=linkedin',
            linkedInLink: 'https://react-icons.github.io/react-icons/search?q=linkedin' }
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