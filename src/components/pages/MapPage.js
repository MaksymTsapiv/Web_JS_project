import Contacts from "../Contacts";
import Map from "../Map";
import '../../styles/MapAndContacts.css'

const MapPage = () => {
    return <div className='MapAndContacts'>
        <Contacts />
        <Map />
    </div>
}

export default MapPage;