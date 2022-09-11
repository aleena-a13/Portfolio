import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am a <span className="purple"> Junior Web Developer </span>
            from <span className="purple"> the UK.</span>
            <br />
            
            <br /> I am a proficient and creative developer with strong experience in website management and development. <br />
            
            <br /> Efficient in all aspects of web design and development including WordPress sites with experience in HTML, CSS, Bootstrap, Python, JavaScript, and PHP. Skilled in creating engaging and interactive websites.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Socialising with friends & family
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
