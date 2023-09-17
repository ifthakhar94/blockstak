import Image from "next/image";
import logo from "./../../assets/images/logo.png";
import styles from "./dashboard.module.css";
import Navigation from "./Navigation";
import HeaderTop from "./HeaderTop";

const CommonLayout = ({ children }) => {
  return (
    <>
      <div className="dashboard-container">
        <div className="common-logo-menu">
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
        <div className="main-deshboard-content">
          <HeaderTop />
          <div className="dashboard-body">{children}</div>
        </div>
      </div>
    </>
  );
};

export default CommonLayout;
