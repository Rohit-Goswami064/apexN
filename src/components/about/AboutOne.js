import React from 'react';
import Link from 'next/link';

const AboutOne = () => {
    return (
        <>
            {/* about one start */}
            <div className="about-three">
                <div className="container custom-container-1">
                    <div className="row g-0">
                        <div className="about-three__wrapper">
                            <div className="col-xxl-12">
                                <div className="tabs-one">
                                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="pills-search-tab" data-bs-toggle="pill" data-bs-target="#pills-search" type="button" role="tab" aria-controls="pills-search" aria-selected="true">
                                                <img src="/assets/img/icon/globe.svg" className="no-active" alt="icon" />
                                                <img src="/assets/img/icon/globe-white.svg" className="active-tab-icon" alt="icon" />
                                                <span>web design</span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-analytics-tab" data-bs-toggle="pill" data-bs-target="#pills-analytics" type="button" role="tab" aria-controls="pills-analytics" aria-selected="false">
                                                <img src="/assets/img/icon/list.svg" className="no-active" alt="icon" />
                                                <img src="/assets/img/icon/list-white.svg" className="active-tab-icon" alt="icon" />
                                                <span>SEO optimization</span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-social-tab" data-bs-toggle="pill" data-bs-target="#pills-social" type="button" role="tab" aria-controls="pills-social" aria-selected="false">
                                                <img src="/assets/img/icon/like-tag.svg" className="no-active" alt="icon" />
                                                <img src="/assets/img/icon/like-tag-white.svg" className="active-tab-icon" alt="icon" />
                                                <span>Social Media</span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-marketing-tab" data-bs-toggle="pill" data-bs-target="#pills-marketing" type="button" role="tab" aria-controls="pills-marketing" aria-selected="false">
                                                <img src="/assets/img/icon/pen.svg" className="no-active" alt="icon" />
                                                <img src="/assets/img/icon/pen-white.svg" className="active-tab-icon" alt="icon" />
                                                <span>Content Creation</span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-management-tab" data-bs-toggle="pill" data-bs-target="#pills-management" type="button" role="tab" aria-controls="pills-management" aria-selected="false">
                                                <img src="/assets/img/icon/trend-up.svg" className="no-active" alt="icon" />
                                                <img src="/assets/img/icon/trend-up-white.svg" className="active-tab-icon" alt="icon" />
                                                <span>graphic design</span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-optimization-tab" data-bs-toggle="pill" data-bs-target="#pills-optimization" type="button" role="tab" aria-controls="pills-optimization" aria-selected="false">
                                                <img src="/assets/img/icon/keyboard-open.svg" className="no-active" alt="icon" />
                                                <img src="/assets/img/icon/keyboard-open-white.svg" className="active-tab-icon" alt="icon" />
                                                <span>AI-Tools</span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-digital-tab" data-bs-toggle="pill" data-bs-target="#pills-digital" type="button" role="tab" aria-controls="pills-digital" aria-selected="false">
                                                <img src="/assets/img/icon/status-up.svg" className="no-active" alt="icon" />
                                                <img src="/assets/img/icon/status-up-white.svg" className="active-tab-icon" alt="icon" />
                                                <span>Google Ads</span>
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-search" role="tabpanel" aria-labelledby="pills-search-tab" tabindex="0">
                                            <div className="about-three__single">
                                                <div className="about-three__animation-1">
                                                    <img src="/assets/img/shape/12.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-2">
                                                    <img src="/assets/img/shape/14.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-3">
                                                    <img src="/assets/img/shape/11.svg" alt="shape icon" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-sm-12">
                                                        <div className="about-three__single-content">
                                                            <h2>Seamless experiences on any device, backed by intuitive admin panels.</h2>
                                                            <div className="list">
                                                                <ul className="list-unstyled">
                                                                    <li>Mobile-friendly and fully responsive layouts</li>
                                                                    <li>Custom UI/UX designs for unique brand identity</li>
                                                                    <li>Fast-loading, SEO-optimized pages</li>
                                                                    <li>Integrated admin panels for easy updates</li>
                                                                </ul>
                                                            </div>
                                                            <Link href="/case-study" className="about-three-btn rr-btn-style-1 mt-45">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-sm-12 text-end text-md-center">
                                                        <div className="about-three__single-img">
                                                            <img src="/assets/img/about/about-3-1.png" alt="about img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-analytics" role="tabpanel" aria-labelledby="pills-analytics-tab" tabindex="0">
                                            <div className="about-three__single">
                                                <div className="about-three__animation-1">
                                                    <img src="/assets/img/shape/12.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-2">
                                                    <img src="/assets/img/shape/14.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-3">
                                                    <img src="/assets/img/shape/11.svg" alt="shape icon" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-sm-12">
                                                        <div className="about-three__single-content">
                                                            <h2>Boost your online visibility and rank higher with strategic SEO.</h2>
                                                            <div className="list">
                                                                <ul className="list-unstyled">
                                                                    <li>On-page and off-page SEO optimization</li>
                                                                    <li>Keyword research and competitive analysis</li>
                                                                    <li>Technical SEO audit and fixes</li>
                                                                    <li>Local SEO for regional targeting</li>
                                                                </ul>
                                                            </div>
                                                            <Link href="/case-study" className="about-three-btn rr-btn-style-1 mt-45">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-sm-12 text-end text-md-center">
                                                        <div className="about-three__single-img">
                                                            <img src="/assets/img/about/about-3-1.png" alt="about img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-social" role="tabpanel" aria-labelledby="pills-social-tab" tabindex="0">
                                            <div className="about-three__single">
                                                <div className="about-three__animation-1">
                                                    <img src="/assets/img/shape/12.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-2">
                                                    <img src="/assets/img/shape/14.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-3">
                                                    <img src="/assets/img/shape/11.svg" alt="shape icon" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-sm-12">
                                                        <div className="about-three__single-content">
                                                            <h2>Create impactful connections and grow your brand across platforms.</h2>
                                                            <div className="list">
                                                                <ul className="list-unstyled">
                                                                    <li>Strategy creation and content planning</li>
                                                                    <li> Daily/weekly posting and engagement</li>
                                                                    <li>Campaigns for brand awareness and lead generation</li>
                                                                    <li>Analytics tracking and growth optimization</li>
                                                                </ul>
                                                            </div>
                                                            <Link href="/case-study" className="about-three-btn rr-btn-style-1 mt-45">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-sm-12 text-end text-md-center">
                                                        <div className="about-three__single-img">
                                                            <img src="/assets/img/about/about-3-1.png" alt="about img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-marketing" role="tabpanel" aria-labelledby="pills-marketing-tab" tabindex="0">
                                            <div className="about-three__single">
                                                <div className="about-three__animation-1">
                                                    <img src="/assets/img/shape/12.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-2">
                                                    <img src="/assets/img/shape/14.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-3">
                                                    <img src="/assets/img/shape/11.svg" alt="shape icon" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-sm-12">
                                                        <div className="about-three__single-content">
                                                            <h2>Engaging, SEO-friendly content that drives traffic and builds trust.</h2>
                                                            <div className="list">
                                                                <ul className="list-unstyled">
                                                                    <li>Blogs, articles, and SEO-friendly web copy</li>
                                                                    <li>Scriptwriting for videos and ads</li>
                                                                    <li>Email marketing and newsletters</li>
                                                                    <li>Brand storytelling and tone alignment</li>
                                                                </ul>
                                                            </div>
                                                            <Link href="/case-study" className="about-three-btn rr-btn-style-1 mt-45">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-sm-12 text-end text-md-center">
                                                        <div className="about-three__single-img">
                                                            <img src="/assets/img/about/about-3-1.png" alt="about img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-management" role="tabpanel" aria-labelledby="pills-management-tab" tabindex="0">
                                            <div className="about-three__single">
                                                <div className="about-three__animation-1">
                                                    <img src="/assets/img/shape/12.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-2">
                                                    <img src="/assets/img/shape/14.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-3">
                                                    <img src="/assets/img/shape/11.svg" alt="shape icon" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-sm-12">
                                                        <div className="about-three__single-content">
                                                            <h2>Stand out with creative, on-brand visuals for web and print.</h2>
                                                            <div className="list">
                                                                <ul className="list-unstyled">
                                                                    <li>Logo, banners, and brand identity kits</li>
                                                                    <li>Marketing materials: flyers, brochures, posters</li>
                                                                    <li>Web and mobile UI mockups</li>
                                                                    <li>Social media graphics and ad creatives</li>
                                                                </ul>
                                                            </div>
                                                            <Link href="/case-study" className="about-three-btn rr-btn-style-1 mt-45">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-sm-12 text-end text-md-center">
                                                        <div className="about-three__single-img">
                                                            <img src="/assets/img/about/about-3-1.png" alt="about img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-optimization" role="tabpanel" aria-labelledby="pills-optimization-tab" tabindex="0">
                                            <div className="about-three__single">
                                                <div className="about-three__animation-1">
                                                    <img src="/assets/img/shape/12.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-2">
                                                    <img src="/assets/img/shape/14.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-3">
                                                    <img src="/assets/img/shape/11.svg" alt="shape icon" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-sm-12">
                                                        <div className="about-three__single-content">
                                                            <h2>Expert-Crafted SEO Campaigns Propel Your Business Forward.</h2>
                                                            <div className="list">
                                                                <ul className="list-unstyled">
                                                                    <li>Custom chatbot and automation tools</li>
                                                                    <li>AI-based analytics and business intelligence</li>
                                                                    <li>Predictive features to enhance user experience</li>
                                                                    <li>Machine learning integration for smart systems</li>
                                                                </ul>
                                                            </div>
                                                            <Link href="/case-study" className="about-three-btn rr-btn-style-1 mt-45">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-sm-12 text-end text-md-center">
                                                        <div className="about-three__single-img">
                                                            <img src="/assets/img/about/about-3-1.png" alt="about img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-digital" role="tabpanel" aria-labelledby="pills-digital-tab" tabindex="0">
                                            <div className="about-three__single">
                                                <div className="about-three__animation-1">
                                                    <img src="/assets/img/shape/12.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-2">
                                                    <img src="/assets/img/shape/14.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-3">
                                                    <img src="/assets/img/shape/11.svg" alt="shape icon" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-sm-12">
                                                        <div className="about-three__single-content">
                                                            <h2>Convert clicks to customers with precision-targeted advertising.</h2>
                                                            <div className="list">
                                                                <ul className="list-unstyled">
                                                                <li>Keyword-focused ad campaigns</li>
                                                                    <li>High-converting landing pages</li>
                                                                    <li>A/B testing and performance tracking</li>
                                                                    <li>Budget optimization for max ROI</li>
                                                                </ul>
                                                            </div>
                                                            <Link href="/case-study" className="about-three-btn rr-btn-style-1 mt-45">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-sm-12 text-end text-md-center">
                                                        <div className="about-three__single-img">
                                                            <img src="/assets/img/about/about-3-1.png" alt="about img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about one end */}
        </>
    )
}

export default AboutOne;