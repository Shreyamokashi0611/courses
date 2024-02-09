import React from 'react'
import './About.css'

export default function About() {
  // const img="https://static8.depositphotos.com/1005629/806/i/450/depositphotos_8068134-stock-photo-pasta-with-olives-and-parsley.jpg"
  return (
    <div>
      <div style={{backgroundImage:'url("https://www.independentschoolparent.com/wp-content/uploads/2018/01/AI.jpg")', height:750, backgroundSize:'cover'}}>

        <div className='about'>
          <h1>ABOUT US</h1>
          <br/><br/>
          <p>"At Rosalie, the world feels like a bubbling Italian<br/>
            Restaurant, with an infinite strand of pasta <br/>
            connecting everything and everyone."
          </p>
          <br/>
          <p>- Shreya Mokashi -</p>
          <br/>
          <button>READ MORE</button>
          <br/><br/>
          {/* <img src={img} height={300} width={400}/> */}
        </div>
      </div>
      
    </div>
  )
}
