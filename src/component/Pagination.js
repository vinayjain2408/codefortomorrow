import { useContext } from "react";
// import { PostContext } from "../context/PostContext";
import ReactPaginate from "react-paginate";
import "./pagination.css";
import { ContextStore } from "../App";

const Pagination = () => {
    const { postData, setCurrentPage } = useContext(ContextStore);
    const pageCount = Math.ceil(postData.length / 6);

    return (
        <ReactPaginate
            previousLabel={"←"}
            nextLabel={"→"}
            pageCount={pageCount}
            onPageChange={({ selected }) => setCurrentPage(selected + 1)}
            containerClassName={"pagination"}
            activeClassName={"active"}
        />
    );
};

export default Pagination;
