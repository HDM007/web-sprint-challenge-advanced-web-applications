import React, { useEffect, useState } from "react";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import getColorData from "./GetColorData";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    getColorData()
    .then(res => {
      setColorList(res.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
