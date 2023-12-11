import styles from "./Menu.module.scss";
import Logo from "../../assets/svg/Logo.svg";
import MenuItem from "../MenuItem/MenuItem";

const menuItemsData = [
  { to: "/", label: "Dashboard" },
  { to: "/product", label: "Product" },
  { to: "/customers", label: "Customers" },
  { to: "/Income", label: "Income" },
  { to: "/promote", label: "Promote" },
  { to: "/help", label: "Help" },
];

function Menu() {
  return (
    <aside className={styles.menu}>
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
          <MenuItem key={item.to} to={item.to}>
            {item.label}
          </MenuItem>
        ))}
      </div>
    </aside>
  );
}

export default Menu;
