import React from "react";
import CommonLayout from "./CommonLayout";
import DashboardCards from "./DashboardCards";
import styles from "./dashboard.module.css";
import CandlestickChart from "./CandlestickChart";
import Tabs from "./Tabs";
import Converter from "./Converter";
import DoughnutChart from "./DoughnutChart";
import HistoryTable from "./HistoryTable";

const DashboardBody = () => {
  // Sample data
  const chartData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [30, 20, 50],
        backgroundColor: ["#FF5733", "#3366CC", "#FFCC29"],
      },
    ],
  };
  const tabsData = [
    {
      label: "All",
      content: (
        <>
          <HistoryTable />
        </>
      ),
    },
    {
      label: "Metaverse",
      content: <p>This is the content of Tab 1.</p>,
    },
    {
      label: "Gaming",
      content: <p>This is the content of Tab 2.</p>,
    },
    {
      label: "Defi",
      content: <p>This is the content of Tab 3.</p>,
    },
  ];

  return (
    <>
      <CommonLayout>
        <DashboardCards />
        <div className={styles.candlestick_chart}>
          <div className="chart">
            <CandlestickChart />
          </div>
          <div className="markets">
            <Tabs tabs={tabsData} />
          </div>
        </div>
        <div className="dashboard_footer">
          <div className="doughnut_chart">
            <h3 className="footer_card_title">Assets</h3>
            <DoughnutChart data={chartData} />
          </div>
          <div className="currency_converter">
            <Converter />
          </div>
          <div className="history_table">
            <div className="table_title">
              <h3 className="footer_card_title">History</h3>
              <a href="#">View All</a>
            </div>
            <HistoryTable />
          </div>
        </div>
      </CommonLayout>
    </>
  );
};

export default DashboardBody;
