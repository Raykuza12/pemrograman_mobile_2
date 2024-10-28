import Avatar from "../component/avatar";
import Description from "../component/description";
import Edu from "../component/edu";
import Jhistory from "../component/jhistory";
import Job from "../component/job";
import Name from "../component/name";
import Title from "../component/title";

import React from "react";

const Hero = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-start items-center p-10">
        <Title />
        <Avatar />
        <Name />
        <Job />
        <Description />
        <Edu />
        <Jhistory />
      </div>
    </>
  );
};

export default Hero;
