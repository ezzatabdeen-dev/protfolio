"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export const ProtectedImage = ({ src, alt, width, height, className, ...rest }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleContextMenu = (e) => {
      if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <div ref={wrapperRef} style={{ userSelect: "none", pointerEvents: "auto" }}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        draggable={false}
        style={{ pointerEvents: "none" }}
        {...rest}
      />
    </div>
  );
};