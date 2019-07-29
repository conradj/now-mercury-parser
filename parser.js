const Mercury = require('@postlight/mercury-parser');
const { parse: parseUrl } = require('url');
const { getInt, getUrlFromPath, isValidUrl } = require('./validator');

module.exports = async function (req, res) {
    try {
        const { pathname = '/', query = {} } = parseUrl(req.url, true);
        const { type = 'png', quality, fullPage } = query;
        const pathUrl = getUrlFromPath(pathname);
        if (!isValidUrl(pathUrl)) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'text/html');
            res.end(`<h1>Bad Request</h1><p>The url <em>${pathUrl}</em> is not valid.</p>`);
        } else {
            await Mercury.parse(pathUrl).then(result => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(result));
            });

        }
    } catch (e) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Server Error</h1><p>Sorry, there was a problem</p>');
        console.error(e.message);
    }
};
