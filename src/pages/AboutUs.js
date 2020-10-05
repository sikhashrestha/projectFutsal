import React from "react";
import "./AboutUs.css";
export default function AboutUs() {
  return (
    <div>
      <div className="lineContainer"></div>
      <div style={{ marginTop: "100px" }}></div>
      <p className="firstP">
        {" "}
        <span  className='aboutheading' id="heading">
          Our Story and Services <br />
        </span>
        <div className="paragraphOnlyContainer">
          <span className="paragraphOnly">
            We've started as an online futsal booking system recently and we've
            been on an epic ride ever since. From our beginning as a small scale
            company idea to launching the actual website and app, we've tried to
            stay true to our core beliefs and to deliver an exceptional
            experience for our community and football lovers and we hope that you'll continue to be a part of our incredible journey.{" "}
          </span>
        </div>
      </p>

      <div className="aboutContainerRowOne">
        <div className="oneCol">
          <span id="heading"> Personalized Info</span> <br />
          <p className="secondP">
            After looking at the huge possibility of the online booking
            facility, we have come up with the idea of giving our customers a
            personalized profile with all the bookings made and transation done
            which makes this project extremely effective.
          </p>
          <div className="imageOne"></div>
          <div className="horizontalLine"></div>
        </div>
        <div className="twoCol">.</div>
      </div>

      <div className="aboutContainerRowTwo">
        <div className="oneCol">
          .<div className="imageTwo"></div>
        </div>
        <div className="twoCol">
          <p className="thirdP">
            {" "}
            <span id="heading">Time Saving And Convinient </span>
            <br />
            Now, no one needs to worry about going to the actual venue to book
            for futsal and morever, you don't even need to worry about
            unavailability because we give our customers to choose the nearest
            venue and also give the full info on availability.
          </p>
        </div>
      </div>
      <div className="aboutContainerRowThree">
        <div className="oneCol">
          <span id="heading"> Map Navigation </span>
          <br />
          <p className="fourthP">
            {" "}
            Here, we have the actual map of entire kathmandu valley and all the
            venue locations are pinned so that our soccer lovers can choose from
            the best available venues whenever and wherever they want. Isn't
            that exciting?{" "}
          </p>

          <div className="imageThree"></div>
        </div>
        <div className="twoCol">.</div>
      </div>

      <div className="aboutContainerRowFour">
        <div className="oneCol">
          .<div className="imageFour"></div>
        </div>
        <div className="twoCol">
          <p className="fifthP">
            {" "}
            <span id="heading"> Easy Booking and Payment</span>
            <br />
            We have been able to give you the booking facilities on a tap of
            your fingers and we will be working on the online payment facilities
            too.{" "}
          </p>{" "}
        </div>
      </div>

      <div className="titleContainer"><strong>OUR AMAZING TEAM</strong></div>
      <div className="amazingSmallTitle">
      Thank you for your hard work and enthusiasm.
      </div>
      <div className="flexContainerAmazingTeam">
        <div className="cardOne">
          <div className="circleForAmazingTeam firstphoto" ></div>
          <div className='names'><strong>Sikha &nbsp; Shah </strong></div>
        </div>
        <div className="cardTwo">
          <div className="circleForAmazingTeam secphto"></div>
          <div className='names'>  <strong>Rezina &nbsp; Maharjan</strong></div>
        </div>
        <div className="cardThree">
          <div className="circleForAmazingTeam thirdphoto"></div>
          <div className='names'>  <strong>Supriya &nbsp; Pradhan </strong></div>
        </div>
        <div className="cardThree">
          <div className="circleForAmazingTeam fourthphoto"></div>
          <div className='names'>  <strong>Princy &nbsp; Paneru  </strong> </div>
        </div>
      </div>
    <div className='lastParagraph'><div className="textLast">We owe a huge
            thanks to our wonderful team for working efficiently to make this
            happen.
            The incredible effort you put into this and the support you have given each other throughout the project is highly appreciated!</div></div>
    </div>
  );
}
