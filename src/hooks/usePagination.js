import { useMemo } from 'react';
import { range } from '../helpers/range';

export const usePagination = ({
    totalItems,
    pageSize,
    neighborCount = 1,
    currentPage,
}) => {
    const paginationRange = useMemo(() => {
        const totalPages = Math.ceil(totalItems / pageSize);

        // Pages count = siblingCount + firstPage + lastPage + currentPage + 2*DOTS
        const totalPageNumbers = neighborCount + 5;

        const DOTS = '...';
        /*
        Case 1:
        If the number of pages is less than the page numbers we want to show in our
        paginationComponent, we return the range [1..totalPageCount]
      */
        if (totalPageNumbers >= totalPages) {
            return range(1, totalPages);
        }

        /*
          Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
      */
        const leftNeighborIndex = Math.max(currentPage - neighborCount, 1);
        const rightNeighborIndex = Math.min(
            currentPage + neighborCount,
            totalPages
        );

        /*
        We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
      */
        const showLeftDots = leftNeighborIndex > 2;
        const shouldShowRightDots = rightNeighborIndex < totalPages - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPages;

        /*
          Case 2: No left dots to show, but rights dots to be shown
      */
        if (!showLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * neighborCount;
            let leftRange = range(1, leftItemCount);

            return [...leftRange, DOTS, totalPages];
        }

        /*
          Case 3: No right dots to show, but left dots to be shown
      */
        if (showLeftDots && !shouldShowRightDots) {
            let rightItemCount = 3 + 2 * neighborCount;
            let rightRange = range(
                totalPages - rightItemCount + 1,
                totalPages
            );
            return [firstPageIndex, DOTS, ...rightRange];
        }

        /*
          Case 4: Both left and right dots to be shown
      */
        if (showLeftDots && shouldShowRightDots) {
            let middleRange = range(leftNeighborIndex, rightNeighborIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }
    }, [totalItems, pageSize, neighborCount, currentPage]);

    return paginationRange;
};