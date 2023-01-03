import React from "react";

export class MasaCorporal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cambioInput1: true };
  }
  render() {
    return (
      <div>
        <label>
          40kg
          <input
            min="40"
            max="180"
            oninput="console.log(this.value)"
            type="range"
          />
        </label>
        <br />
        <label>
          100 cm
          <input
            min="100"
            max="250"
            oninput="console.log(this.value)"
            type="range"
          />
        </label>
      </div>
    );
  }
}
