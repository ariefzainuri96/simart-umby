import React from "react";
import { twMerge } from "tailwind-merge";

const CircularLoader = ({ className }: { className?: string }) => {
    const loaderStyle = {
        width: "50px",
        height: "50px",
        border: "5px solid #f3f3f3",
        borderTop: "5px solid #3498db",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
    };

    return (
        <div
            className={twMerge("flex  items-center justify-center", className)}
        >
            <div style={loaderStyle}></div>
            <style>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
        </div>
    );
};

export default CircularLoader;
