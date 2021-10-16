import React from "react";

const Experience = (props) => {
  const input = props.input;
  const handleChange = props.onChange;
  const handleSubmit = props.onSubmit;

  return (
    <div className="content">
      <h2 className="form-title">Experience</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          className="form-item"
          name="position"
          value={input.position}
          onChange={handleChange}
          type="text"
          placeholder="Position"
        />
        <input
          className="form-item"
          name="company"
          value={input.company}
          onChange={handleChange}
          type="text"
          placeholder="Company"
        />
        <input
          className="form-item"
          name="experienceCity"
          value={input.experienceCity}
          onChange={handleChange}
          type="text"
          placeholder="City"
        />
        <input
          className="form-item"
          name="experienceFrom"
          value={input.experienceFrom}
          onChange={handleChange}
          type="text"
          placeholder="From"
        />
        <input
          className="form-item"
          name="experienceTo"
          value={input.experienceTo}
          onChange={handleChange}
          type="text"
          placeholder="To"
        />
        <button className="expBtn" onSubmit={handleSubmit}>
          Add
        </button>
        <button>Delete</button>
      </form>
    </div>
  );
};

export default Experience;
