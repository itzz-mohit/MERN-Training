import React from "react";
import Header from "./Header";
import Qualifications from "./Qualifications";
import Project from "./Project";

const Dashboard = () => {
  return (
    <div className="px-5 pt-5">
      <Header />
      <Qualifications />
      <Project />
    </div>
  );
};

export default Dashboard;
