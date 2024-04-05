import React from "react";
import '../components/faq.css';

const Faq = () => {
    return (
        <section className="faq-section bg-pink-light">
            <div className="faq-container mx-auto">
                <h2 className="faq-h2 text-center text-uppercase mb-4">F.A.Q</h2>
                <div className="faq-accordions">
                    <div className="faq-accordion">
                        <label className="faq-accordion__title" htmlFor="radio_1">
                            <input type="radio" name="radio" id="radio_1" checked/> 
                            How do I reset my password if I forget it?
                        </label>
                        <div className="faq-accordion__text">
                            <p>
                                <ol>
                                    <li>Click on the "Forgot Password" link on the login page.</li>
                                    <li>Enter your email address and click "Submit".</li>
                                    <li>Check your email for a password reset link.</li>
                                    <li>Click on the link and follow the instructions to reset your password.</li>
                                </ol>
                            </p>
                        </div>
                    </div>
                    <div className="faq-accordion">
                        <label className="faq-accordion__title" htmlFor="radio_2">
                            <input type="radio" name="radio" id="radio_2"/> 
                            How do I submit my assignment?  
                        </label>
                      <div className="faq-accordion__text">
                            <p>
                                Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Laboriosam corrupti, ipsa voluptatum, recusandae consequuntur, tempore, ut perferendis earum repellat distinctio placeat enim. Eum exercitationem fuga beatae, officiis quam, commodi sed! Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Laboriosam corrupti, ipsa voluptatum, recusandae consequuntur, tempore, ut perferendis earum repellat distinctio placeat enim. Eum exercitationem fuga beatae, officiis quam, commodi sed!
                            </p>
                        </div>
                    </div>
                    <div className="faq-accordion">
                        <label className="faq-accordion__title" htmlFor="radio_3">
                            <input type="radio" name="radio" id="radio_3"/> 
                            What file formats are accepted for assignment submission?                      
                        </label>
                        <div className="faq-accordion__text">
                            <p>
                                Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Laboriosam corrupti, ipsa voluptatum, recusandae consequuntur, tempore, ut perferendis earum repellat distinctio placeat enim. Eum exercitationem fuga beatae, officiis quam, commodi sed!
                            </p>
                        </div>
                    </div>

                    <div className="faq-accordion">
                        <label className="faq-accordion__title" htmlFor="radio_3">
                            <input type="radio" name="radio" id="radio_3"/> 
                            How will I know if my assignment has been successfully submitted?                        
                        </label>
                        <div className="faq-accordion__text">
                            <p>
                                Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Laboriosam corrupti, ipsa voluptatum, recusandae consequuntur, tempore, ut perferendis earum repellat distinctio placeat enim. Eum exercitationem fuga beatae, officiis quam, commodi sed!
                            </p>
                        </div>
                    </div>


                    <div className="faq-accordion">
                        <label className="faq-accordion__title" htmlFor="radio_3">
                            <input type="radio" name="radio" id="radio_3"/> 
                            Question 5?
                        </label>
                        <div className="faq-accordion__text">
                            <p>
                                Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Laboriosam corrupti, ipsa voluptatum, recusandae consequuntur, tempore, ut perferendis earum repellat distinctio placeat enim. Eum exercitationem fuga beatae, officiis quam, commodi sed!
                            </p>
                        </div>
                    </div>

                    <div className="faq-accordion">
                        <label className="faq-accordion__title" htmlFor="radio_3">
                            <input type="radio" name="radio" id="radio_3"/> 
                            Question 6?
                        </label>
                        <div className="faq-accordion__text">
                            <p>
                                Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Laboriosam corrupti, ipsa voluptatum, recusandae consequuntur, tempore, ut perferendis earum repellat distinctio placeat enim. Eum exercitationem fuga beatae, officiis quam, commodi sed!
                            </p>
                        </div>
                    </div>


                    <div className="faq-accordion">
                        <label className="faq-accordion__title" htmlFor="radio_3">
                            <input type="radio" name="radio" id="radio_3"/> 
                            Question 7?
                        </label>
                        <div className="faq-accordion__text">
                            <p>
                                Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Laboriosam corrupti, ipsa voluptatum, recusandae consequuntur, tempore, ut perferendis earum repellat distinctio placeat enim. Eum exercitationem fuga beatae, officiis quam, commodi sed!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};  

export default Faq;
