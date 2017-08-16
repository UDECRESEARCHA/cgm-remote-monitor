import '../static/css/drawer.css';
import '../static/css/dropdown.css';
import '../static/css/sgv.css';
import '../node_modules/jquery.tipsy/src/jquery.tipsy.css';


$ = require("jquery");

require('jquery-ui-bundle');

window._ = require('lodash');
window.d3 = require('d3');

require('jquery.tipsy');

require('crossfilter');

window.Storage = require('js-storage');

require('flot');
require('../node_modules/flot/jquery.flot.time');
require('../node_modules/flot/jquery.flot.pie');
require('../node_modules/flot/jquery.flot.fillbetween');

window.moment = require('moment-timezone');

window.Nightscout = window.Nightscout || {};

window.Nightscout = {
    client: require('../lib/client'),
    units: require('../lib/units')(),
    report_plugins: require('../lib/report_plugins/')(),
    admin_plugins: require('../lib/admin_plugins/')()
};

console.info('Nightscout bundle ready');