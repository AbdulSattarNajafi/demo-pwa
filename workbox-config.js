module.exports = {
    maximumFileSizeToCacheInBytes: 99000000,
    globDirectory: './',
    globPatterns: ['**/*.{png,svg,ico,ttf,mp4,css,html,js,json}'],
    swDest: 'sw.js',
    ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
};
