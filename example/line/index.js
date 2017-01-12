'use strict';

let line = require('../../lib/line');

document.body.appendChild(line({
    color: 'black',
    bold: 3,
    length: 20
}));

document.body.appendChild(line({
    color: 'red',
    bold: 3,
    length: 20,
    direction: 'horizontal'
}));
