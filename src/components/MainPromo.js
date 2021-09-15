import React from 'react'
import './MainPromo.scss'
import promo from '../images/Promo.png'

const MainPromo = () => {
    return (
        <section className="mainPromo">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="mainTitle">
                            Hey! My name is Sergey.<br/>
                            I’m a frontend web <br/>
                            developer
                        </div>
                        <button className="promoBtn">My Projects</button>
                    </div>
                    <div className="col-md-4 offset-md-2">
                        <img className="promoImage" src={promo}></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainPromo
