import React, { useState } from "react";
import "./style/App.css";
import GenerateCv from "./components/GenerateCv";
import Personal from "./components/Personal";

// https://www.youtube.com/watch?v=zpUMRsAO6-Y

const App = () => {
  const personalValues = {
    firstName: "",
    secondName: "",
    title: "",
    photo: "",
    address: "",
    number: "",
    email: "",
    description: "",
  };

  const [personalInput, setPersonalInput] = useState(personalValues);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPersonalInput({
      ...personalInput,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(personalInput);
  };

  return (
    <div>
      <h1>CV CREATOR</h1>
      <div className="container">
        <Personal
          input={personalInput}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <GenerateCv input={personalInput} />
      </div>
    </div>
  );
};

export default App;
