import { iconFreeReturns, iconFreeShip, iconPayement, iconSupport } from "../../../icon"




function Shipping(){
    return <div className="shipping">
        <div className="free">
            {iconFreeShip}
            <div className="desc">
                <p>Free Shipping</p>
                <p>On all orders over $100.00</p>                
            </div>
        </div>
        <div className="free">
            {iconFreeReturns}
            <div className="desc">
                <p>Free Returns</p>
                <p>Returns are free within 10 days</p>
            </div>
        </div>
        <div className="free">
            {iconPayement}
            <div className="desc">
                <p>100% Payement Secure</p>
                <p>Your payement are safe with us</p>                
            </div>
        </div>
        <div className="free">
            {iconSupport}
            <div className="desc">
                <p>Support 24/7</p>
                <p>Contact us 24 hours a day</p>                
            </div>
        </div>
    </div>
}


export default Shipping