'use strict';

let {
    n
} = require('kabanery');

let triangle = require('../../lib/triangle');

document.body.appendChild(n('div', {
    style: triangle({
        direction: 'up',
        left: 5,
        right: 5,
        bottom: 100
    })
}));

document.body.appendChild(n('div', {
    style: triangle({
        direction: 'up',
        left: 5,
        right: 5,
        bottom: 10
    })
}));

document.body.appendChild(n('div', {
    style: triangle({
        direction: 'down',
        left: 5,
        right: 5,
        top: 10
    })
}));

document.body.appendChild(n('div', {
    style: triangle({
        direction: 'left',
        right: 10,
        top: 5,
        bottom: 5
    })
}));

document.body.appendChild(n('div', {
    style: triangle({
        direction: 'right',
        left: 5,
        top: 5,
        bottom: 5
    })
}));

