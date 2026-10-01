"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionTitle } from "./section-title";
import { DrawablyBadge, DrawablyCard, DrawablyLink } from "./drawably";
import { allProjects, type Project } from "@/lib/projects-data";

interface ProjectsProps {
  projects?: Project[];
  title?: string;
}

export function Projects({ projects = allProjects, title = "Fun Projects" }: ProjectsProps) {
  return (
    <section id="projects">
      <SectionTitle title={title} />

      <div className="grid gap-6">
        {projects.map((project, index) => {
          const tilt = index % 2 === 0 ? "-rotate-2" : "rotate-2";
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <DrawablyCard className="p-5 sm:p-6 flex flex-col sm:flex-row gap-6">
                {/* Photo taped to the page */}
                <a
                  href={project.liveLink ?? project.githubLink ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative shrink-0 w-full sm:w-[42%] mt-2 ${tilt} transition-transform duration-300 ease-pen hover:rotate-0`}
                  aria-label={`Open ${project.name}`}
                >
                  <span className="tape" aria-hidden="true" />
                  <div className="aspect-video overflow-hidden bg-paper-2 shadow-[3px_4px_0_rgba(24,24,27,0.12)]">
                    {project.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={project.image}
                        alt={project.name}
                        className="h-full w-full object-cover object-top"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center font-pen text-ink-3">
                        preview
                      </div>
                    )}
                  </div>
                </a>

                {/* Notes */}
                <div className="flex flex-1 flex-col gap-3 min-w-0">
                  <h3 className="font-pen text-3xl leading-none text-ink">{project.name}</h3>
                  <p className="text-sm leading-relaxed text-ink-2">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 font-pen">
                    {project.tags.map((tag) => (
                      <DrawablyBadge key={tag} className="text-sm" width={1.5}>
                        {tag}
                      </DrawablyBadge>
                    ))}
                  </div>

                  {(project.liveLink || project.githubLink) && (
                    <div className="mt-auto pt-2 flex flex-wrap gap-2 font-pen text-base">
                      {project.liveLink && (
                        <DrawablyLink
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gap-1 px-3 py-1 text-ink"
                          width={1.5}
                        >
                          live <ArrowUpRight className="h-3.5 w-3.5" />
                        </DrawablyLink>
                      )}
                      {project.githubLink && (
                        <DrawablyLink
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gap-1 px-3 py-1 text-ink"
                          tone="neutral"
                          width={1.5}
                        >
                          github <ArrowUpRight className="h-3.5 w-3.5" />
                        </DrawablyLink>
                      )}
                    </div>
                  )}
                </div>
              </DrawablyCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
