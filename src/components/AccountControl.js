import React from "react";
import firebase from "firebase/app";
import { isLoaded } from "react-redux-firebase";
import LoadingScreen from "./LoadingScreen";
import RegistrationForm from "./RegistrationForm";
import LogInForm from "./LogInForm";
import AccountDetails from "./AccountDetails";
import { useState } from "react";

function AccountControl() {
  const views = ["register", "login", "logged out"];
  const [currentView, setCurrentView] = useState(views[0]);
  const auth = firebase.auth();

  function handleViewRegister() {
    setCurrentView(views[0]);
  }
  function handleViewLogIn() {
    setCurrentView(views[1]);
  }
  function handleViewLogOut() {
    setCurrentView(views[2]);
  }

  if (!isLoaded(auth)) {
    return <LoadingScreen />;
  } else if (auth.currentUser != null) {
    return (
      <AccountDetails
        user={auth.currentUser}
        onLogOutClick={handleViewLogOut}
      />
    );
  } else if (currentView === "register") {
    return <RegistrationForm onLogInClick={handleViewLogIn} />;
  } else if (currentView === "login") {
    return <LogInForm onRegisterClick={handleViewRegister} />;
  } else if (currentView === "logged out") {
    return <>{/* loggedOutScreen? */}</>;
  }
}

export default AccountControl;
