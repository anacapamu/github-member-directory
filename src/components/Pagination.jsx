import { usePagination } from '../hooks/usePagination.js';

const Pagination = (props) => {
    const {
        onPageChange,
        totalItems,
        neighborCount = 1,
        currentPage,
        pageSize
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalItems,
        neighborCount,
        pageSize,
    });

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];

    return (
        <ul>
            {/* Left navigation arrow */}
            <li onClick={onPrevious} disabled={currentPage === 1}>
                <div className="arrow left" />
            </li>
            {paginationRange.map((pageNumber, index) => {
                // If the pageItem is a DOT, render the DOTS unicode character
                if (pageNumber === '...') {
                    return <li className="pagination-item dots">&#8230;</li>;
                }

                // Render our Page Pills
                return (
                    <li onClick={() => onPageChange(pageNumber)} key={index}>
                        {pageNumber}
                    </li>
                );
            })}
            {/*  Right Navigation arrow */}
            <li onClick={onNext} disabled ={currentPage === lastPage}>
                <div className="arrow right" />
            </li>
        </ul>
    );
};

export default Pagination;
