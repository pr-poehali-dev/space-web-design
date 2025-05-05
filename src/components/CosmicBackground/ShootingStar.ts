
export class ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  active: boolean;
  
  constructor(canvasWidth: number, canvasHeight: number) {
    this.reset(canvasWidth, canvasHeight);
  }
  
  reset(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight/3;
    this.length = Math.random() * 80 + 20;
    this.speed = Math.random() * 10 + 5;
    this.opacity = 0;
    this.active = false;
    
    // Randomly activate
    setTimeout(() => {
      this.active = Math.random() > 0.97;
    }, Math.random() * 5000);
  }
  
  update(canvasWidth: number, canvasHeight: number) {
    if (this.active) {
      this.x += this.speed;
      this.y += this.speed/2;
      this.opacity += 0.025;
      
      if (this.opacity >= 1) {
        this.opacity = 1;
      }
      
      if (this.x > canvasWidth || this.y > canvasHeight) {
        this.reset(canvasWidth, canvasHeight);
      }
    }
  }
  
  draw(ctx: CanvasRenderingContext2D) {
    if (!this.active) return;
    
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    
    // Calculate end point for the line
    const endX = this.x - this.length;
    const endY = this.y - this.length/2;
    
    // Create gradient
    const gradient = ctx.createLinearGradient(this.x, this.y, endX, endY);
    gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2;
    ctx.lineTo(endX, endY);
    ctx.stroke();
  }
}
