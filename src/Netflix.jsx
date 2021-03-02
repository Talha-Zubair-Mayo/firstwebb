import React from "react";

import Card from "./Card";
import cData from "./CrdsData";

const Netflix = () => {
  return (
    <>
      <Card
        key={cData[2].id}
        imgSrc={cData[2].imgSrc}
        imgtitle={cData[2].imgtitle}
        sname={cData[2].sname}
        link={cData[2].link}
      />
    </>
  );
};

const Amazon  = () => {
    return (
      <>
        <Card
          key={cData[3].id}
          imgSrc={cData[3].imgSrc}
          imgtitle={cData[3].imgtitle}
          sname={cData[3].sname}
          link={cData[3].link}
        />
      </>
    );
  };
  

export default Netflix;

export {Amazon}

