import React, { useState, useEffect } from "react";

const useMousePosition = (ref: React.MutableRefObject<HTMLElement>) => {
    const [position, setPosition] = useState({
        clientX: 0,
        clientY: 0,
    });

    const updatePosition = (event: MouseEvent) => {
        const target = ref.current
        const { width, height, left, top } = target.getBoundingClientRect()
        const { clientX, clientY } = event;

        setPosition({
            clientX: (clientX - left) / width,
            clientY: (clientY - top) / height,
        });
    };

    useEffect(() => {
        document.addEventListener("mousemove", updatePosition, false);
        document.addEventListener("mouseenter", updatePosition, false);

        return () => {
            document.removeEventListener("mousemove", updatePosition);
            document.removeEventListener("mouseenter", updatePosition);
        };
    });

    return position;
};

export default useMousePosition;