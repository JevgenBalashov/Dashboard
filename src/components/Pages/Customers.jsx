import React, { useState, useEffect } from 'react';
import styles from "./Customers.module.scss";
import ReactPaginate from "react-paginate";
import { Form, Formik, Field } from "formik";
import Users from "../../json/member.json";

const USERS_PER_PAGE = 8;
const userFields = ['CustomerName', 'Company', 'PhoneNumber', 'Email', 'Country', 'Status'];

function AllCustomers() {
    const [totalEntries, setTotalEntries] = useState(0);
    const [currentRange, setCurrentRange] = useState({ start: 0, end: 0 });
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        setTotalEntries(Users.length);
        const start = currentPage * USERS_PER_PAGE + 1;
        const end = Math.min((currentPage + 1) * USERS_PER_PAGE, Users.length);
        setCurrentRange({ start, end });
        // eslint-disable-next-line
    }, [Users, currentPage]);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const offset = currentPage * USERS_PER_PAGE;
    const paginatedUsers = Users ? Users.slice(offset, offset + USERS_PER_PAGE) : [];
    

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
                        {userFields.map((field, index) => (
                            <li key={index}>{field}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.users}>
                    <ul>
                        {paginatedUsers.map((user) => (
                            <li key={user.id}>
                                {userFields.map((field, index) => (
                                    <div key={index}>
                                        {field === "Status" ? (
                                            <div className={styles.activeStatus}
                                            style={{
                                                color:
                                                user[field] === "Active"
                                                    ? "#008767"
                                                    : "#DF0404",
                                                background:
                                                    user[field] === "Active"
                                                    ? "rgba(22, 192, 152, 0.38)"
                                                    : "#FFC5C5",
                                                border: user[field] === "Active"
                                                ? "1px solid #00B087"
                                                : "1px solid #DF0404",
                                                width: "80px",
                                                textAlign: "center",
                                                borderRadius: "4px",
                                                paddingTop: "4px",
                                                paddingBottom: "4px",
                                            }}
                                            >
                                            {user[field]}
                                            </div>
                                        ) : (
                                            user[field]
                                        )}
                                    </div>
                                ))}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.Paginate}>
                <p className={styles.DataIfno}>
                    Showing data {currentRange.start} to {currentRange.end} of {totalEntries} entries
                </p>
                <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    pageCount={Math.ceil(Users.length / USERS_PER_PAGE)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={styles.pagination}
                    activeClassName={styles.active}
                />
            </div>
        </section>
    );
}

export default AllCustomers;
