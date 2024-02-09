import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gallary.css'

export default function Gallary() {
  const img="https://images.venuebookingz.com/31519-1699349417-wm-kyba-2.jpg"
  const img1="https://b.zmtcdn.com/data/collections/2e5c28a5fbcb2b35d84c0a498b0e1ba2_1674825837.jpg?fit=around|562.5:360&crop=562.5:360;*,*"

  const img2="https://media.timeout.com/images/106047598/image.jpg"
  const img3="https://cdn2.atlantamagazine.com/wp-content/uploads/sites/4/2022/12/1222_boa012_oneuseonly.jpg"
  const img4="https://media.cntravellerme.com/photos/651eaf7e0a695ebd5f146fe8/16:9/w_2448,h_1377,c_limit/Screenshot%202023-09-25%20at%2012.19.23.png"

  const img5="https://b.zmtcdn.com/data/pictures/7/20582407/134c60638188e8ba637eb4251d3072c3.jpg"
  const img6="https://images.vs-static.com/73WDloRSG_wRWsTg_PUH1Tq_X84=/92x0:2907x2111/375x0/Madonna_Helsinki_restaurant_9b3201bb56/Madonna_Helsinki_restaurant_9b3201bb56.jpg"
  const img7="https://www.timeoutabudhabi.com/cloud/timeoutabudhabi/2023/04/27/Best-Indian-restaurants-in-Abu-Dhabi-Moksh-1024x768.jpg"
  
  const img8="https://www.timeoutdubai.com/cloud/timeoutdubai/2023/10/16/Mimi-Kakushi-Dubai-1-1024x768.jpg"

  return (
    <div className='one'>

      <h1 className='h1'>Gallary</h1>

      <div className='two'>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <img src={img} alt=''/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={img1} alt=''/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={img8} alt=''/>
      </div>
      <br></br>


      <div className='three'>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <img src={img2} alt=''/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={img3} alt=''/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={img4} alt=''/>
      </div>
      
      <br></br>

      <div className='four'>
        &nbsp;&nbsp;&nbsp;&nbsp;
        < img src={img5} alt=''/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={img6} alt=''/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={img7} alt=''/>
      </div>
      <br/><br/><br/>

    </div>
  )
}
