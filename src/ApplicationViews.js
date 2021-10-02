import { Route } from "react-router-dom"
import React from "react";
import './App.css';
import MainPage from "./components/mainPage";

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact path="/timer" render={props => {
          return <MainPage {...props} />
        }}
      />
    </React.Fragment>
  )
}


export default ApplicationViews;
