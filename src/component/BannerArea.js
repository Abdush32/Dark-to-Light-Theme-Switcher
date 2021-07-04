import React,{ useContext } from 'react'
import ThemeContext from "../context/ThemeContext";
import AppTheme from "../color";
import bann1  from "../images/banner1.png"
import coffee  from "../images/coffee.png"
import caro from "../images/caro2.png"
import "./comp.css"
const BannerArea = () => {
    const theme = useContext(ThemeContext)[0];
    const currectTheme = AppTheme[theme];
    return (
        <div style={{
            backgroundColor: `${currectTheme.backgroundColor}`,
            color: `${currectTheme.textColor}`,}}>
            <img src="https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg?cs=srgb&dl=pexels-arshad-sutar-1749303.jpg&fm=jpg" alt="it is a Coffee" className="banner" style={{height:"250px"}} />
<div style={{
    backgroundColor: `${currectTheme.backgroundColor}`,
    color: `${currectTheme.textColor}`,}}>
<center><h1>CafeKing - Ulimate quality coffee</h1></center>
<div className="twosidearea">
<p>Lorem ipsum dolor sit amet consectetur 
adipisicing elit. Dolore suscipit sit
 repellendus rem doloribus, consequatur
  earum modi saepe itaque, molestias
   dignissimos. Recusandae nulla
    doloremque sint quasi quaerat? 
    Dolores doloribus reiciendis placeat
     repellendus voluptas aspernatur 
     accusamus eius non repudiandae 
     nesciunt minima, cumque iure quas
      voluptatem praesentium reprehenderit
       provident tenetur fugiat aliquam corrupti debitis! Provident cum quas tempore, quod architecto tenetur facilis in ipsa quaerat, non magnam! Dolor deserunt eum suscipit, ipsa est officiis impedit natus commodi tempore cupiditate quo libero assumenda alias fugit non fugiat dolorem dolore! Atque a, tempore repellendus molestiae et magni 
labore, voluptate explicabo, qui enim quo amet!</p>
<img src={coffee} style={{width:"200px", height:"200px"}}/>

</div>

</div>

<div className="threesetimage"> 
<img src="https://images.pexels.com/photos/1627933/pexels-photo-1627933.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
<img src="https://cdn.pixabay.com/photo/2017/03/13/12/34/coffee-2139592__340.jpg" />
<img src="https://cdn.pixabay.com/photo/2012/03/01/15/54/coffee-20486__340.jpg" />


</div>
<div className="singleimg"> <img src={caro}/></div>


        </div>
    )
}

export default BannerArea
