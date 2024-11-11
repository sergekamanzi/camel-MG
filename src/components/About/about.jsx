import './about.css'
import truck from '/truck.jpg'
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const about = () => {
  return (
    <div className='main'>
        <h2>About Us</h2>
        <div className='main-about'>
              <div className='text'>
                <p>
                The process typically involves 
                specialized vehicles, like vacuum 
                trucks or tankers, equipped to handle 
                liquid and solid waste safely. These 
                vehicles use suction systems to empty 
                waste containers, securely transport 
                the waste, and then offload it at 
                treatment plants or approved disposal sites.
                </p>
                <div className='social-icons'>
                <FiInstagram />
                <FaXTwitter />
                <FaTiktok />
                <FaYoutube />
                </div>
              </div>
              <div className='photo'>
                 <img src={truck} alt="" />
              </div>
        </div>
    </div>
  )
}

export default about
