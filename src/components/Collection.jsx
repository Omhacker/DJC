import React, { useRef, useEffect } from 'react';
import './collection.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const frameCount = 32;

function files(index) {
    var data = `
        ./src/components/images/scroller/necklace11.png
        ./src/components/images/scroller/necklace12.png
        ./src/components/images/scroller/necklace13.png
        ./src/components/images/scroller/necklace14.png
        ./src/components/images/scroller/necklace15.png
        ./src/components/images/scroller/necklace16.png
        ./src/components/images/scroller/necklace17.png
        ./src/components/images/scroller/necklace18.png
        ./src/components/images/scroller/necklace19.png
        ./src/components/images/scroller/necklace20.png
        ./src/components/images/scroller/necklace21.png
        ./src/components/images/scroller/necklace22.png
        ./src/components/images/scroller/necklace23.png
        ./src/components/images/scroller/necklace24.png
        ./src/components/images/scroller/necklace25.png
        ./src/components/images/scroller/necklace26.png
        ./src/components/images/scroller/necklace27.png
        ./src/components/images/scroller/necklace28.png
        ./src/components/images/scroller/necklace29.png
        ./src/components/images/scroller/necklace30.png
        ./src/components/images/scroller/necklace31.png
        ./src/components/images/scroller/necklace32.png
        ./src/components/images/scroller/necklace33.png
        ./src/components/images/scroller/necklace34.png
        ./src/components/images/scroller/necklace35.png
        ./src/components/images/scroller/necklace36.png
        ./src/components/images/scroller/necklace37.png
        ./src/components/images/scroller/necklace38.png
        ./src/components/images/scroller/necklace39.png
        ./src/components/images/scroller/necklace40.png
        ./src/components/images/scroller/necklace41.png
        ./src/components/images/scroller/necklace42.png 
    `;
    return data.split("\n")[index];
}

function Collection() {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const imageSeq = useRef({ frame: 0 }).current;

    const render = () => {
        const context = contextRef.current;
        const images = context.images; // Assuming you store the images array in the context
        if (images && images.length > 0) {
            const currentImage = images[imageSeq.frame];
            if (context && currentImage && currentImage.complete && currentImage.naturalWidth !== 0) {
                scaleImage(currentImage, context);
            }
        }
    };

    const scaleImage = (img, ctx) => {
        const canvas = ctx.canvas;
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShiftX = (canvas.width - img.width * ratio) / 2;
        const centerShiftY = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShiftX,
            centerShiftY,
            img.width * ratio,
            img.height * ratio
        );
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        contextRef.current = context;
        context.images = []; // Initialize the images array in the context

        const handleResize = () => {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render();
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Ensure initial resize

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = files(i);
            img.onload = () => {
                console.log(`Image ${i} loaded successfully`);
                context.images.push(img); // Add the loaded image to the images array in the context
                if (i === 0) {
                    render(); // Ensure the first image is rendered
                }
            };
            img.onerror = () => console.error(`Image ${i} failed to load`);
        }

        gsap.to(imageSeq, {
            frame: frameCount - 1,
            snap: "frame",
            ease: "none",
            scrollTrigger: {
                scrub: 0.15,
                trigger: "#page>canvas",
                start: "top top",
                end: "100% top",
                scroller: "#collection",
            },
            onUpdate: render,
        });

        ScrollTrigger.create({
            trigger: "#page>canvas",
            pin: true,
            scroller: "#collection",
            start: "top top",
            end: "100% top",
        });

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [imageSeq]);

    return (
        <section id="collection">
            <div id="page">
                <canvas ref={canvasRef}></canvas>
            </div>
        </section>
    );
}

export default Collection;
