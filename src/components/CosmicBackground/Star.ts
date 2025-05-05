
export class Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  maxOpacity: number;
  
  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.size = Math.random() * 1.5 + 0.5;
    this.opacity = Math.random();
    this.speed = Math.random() * 0.05;
    this.maxOpacity = Math.random() * 0.8 + 0.2;
  }
  
  update() {
    this.opacity += this.speed;
    if (this.opacity > this.maxOpacity || this.opacity < 0) {
      this.speed = -this.speed;
    }
  }
  
  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.fill();
  }
}
