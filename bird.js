function Bird(option) {
    this.ctx = option.ctx;
    this.x = option.x;
    this.y = option.y;

    this.img = option.birdImg;
    this.imgW = this.img.width / 3;
    this.imgH = this.img.height;
    this.birdImgSpeed = 0;
    this.g = 0.0003;
    this.birdImgMaxSpeed = 0.3;
    this.birdImgIndex = 0;
    this.MaxAngle = 45;
    this.offsetY = 0;
}
Bird.prototype = {
    constructor: Bird,
    drawBird: function (offsetTime) {
        this.ctx.save();
        // 位移
        this.offsetY = offsetTime * this.birdImgSpeed + this.g * offsetTime * offsetTime / 2;
        this.y += this.offsetY;
        // 速度
        this.birdImgSpeed += this.g * offsetTime;
        // 旋转角度
        var birdImgAngle = this.MaxAngle * this.birdImgSpeed / this.birdImgMaxSpeed;
        if (birdImgAngle > this.MaxAngle) {
            birdImgAngle = this.MaxAngle;
        }
        // 平移画布
        ctx.translate(this.x + this.imgW / 2, this.y + this.imgH / 2);
        // 旋转画布
        this.ctx.rotate(Math.PI / 180 * birdImgAngle);
        // 绘制小鸟
        this.ctx.drawImage(this.img, this.imgW * this.birdImgIndex, 0, this.imgW, this.imgH, -this.imgW / 2, -this.imgH / 2, this.imgW, this.imgH);
        this.birdImgIndex++;
        if (this.birdImgIndex > 2) {
            this.birdImgIndex = 0;
        }
        this.ctx.restore();
        // this.x = this.birdImgIndex * this.imgW;
    }
}