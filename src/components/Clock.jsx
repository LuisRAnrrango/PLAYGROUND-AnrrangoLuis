import { Component } from "react";
import "../assets/css/clock.css";

export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  //Ciclos de vida del componente
  //cada vez que Clock se renderice en el DOM por primera vez. Esto se llama «montaje» en React.
  componentDidMount() {
    this.timeId = setInterval(() => {
      this.setState({
        time: new Date(),
      });
    }, 1000);
  }
  //También queremos borrar ese temporizador cada vez que el DOM producido por Clock se elimine. Esto se llama «desmontaje» en React.
  componentWillUnmount() {
    clearInterval(this.timeId);
  }
  //Se puede los metodos para ejecutar codigo cuando se monta y se desmonta
  //En el ejemplo anterior primero se monto para que se muestre en el navegador el Temporizador en un intervalo de 1

  render() {
    return (
      <div className="body">
      <div className="clock">
        <div
          className="hand hour"
          data-hour-hand
          style={{
            transform: `rotateZ(${this.state.time.getHours() * 30}deg)`,
          }}
        ></div>
        <div
          className="hand minute"
          data-minute-hand
          style={{
            transform: `rotateZ(${this.state.time.getMinutes() * 6}deg)`,
          }}
        ></div>
        <div
          className="hand second"
          data-second-hand
          style={{
            transform: `rotateZ(${this.state.time.getSeconds() * 6}deg)`,
          }}
        ></div>
        <div className="number number1">1</div>
        <div className="number number2">2</div>
        <div className="number number3">3</div>
        <div className="number number4">4</div>
        <div className="number number5">5</div>
        <div className="number number6">6</div>
        <div className="number number7">7</div>
        <div className="number number8">8</div>
        <div className="number number9">9</div>
        <div className="number number10">10</div>
        <div className="number number11">11</div>
        <div className="number number12">12</div>
      </div>
      </div>
    );
  }
}
