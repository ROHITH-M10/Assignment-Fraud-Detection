import React from 'react';
import '../components/about.css';
import rohith from "../assets/rohith.jpg";
import ajay from "../assets/ajay.jpg";
import advaith from "../assets/advaith.jpg";


const Team = () => {
    return (
        <section>
            <span>Meet Our</span>
            <h2>Team</h2>
            <p>Our diverse team, comprising UX designers, product designers, and web developers, collaborates passionately to deliver exceptional results. With a shared commitment to excellence, we strive to surpass expectations and innovate at every step.</p>
            <span className="bg-watermark">Team</span>
            <div className="cards">
                <div className="card">
                    <img src={advaith} alt="Franklin Carlson" />
                    <div className="card-content">
                        <h3>Advaith Shankar S S</h3>
                        <p>Product Owner</p>

                        <ul>
                        <li><h3>Contact</h3></li>
                            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div className="card">
                    <img src={rohith} alt="Franklin Carlson" />
                    <div className="card-content">
                        <h3>Rohith M</h3>
                        <p>Scrum Master</p>
                        <ul>
                        <li><h3>Contact</h3></li>
                            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div className="card">
                    <img src={ajay} alt="Ajayraj M" />
                    <div className="card-content">
                        <h3>Ajayrahj M</h3>
                        <p>Developerr</p>
                        <ul>
                        <li><h3>Contact</h3></li>
                            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
                
            </div>




            <div class="contact-container">  
  <form id="contact" action="" method="post">
  <h3>Report to us</h3>
<h4>Contact us today, and get a reply within 24 hours!</h4>


    <fieldset>
      <input placeholder="Your name" type="text" tabindex="1" required autofocus/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabindex="2" required/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number" type="tel" tabindex="3" required/>
    </fieldset>
    <fieldset>
    <textarea placeholder="Please provide a detailed explanation of your issue..." tabindex="5" required></textarea>

    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
</div>



        </section>
    );
}

export default Team;
