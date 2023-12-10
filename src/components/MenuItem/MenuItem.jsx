import styles from "./MenuItem.module.scss"

import KeySvg from "../../assets/svg/key.svg"
// import ProductSvg from "../../assets/svg/product.svg"
// import UserSvg from "../../assets/svg/user.svg"
// import WalletSvg from "../../assets/svg/wallet.svg"
// import PromoteSvg from "../../assets/svg/discount.svg"
// import HelpSvg from "../../assets/svg/message-question1.svg"
import ArowRightSvg from "../../assets/svg/arow-right.svg"


function MenuItem(props) {
    return ( 
        <div className={styles.itemContainer}>
            <div className={styles.itemContainer__SvgBox}>
                <img src={KeySvg} alt="KeySvg" />
                <a href="/" className={styles.item}>{props.children}</a>
            </div>
            <img className={styles.SVG} src={ArowRightSvg} alt="ArowRightSvg" />
        </div>
    );
}

export default MenuItem;