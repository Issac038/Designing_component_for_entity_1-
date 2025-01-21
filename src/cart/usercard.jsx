import React from 'react';
import './usercard.css'; 

const Usercard = () => {
  // Static data
  const profilePhoto = 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'; // Dummy image URL
  const name = 'Issac Antony';
  const email = 'issac.antony@kalvium.community';
  const phone = '172-562-3722';
  const address = '742 Evergreen Terrace';

  return (
    <div className="usercard">
      <img src={profilePhoto} alt="Profile" className="profile-photo" />
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Address: {address}</p>
    </div>
  );
};

export default Usercard;
