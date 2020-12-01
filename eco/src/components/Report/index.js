import React from "react";
import { Line } from "react-chartjs-2";
import Container from "react-bootstrap/Container"
import "./style.css"

const state = {
  labels: ["July", "August", "September", "October", "November"],
  datasets: [
    {
      label: "Purchases",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgb(168, 60, 17)",
      borderColor: "rgb(54, 32, 32);",
      borderWidth: 4,
      data: [43, 67, 58, 81, 77, 61, 92],
    },
  ],
};

export default class Report extends React.Component {
  render() {
    return (
      <Container>
        <Line
          data={state}
          options={{
            title: {
              display: true,
              text: "Purchases per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </Container>
    );
  }
}
