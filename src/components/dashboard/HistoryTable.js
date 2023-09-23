import { DownArrowIcon, UpArrowIcon } from "@/custom-icon-library/customIcons";
import React from "react";

const HistoryTable = () => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              <DownArrowIcon />
            </td>
            <td>Deposit</td>
            <td>+$23,738</td>
            <td>11:34 PM</td>
            <td className="status_pending">pending</td>
          </tr>
          <tr>
            <td>
              <UpArrowIcon />
            </td>
            <td>SANDUSDT</td>
            <td className="negative_balance">-$576</td>
            <td>11:34 PM</td>
            <td className="status_done">pending</td>
          </tr>
          <tr>
            <td>
              <DownArrowIcon />
            </td>
            <td>Deposit</td>
            <td>+$23,738</td>
            <td>11:34 PM</td>
            <td className="status_pending">pending</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default HistoryTable;
