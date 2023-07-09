import './ProfileAvatar.css';
import React from "react";


export default function ProfileAvatar(props) {
  const backgroundImage = `url("https://assets.brandonscloud.link/avatars/${props.id}.jpg")`;
  //const backgroundImage = `url("https://assets.brandonscloud.link/avatars/mock.jpg")`;
  const styles = {
    backgroundImage: backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div 
      className="profile-avatar"
      style={styles}
    ></div>
  );
}