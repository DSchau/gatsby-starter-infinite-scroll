import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import theme from "../theme.yaml"

const Pagination = props => {

    const { currentPage, countPages } = props;
    const isFirst = currentPage === 1 || !currentPage;
    const isLast = currentPage === countPages;
    const prevPage = "/" + (currentPage - 1 > 1 ? (currentPage - 1) : "");
    const nextPage = "/" + (currentPage + 1);
    const verticalAlignment = { paddingTop: "0.25em" }

    return (
        <React.Fragment>
            <div className="pagination">

                {/* "Prev" arrow */}
                {!isFirst && (
                    <Link to={prevPage} rel="prev" style={verticalAlignment}>
                        <span className="prev-arrow">
                            <FaArrowLeft/>
                        </span>
                    </Link>
                )}

                {/* Numbered page links. */}
                {countPages > 1 && (
                    <React.Fragment>
                        {Array.from({ length: countPages }, (_, i) => (
                            <Link
                                key={`page-${i + 1}`} 
                                to={`/${i === 0 ? "" : i + 1}`}
                                style={{
                                    padding: "3px 8px",
                                    borderRadius: "5px",
                                    textDecoration: "none",
                                    color: i + 1 === currentPage ? "#ffffff" : "#666",
                                    background: i + 1 === currentPage ? theme.color.brand.primary : "",
                                    lineHeight: "30px",
                                    verticalAlign: "middle"
                                }}
                                className="pagination-numbers"
                            >
                                {i + 1}
                            </Link>
                        ))}
                    </React.Fragment>
                )}

                {/* "Next" arrow */}
                {!isLast && (
                    <Link to={nextPage} rel="next" style={verticalAlignment}>
                        <span className="next-arrow">
                            <FaArrowRight/>
                        </span>
                    </Link>
                )}


            </div>
            <style jsx>{`
                .next-arrow {
                    :global(svg) {
                        margin-left: 10px !important;
                    }
                }

                .next-arrow .prev-arrow {
                    padding-top: 100px;
                }

                a.pagination-numbers:hover {
                    background: ${theme.color.brand.primaryLight};
                }
            
                .pagination {
                    display: flex;
                    maxWidth: 700px;
                    flex-wrap: wrap;
                    flex-direction: row;
                    justify-content: center;
                    padding: ${theme.space.l} ${theme.space.l} ${theme.space.l};
                    margin: ${theme.space.stack.l};

                    .flexItem {

                    }

                    

                    :global(a:nth-child(2)) {
                        margin: 0;
                    }

                    :global(svg) {
                        fill: ${theme.color.special.attention};
                        width: ${theme.space.m};
                        height: ${theme.space.m};
                        flex-shrink: 0;
                        flex-grow: 0;
                        transition: all 0.5s;
                        margin: ${theme.space.inline.s};
                    }
                }
            

                @from-width desktop {
                    @media (hover: hover) {
                        .pagination :global(a:hover svg) {
                            transform: scale(1.5);
                        }
                    }
                }
            `}
            </style>
        </React.Fragment>
    );
}

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    countPages: PropTypes.number.isRequired
};

export default Pagination;