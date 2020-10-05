import signupIcon from "./assets/signupIcon.png";
import React from "react";
import "./SignUp.css";
import illustrator from "./assets/illustrator.png";
import backgroundSignUpImage from "./assets/signUpBackground.jpg";
import { useState } from "react";

export default function SignUp() {
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
    <div className="signupContainerMain">
      <div className="forMakingBoxAtCenter">
        <div className="signBox">
          <img alt="nothing" src={illustrator} ></img>

          <div className='formContainer'>
            {/* <h1>
        hello {data.firstname}	&nbsp;
        {data.secondname}	&nbsp;{data.email} &nbsp;{data.phone}
      </h1> */}
            <legend><div><strong>Sign&nbsp;&nbsp; Up</strong></div>
            <form  onSubmit={onSubmits}>
              <input
           
                type="text"
                placeholder="UserName"
                name="firstnameinputbox"
                onChange={inputEvent}
                value={data.firstname}
              ></input>

              <input

                type="email"
                placeholder="Email"
                name="emailinputbox"
                onChange={inputEvent}
                value={data.email}
              ></input>

              <input

                type="password"
                placeholder="password"
                name="numberinputbox"
                onChange={inputEvent}
                value={data.phone}
              ></input>

              <button className='submitBtnCls' type="submit"><img alt="nothing" className='signUpIconCls' src={signupIcon}/>Create Account</button>
            </form>
          </legend>
          
          </div>
        <div className='policy'>By signing up, I agree to the Privacy Policy and Terms of service.
</div>
        <div className='login'>Have an account?   <a rel="noopener noreferrer"  className='colorlog' href='http://localhost:3000/' target='_blank'>Log In  </a> </div>
        </div>
      </div>
      <img alt="nothing" src={backgroundSignUpImage} className="bgimgsignup" />
    </div>
  );
}
