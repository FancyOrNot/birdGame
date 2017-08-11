function Sky(option) {
    this.ctx = option.ctx;
    this.x = option.x;
    this.y = option.y;
    this.img = option.img;
    this.w = option.img.width;
    this.H = option.img.height;
    this.Speed = 2;
}
Sky.prototype = {
    constructor: Sky,
    drawSky: function () {
        this.x -= this.Speed;
        if (this.x <= - this.w) {
            this.x += 2 * this.w;
        }
        ctx.drawImage(this.img, this.x, 0, this.w, this.H);
    }
}