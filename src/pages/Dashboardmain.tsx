import React from "react";
import "../assets/dashboardstyle.css";
import Image1 from "../assets/images/1.jpeg";
import Image2 from "../assets/images/2.jpeg";
import Image3 from "../assets/images/3.jpeg";
import Image4 from "../assets/images/4.jpeg";
import Image5 from "../assets/images/5.jpeg";
import Image6 from "../assets/images/6.jpeg";
import Image7 from "../assets/images/7.jpeg";
import Image8 from "../assets/images/8.jpeg";
import Image9 from "../assets/images/9.jpeg";
import Image10 from "../assets/images/10.jpeg";
import Image11 from "../assets/images/11.jpeg";
import Image12 from "../assets/images/12.jpeg";
import Image13 from "../assets/images/13.jpeg";
import Image14 from "../assets/images/14.jpeg";
import Image15 from "../assets/images/15.jpeg";
import Image16 from "../assets/images/16.jpeg";
import Image17 from "../assets/images/17.jpeg";
import Image18 from "../assets/images/18.jpeg";
import Image19 from "../assets/images/19.jpeg";
import Image20 from "../assets/images/20.jpeg";
import Image21 from "../assets/images/21.jpeg";
import Image22 from "../assets/images/22.jpeg";
import Image23 from "../assets/images/23.jpeg";
import Image24 from "../assets/images/24.jpeg";
import Image25 from "../assets/images/25.jpeg";
// import Image26 from "../assets/images/26.jpeg";
// import Image27 from "../assets/images/27.jpeg";
// import Image28 from "../assets/images/28.jpeg";
// import Image29 from "../assets/images/29.jpg";
// import Image30 from "../assets/images/30.jpeg";
// import Image31 from "../assets/images/31.jpeg";
// import Image32 from "../assets/images/32.jpeg";
// import Image33 from "../assets/images/33.jpg";
// import Image34 from "../assets/images/34.jpeg";
// import Image35 from "../assets/images/35.jpeg";
// import Image36 from "../assets/images/36.jpeg";
// import Image37 from "../assets/images/37.jpeg";
// import Image38 from "../assets/images/38.jpeg";
// import Image39 from "../assets/images/39.jpeg";
// import Image40 from "../assets/images/40.jpeg";
// import Image41 from "../assets/images/41.jpeg";
// import Image42 from "../assets/images/42.jpeg";
// import Image43 from "../assets/images/43.jpeg";
// import Image44 from "../assets/images/44.jpeg";
// import Image45 from "../assets/images/45.jpeg";
// import Image46 from "../assets/images/46.jpeg";

const imageArr = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
  Image13,
  Image14,
  Image15,
  Image16,
  Image17,
  Image18,
  Image19,
  Image20,
  Image21,
  Image22,
  Image23,
  Image24,
  Image25,
];

const arr1: any = [];
const arr2: any = [];
const arr3: any = [];

const arr4: any = [];
const arr5: any = [];

for (let i = 0; i < imageArr.length; i += 3) {
  arr1.push(imageArr[i]);
}

for (let i = 1; i < imageArr.length; i += 3) {
  arr2.push(imageArr[i]);
}

for (let i = 2; i < imageArr.length; i += 3) {
  arr3.push(imageArr[i]);
}

for (let i = 0; i < imageArr.length; i += 2) {
  arr4.push(imageArr[i]);
}

for (let i = 1; i < imageArr.length; i += 2) {
  arr5.push(imageArr[i]);
}

const FirstCol = () => {
  return (
    <>
      {arr1.map((source: any, key: number) => (
        <img className="unsplashimg" src={source} alt={source} key={key} />
      ))}
    </>
  );
};

const SecondCol = () => {
  return (
    <>
      {arr2.map((source: any, key: number) => (
        <img className="unsplashimg" src={source} alt={source} key={key} />
      ))}
    </>
  );
};

const ThirdCol = () => {
  return (
    <>
      {arr3.map((source: any, key: number) => (
        <img className="unsplashimg" src={source} alt={source} key={key} />
      ))}
    </>
  );
};

const ForthCol = () => {
  return (
    <>
      {arr4.map((source: any, key: number) => (
        <img className="unsplashimg" src={source} alt={source} key={key} />
      ))}
    </>
  );
};

const FifthCol = () => {
  return (
    <>
      {arr5.map((source: any, key: number) => (
        <img className="unsplashimg" src={source} alt={source} key={key} />
      ))}
    </>
  );
};

const Dashboardmain = () => {
  return (
    <div className="dashboardmain">
      <div className="column1">
        <FirstCol />
      </div>
      <div className="column2">
        <SecondCol />
      </div>
      <div className="column3">
        <ThirdCol />
      </div>
      <div className="column4">
        <ForthCol />
      </div>
      <div className="column5">
        <FifthCol />
      </div>
      <div className="column">
        {imageArr.map((source: any, key: number) => (
          <img className="unsplashimg" src={source} alt={source} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Dashboardmain;
