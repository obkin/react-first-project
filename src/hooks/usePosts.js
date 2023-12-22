import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        console.log('[!] called function: getSortedPosts'); // warning
        if (sort) {
          if (sort !== 'date') {
            return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]));
          } else {
            return [...posts].sort((a,b) => b.createdAt - a.createdAt);
          }
        } else {
          return posts;
        }
    }, [sort, posts]);

    return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
    }, [query, sortedPosts]);

    return sortedAndSearchedPosts;
}