import { useMemo } from 'react';
import { createButtonsArray, getTotalPages } from '../utils/pages';

export const usePagination = (totalPostsCount, postsPerPageLimit) => {
    const res = useMemo(() => {
        return createButtonsArray(getTotalPages(totalPostsCount, postsPerPageLimit));  
    }, [totalPostsCount, postsPerPageLimit]);

    return res;
};
