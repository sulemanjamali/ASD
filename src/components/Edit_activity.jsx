import React from "react";
import { Link } from "react-router-dom";
export default function Edit_Activity() {
  return (
    <div className="signup template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form_container p-5 rounded bg-white">
        <form>
          <h3 className="text-center">Edit Activity</h3>
          <div className="mb-2">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="form-control"
            />
          </div>
          <div className="mb-2">

    
          <label htmlFor="description">Description</label>
            <textarea className="form-control" id="description" rows="3"></textarea>
            </div>
          <div className="mb-2">
            <label htmlFor="type_of_activity">Type of Activity</label>


            <select className="form-select" aria-label="Default select example">
                <option value="1">Run</option>
                <option value="2">Swim</option>
                <option value="3">Hike</option>
                <option value="4">Bicycle</option>
            </select>

          </div>
          <div className="mb-2">
            <label htmlFor="duration">Duration</label>
            <input
              type="number"
              placeholder="Enter Time in hours"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="date">Date</label>
            <input type="date" className="form-control" />
          </div>

          <div className="d-grid mt-2">
            <button className="btn btn-primary">Edit Activity</button>
          </div>
        </form>
      </div>
    </div>
  );
}
