import React from "react";
import "../style/GenerateCv.css";

const GenerateCv = (props) => {
  const input = props.input;

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
    </div>
  );
};

export default GenerateCv;
