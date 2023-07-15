"use client";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../data/data";

export const Notifications = ({ projects }) => (
  <AnimatePresence>
    {projects.map((project) => (
      <motion.li
        key={project.title}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {project.body1}
      </motion.li>
    ))}
  </AnimatePresence>
);
