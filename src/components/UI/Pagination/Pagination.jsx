import React from 'react';
import { usePagination } from '../../../hooks/usePagination';

const Pagination = ({ totalPostsCount, postsPerPageLimit, pageNumber, setPageNumber }) => {
    const pagesCounter = usePagination(totalPostsCount, postsPerPageLimit);

    return (
        <div className='pages__wrapper'>
            {pagesCounter.map(p =>
            <span 
                key={p}
                onClick={() => setPageNumber(p)}
                className={ pageNumber === p ? 'page page-active' : 'page' }
            >
                {p}
            </span> 
            )}
      </div>
    );
};

export default Pagination;