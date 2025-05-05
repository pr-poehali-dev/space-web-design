
import { Star } from './Star';
import { Nebula } from './Nebula';
import { ShootingStar } from './ShootingStar';
import { Galaxy } from './Galaxy';

export interface CosmicObjects {
  stars: Star[];
  nebulas: Nebula[];
  shootingStars: ShootingStar[];
  galaxies: Galaxy[];
}

export function createCosmicObjects(canvasWidth: number, canvasHeight: number): CosmicObjects {
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

export function drawSpaceBackground(
  ctx: CanvasRenderingContext2D, 
  canvasWidth: number, 
  canvasHeight: number
) {
  // Create deep space background
  const bgGradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);
  bgGradient.addColorStop(0, 'rgba(5, 13, 24, 1)');
  bgGradient.addColorStop(0.5, 'rgba(9, 21, 38, 1)');
  bgGradient.addColorStop(1, 'rgba(3, 8, 12, 1)');
  
  ctx.fillStyle = bgGradient;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}

export function updateAndDrawObjects(
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
