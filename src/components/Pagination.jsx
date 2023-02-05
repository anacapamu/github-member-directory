import styled from 'styled-components';
import { usePagination } from '../hooks/usePagination.js';
import './Pagination.css';

const Pagination = (props) => {
    const {
        onPageChange,
        totalItems,
        neighborCount = 1,
        currentPage,
        pageSize,
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalItems,
        neighborCount,
        pageSize,
    });

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

    const PaginationContainer = styled.ul`
        display: flex;
        place-content: center;
        gap: 20px;
        list-style-type: none;
    `;

    const LeftArrow = styled.div`
        border: solid;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 3px;
        transform: rotate(135deg);
        -webkit-transform: rotate(135deg);
    `;

    const RightArrow = styled.div`
        border: solid;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 3px;
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
    `;

    return (
        <PaginationContainer>
            {currentPage !== 1 ? (
                <li onClick={onPrevious}>
                    <LeftArrow />
                </li>
            ) : (
                ''
            )}
            {paginationRange.map((pageNumber, index) => {
                if (pageNumber === '...') {
                    return <li>&#8230;</li>;
                }
                return (
                    <li
                        onClick={() => onPageChange(pageNumber)}
                        key={index}
                        className={pageNumber === currentPage ? 'selected' : ''}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            {currentPage !== lastPage ? (
                <li onClick={onNext}>
                    <RightArrow />
                </li>
            ) : (
                ''
            )}
        </PaginationContainer>
    );
};

export default Pagination;
