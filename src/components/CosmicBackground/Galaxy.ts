
export class Galaxy {
  x: number;
  y: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  
  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = canvasWidth * (0.3 + Math.random() * 0.4); // Position in center-ish area
    this.y = canvasHeight * 0.3; // Keep galaxy in top section
    this.size = Math.min(canvasWidth, canvasHeight) * 0.25;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = 0.0001;
  }
  
  update() {
    this.rotation += this.rotationSpeed;
  }
  
  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    
    // Create spiral arms
    for (let i = 0; i < 2; i++) {
      ctx.save();
      ctx.rotate(i * Math.PI);
      
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
      gradient.addColorStop(0.1, 'rgba(252, 70, 107, 0.15)');
      gradient.addColorStop(0.4, 'rgba(63, 94, 251, 0.1)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient;
      
      ctx.beginPath();
      // Draw spiral arm
      for (let r = 0; r < this.size; r += 1) {
        const angle = 0.15 * r;
        const x = r * Math.cos(angle);
        const y = r * Math.sin(angle);
        
        if (r === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      
      ctx.lineWidth = this.size / 4;
      ctx.strokeStyle = gradient;
      ctx.stroke();
      ctx.restore();
    }
    
    // Center of galaxy
    const centerGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size * 0.15);
    centerGradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
    centerGradient.addColorStop(0.5, 'rgba(255, 223, 186, 0.3)');
    centerGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    ctx.fillStyle = centerGradient;
    ctx.beginPath();
    ctx.arc(0, 0, this.size * 0.15, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.restore();
  }
}
