'use strict';

let angle = require('../../lib/angle');

let {
    n
} = require('kabanery');

document.body.appendChild(angle());

document.body.appendChild(n('br'));

document.body.appendChild(angle({
    color: 'black',
    bold: 4,
    length: 20
}));

document.body.appendChild(n('br'));

document.body.appendChild(angle({
    color: 'black',
    bold: 1,
    length: 20,
    direction: 'left'
}));

document.body.appendChild(n('br'));

document.body.appendChild(angle({
    direction: 'right'
}));

document.body.appendChild(n('br'));

document.body.appendChild(angle({
    color: 'red',
    direction: 'top'
}));

document.body.appendChild(n('br'));

document.body.appendChild(angle({
    direction: 'bottom',
    length: 5
}));
