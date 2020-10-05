import tweeterlogo from "./assets/tweeter.png";
import facebooklogo from "./assets/facebook.png";
import githublogo from "./assets/github.png";
import React from "react";
import "./Home.css";
import line from "../pages/assets/line.png";
// importing dummy dynamic data
// import data from "../dynamicData/data";
import { useState } from "react";

import Button from "@material-ui/core/Button";



const Home = () => {
  const [data, setData] = useState({
    firstname: "",
    secondname: "",
    email: "",
    phone: "",
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    //  without obj destructuring
    // const value = event.target.value;
    // const name = event.target.name;
    // after obj destructuring

    const { value, name } = event.target;

    setData((preValue) => {
      if (name === "firstnameinputbox") {
        return {
          firstname: value,
          secondname: preValue.secondname,

          email: preValue.email,
          phone: preValue.phone,
        };
      } else if (name === "secondnameinputbox") {
        return {
          firstname: preValue.firstname,
          secondname: value,
          email: preValue.email,
          phone: preValue.phone,
        };
      } else if (name === "emailinputbox") {
        return {
          firstname: preValue.firstname,
          secondname: preValue.secondname,
          email: value,
          phone: preValue.phone,
        };
      } else if (name === "numberinputbox") {
        return {
          firstname: preValue.firstname,
          secondname: preValue.secondname,
          email: preValue.email,
          phone: value,
        };
      }
    });
  };

  const onSubmits = (event) => {
    event.preventDefault();
  };


  return (
    <div className="buddy">
      <div className="maindiv">
        <h1>Welcome To Our Futsal Booking System</h1>
      </div>
      <div className="mapsection">
        <div className="mapbanner">
          Map&nbsp; View
          <img alt="nothing" src={line}></img>
        </div>
        <div className="mapbox">Map box</div>
      </div>

      {/* jhkujhkhk */}

      <div className="contactus">
        <div className="contacthead">
          <h1 className="title"> Contact Us</h1>
          <div className="contactFlexContainer">
            <div>
              {/* <h1>
                {data.firstname} &nbsp;
                {data.secondname} &nbsp;{data.email} &nbsp;{data.phone}
              </h1> */}
              <form onSubmit={onSubmits}>
                <label><strong>Name&nbsp;:&nbsp;&nbsp;&nbsp; </strong></label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="firstnameinputbox"
                  onChange={inputEvent}
                  value={data.firstname}
                ></input>

                <br />
                <label> <strong>Email&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; </strong></label>

                <input
                  type="email"
                  placeholder="Your Email"
                  name="emailinputbox"
                  onChange={inputEvent}
                  value={data.email}
                ></input>
                <br />
                <label className="queriesLabel"> <strong>Queries&nbsp;: </strong></label>

                <textarea
                  rows="4"
                  cols="30"
                  placeholder="Queries"
                  name="numberinputbox"
                  onChange={inputEvent}
                  value={data.phone}
                ></textarea>
                <br />

                <Button type="submit" variant="contained" color="secondary">
                  Submit
                </Button>
              </form>
            </div>

            <div className="contactUsLeftSection">
              <h3>Information</h3>
              <br />
               <strong>
               Our team has been trying the best they can to meet your expectations and requirements.
                You can contact us by submitting this form or through our social media platforms.
                If you have any queries, feel free to reach out to us. We will get back to you as soon as possible. Thank you! </strong>
                <div className="logoContainerSocial">
                  <img alt="nothing" src={facebooklogo} />
                  <img alt="nothing" src={githublogo} />
                  <img alt="nothing" src={tweeterlogo} />
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
