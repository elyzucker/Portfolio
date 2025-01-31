import { cn } from '@/lib/utils';
import { motion } from "framer-motion";

export const HoverCardContent = motion(({ className, ...props }: export const HoverCardContent = motion.div<{ className?: string }>(
  ({ className, ...props }) => (
    <div className={`hover-card ${className}`} {...props} />
  )
);
) => (
  <div
    className={cn(
      'rounded-lg bg-white/90 p-4 shadow-lg backdrop-blur-sm',
      className
    )}
    {...props}
  />
));
