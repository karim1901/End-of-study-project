import sale from './img/saale.png'






function SalePub(){
    return <div className="salePub">
        <div className="img">
            <img src={sale} alt="" />
        </div>
        <div className="desc">
            <button>SPECIAL OFFER</button>
            <h1>Mid Season Sale UP TO 30% OFF</h1>
            <p>Time's ticking on our exclusive sale! Shop now and elevate your style.</p>
            <button>VIEW COLLECTION</button>
        </div>
    </div>
}


export default SalePub