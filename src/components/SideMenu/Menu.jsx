import styles from "./Menu.module.scss"
import Logo from "../../assets/svg/Logo.svg"
import MenuItem from "../MenuItem/MenuItem"

function Menu ( ) {
    return (
        <aside className={styles.menu}>
            <div className={styles.logo}>
                <div className={styles.logo__box}>
                    <img src={Logo} alt="Logo" />
                </div>
                <div className={styles.logo__txt}>
                    Dashboard
                    <span className={styles.logo__versioin}>
                        v.01
                    </span>
                </div>
            </div>
            <div className={styles.menu__itemContainer}>
                <MenuItem>Dashboard</MenuItem>
                <MenuItem>Product</MenuItem>
                <MenuItem>Customers</MenuItem>
                <MenuItem>Income</MenuItem>
                <MenuItem>Promote</MenuItem>
                <MenuItem>Help</MenuItem>
            </div>
        </aside>
    )
}

export default Menu