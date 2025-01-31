import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export const HoverCardContent = motion(({ className, ...props }: any) => (
  <div
    className={cn(
      'rounded-lg bg-white/90 p-4 shadow-lg backdrop-blur-sm',
      className
    )}
    {...props}
  />
));