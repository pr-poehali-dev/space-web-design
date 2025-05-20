import React, { useEffect, useRef } from 'react';

const CosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions and handle resize
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(window.innerHeight * 1.2, document.body.scrollHeight);
      draw(); // Redraw when resize
    };

    // Initial setup
    setCanvasDimensions();
    
    // Add resize listener
    window.addEventListener('resize', setCanvasDimensions);
    
    // Check document height periodically and adjust canvas if needed
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        if (entry.target === document.body) {
          canvas.height = Math.max(window.innerHeight * 1.2, document.body.scrollHeight);
          draw();
        }
      }
    });
    
    resizeObserver.observe(document.body);

    // Create stars
    class Star {
      x: number;
      y: number;
      size: number;
      opacity: number;
      speed: number;
      maxOpacity: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
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
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    // Create shooting stars
    class ShootingStar {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
      active: boolean;
      
      constructor() {
        this.reset();
      }
      
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height/3;
        this.length = Math.random() * 80 + 20;
        this.speed = Math.random() * 10 + 5;
        this.opacity = 0;
        this.active = false;
        
        // Randomly activate
        setTimeout(() => {
          this.active = Math.random() > 0.97;
        }, Math.random() * 5000);
      }
      
      update() {
        if (this.active) {
          this.x += this.speed;
          this.y += this.speed/2;
          this.opacity += 0.025;
          
          if (this.opacity >= 1) {
            this.opacity = 1;
          }
          
          if (this.x > canvas.width || this.y > canvas.height) {
            this.reset();
          }
        }
      }
      
      draw() {
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

    // Create nebula clouds
    class Nebula {
      x: number;
      y: number;
      size: number;
      color: string;
      opacity: number;
      pulseSpeed: number;
      maxOpacity: number;
      minOpacity: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
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
      
      draw() {
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

    // Create galaxy
    class Galaxy {
      x: number;
      y: number;
      size: number;
      rotation: number;
      rotationSpeed: number;
      
      constructor() {
        this.x = canvas.width * (0.3 + Math.random() * 0.4); // Position in center-ish area
        this.y = canvas.height * 0.3; // Keep galaxy in top section
        this.size = Math.min(canvas.width, canvas.height) * 0.25;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = 0.0001;
      }
      
      update() {
        this.rotation += this.rotationSpeed;
      }
      
      draw() {
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

    // Initialize objects
    const stars: Star[] = [];
    const nebulas: Nebula[] = [];
    const shootingStars: ShootingStar[] = [];
    const galaxies: Galaxy[] = [];
    
    // Create starry background with density based on screen size
    const starDensity = Math.min(0.0003, 0.0001 + (canvas.width * canvas.height) / (1920 * 1080) * 0.0002);
    const starCount = Math.floor(canvas.width * canvas.height * starDensity);
    
    for (let i = 0; i < starCount; i++) {
      stars.push(new Star());
    }
    
    // Scale nebula count based on screen size
    const nebulaCount = Math.max(3, Math.min(8, Math.floor(canvas.width * canvas.height / (1920 * 1080) * 8)));
    for (let i = 0; i < nebulaCount; i++) {
      nebulas.push(new Nebula());
    }
    
    for (let i = 0; i < 5; i++) {
      shootingStars.push(new ShootingStar());
    }
    
    galaxies.push(new Galaxy());

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create deep space background
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGradient.addColorStop(0, 'rgba(5, 13, 24, 1)');
      bgGradient.addColorStop(0.5, 'rgba(9, 21, 38, 1)');
      bgGradient.addColorStop(1, 'rgba(3, 8, 12, 1)');
      
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw all objects
      galaxies.forEach(galaxy => {
        galaxy.update();
        galaxy.draw();
      });
      
      nebulas.forEach(nebula => {
        nebula.update();
        nebula.draw();
      });
      
      stars.forEach(star => {
        star.update();
        star.draw();
      });
      
      shootingStars.forEach(shootingStar => {
        shootingStar.update();
        shootingStar.draw();
      });
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      draw();
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -10 }}
      aria-hidden="true"
    />
  );
};

export default CosmicBackground;