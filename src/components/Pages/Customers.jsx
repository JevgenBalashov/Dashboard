import styles from "./Customers.module.scss";
import { Form, Formik, Field } from "formik";

function AllCustomers() {
    return (
        <section className={styles.container}>
            <div className={styles.container__containerHeader}>
                <div className={styles.container__HeaderTitle}>
                    <h1>All Customers</h1>
                    <span>All Members</span>
                </div>
                <div className={styles.container__searchBlock}>
                    <Formik
                        initialValues={{ searchQuery: '' }}
                        onSubmit={() => {}}
                    >
                        <Form>
                            <Field
                                type="text"
                                id="searchQuery"
                                name="searchQuery"
                                placeholder="Search"
                            />
                        </Form>
                    </Formik>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.main__membersList}>
                    <ul className={styles.list}>
                        <li>Customer Name</li>
                        <li>Company</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                        <li>Country</li>
                        <li>Status</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default AllCustomers;
