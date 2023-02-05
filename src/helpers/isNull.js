export const isNull = (object) => {
    for (const [key, value] of Object.entries(object)) {
        if (key === 'publicRepos' && !value) {
            object[key] = 0;
        } else if (!value) {
            object[key] = 'N/A';
        }
    }
    return object;
};
