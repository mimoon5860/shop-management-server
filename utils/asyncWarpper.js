const asyncWrapper = (wrapperFunc) => {
    try {
        return wrapperFunc();
    } catch (err) {
        throw new Error(err);
    }
}

module.exports = asyncWrapper;