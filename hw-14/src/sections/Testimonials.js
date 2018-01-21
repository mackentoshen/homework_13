import React from 'react';

const Testimonials = () => {
    return (
        <div>

            <section className="carousel-section container-fluid carousel-wrap owl-carousel owl-theme" id="testimoinals">
                <div className="item">
                    <div className="carousel-slide-img">
                        <img className="carousel-photo" src="images/slider-photo.png" alt="photo"/>
                    </div>
                    <div className="carousel-slide-content">
                        <blockquote className="carousel-article">
                            “Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                            Donec sed odio dui. Aenean eu leo quam...”
                        </blockquote>
                        <p className="carousel-author">Susan Sims, Interaction Designer at XYZ</p>
                    </div>
                </div>
                <div className="item">
                    <div className=" carousel-slide-img">
                        <img className="carousel-photo" src="images/tom-hardy7.jpg" alt="photo"/>
                    </div>
                    <div className=" carousel-slide-content">
                        <blockquote className="carousel-article">
                            “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, voluptate!...”
                        </blockquote>
                        <p className="carousel-author">Tom Hardy, Actor at XYZ</p>
                    </div>
                </div>
                <div className="item">
                    <div className=" carousel-slide-img">
                        <img className="carousel-photo" src="images/maccona.jpg" alt="photo"/>
                    </div>
                    <div className=" carousel-slide-content">
                        <blockquote className="carousel-article">
                            “The only time success comes before work is in the dictionary!...”
                        </blockquote>
                        <p className="carousel-author">Matthew McConaughey, Actor at XYZ</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Testimonials;