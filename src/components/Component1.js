import React from "react";
import { Spring } from "react-spring/renderprops";

// we place whatever we want to animate within the <Spring> tag's props object, nested instead of a div.
export default function Component1() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div style={c1Style}>
            <h1>Component1</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
              quos omnis repudiandae libero facere provident ex natus eum vero
              iusto! Atque asperiores ducimus, nemo dolor libero nulla magni.
              Error, aliquid.
            </p>
          </div>
        </div>
      )}
    </Spring>
  );
}

const c1Style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem"
};
