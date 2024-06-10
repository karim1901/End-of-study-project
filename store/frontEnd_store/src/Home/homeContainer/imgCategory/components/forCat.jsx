
import girl from './images/girl.png'
import men from './images/man.png'
import kitchen from './images/kitchen.png'



function ForCat(){
    return <div className="forCat">
        <div className="cart">
            <img src={girl} alt="" />
            <div className="desc">
                <h2>For Girl</h2>
                <p>World's Best Brands</p>
                <button>SHOP NOW </button>                  
            </div>
        </div>
        <div className="cart">
            <img src={men} alt="" />
            <div className="desc">
                <h2>For Man</h2>
                <p>Incredible Quality</p>
                <button>SHOP NOW </button>                
            </div>
        </div>
        <div className="cart">
            <img src={kitchen} alt="" />
            <div className="desc">
                <h2>Home&Kitchen</h2>
                <p>World's best brands</p>
                <button>SHOP NOW </button>                
            </div>
        </div>
    </div>
}


export default ForCat