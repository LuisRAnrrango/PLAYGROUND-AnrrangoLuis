import "../assets/css/calculadora.css"
import React from "react";

export class CalculadoraEdad extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      edadE: [],
      mesesE: [],
      diasE: [],
    });
  }

  handleSubmit(event) {
    //Fecha Actual
    const fechaAct = new Date();
    const mesAct = fechaAct.getMonth() + 1;
    const anioAct = fechaAct.getYear();
    const diaAct = fechaAct.getDate();

    const fecha = this.state.value.split("-");
    const anio = fecha[0];
    const mes = fecha[1];
    const dia = fecha[2];

    // realizamos el calculo de Edad
    var edad = anioAct + 1900 - anio;
    if (mesAct < mes) {
      edad--;
    }
    if (mes === mesAct && diaAct < dia) {
      edad--;
    }
    if (edad > 1900) {
      edad -= 1900;
    }
    this.setState({ value: edad });

    // calculamos los meses
    var meses = 0;
    if (mesAct > mes) meses = mesAct - mes;
    if (mesAct < mes) meses = 12 - (mes - mesAct);
    if (mesAct === mes && dia > diaAct) meses = 11;

    // calculamos los dias
    var dias = 0;
    if (diaAct > dia) dias = diaAct - dia;
    if (diaAct < dia) {
      const ultimoDiaMes = new Date(anioAct, mesAct, 0);
      dias = ultimoDiaMes.getDate() - (dia - diaAct);
    }

    this.setState({ edadE: edad });
    this.setState({ mesesE: meses });
    this.setState({ diasE: dias });


    event.preventDefault();
  }

  render() {
    return (
      <div className="calculadoraedad">
        <div className="fechaPicker">
          <form onSubmit={this.handleSubmit}>
            <label>
              <input
                type="date"
                className="input-group date"
                data-provide="datepicker"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <span> </span>
            <input
              type="submit"
              className="btn btn-primary"
              value="Calcular Edad"
            />
          </form>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div>
          <span className="caja1">{this.state.edadE}años</span>
          <span className="caja2">{this.state.mesesE} meses</span>
          <span className="caja3">{this.state.diasE} dias</span>
        </div>
      </div>
    );
  }
}
