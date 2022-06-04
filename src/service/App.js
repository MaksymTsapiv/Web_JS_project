import React, {useState} from 'react';
import ServiceItem from './components/ServiceItem';
import ServiceItemList from './components/ServiceItemList';
import './Styles/Serv.css'
function App() {
  const [posts, setPosts] = useState([
    {id:1, title:'Join Volunteers', description: 'Join volunteers and help Ukrainian Army and refugees ',button_link:"https://portal.lviv.ua/news/2022/03/03/iak-dopomohty-volonterski-orhanizatsii-ta-tsentry-u-lvovi",icon_link:"https://icon-library.com/images/small-person-icon/small-person-icon-24.jpg"},
    {id:1, title:'Our Mission', description: 'The goal of this organization is to help Ukrainian Army and refugees',button_link:"https://bank.gov.ua/ua/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi",icon_link:"https://toppng.com/uploads/preview/maybe-something-like-this-a-but-with-mission-icon-font-awesome-11563099799q24efxo8zd.png"},
    {id:1, title:'Become Volunteer', description: 'You can become volonteer and help alot',button_link:"https://portal.lviv.ua/news/2022/03/03/iak-dopomohty-volonterski-orhanizatsii-ta-tsentry-u-lvovi",icon_link:"https://technext.github.io/jadoo/v1.0.0/assets/img/cta/mail.svg"},
    {id:1, title:'24/7 support', description: 'Any questions? Contact support',button_link:"https://www.mil.gov.ua/kontakti/garyacha-liniya.html",icon_link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv0NyYGl5e36-RNd8_1fztO2-lbigQxgcTyFSeacTfLuT3gjiv2sAQYLHP2IzDf3leFIk&usqp=CAU"},
    {id:1, title:'Education Policy', description: 'The educational policy  here',button_link:"https://www.youtube.com/",icon_link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyfu0qyd_oJB1pRT_xp4EKhSSyrTc48FclM2s1aVPOBo-m8nbrt1D0yufMX4vuD1baGY4&usqp=CAU"},
    {id:1, title:'Party Growing', description: 'The results we made by now',button_link:"https://www.mil.gov.ua/kontakti/garyacha-liniya.html",icon_link:"http://cdn.onlinewebfonts.com/svg/img_464375.png"},


  ])
  



  return (
    <div className="App">
      <ServiceItemList posts = {posts}/>
    </div>
  );
}

export default App;
