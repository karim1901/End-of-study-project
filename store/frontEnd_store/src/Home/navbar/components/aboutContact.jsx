import { Link } from "react-router-dom"







function AboutContact(){
    return <div className="aboutContact">
        <div className="aboutC">
            <p>About</p>
            <p>Contact Us</p>
        </div>
        <div className="sale">
            <p>MID SEASON SALE - UP TO 30% <Link><strong> SHOP NOW </strong></Link> </p>
        </div>
        <div className="siteLink">
            <p>Customer Care: 
              <strong>Shop@ZenithOutlet.com</strong>
            </p>
        </div>
    </div>
}


export default AboutContact