import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="container">
      <div className=" row justify-content-center mx-1">
        <div className="w-md-75 w-sm-100 about-div">
          <h4 className="fw-bold">
            This Site is Build With the following technologies
          </h4>
          <ul>
            <li>Library: React JS</li>
            <li>CSS Library: React Bootstrap</li>
            <li>CSS Library: Bootstrap</li>
            <li>Package: React Router</li>
            <li>Package: React Router Bootstrap</li>
            <li>Data API: Meal DB API</li>
          </ul>
        </div>
        <div className="dev-div">
          <h4 className="text-danger">Developer: Raj Narayan Acharjee</h4>
          <h5 className="text-primary">About Developer:</h5>
          <p>
            I am a professional Industrial Engineer. Currently I am doing a job
            as industrial engineering manager in a reputed manufacturing
            organization. I am very much interested in web-based technologies.
            For that reason, I started learning web development. I enrolled
            myself in a MERN stack web development course instructed by Jhankar
            Mahboob. He is an excellent trainer and motivator. My target is to
            build a web-based ERP system for production monitoring and for that
            reason I am learning the required languages.
          </p>
          <p>
            Send Email:
            <a href="mailto: rajib.ipe@gmail.com">rajib.ipe@gmail.com</a>
          </p>
        </div>
        <div className="my-skills">
          <h4>My Skill</h4>

          <div className="skills">
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React JS</p>
            <p>Node JS</p>
            <p>Express JS</p>
            <p>MongoDB</p>
            <p>Express JS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
