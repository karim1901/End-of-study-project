import pub from './img/pub.png'




function Sale(){
    return <div className="sale">
        <div className="img">
            <img src={pub} alt="" />
        </div>
        <div className="desc">
            <button>SPECIAL OFFER</button>
            <h1>Trend Items -15% For New Clients</h1>
            <p>Time's ticking on our exclusive sale! Shop now and elevate your style.</p>
            <button>SHOPPING NOW</button>
        </div>
    </div>
}



export default Sale