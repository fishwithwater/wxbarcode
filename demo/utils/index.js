var barcode = require('./barcode');
var qrcode = require('./qrcode');

function barc(id, code, width, height, callback) {
	wx.createSelectorQuery()
    .select(id) // 在 WXML 中填入的 id
    .node(({ node: canvas }) => {
		 // Canvas 绘制上下文
		 const ctx = canvas.getContext('2d');
		 canvas.width = width;
		 canvas.height = height;
		 barcode.code128(ctx, code, width, height);
		 if (callback) {
			callback();
		 }
	 }).exec({});
}

function qrc(id, code, width, height, callback) {
	wx.createSelectorQuery()
    .select(id) // 在 WXML 中填入的 id
    .node(({ node: canvas }) => {
        // Canvas 绘制上下文
        const ctx = canvas.getContext('2d');
        canvas.width = width;
		canvas.height = height;

		qrcode.api.draw(code, {
			ctx,
			width: canvas.width,
			height: canvas.height
		});
		if (callback) {
			callback();
		}
    }).exec({});
}

module.exports = {
	barcode: barc,
	qrcode: qrc
}