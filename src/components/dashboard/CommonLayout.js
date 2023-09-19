import Image from "next/image";
import logo from "./../../assets/images/logo.png";
import styles from "./dashboard.module.css";
import Navigation from "./Navigation";
import HeaderTop from "./HeaderTop";

const CommonLayout = ({ children }) => {
  return (
    <>
      <div className={styles.dashboard_container}>
        <div className={styles.common_logo_menu}>
          <a href="#">
            {/* <img /> */}
            <Image
              src={logo}
              alt="Logo"
              className="logo"
              width={200}
              height={32}
            />
          </a>

          <Navigation />
        </div>
        <div className={styles.main_deshboard_content}>
          <HeaderTop />
          <div className={styles.dashboard_body}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default CommonLayout;
