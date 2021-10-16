import React, { useState } from "react";
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
  const [storageExp, setStorageExp] = useState([]);
  const [storageEdu, setStorageEdu] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.children[5].className === "expBtn") {
      setStorageExp([
        ...storageExp,
        {
          position: input.position,
          company: input.company,
          experienceCity: input.experienceCity,
          experienceFrom: input.experienceFrom,
          experienceTo: input.experienceTo,
        },
      ]);
    } else if (e.target.children[6].className === "eduBtn") {
      setStorageEdu([
        ...storageEdu,
        {
          university: input.university,
          educationCity: input.educationCity,
          degree: input.degree,
          subject: input.subject,
          educationTo: input.educationTo,
          educationFrom: input.educationFrom,
        },
      ]);
    }
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
      <GenerateCv input={input} dataExp={storageExp} dataEdu={storageEdu} />
    </div>
  );
};

export default App;

/* const handleSubmit = (e) => {
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
}; */
