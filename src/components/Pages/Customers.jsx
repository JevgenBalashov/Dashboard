import React, { useState } from 'react';
import styles from "./Customers.module.scss";
import ReactPaginate from "react-paginate";
import { Form, Formik, Field } from "formik";
import Users from "../../json/member.json";

const USERS_PER_PAGE = 8;
const userFields = ['CustomerName', 'Company', 'PhoneNumber', 'Email', 'Country', 'Status'];

function AllCustomers() {
    const [currentPage, setCurrentPage] = useState(0);

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
                                                width: "80px",
                                                textAlign: "center",
                                                border: "1px solid gray",
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
        </section>
    );
}

export default AllCustomers;
