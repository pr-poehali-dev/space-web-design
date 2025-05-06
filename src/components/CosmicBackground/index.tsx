
import React, { useEffect, useRef } from 'react';
import { createCosmicObjects, updateAndDrawObjects } from './utils';

const CosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const cosmicObjectsRef = useRef<ReturnType<typeof createCosmicObjects> | null>(null);

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

    // Drawing function
    const drawScene = (
      ctx: CanvasRenderingContext2D,
      cosmicObjects: ReturnType<typeof createCosmicObjects>,
      canvasWidth: number, 
      canvasHeight: number
    ) => {
      updateAndDrawObjects(ctx, cosmicObjects, canvasWidth, canvasHeight);
    };

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
