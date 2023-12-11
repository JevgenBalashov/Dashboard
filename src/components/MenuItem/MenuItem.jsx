import styles from "./MenuItem.module.scss"
import { Link } from "react-router-dom";

import KeySvg from "../../assets/svg/key.svg"
// import ProductSvg from "../../assets/svg/product.svg"
// import UserSvg from "../../assets/svg/user.svg"
// import WalletSvg from "../../assets/svg/wallet.svg"
// import PromoteSvg from "../../assets/svg/discount.svg"
// import HelpSvg from "../../assets/svg/message-question1.svg"
import ArowRightSvg from "../../assets/svg/arow-right.svg"


function MenuItem(props) {
    return ( 
        <Link to={props.to} className={styles.itemContainer}>
            <div className={styles.itemContainer__SvgBox}>
                <img src={KeySvg} alt="KeySvg" />
                <span className={styles.item}>{props.children}</span>
            </div>
            <img className={styles.SVG} src={ArowRightSvg} alt="ArowRightSvg" />
        </Link>
    );
}

export default MenuItem;