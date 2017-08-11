function Pipe(option) {
    this.ctx = option.ctx;
    this.x = option.x;
    this.topY = 0;
    this.BottomY = 0;
    this.imgTop = option.imgTop;
    this.BottomImg = option.BottomImg;

    this.imgW = option.imgTop.width;
    this.imgH = option.imgTop.height;
    this.speed = 2;
    this.space = 200;

    this.getY();
}
Pipe.prototype = {
    constructor: Pipe,
    drawPipe: function () {
        this.x -= this.speed;
        if (this.x <= -3 * this.imgW) {
            this.x += 6 * this.imgW * 3;
            this.getY();
        }
        // 绘制管道
        this.ctx.drawImage(this.imgTop,this.x,this.topY,this.imgW,this.imgH);
        this.ctx.drawImage(this.BottomImg,this.x,this.BottomY,this.imgW,this.imgH);
        // 绘制管道路径
        this.ctx.rect(this.x,this.topY,this.imgW,this.imgH);
        this.ctx.rect(this.x,this.BottomY,this.imgW,this.imgH);
    },
    getY:function(){
        this.topY = -(Math.random()*250 + 150);
        this.BottomY = this.topY + this.imgH + this.space;
    }
}