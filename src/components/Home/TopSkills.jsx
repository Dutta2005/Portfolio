import { IconCloud } from "../magicui/icon-cloud";
import { motion } from "framer-motion";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "tailwindcss",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
   "mongodb",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
];

export function TopSkillsIconCloud() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <>    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mt-14 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold text-white mb-3 pt-7">Top Skills</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">Check out some of my top skills and technologies.</p>
        </motion.div>
      </div>
    <div className="overflow-hidden py-8">
      <IconCloud images={images} />
    </div>
   </>
  );
}