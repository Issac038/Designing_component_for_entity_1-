import React from 'react';
import './usercard.css'; 

const Usercard = () => {
  // Static data
  const profilePhoto = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwcZWItYP1alNLW1rTM3_hkUi2PJuH3ffbHg&s'; // Dummy image URL
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
