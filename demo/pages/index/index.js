//index.js
var wxbarcode = require('../../utils/index.js');

Page({

    data: {
        code: '1234567890123456789'
    },

    onLoad: function() {
        wxbarcode.barcode('#barcode', '1234567890123456789', 680, 200, () => console.log('finish'));
        wxbarcode.qrcode('#qrcode', '1234567890123456789', 200, 200, () => console.log('finish'));
    }
})
