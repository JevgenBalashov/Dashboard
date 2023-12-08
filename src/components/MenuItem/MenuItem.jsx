import styles from "./MenuItem.module.scss"


function MenuItem(props) {
    return ( 
        <a href="/" className={styles.item}>{props.children}</a>
    );
}

export default MenuItem;