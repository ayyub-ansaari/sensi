import {Link} from 'react-router-dom'
import './homepage.css'
import { TypeAnimation } from 'react-type-animation'

const Homepage = () => {

    

   
    
    return (
        <div className="homepage">
            <img src="/orbital.png" alt=""  className="orbital"/>
           <div className="left">
            <h1>Sensi</h1>
            <h2>Talk smarter with Sensi — your AI-powered chat companion.</h2>
            <h3>Sensi is your smart AI chat companion that listens, learns, and helps—whether you're asking simple questions or diving deep, it's always got your back.</h3>
            <Link to="/dashboard">TALK TO Sensi</Link>
           </div>
           <div className="right">
            <div className="imgcontainer">
                <div className="bgcontainer">
                    <div className="bg"></div>
                </div>
                <  img src="/bot.png" alt="" className='bot'/>
                <div className="chat">
                    <img src="/bot.png" alt="" />
                    <TypeAnimation
  sequence={[
    'What if lab-grown meat becomes the future of food?',
    1000,
    'Do you think AI will change the way we work?',
    1000,
    'Will we ever fully explore the mysteries of the ocean?',
    1000,
    'Is technology connecting us or isolating us?',
    1000,
    'What can we do today to help save the environment?',
    1000
  ]}
  wrapper="span"
  cursor={true}
  repeat={Infinity}
  omitDeletionAnimation={true}
/>
        </div>
            </div>
           </div>
           <div className="terms">
            <img src="/logo.png" alt="" />
            <div className="links">
                <Link to="/">Terms of Service</Link>
                <span>|</span>
                <Link to="/">Privacy Policy</Link>
            </div>
           </div>
        </div>
    )
}
export default Homepage