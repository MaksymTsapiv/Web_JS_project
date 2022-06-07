import '../../styles/about_us_styles/MemberShortInfo.css'

const MemberShortInfo = ({ img, name }) => {
    return <div className='member-short-info'>
        <img className='member-img' src={require('../../images/' + img)} alt=""/>
        <span>{name}</span>
    </div>
}

export default MemberShortInfo;