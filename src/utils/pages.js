export const getTotalPages = (totalPosts, postsLimit) => {
    console.log('getTotalPages worked'); // log
    return Math.ceil(totalPosts / postsLimit);
};

export const createButtonsArray = (totalPages) => {
    const res = [];

    for (let i = 0; i < totalPages; i++) {
        res.push(i + 1);
    }

    console.log('createButtonsArray worked'); // log
    return res;
};
