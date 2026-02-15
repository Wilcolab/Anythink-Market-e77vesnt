function toKebabCase(str) {
    return str
        .trim()
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
}