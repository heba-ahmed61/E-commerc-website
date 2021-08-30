import React, { Component } from 'react';
import { useForm } from 'react-hook-form';
import "./Contact.css";


const Contact = ()=>{

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger
    } = useForm();

    const OnSubmit = (data) =>{
    reset();
}



    
    





    return(

        

        
        <div className="contant">
            <header>
                <div className="contant-header-image">
                    <img src="/images/header.jpg"></img>
                    <div className="overlay"></div>
                </div>
                </header>

                <h2 className="text-center contact-title mt-5"  > Contact Us</h2>
                <div className="container">
                    <div className="contact-map">
                    <iframe className="my-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4361778.677280515!2d-87.17971672746656!3d42.826135843850025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL%2C%20USA!5e0!3m2!1sen!2seg!4v1628157340560!5m2!1sen!2seg"  allowfullscreen="" loading="lazy"></iframe>                    



                    </div>
                </div>

                <div className="contact-form">
                    <div className="container">
                    <div className="row my-5">
                    <div className="col-md-8 col-12">
                        <form onSubmit={ handleSubmit(OnSubmit)}>                                
                        <h3>Get in Touch</h3>
                        

                                <div className="name-input my-4">
                                    <input type="text" placeholder="Enter Name" 
                                    {...register("name",{required:"Name Is Required"})}


                                        onKeyUp={()=>{
                                        trigger("name")
                                        }}
                                    
                                    />
                                    {errors.name &&
                                    <div className="error-message">
                                        
                                    <small className="text-danger">{errors.name.message}</small>
                                    </div>}

                                </div>

            

                                <div className="input-email mb-4">
                                    <input type="email" placeholder="Enter Email" {...register("email",{required:"Email Is Required",

                                        pattern:{

                                                value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message:"Invalid email address"
                                        }
                                
                                })}
                                onKeyUp={()=>{
                                    trigger("email")
                                }}
                                />
                                    {errors.email &&
                                    <div className="error-message">
                                    <small className="text-danger">{errors.email.message}</small>
                                    </div>
                                    }

                                    

                                </div>

                                <div className="text-area">
                                    <textarea placeholder="Enter Message"rows="7"  {...register("message",{required:"Message Is Required"})}onKeyUp={()=>{
                                    trigger("message")
                                }} />

                                    
                                    {errors.message && 
                                    <div className="error-message">
                                    <small className="text-danger">{errors.message.message}</small>
                                    </div> 
                                    }

                                    

                                </div>
                                <div className="send-btn mt-4">
                                    <button type="submit">SEND</button>
                                </div>
                                
                                </form>
                                </div>



                    

                        <div className="col-md-4 col-12 mt-5">

                            <div className="content-info">
                                <div className="content-info-icon">
                                <i class="fas fa-home"></i>

                                </div>
                                <div className="content-info-details">
                                    <p >Buttonwood, Chicago.</p>
                                    < p className="details-pragraph"> Rosemead, CA 91770</p>
                                </div>
                            </div>


                            <div className="content-info my-3">
                                <div className="content-info-icon">
                                <i class="fas fa-phone-alt"></i> 
                                </div>
                                <div className="content-info-details">
                                    <p >+1 253 565 2365</p>
                                    < p className="details-pragraph"> Mon to Fri 9am to 6pm</p>
                                </div>
                            </div> 

                            <div className="content-info ">
                                <div className="content-info-icon">
                                <i class="far fa-envelope"></i>
                                </div>
                                <div className="content-info-details">
                                    <p >support@colorlib.com</p>
                                    < p className="details-pragraph"> Send us your query anytime!</p>
                                </div>
                            </div> 



                        </div>

                    </div>

                    </div>
                    </div>


                
            </div>
            
        
                    

                
        
    
    )
}








export default Contact;