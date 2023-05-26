<<<<<<< HEAD
import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = '0%';

  if (props.maxvalue > 0) {
    console.log(props.maxvalue)
    barFillHeight = Math.round((props.value / props.maxvalue) * 100) + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};
export default ChartBar;
=======
import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = '0%';

  if (props.maxvalue > 0) {
    console.log(props.maxvalue)
    barFillHeight = Math.round((props.value / props.maxvalue) * 100) + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};
export default ChartBar;
>>>>>>> 9fef467e57b2d528b8eeb638c8178e9d91283920
