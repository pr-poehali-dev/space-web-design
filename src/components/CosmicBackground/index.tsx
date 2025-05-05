
import React, { useEffect, useRef } from 'react';
import { Star } from './Star';
import { Nebula } from './Nebula';
import { ShootingStar } from './ShootingStar';
import { Galaxy } from './Galaxy';

interface CosmicObjects {
  stars: Star[];
  nebulas: Nebula[];
  shootingStars: ShootingStar[];
  galaxies: Galaxy[];
}

const CosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const cosmicObjectsRef = useRef<CosmicObjects | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions and handle resize
    const setCanvasDimensions = () => {
      const width = window.innerWidth;
      const height = Math.max(window.innerHeight * 1.2, document.body.scrollHeight);
      
      canvas.width = width;
      canvas.height = height;
      
      // Create cosmic objects if they don't exist or if resizing
      if (!cosmicObjectsRef.current) {
        cosmicObjectsRef.current = createCosmicObjects(width, height);
      } else {
        // Just recreate all objects to fit new dimensions properly
        cosmicObjectsRef.current = createCosmicObjects(width, height);
      }
      
      // Redraw immediately after resize
      if (cosmicObjectsRef.current) {
        drawScene(ctx, cosmicObjectsRef.current, width, height);
      }
    };

    // Initialize cosmic objects
    function createCosmicObjects(canvasWidth: number, canvasHeight: number): CosmicObjects {
      const stars: Star[] = [];
      const nebulas: Nebula[] = [];
      const shootingStars: ShootingStar[] = [];
      const galaxies: Galaxy[] = [];
      
      // Create starry background with density based on screen size
      const starDensity = Math.min(0.0003, 0.0001 + (canvasWidth * canvasHeight) / (1920 * 1080) * 0.0002);
      const starCount = Math.floor(canvasWidth * canvasHeight * starDensity);
      
      for (let i = 0; i < starCount; i++) {
        stars.push(new Star(canvasWidth, canvasHeight));
      }
      
      // Scale nebula count based on screen size
      const nebulaCount = Math.max(3, Math.min(8, Math.floor(canvasWidth * canvasHeight / (1920 * 1080) * 8)));
      for (let i = 0; i < nebulaCount; i++) {
        nebulas.push(new Nebula(canvasWidth, canvasHeight));
      }
      
      for (let i = 0; i < 5; i++) {
        shootingStars.push(new ShootingStar(canvasWidth, canvasHeight));
      }
      
      galaxies.push(new Galaxy(canvasWidth, canvasHeight));

      return {
        stars,
        nebulas,
        shootingStars,
        galaxies
      };
    }

    // Draw the space background
    function drawSpaceBackground(ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) {
      // Create deep space background
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);
      bgGradient.addColorStop(0, 'rgba(5, 13, 24, 1)');
      bgGradient.addColorStop(0.5, 'rgba(9, 21, 38, 1)');
      bgGradient.addColorStop(1, 'rgba(3, 8, 12, 1)');
      
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    }

    // Update and draw all cosmic objects
    function drawScene(
      ctx: CanvasRenderingContext2D,
      cosmicObjects: CosmicObjects,
      canvasWidth: number, 
      canvasHeight: number
    ) {
      // Clear canvas
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      
      // Draw background
      drawSpaceBackground(ctx, canvasWidth, canvasHeight);
      
      // Update and draw all objects
      cosmicObjects.galaxies.forEach(galaxy => {
        galaxy.update();
        galaxy.draw(ctx);
      });
      
      cosmicObjects.nebulas.forEach(nebula => {
        nebula.update();
        nebula.draw(ctx);
      });
      
      cosmicObjects.stars.forEach(star => {
        star.update();
        star.draw(ctx);
      });
      
      cosmicObjects.shootingStars.forEach(shootingStar => {
        shootingStar.update(canvasWidth, canvasHeight);
        shootingStar.draw(ctx);
      });
    }

    // Initial setup
    setCanvasDimensions();
    
    // Add resize listener
    window.addEventListener('resize', setCanvasDimensions);
    
    // Check document height periodically and adjust canvas if needed
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        if (entry.target === document.body) {
          const newHeight = Math.max(window.innerHeight * 1.2, document.body.scrollHeight);
          if (canvas.height !== newHeight) {
            canvas.height = newHeight;
            // No need to recreate objects, just adjust canvas height
            if (cosmicObjectsRef.current) {
              drawScene(ctx, cosmicObjectsRef.current, canvas.width, newHeight);
            }
          }
        }
      }
    });
    
    resizeObserver.observe(document.body);

    // Animation loop
    const animate = () => {
      if (ctx && cosmicObjectsRef.current) {
        drawScene(ctx, cosmicObjectsRef.current, canvas.width, canvas.height);
      }
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      resizeObserver.disconnect();
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
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
