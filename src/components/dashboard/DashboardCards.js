import {
  BalanceIcon,
  BtcusbtIcon,
  EthusdtIcon,
  EyeIcon,
  SolusdtIcon,
} from "@/custom-icon-library/customIcons";
import styles from "./dashboard.module.css";
import Image from "next/image";
import chart_img from "./../../assets/images/card_chart.png";

const DashboardCards = () => {
  return (
    <>
      <div className={styles.dashboard_cards}>
        {/* Single Dashboard Card  */}
        <div className={`${styles.single_card} ${styles.card_1}`}>
          <div className={styles.card_title}>
            <div className={styles.card_icon}>
              <BalanceIcon />
            </div>
            <h4>Estimated Balance</h4>
            <EyeIcon />
          </div>

          <h2>$123,987</h2>

          <div className={styles.card_bottom}>
            <p className={styles.card_bottom_title}>Monthly Profit</p>
            <p className={styles.card_bottom_balance}>+$2560.78</p>
            <p className={styles.card_bottom_percent}>+14.67%</p>
          </div>
        </div>
        {/* Single Dashboard Card  */}
        <div className={`${styles.single_card} ${styles.card_2}`}>
          <div className={styles.card_title}>
            <div className={styles.card_icon}>
              <BtcusbtIcon />
            </div>
            <div>
              <h4>BTCUSDT</h4>
              <p>Bitcoin</p>
            </div>
          </div>

          <h2>$23,738</h2>

          <div className={styles.card_bottom}>
            <p className={styles.card_bottom_title}>PNL Daily</p>
            <p className={styles.card_bottom_balance}>-$16.78</p>
            <p className={styles.card_bottom_percent}>+14.67%</p>
          </div>
        </div>
        {/* Single Dashboard Card  */}
        <div className={`${styles.single_card} ${styles.card_3}`}>
          <div className={styles.card_title}>
            <div className={styles.card_icon}>
              <EthusdtIcon />
            </div>
            <div>
              <h4>ETHUSDT</h4>
              <p>Ethereum</p>
            </div>
          </div>

          <h2>$23,738</h2>

          <div className={styles.card_bottom}>
            <p className={styles.card_bottom_title}>PNL Daily</p>
            <p className={styles.card_bottom_balance}>+$189.91</p>
            <p className={styles.card_bottom_percent}>+24.68%</p>
          </div>
        </div>

        {/* Single Dashboard Card  */}
        <div className={`${styles.single_card} ${styles.card_4}`}>
          <div className={styles.card_title}>
            <div className={styles.card_icon}>
              <SolusdtIcon />
            </div>
            <div>
              <h4>SOLUSDT</h4>
              <p>Solana</p>
            </div>
          </div>

          <h2>$23,738</h2>

          <div className={styles.card_bottom}>
            <p className={styles.card_bottom_title}>PNL Daily</p>
            <p className={styles.card_bottom_balance}>+$556.14</p>
            <p className={styles.card_bottom_percent}>+64.11%</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCards;
