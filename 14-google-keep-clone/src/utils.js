export const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [remove] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, remove);

    return result;
}