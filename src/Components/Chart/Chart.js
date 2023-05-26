<<<<<<< HEAD
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {

  const finddatapoint = props.datapoint.map(datapoint => datapoint.value)
  const totalmax = finddatapoint.reduce((sum,a)=>sum+a,0)

  return (
    <div className="chart">
      {props.datapoint.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxvalue={totalmax}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
=======
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {

  const finddatapoint = props.datapoint.map(datapoint => datapoint.value)
  const totalmax = finddatapoint.reduce((sum,a)=>sum+a,0)

  return (
    <div className="chart">
      {props.datapoint.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxvalue={totalmax}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
>>>>>>> 9fef467e57b2d528b8eeb638c8178e9d91283920
