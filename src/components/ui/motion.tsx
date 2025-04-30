import React from 'react';

// Define the props interface
interface MotionProps {
  children: React.ReactNode;
  whileHover?: any;
  whileTap?: any;
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  variants?: any;
  className?: string;
  style?: React.CSSProperties;
  layoutId?: string;
  layout?: boolean | string;
  drag?: boolean | "x" | "y";
  dragConstraints?: any;
  dragElastic?: number;
  dragMomentum?: boolean;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  onClick?: () => void;
  onDragStart?: () => void;
  onDragEnd?: () => void;
  onViewportEnter?: () => void;
  onViewportLeave?: () => void;
}

// Create a basic animation component that simulates framer-motion functionality
export const motion = {
  div: React.forwardRef<HTMLDivElement, MotionProps>(
    ({ children, whileHover, transition, initial, animate, className, style, onClick, ...rest }, ref) => {
      // Simple state for hover effect
      const [isHovered, setIsHovered] = React.useState(false);
      
      // Calculate styles based on animation props
      const getStyles = () => {
        let combinedStyles: React.CSSProperties = { ...style };
        
        // Apply hover styles when hovered
        if (isHovered && whileHover) {
          combinedStyles = {
            ...combinedStyles,
            ...(typeof whileHover === 'object' ? whileHover : {}),
          };
        }
        
        // Apply transition
        if (transition) {
          const { duration, ease } = transition;
          combinedStyles.transition = `all ${duration || 0.3}s ${ease || 'ease'}`;
        } else {
          combinedStyles.transition = 'all 0.3s ease';
        }
        
        return combinedStyles;
      };
      
      return (
        <div
          ref={ref}
          className={className}
          style={getStyles()}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onClick}
          {...rest}
        >
          {children}
        </div>
      );
    }
  ),
  
  // Add other HTML elements as needed
  section: React.forwardRef<HTMLElement, MotionProps>(
    ({ children, className, style, ...rest }, ref) => (
      <section ref={ref} className={className} style={style} {...rest}>
        {children}
      </section>
    )
  ),
  
  button: React.forwardRef<HTMLButtonElement, MotionProps & { type?: 'button' | 'submit' | 'reset' }>(
    ({ children, className, style, type = 'button', ...rest }, ref) => (
      <button ref={ref} type={type} className={className} style={style} {...rest}>
        {children}
      </button>
    )
  ),
  
  span: React.forwardRef<HTMLSpanElement, MotionProps>(
    ({ children, className, style, ...rest }, ref) => (
      <span ref={ref} className={className} style={style} {...rest}>
        {children}
      </span>
    )
  ),
  
  p: React.forwardRef<HTMLParagraphElement, MotionProps>(
    ({ children, className, style, ...rest }, ref) => (
      <p ref={ref} className={className} style={style} {...rest}>
        {children}
      </p>
    )
  ),
  
  img: React.forwardRef<HTMLImageElement, MotionProps & { src: string; alt: string }>(
    ({ className, style, src, alt, ...rest }, ref) => (
      <img ref={ref} className={className} style={style} src={src} alt={alt} {...rest} />
    )
  ),
  
  ul: React.forwardRef<HTMLUListElement, MotionProps>(
    ({ children, className, style, ...rest }, ref) => (
      <ul ref={ref} className={className} style={style} {...rest}>
        {children}
      </ul>
    )
  ),
  
  li: React.forwardRef<HTMLLIElement, MotionProps>(
    ({ children, className, style, ...rest }, ref) => (
      <li ref={ref} className={className} style={style} {...rest}>
        {children}
      </li>
    )
  ),
};

export default motion;
