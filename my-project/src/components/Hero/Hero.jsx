import React from "react";
import './Hero.css'

function Hero(){
    return(
        <div className="container">
            <div className="main-card">
                {/* <img src="./assets/vector.svg" alt="vetor" className="vetor-img"/> */}
                <h1 className="title-card">Our Collection</h1>
                
                <p className="text-card">Introducing our Coffe Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>

                <button className="btn-left">All Products</button>
                <button className="btn-right">Available Now</button>

                <div className="mini-cards">
                    {[...Array(6)].map((_, index) => (
                        <div className="card" key={index}>
                        <img src="./assets/xicara-de-cafe.avif" alt="xícara de café" className="img-card" />
                        
                        <div className="info">
                            <p className="taste">Cappuccino</p>    
                            <p className="price">$5.20</p>
                        </div>    

                        <div className="available">
                            <img src="./assets/Star_fill.svg" alt="icon star" className="icon-star" />
                            <p className="rate">4.7 <span>(65 votes)</span></p>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Hero;