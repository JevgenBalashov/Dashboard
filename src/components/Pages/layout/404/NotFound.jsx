import styles from "./NotFound.module.scss";

function NotFound() {
    return (
        <section className={styles.container}>
            <div className={styles.container__notFound}>
                <h2 className={styles.container__NFtitle}>
                    This page is not available, please come back later.
                </h2>
                <span>come to customers page</span>
            </div>
        </section>
    );
}

export default NotFound;