import styles from "./MenuItem.module.scss"
import { Link } from "react-router-dom";

import KeySvg from "../../assets/svg/key.svg"
import ProductSvg from "../../assets/svg/product.svg"
import UserSvg from "../../assets/svg/user.svg"
import WalletSvg from "../../assets/svg/wallet.svg"
import PromoteSvg from "../../assets/svg/discount.svg"
import HelpSvg from "../../assets/svg/message-question1.svg"
import ArowRightSvg from "../../assets/svg/arow-right.svg"

const iconMap = {
    dashboard: KeySvg,
    product: ProductSvg,
    customers: UserSvg,
    income: WalletSvg,
    promote: PromoteSvg,
    help: HelpSvg,
}

function MenuItem(props) {

    const { to, iconType} = props

    return ( 
        <Link to={to} className={styles.itemContainer}>
            <div className={styles.itemContainer__SvgBox}>
                <img src={iconMap[iconType]} alt={`${iconType} icon`} />
                <span className={styles.item}>{props.children}</span>
            </div>
            <img className={styles.SVG} src={ArowRightSvg} alt="ArowRightSvg" />
        </Link>
    );
}

export default MenuItem;