import React from 'react';
import { usePagination } from '../../../hooks/usePagination';

const Pagination = ({ totalPostsCount, postsPerPageLimit, pageNumber, setPageNumber }) => {
    const pagesCounter = usePagination(totalPostsCount, postsPerPageLimit);

    return (
        <div className='pageNumber__wrapper'>
            {pagesCounter.map(p =>
            <span 
                key={p}
                onClick={() => setPageNumber(p)}
                className={ pageNumber === p ? 'pageNumber pageNumber-active' : 'pageNumber' }
            >
                {p}
            </span> 
            )}
      </div>
    );
};

export default Pagination;