import React from "react";



export default function Finish(props) {
  const { user: { firstName, lastName, email, avatar } } = props;
  

  return (
    <div className="jumbotron">
      <img src={avatar} alt="user avatar" className="mr-3 rounded float-left avatar-small"></img>
      <h1 className="display-4">{firstName} {lastName}</h1>
      <hr className="my-4" />
      <p><b>Email:</b> {email}</p>
      
    </div>
  );
}