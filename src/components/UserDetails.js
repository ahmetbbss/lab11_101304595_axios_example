import React from "react";
import "./UserDetails.css";

const UserDetails = ({ user }) => {
  return (
    <>
      <div className="user-card">
        <div className="user-image-container">
          <img
            className="user-image"
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
          />
          <button className="details-button">Details</button>
        </div>
        <div className="user-info-container">
          <h3 className="user-full-name">
            {`${user.name.title} ${user.name.first} ${user.name.last}`} -{" "}
            {user.login.uuid}
          </h3>
          <p className="user-detail">
            <span className="user-detail-title">User Name:</span>{" "}
            {user.login.username}
          </p>
          <p className="user-detail">
            <span className="user-detail-title">Gender:</span> {user.gender}
          </p>
          <p className="user-detail">
            <span className="user-detail-title">Time Zone Description:</span>{" "}
            {user.location.timezone.description}
          </p>
          <p className="user-detail">
            <span className="user-detail-title">Address:</span>{" "}
            {`${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`}
          </p>
          <p className="user-detail">
            <span className="user-detail-title">Email:</span> {user.email}
          </p>
          <p className="user-detail">
            <span className="user-detail-title">Birth Date and Age:</span>{" "}
            {new Date(user.dob.date).toLocaleDateString()} ({user.dob.age})
          </p>
          <p className="user-detail">
            <span className="user-detail-title">Register Date:</span>{" "}
            {new Date(user.registered.date).toLocaleDateString()}
          </p>
          <p className="user-detail">
            <span className="user-detail-title">Phone#:</span> {user.phone}
          </p>
          <p className="user-detail">
            <span className="user-detail-title">Cell#:</span> {user.cell}
          </p>
        </div>
      </div>
      <footer className="user-footer"></footer>
    </>
  );
};

export default UserDetails;
