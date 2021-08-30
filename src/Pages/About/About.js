import React, { Component } from 'react';
import "./About.css";
import AOS from 'aos';

class About extends Component{

    componentDidMount() {
    
        AOS.init({
        });
    }

    render(){

        return(
            
            <div className="about">
            <header className="header-image ">
                <img  src="/images/header.jpg"></img>

            </header>
            <div className="about-title text-center my-5">
                <h2>ABOUT US</h2>
            </div>
            <div className="our-story my-5" data-aos-delay="50" data-aos-duration="1000" data-aos="zoom-in">
                <div className="container">
                    <div className="our-story-content">
                        <div className="row">
                            <div className="col-lg-6  col-12 our-story-details">
                                <h3>Our Story</h3>
                                <p className="pragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit.
                                Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula.


                                </p>
                            </div>

                            <div className="col-lg-6 col-12 my-5">
                                <div className="our-story-image text-center">
                                    <img src="/images/about2.jpg"></img>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="our-mission" data-aos-delay="50" data-aos-duration="1000" data-aos="zoom-in">
                <div className="container">
                    
                    <div className="row">
                        <div className="col-lg-6 col-12 my-5">
                            <div className="our-mission-image text-center">
                                <img src="/images/about3.jpg"></img>
                            </div>
                            </div>

                            <div className="col-lg-6 col-12 my-5">
                            <h3>Our Mission</h3>
                            <p className="pragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit.
                                Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula.


                                </p>
                            </div>

                    </div>
                </div>
            </div>

            <div className="our-team"  data-aos-delay="50" data-aos-duration="1000" data-aos="zoom-in" >
                <h3 className="text-center my-5">Our Team</h3>
                <h5 className="text-center mt-2 mb-3">Our Incredible Team Are Here For You</h5>
                <div className="container">
                    <div className="row my-5">
                        <div className="col-md-3 col-12 mb-4">
                            <div className="our-team-image">
                                <img src="/images/team1.jpg"></img>
                            </div>
                            <div className="our-team-name mt-3">
                                <h4>Maria Smith</h4>
                            </div>
                            <div className="our-team-job"><p className="pragraph">Fashion Design</p>
                            </div>
                        </div>

                        <div className="col-md-3 col-12 mb-4">
                            <div className="our-team-image">
                                <img src="/images/team2.png"></img>
                            </div>
                            <div className="our-team-name mt-3">
                                <h4>Ana Wise</h4>
                            </div>
                            <div className="our-team-job"><p className="pragraph">C.E.O</p>
                            </div>
                        </div>

                        <div className="col-md-3 col-12 mb-4">
                            <div className="our-team-image">
                                <img src="/images/team3.png"></img>
                            </div>
                            <div className="our-team-name mt-3">
                                <h4>Angla Robbins</h4>
                            </div>
                            <div className="our-team-job"><p className="pragraph">C.E.O</p>
                            </div>
                        </div>


                            <div className="col-md-3 col-12 mb-4">
                            <div className="our-team-image">
                                <img src="/images/team4.png"></img>
                            </div>
                            <div className="our-team-name mt-3">
                                <h4>Lucy Myers</h4>
                            </div>
                            <div className="our-team-job"><p className="pragraph">Delivery</p>
                            </div>
                        </div>
                    



                    </div>
                </div>
            </div>

            <div className="our-partners my-5"  data-aos-delay="50" data-aos-duration="1000" data-aos="zoom-in">
                <h3 className="text-center my-5">Our Partners</h3>
                <div className="container">
                    <div className="row ">
                    <div className="col-md-3 col-6 my-5">
                        <div className="partners-image">
                            <img src="/images/partner1.jpg"></img>

                        </div>
                    </div>

                    <div className="col-md-3 col-6 my-4">
                        <div className="partners-image">
                            <img src="/images/partner2.jpg"></img>

                        </div>
                    </div>

                    <div className="col-md-3 col-6 my-5">
                        <div className="partners-image">
                            <img src="/images/partner3.jpg"></img>

                        </div>
                    </div>

                    <div className="col-md-3 col-6 my-5">
                        <div className="partners-image">
                            <img src="/images/partner4.jpg"></img>

                        </div>
                    </div>

                    <div className="col-md-3 col-6 my-5">
                        <div className="partners-image">
                            <img src="/images/partner5.jpg"></img>

                        </div>
                    </div>

                    <div className="col-md-3 col-6 my-5">
                        <div className="partners-image">
                            <img src="/images/partner6.jpg"></img>

                        </div>
                    </div>

                    <div className="col-md-3 col-6 my-5">
                        <div className="partners-image">
                            <img src="/images/partner7.jpg"></img>

                        </div>
                    </div>

                    <div className="col-md-3 col-6 my-5">
                        <div className="partners-image">
                            <img src="/images/partner8.jpg"></img>

                        </div>
                    </div>

                </div>

            </div></div>
            </div>
        )
    }
}

export default About;