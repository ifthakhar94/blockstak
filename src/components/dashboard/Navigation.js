import {
  DashboardIcon,
  HelpIcon,
  LogOutIcon,
  MarketsIcon,
  ProfileIcon,
  SettingIcon,
  TransectionIcon,
} from "@/custom-icon-library/customIcons";
import Link from "next/link";
import styles from "./dashboard.module.css";

const Navigation = () => {
  return (
    <>
      <nav className={styles.side_nav}>
        <ul>
          <li className={styles.active}>
            <Link href="#">
              <DashboardIcon /> <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <MarketsIcon /> <span>Markets</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <TransectionIcon /> <span>Transactions</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <ProfileIcon /> <span>Profile</span>
            </Link>
          </li>
          <li className={styles.nav_setting}>
            <Link href="#">
              <SettingIcon /> <span>Setting</span>
            </Link>
          </li>

          <li className="nav_help">
            <Link href="#">
              <HelpIcon /> <span>Help</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <LogOutIcon /> <span>Log Out</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
