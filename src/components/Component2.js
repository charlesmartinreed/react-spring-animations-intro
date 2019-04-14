import React from "react";
import { Spring } from "react-spring/renderprops";

export default class Component2 extends React.Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 1000 }}
      >
        {props => (
          <div style={props}>
            <div style={c2Style}>
              <h1>Component 2</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam quos omnis repudiandae libero facere provident ex natus
                eum vero iusto! Atque asperiores ducimus, nemo dolor libero
                nulla magni. Error, aliquid.
              </p>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

const c2Style = {
  background: "slateblue",
  color: "white",
  padding: "1.5rem"
};
