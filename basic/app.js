class App {
    constructor() {
        this.canvas = document.createElement("canvas");
        document.body.appendChild(this.canvas);
        // canvas needs the inner content, which is "context"
        this.ctx = this.canvas.getContext('2d');

        // if there's too many pixels at the user display, we must adjust the pixel ration (ex. Retina display)
        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

        // when using method of an object, we have to bind that fn with the original object to clarify which is "this".
        // => can use object-inner variable
        window.addEventListener("resize", this.resize.bind(this), false);
        this.resize();

        // requestAnimationFrame ... animation make callback Function repeatable like p5.js canvas
        window.requestAnimationFrame(this.animate.bind(this));
    }

    // resize the canvas and context considering the display pixelRatio
    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        // scale : changing the horizontal and vertical size of the context 
        this.ctx.scale(this.pixelRatio, this.pixelRatio);
    }

    animate() {
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.ctx.beginPath();
        this.ctx.fillStyle = '#f39c12';
        this.ctx.arc(
            this.stageWidth / 2,
            this.stageHeight / 2,
            200,
            0,
            2 * Math.PI,
        );
        this.ctx.fill(); 
    }
}

window.onload = () => {
    new App();
}