import { motion } from 'framer-motion';
import { Project } from '@/lib/types';
import { useState, useRef } from 'react';

export function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={(e) => {
        if (!cardRef.current || !isHovered) return;
        setMousePosition({ x: e.clientX, y: e.clientY });
      }}
    >
      <div className="relative overflow-hidden rounded-[2.5rem] bg-white/20 shadow-[0_15px_30px_-8px_rgba(0,0,0,0.15)] border border-white/30 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.2)] hover:-translate-y-1">
        <div className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-[2.5rem]">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h3 className="text-lg font-medium leading-snug">{project.title}</h3>
          </div>
        </div>
      </div>

      {isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            position: 'fixed',
            left: mousePosition.x,
            top: mousePosition.y,
            transform: 'translate(-50%, -50%)',
          }}
          transition={{
            duration: 0.15,
            ease: 'easeOut',
          }}
          className="fixed z-50 w-[300px] overflow-hidden rounded-2xl border border-white/30 bg-white/20 p-6 shadow-2xl backdrop-blur-md"
        >
          <div className="relative z-10 space-y-4">
            <div>
              <h3 className="text-lg font-medium text-white">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/90">{project.description}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-white/90">Key Tools</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tools.slice(0, 3).map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-white/10 px-3 py-1 text-sm text-white shadow-sm ring-1 ring-white/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-white/90">Goals</h4>
              <ul className="mt-2 space-y-2">
                {project.objectives.slice(0, 2).map((objective, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-white/90">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                    <span className="leading-relaxed">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
          <div className="absolute inset-0 -z-20 bg-black/20" />
        </motion.div>
      )}
    </motion.div>
  );
}