import { motion } from 'framer-motion';

export function SkillBar({
  name,
  level,
}: {
  name: string;
  level: number;
}) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between text-sm sm:text-base text-slate-600">
        <span className="font-medium">{name}</span>
        <span>{level}%</span>
      </div>
      <div className="h-4 sm:h-5 overflow-hidden rounded-full bg-white/50">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full rounded-full bg-blue-400"
        />
      </div>
    </div>
  );
}