import React from "react";

const Education = (props) => {
  const input = props.input;
  const handleChange = props.onChange;
  const handleSubmit = props.onSubmit;

  return (
    <div className="content">
      <h2 className="form-title">Education</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          className="form-item"
          name="university"
          value={input.university}
          onChange={handleChange}
          type="text"
          placeholder="University"
        />
        <input
          className="form-item"
          name="educationCity"
          value={input.educationCity}
          onChange={handleChange}
          type="text"
          placeholder="City"
        />
        <input
          className="form-item"
          name="degree"
          value={input.degree}
          onChange={handleChange}
          type="text"
          placeholder="Degree"
        />
        <input
          className="form-item"
          name="subject"
          value={input.subject}
          onChange={handleChange}
          type="text"
          placeholder="Subject"
        />
        <input
          className="form-item"
          name="educationFrom"
          value={input.educationFrom}
          onChange={handleChange}
          type="text"
          placeholder="From"
        />
        <input
          className="form-item"
          name="educationTo"
          value={input.educationTo}
          onChange={handleChange}
          type="text"
          placeholder="To"
        />
        <button onSubmit={handleSubmit}>Add</button>
        <button>Delete</button>
      </form>
    </div>
  );
};

export default Education;
