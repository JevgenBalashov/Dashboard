import styles from "./Layout.module.scss";



function Layout(props) {
    return ( 
        <div className={styles.layout}>
            <h1 className={styles.title}>Hello Evano 👋🏼,</h1>
            {
                props.children
            }
        </div>
    );
}

export default Layout;