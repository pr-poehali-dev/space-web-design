
export class Nebula {
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
  pulseSpeed: number;
  maxOpacity: number;
  minOpacity: number;
  
  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.size = Math.random() * 200 + 100; // Larger nebulas
    
    const colors = [
      'rgba(41, 121, 255, 0.15)',  // Blue
      'rgba(255, 41, 117, 0.15)',  // Pink
      'rgba(138, 43, 226, 0.15)',  // Purple
      'rgba(52, 152, 219, 0.15)',  // Light Blue
      'rgba(192, 57, 43, 0.15)',   // Red
    ];
    
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.opacity = Math.random() * 0.1 + 0.05;
    this.pulseSpeed = Math.random() * 0.002 + 0.001;
    this.maxOpacity = this.opacity + 0.05;
    this.minOpacity = this.opacity - 0.05;
    if (this.minOpacity < 0) this.minOpacity = 0.01;
  }
  
  update() {
    this.opacity += this.pulseSpeed;
    
    if (this.opacity > this.maxOpacity || this.opacity < this.minOpacity) {
      this.pulseSpeed = -this.pulseSpeed;
    }
  }
  
  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    const gradient = ctx.createRadialGradient(
      this.x, this.y, 0, this.x, this.y, this.size
    );
    gradient.addColorStop(0, this.color.replace('0.15', `${this.opacity}`));
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    ctx.fillStyle = gradient;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}
