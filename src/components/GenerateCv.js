import React from "react";
import "../style/GenerateCv.css";

const GenerateCv = (props) => {
  const input = props.input;
  const dataExp = props.dataExp;
  const dataEdu = props.dataEdu;

  return (
    <div className="cv-container">
      <div className="title-container">
        <h1>
          {input.firstName} {input.secondName}
        </h1>
        <p className="title">{input.title}</p>
      </div>
      <div className="personal-details">
        <h3 className="pd-title">Personal Details</h3>
        <p className="pd-categories">Address</p>
        <p>{input.address}</p>
        <p className="pd-categories">Phone Number</p>
        <p>{input.number}</p>
        <p className="pd-categories">Email</p>
        <p>{input.email}</p>
      </div>
      <div className="exp-container">
        <h3 className="exp-title">Experience</h3>
        {dataExp.map((item) => (
          <div className="exp-dates-ctn">
            <p className="exp-dates">
              {item.experienceFrom} - {item.experienceTo}
            </p>
            <div className="exp-position-ctn">
              <p className="exp-position">{item.position}</p>
            </div>
            <div className="exp-comp-city-ctn">
              <p className="exp-company">{item.company}</p>
              <p className="exp-city">{item.experienceCity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="edu-container">
        <h3 className="edu-title">Education</h3>
        {dataEdu.map((item) => (
          <div className="edu-dates-ctn">
            <p className="edu-dates">
              {item.educationFrom} - {item.educationTo}
            </p>
            <div className="edu-info-ctn">
              <p className="edu-uni-city">
                {item.university}, {item.educationCity}
              </p>
              <p className="edu-degree">Degree: {item.degree}</p>
              <p className="edu-subject">Subject: {item.subject}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenerateCv;
