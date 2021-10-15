import React from "react";
import "../style/Personal.css";

const Personal = (props) => {
  const input = props.input;
  const handleChange = props.onChange;
  const handleSubmit = props.onSubmit;

  return (
    <div className="content">
      <h2 className="form-title">Personal Information</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          className="form-item"
          name="firstName"
          value={input.firstName}
          onChange={handleChange}
          type="text"
          placeholder="First Name"
        />
        <input
          className="form-item"
          name="secondName"
          value={input.secondName}
          onChange={handleChange}
          type="text"
          placeholder="Last Name"
        />
        <input
          className="form-item"
          name="title"
          value={input.title}
          onChange={handleChange}
          type="text"
          placeholder="Title"
        />
        <input
          className="form-item"
          name="photo"
          value={input.photo}
          onChange={handleChange}
          type="file"
          placeholder="---Upload Photo----"
        />
        <input
          className="form-item"
          name="address"
          value={input.address}
          onChange={handleChange}
          type="text"
          placeholder="Address"
        />
        <input
          className="form-item"
          name="number"
          value={input.number}
          onChange={handleChange}
          type="text"
          placeholder="Phone Number"
        />
        <input
          className="form-item"
          name="email"
          value={input.email}
          onChange={handleChange}
          type="email"
          placeholder="Email"
        />
        <textarea
          className="form-item"
          name="description"
          value={input.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Personal;
