module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-deadcss')({
            url: 'https://monitoring.host/pixel.png',
            hash: true,
        }),
    ],
};