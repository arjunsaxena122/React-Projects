import React, { useContext } from "react";
import { userContext } from "../Context/userContext";

function Profile() {
  const { user } = useContext(userContext);

  if (!user) return <div>please login</div>;

  return <div>Welcome {user.username} Pass: {user.Password}</div>;
}

export default Profile;
