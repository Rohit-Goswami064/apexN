import React, { useEffect } from 'react';

const TestimonialTwo = () => {

    useEffect(() => {

        // Testimonial Two
        if ($(".testimonial-two__active").length) {
            $(".testimonial-two__active").owlCarousel({
                items: 1,
                loop: true,
                nav: false,
                margin: 10,
                dotsData: true,
                animateOut: 'fadeOutDown',
                animateIn: 'fadeInDown',
            });
        }
          
    }, []);

    return (
        <>
            {/* testimonial two start */}
            <div className="testimonial-two pt-110">
                <div className="container">
                    <div className="row">
                        <div className="mb-70">
                            <h2 className="section-title__two-title text-center wow fadeInUp" data-wow-delay=".3s">What Clients Say About <br /> Our SEO Services.</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 wow fadeInUp" data-wow-delay=".5s">
                            <div className="testimonial-two__wrapper">
                                <div className="testimonial-two__img">
                                    <img src="/assets/img/testimonial/quote-icon.svg" alt="quote icon" />
                                </div>
                                <div className="testimonial-two__active owl-carousel">
                                    <div data-dot="<img src='assets/img/testimonial/testimonial-2-1.png' />" className="testimonial-two__single">
                                        <p>“ApexNucleus helped us transform our online presence with a responsive, professional website. 
                                            Their SEO strategies boosted our traffic and made a real impact on our business growth. Highly recommended for businesses looking to scale digitally!”</p>
                                        <h4>Mr. Nitin</h4>
                                        <span>Director, Good Earth Science</span>
                                    </div>
                                    <div data-dot="<img src='assets/img/testimonial/testimonial-2-2.png' />" className="testimonial-two__single">
                                        <p>“Working with ApexNucleus has been a game-changer for our digital marketing. Their expertise in AI solutions and targeted advertising has helped us reach a wider audience, while their custom strategies have significantly improved our engagement.”</p>
                                        <h4>Michael Walker</h4>
                                        <span>Director, Client Experience</span>
                                    </div>
                                    <div data-dot="<img src='assets/img/testimonial/testimonial-2-3.png' />" className="testimonial-two__single">
                                        <p>“ApexNucleus provided exceptional graphic design and web development services. The team’s creativity and dedication helped us build a visually appealing brand that resonates with our target audience. We're seeing a real difference in both leads and brand recognition.”</p>
                                        <h4>Muscle Motion</h4>
                                        <span>Director, Client Experience</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* testimonial two end */}
        </>
    )
}

export default TestimonialTwo;