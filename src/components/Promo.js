import React from 'react'
import './Promo.scss'
import Navbar from'./Navbar';
import MainPromo from'./MainPromo';

const Promo = () => {
    return (
        <section className="promo">
            <Navbar />
            <MainPromo />
        </section>
    )
}

export default Promo
