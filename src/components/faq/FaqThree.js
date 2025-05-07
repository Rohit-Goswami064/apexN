import React from 'react';
import Link from 'next/link';
import Accordion from 'react-bootstrap/Accordion';

const FaqThree = () => {

    return (
        <>
            {/* faq three start */}
            <div className="faq-three pt-160 pb-100">
                <div className="faq-three__animation-1">
                    <img src="/assets/img/shape/12.svg" alt="shape icon" />
                </div>
                <div className="faq-three__animation-2">
                    <img src="/assets/img/shape/13.svg" alt="shape icon" />
                </div>
                <div className="faq-three__animation-3">
                    <img src="/assets/img/shape/14.svg" alt="shape icon" />
                </div>
                <div className="faq-three__animation-4">
                    <img src="/assets/img/shape/arrow-circle-line-3.png" alt="shape icon" />
                </div>
                <div className="faq-three__animation-5">
                    <img src="/assets/img/shape/arrow-circle-line-4.png" alt="shape icon" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6">
                            <div className="faq-three__faq">
                                <Accordion defaultActiveKey="1">
                                    <Accordion.Item eventKey="0" data-wow-delay=".3s">
                                        <Accordion.Header>Starter Plan – Ideal for Small Businesses</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="accrodion-content">
                                                <div className="text">
                                                    <div className="pricing-list">
                                                        <ul>
                                                            <li><i className="fa-light fa-check"></i>Simple, mobile-friendly Web Design</li>
                                                            <li><i className="fa-light fa-check"></i>Basic SEO Optimization</li>
                                                            <li><i className="fa-light fa-check"></i>Social Media Setup</li>
                                                            <li><i className="fa-light fa-check"></i>Monthly Analytics Report</li>
                                                            <li><i className="fa-light fa-check"></i>1 Custom Graphic Design</li>
                                                        </ul>
                                                    </div>
                                                    <div className="pricing-footer d__column-two">
                                                        <h5>$299 <span>/ Month</span></h5>
                                                        <Link href="/contact">Free Try <i className="fa-light fa-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Professional Plan – Perfect for Growing Brands</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="accrodion-content">
                                                <div className="text">
                                                    <div className="pricing-list">
                                                        <ul>
                                                            <li><i className="fa-light fa-check"></i>Advanced custom Web Design</li>
                                                            <li><i className="fa-light fa-check"></i>SEO Mastery(On-page & Off-page SEO,Keyword research, content optimization, and local SEO)</li>
                                                            <li><i className="fa-light fa-check"></i>Social Media Management (Up to 3 platforms)</li>
                                                            <li><i className="fa-light fa-check"></i>2 Custom Graphic Designs</li>
                                                            <li><i className="fa-light fa-check"></i>Content Creation (4 pieces/month)</li>
                                                        </ul>
                                                    </div>
                                                    <div className="pricing-footer d__column-two">
                                                        <h5>$599 <span>/ Month</span></h5>
                                                        <Link href="/contact">Free Try <i className="fa-light fa-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Enterprise Plan – Comprehensive Solutions for Large Enterprises</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="accrodion-content">
                                                <div className="text">
                                                    <div className="pricing-list">
                                                        <ul>
                                                            <li><i className="fa-light fa-check"></i>Fully customized, feature-rich Web designs</li>
                                                            <li><i className="fa-light fa-check"></i>Complete SEO & audit, ongoing optimization, and detailed analytics</li>
                                                            <li><i className="fa-light fa-check"></i>10+ Content Pieces per Month</li>
                                                            <li><i className="fa-light fa-check"></i>Strategic Google Ads Campaigns</li>
                                                            <li><i className="fa-light fa-check"></i>Social Media Management (Up to 3 platforms)</li>
                                                            <li><i className="fa-light fa-check"></i>Priority Support</li>
                                                        </ul>
                                                    </div>
                                                    <div className="pricing-footer d__column-two">
                                                        <h5>$999 <span>/ Month</span></h5>
                                                        <Link href="/contact">Free Try <i className="fa-light fa-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6">
                            <div className="faq-three__content wow fadeInRight" data-wow-delay=".5s">
                                <h2 className="section-title__two-title mb-10">Our Business-Friendly Pricing Solutions.</h2>
                                <p>At ApexNucleus, we offer affordable, flexible pricing to fit businesses of all sizes. With custom packages, no hidden fees, and scalable options, you only pay for what you need. Let’s grow together!</p>
                                <img src="/assets/img/faq/faq-3-1.png" alt="faq img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* faq three end */}
        </>
    )
}

export default FaqThree;