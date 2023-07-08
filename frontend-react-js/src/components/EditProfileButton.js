import './EditProfileButton.css';
import React from 'react';

export default function EditProfileButton(props) {
  const pop_profile_form = (event) => {
    console.log('pop profile form')
    event.preventDefault();
    props.setPopped(true);
    return false;
  }

  return (
    <button onClick={pop_profile_form} className='profile-edit-button' href="#">Edit Profile</button>
  );
}