import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    // transforms the data from objects to numbers
    const dataPointValues = props.dataPoints.map(
        (dataPoint) => dataPoint.value
    );

    // this method receives 12 arguments which are the 12 values from the array because of the spread operator
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;
