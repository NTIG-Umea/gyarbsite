const glob = require('fast-glob');
const fs = require('fs');
// Create a helpful production flag
const isProduction = process.env.NODE_ENV === 'production';

module.exports = (eleventyConfig) => {
    eleventyConfig.addWatchTarget('./src/js/');
    eleventyConfig.addWatchTarget('./src/scss/');
    if (!isProduction) {
        eleventyConfig.addPassthroughCopy('./src/css');
    }
    eleventyConfig.addPassthroughCopy('./src/assets/');
    eleventyConfig.addPassthroughCopy('./src/js/');
    eleventyConfig.addPassthroughCopy('src/robots.txt');
    eleventyConfig.addPassthroughCopy('./src/favicon.ico');

    // Filters
    glob.sync(['src/filters/*.js']).forEach((file) => {
        const filters = require(`./${file}`);
        Object.keys(filters).forEach((name) =>
            eleventyConfig.addFilter(name, filters[name])
        );
    });

    // Shortcodes
    glob.sync(['src/shortcodes/*.js']).forEach((file) => {
        const shortcodes = require(`./${file}`);
        Object.keys(shortcodes).forEach((name) => {
            eleventyConfig.addShortcode(name, shortcodes[name]);
        });
    });

    // 404
    eleventyConfig.setBrowserSyncConfig({
        callbacks: {
            ready: (err, bs) => {
                bs.addMiddleware('*', (req, res) => {
                    const content_404 = fs.readFileSync('_site/404.html');
                    // Add 404 http status code in request header.
                    res.writeHead(404, {
                        'Content-Type': 'text/html; charset=UTF-8',
                    });
                    // Provides the 404 content without redirect.
                    res.write(content_404);
                    res.end();
                });
            },
        },
    });

    return {
        passthroughFileCopy: true,
        dir: {
            input: 'src',
            output: '_site',
        },
    };
};
