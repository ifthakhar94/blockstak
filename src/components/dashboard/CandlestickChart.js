import React, { useEffect, useState } from "react";
import Highcharts from "highcharts/highstock";

const CandleStickChart = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://demo-live-data.highcharts.com/aapl-ohlc.json", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);
  useEffect(() => {
    const options = {
      title: {
        text: "Candlestick Chart Example",
      },
      xAxis: {
        type: "datetime",
      },
      yAxis: {
        title: {
          text: "Price",
        },
      },
      // series: [
      //   {
      //     type: "candlestick",
      //     name: "AAPL",
      //     data: data,
      //   },
      // ],
      rangeSelector: {
        selected: 1,
      },
      series: [
        {
          type: "candlestick",
          name: "AAPL Stock Price",
          data: data,
          dataGrouping: {
            units: [
              [
                "week", // unit name
                [1], // allowed multiples
              ],
              ["month", [1, 2, 3, 4, 6]],
            ],
          },
        },
      ],
    };

    // Render the chart using HighchartsReact
    Highcharts.chart("candlestick-chart", options);
  }, [data]);
  return (
    <div>
      <div
        id="candlestick-chart"
        style={{
          height: "428px",
          margin: "0 auto",
          borderRadius: "12px",
          width: "850px",
        }}
      ></div>
    </div>
  );
};

export default CandleStickChart;
