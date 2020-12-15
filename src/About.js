import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";

const About = () => {
  const {name} = useParams();
  const match=useRouteMatch("/about/Genesis");
  const showB=match && match.isExact;
  return <>
  <h1> About {name} </h1>
  {showB&&<button>Buy Now</button>}
</>
};
export default About;
