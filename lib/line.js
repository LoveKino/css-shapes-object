'use strict';

let {
    n
} = require('kabanery');

module.exports = ({
    color = 'black', bold = 3, length = 20, direction = 'vertical'
} = {}) => {
    return direction === 'vertical' ?
        n('div', {
            style: {
                width: bold,
                height: length,
                backgroundColor: color
            }
        }) : n('div', {
            style: {
                height: bold,
                width: length,
                backgroundColor: color
            }
        });
};
