import React from "react";
import MainTemplate from "../components/MainTemplate/MainTemplate";
import Button from "../components/Button/Button";
import Main from "../components/Main/Main";

const HomePage = () => {
  return (
    <div>
      <MainTemplate>Home Page</MainTemplate>
      <Main />
      <Button />
    </div>
  );
};

export default HomePage;
