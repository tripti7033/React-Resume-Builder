import React from "react";

const Dashboard = () => {

  return (
    <div className="form_container">
      <div className="p_form_container">
        <div>
          <h1>Personal Details</h1>
        </div>

        <div className="resume_form">
          <label>name</label>
          <input type="text" placeholder="Name" />
        </div>
        <div className="resume_form">
          <label>email</label>
          <input type="Email address" placeholder="Name" />
        </div>
        <div className="resume_form">
          <label>Phone number</label>
          <input type="number" placeholder="Name" />
        </div>
        <div className="resume_form">
          <label>Address</label>
          <input type="text" placeholder="Name" />
        </div>
        <div className="resume_form">
          <label>Pin code</label>
          <input type="number" placeholder="" />
        </div>
        <div className="resume_form">
          <label>City</label>
          <input type="text" placeholder="City" />
        </div>
        <div className="resume_form">
          <label>Date of Birth</label>
          <input type="date" placeholder="dob" />
        </div>
        <div className="resume_form">
          <label>Gender</label>
          <input type="text" placeholder="" />
        </div>
        <div className="resume_form">
          <label>Nationality</label>
          <input type="text" placeholder="Name" />
        </div>
      </div>
      {/* //============================ */}
      <div className="p_form_container">
        <div>
          <h1>Education Details</h1>
        </div>

        <div className="resume_form">
          <label>Eduction</label>
          <input type="text" placeholder="Name" />
        </div>
        <div className="resume_form">
          <label>School</label>
          <input type="Email address" placeholder="Name" />
        </div>
        <div className="resume_form">
          <label>City</label>
          <input type="number" placeholder="Name" />
        </div>
        <div className="resume_form">
          <label>Start date</label>
          <input type="date" placeholder="Name" />
        </div>
        <div className="resume_form">
          <label>End date</label>
          <input type="date" placeholder="" />
        </div>
        <div className="resume_form">
          <label>Description</label>
          <textarea />
          {/* <input type="file" /> */}
        </div>
        <div className="resume_form">
          <label>Date of Birth</label>
          <input type="date" placeholder="dob" />
        </div>
        <div className="resume_form">
          <label>Gender</label>
          <input type="text" placeholder="" />
        </div>
        <div className="resume_form">
          <label>Nationality</label>
          <input type="text" placeholder="Name" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
