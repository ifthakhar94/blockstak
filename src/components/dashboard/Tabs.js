// components/Tabs.js
import { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-container">
      <ul className="tabs">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={index === activeTab ? "active-tab" : ""}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {activeTab === -1
          ? tabs.map((tab, index) => <div key={index}>{tab.content}</div>)
          : tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
