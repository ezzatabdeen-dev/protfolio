"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./FeaturedProjects.module.css";
import Link from "next/link";
import projects from "@/data/projects.json";
import { RiCodeSSlashLine, RiEyeLine } from "react-icons/ri";
import { FaFolderTree } from "react-icons/fa6";

const rgbToRgba = (rgb, alpha) => {
  const rgbValues = rgb.match(/\d+/g);
  if (!rgbValues) return rgb;
  return `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, ${alpha})`;
};

export const FeaturedProjects = () => {
  const getAverageColor = (imgElement, callback) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const width = (canvas.width = 20);
    const height = (canvas.height = 20);

    context.drawImage(imgElement, 0, 0, width, height);

    let r = 0,
      g = 0,
      b = 0;
    let count = 0;
    const data = context.getImageData(0, 0, width, height).data;

    for (let i = 0; i < data.length; i += 4) {
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
      count++;
    }

    r = Math.floor(r / count);
    g = Math.floor(g / count);
    b = Math.floor(b / count);

    r = Math.floor(r + (255 - r) * 0.6);
    g = Math.floor(g + (255 - g) * 0.6);
    b = Math.floor(b + (255 - b) * 0.6);

    callback(`rgb(${r}, ${g}, ${b})`);
  };

  return (
    <div className={`container ${styles.FeaturedProjectsContainer}`}>
      <div className={styles.FeaturedProjectsWrapper}>
        <div className={styles.wraperTitle}>
          <h3 className={`text-6`}>Featured Projects</h3>
        </div>

        <div className={styles.projectsGrid}>
          {projects.slice(0, 6).map((project) => {
            const imgRef = useRef(null);
            const [bgColor, setBgColor] = useState("#f4f4f4");

            useEffect(() => {
              const img = imgRef.current;
              if (!img) return;

              const handleLoad = () => {
                getAverageColor(img, (color) => setBgColor(color));
              };

              if (img.complete) {
                handleLoad();
              } else {
                img.addEventListener("load", handleLoad);
                return () => img.removeEventListener("load", handleLoad);
              }
            }, []);

            return (
              <div
                key={project.id}
                className={`borderFull ${styles.projectCard}`}
                style={{
                  boxShadow: `0 10px 25px ${rgbToRgba(bgColor, 0.5)}`,
                }}
              >
                <div
                  className={styles.imageWrapper}
                  style={{ backgroundColor: bgColor }}
                >
                  <img
                    ref={imgRef}
                    src={project.image}
                    alt={project.name}
                    width={500}
                    height={300}
                    loading="lazy"
                    className={styles.image}
                  />
                </div>

                <div className={`flexGrow-1 ${styles.content}`}>
                  <h3 className={`text-5`}>{project.name}</h3>
                  <p className={`text-3 line-3`}>{project.description}</p>
                  <div className={styles.techList}>
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className={`text-1`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={`flexGrow-1`}></div>
                  <div className={styles.links}>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-2`}
                    >
                      <RiCodeSSlashLine />
                      View Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-2`}
                      >
                        <RiEyeLine />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.wraperExploreButton}>
          <Link href={`/projects`} className={`text-2`}>
            <FaFolderTree />
            Explore All
          </Link>
        </div>
      </div>
    </div>
  );
};