import user from "./../../assets/images/user.png";
import {
  NotificationIcon,
  SearchIcon,
  UserTripleDootsIcon,
} from "@/custom-icon-library/customIcons";
import styles from "./dashboard.module.css";
import Image from "next/image";
const HeaderTop = () => {
  return (
    <>
      <div className={styles.header_top}>
        <div className={styles.header_search}>
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>

        <div className={styles.user_profile}>
          <NotificationIcon />
          <div className={styles.profile_data}>
            <Image src={user} width={45} height={45} />
            <div className={styles.user_info}>
              <h4>Andy Warhol</h4>
              <p>andywarhol@mail.com</p>
            </div>
            <UserTripleDootsIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
