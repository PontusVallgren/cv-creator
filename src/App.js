import React, { useState, useEffect } from "react";
import "./style/App.css";
import GenerateCv from "./components/GenerateCv";
import Personal from "./components/Personal";
import Experience from "./components/Experience";
import Education from "./components/Education";

// https://www.youtube.com/watch?v=zpUMRsAO6-Y

const App = () => {
  const values = {
    firstName: "",
    secondName: "",
    title: "",
    photo: "",
    address: "",
    number: "",
    email: "",
    description: "",
    position: "",
    company: "",
    experienceCity: "",
    experienceFrom: "",
    experienceTo: "",
    university: "",
    educationCity: "",
    degree: "",
    subject: "",
    educationFrom: "",
    educationTo: "",
  };

  const [input, setInput] = useState(values);
  const [storage, setStorage] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setStorage([
      ...storage,
      {
        position: input.position,
        company: input.company,
        experienceCity: input.experienceCity,
        experienceFrom: input.experienceFrom,
        experienceTo: input.experienceTo,

        university: input.university,
        educationCity: input.educationCity,
        degree: input.degree,
        subject: input.subject,
        educationTo: input.educationTo,
        educationFrom: input.educationFrom,
      },
    ]);
    setInput(values);
  };

  return (
    <div>
      <h1>CV CREATOR</h1>
      <div className="container">
        <Personal
          input={input}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <Experience
          input={input}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <Education
          input={input}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
      <GenerateCv input={input} info={storage} />
    </div>
  );
};

export default App;
