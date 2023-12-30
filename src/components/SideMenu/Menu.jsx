import styles from "./Menu.module.scss";
import Logo from "../../assets/svg/Logo.svg";
import MenuItem from "../MenuItem/MenuItem";
import UserImg from "../../assets/img/person.png";

const menuItemsData = [
  { to: "/", label: "Dashboard", iconType: "dashboard" },
  { to: "/product", label: "Product", iconType: "product" },
  { to: "/customers", label: "Customers", iconType: "customers" },
  { to: "/Income", label: "Income", iconType: "income" },
  { to: "/promote", label: "Promote", iconType: "promote" },
  { to: "/help", label: "Help", iconType: "help" },
];

function Menu() {
  return (
    <aside className={styles.menu}>
      <div className={styles.menuContainer}>
        <div className={styles.logo}>
          <div className={styles.logo__box}>
            <img src={Logo} alt="Logo" />
          </div>
          <div className={styles.logo__txt}>
            Dashboard
            <span className={styles.logo__versioin}>v.01</span>
          </div>
        </div>
        <div className={styles.menu__itemContainer}>
          {menuItemsData.map((item) => (
            <MenuItem key={item.to} to={item.to} iconType={item.iconType}>
              {item.label}
            </MenuItem>
          ))}
        </div>
        <div className={styles.User}>
            <div className={styles.User__img}>
              <img src={UserImg} alt="UserImg" />
            </div>
            <div className={styles.User__info}>
              <span className={styles.User__name}>
                Evano
              </span>
              <span className={styles.User__vacation}>
                Project Manager
              </span>
            </div>
        </div>
      </div>
    </aside>
  );
}

export default Menu;
