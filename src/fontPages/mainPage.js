import React, { useContext } from "react";
import { LogInContext } from "../Context/loginContext/loginState";
import FrontPage from "./FrontPage";
import ProfilePage from "./ProfilePage";

export default function MainPage() {
  //Context Login State

  const { logIn } = useContext(LogInContext);

  //Chose pages depends on LogIn state

  // return <>{logIn ? <ProfilePage /> : <FrontPage />}</>;
  return <>{localStorage.getItem("token") ? <ProfilePage /> : <FrontPage />}</>;
}
