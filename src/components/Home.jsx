import React from 'react'
import Product from './Product'

const Home = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/assets/images/home/img1.jpg" className="d-block w-100" alt="Iphone" height="500px" />
                        <div className ="carousel-caption d-none d-md-block">
                        <h2>iPhone 13 Pro Max</h2>
                        <p>Your new superpower.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/assets/images/home/img2.jpg" className="d-block w-100" alt="Iphone" height="500px" />
                        <div className ="carousel-caption d-none d-md-block">
                        <h2>MacBook Pro M1</h2>
                        <p>Supercharged for pros.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/assets/images/home/img3.jpg" className="d-block w-100" alt="Iphone" height="500px" />
                        <div className ="carousel-caption d-none d-md-block">
                        <h2>Apple Watch Series 7</h2>
                        <p>Heavy on features. Light on price.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <Product />
        </>
    )
}

export default Home
