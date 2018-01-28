import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Images from "./Images";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const imgStyles = {
  height: "200px",
  width: "80%",
  "margin": "20px auto",
  "border": "2px solid pink"
};
const imageContainerStyle = {
  height: "200px",
  width: "80%",
  "margin": "20px auto",
  "list-style": "none"
}

const imageList = (num) => {
  const imageListLen = num
  var imageListArr = []
  for (var image = 0; image < imageListLen; image++) {
    imageListArr.push(
      <li key={image} style={imageContainerStyle}>
        <Images
          alt="myimg"
          src={`https://picsum.photos/200/300?image=${image}`}
          isDefer
          stylesValue={imgStyles}
          depth={100}
        />
      </li>
    )
  }
  return imageListArr
}
const App = () => (
  <div style={styles}>
    <Hello name="React Async Image load" />
    <h2>Below Images will be downloaded only when scrolled into view  {"\u2728"}</h2>
    <ul>
      {imageList(40)}
    </ul>
  </div>
);

render(<App />, document.getElementById("root"));
