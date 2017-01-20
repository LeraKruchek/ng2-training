export function deepCopy(source) {
    let dest = {};

    if (typeof source === 'object') {
        Object.keys(source).forEach((prop) => {
            dest[prop] = deepCopy(source[prop]);
        })
    } else {
        dest = source;
    }

    return dest;
}
