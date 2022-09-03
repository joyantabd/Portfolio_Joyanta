import React from "react";
import Card from "react-bootstrap/Card";
import LightSpeed from 'react-reveal/LightSpeed';

function ExperienceCard() {
  return (
    <Card className="quote-card-view">
          <Card.Body>
              <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify" }}>
                  <LightSpeed left>
                      <h3 className="animate-charcter">NAJJ Technologies Ltd.</h3><br/></LightSpeed>
                      <span className="purple">Duration: 01/01/2022 to On going </span><br />
                      I am working as a Software Engineer. I have developed many economic fisible software here
                      which are now live and using to make the business more easier.
                      </p>
              </blockquote><br />
              <blockquote className="blockquote mb-0">
              <p style={{ textAlign: "justify" }}>
              <LightSpeed left><h3 className="animate-charcter">LJB Group Ltd.</h3><br/>
                      <span className="purple">Duration: 01/06/2020 to 31/12/2022 </span><br /></LightSpeed>
                      I had worked as an IT Support Enginner in this company. Main responsibility was to develop and maintain a good
                      quality of comminucation between the IT related devices.
                      </p>
              </blockquote><br />
              <blockquote className="blockquote mb-0">
              <p style={{ textAlign: "justify" }}>
              <LightSpeed left> <h3 className="animate-charcter">GCTL infosys Ltd.</h3><br/></LightSpeed>
                      <span className="purple">Duration: 31/08/2019 to 01/01/2020 </span><br />
                      I was an intern Software Engineer here.I have develop and maintained php language related applications here.
                      I have got a good idea about IT farm here and tried to develop me more to be stable 
                      in this field.
                      </p>
              </blockquote>
              
              <br />
              


      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
