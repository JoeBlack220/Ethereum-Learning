const routes = require('next-routes')()

// :address represents wildcard
// rules before override the rules that follow
routes
.add('/campaigns/new', '/campaigns/new')
.add('/campaigns/:address', '/campaigns/show')
.add('/campaigns/:address/requests', '/campaigns/requests/index')
.add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;