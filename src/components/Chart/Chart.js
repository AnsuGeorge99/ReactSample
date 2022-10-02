import React from "react";
import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalmaximumVal = Math.max(...dataPointValue);

    return (<div className="chart">
        {props.dataPoints.map((dataPoint) => (<ChartBar
            key={dataPoint.key}
            value={dataPoint.value}
            maxValue={totalmaximumVal}
            label={dataPoint.label} />))}
    </div>
    );
};

export default Chart;