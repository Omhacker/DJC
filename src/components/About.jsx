import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import './about.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollerAnimation = () => {
  const mainRef = useRef(null);
  const canvasRef = useRef(null);
  const [imageSeq, setImageSeq] = useState({ frame: 1 });
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
      el: mainRef.current,
      smooth: true,
    });

    // ScrollTrigger setup
    ScrollTrigger.scrollerProxy('#main', {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: mainRef.current.style.transform ? 'transform' : 'fixed',
    });

    ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
    ScrollTrigger.refresh();

    // Load images
    const frameCount = 230;
    const newImages = [];
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = `components/images/scroller_sequence/djc_${String(i + 1).padStart(5, '0')}.png`;
      newImages.push(img);
    }
    setImages(newImages);

    // GSAP animation
    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        scrub: 0.15,
        trigger: '#page>canvas',
        start: 'top top',
        end: '600% top',
        scroller: '#main',
      },
      onUpdate: render,
    });

    // Pin sections
    ScrollTrigger.create({
      trigger: '#page>canvas',
      pin: true,
      scroller: '#main',
      start: 'top top',
      end: '600% top',
    });

    ['#page1', '#page2', '#page3'].forEach(selector => {
      gsap.to(selector, {
        scrollTrigger: {
          trigger: selector,
          start: 'top top',
          end: 'bottom top',
          pin: true,
          scroller: '#main',
        },
      });
    });

    // Cleanup
    return () => {
      locoScroll.destroy();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const render = () => {
    if (canvasRef.current && images[imageSeq.frame]) {
      const context = canvasRef.current.getContext('2d');
      scaleImage(images[imageSeq.frame], context);
    }
  };

  const scaleImage = (img, ctx) => {
    const canvas = ctx.canvas;
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  };

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        render();
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="main" ref={mainRef}>
      <div id="page">
        <div id="loop">
          <h1><b>STORY</b> BEHIND SPARKLE <b><i>OF</i></b> <span>DIAMOND</span> JEWELLERY <span><i>COMPANY</i></span></h1>
          <h1><b>STORY</b> BEHIND SPARKLE <b><i>OF</i></b> <span>DIAMOND</span> JEWELLERY <span><i>COMPANY</i></span></h1>
          <h1><b>STORY</b> BEHIND SPARKLE <b><i>OF</i></b> <span>DIAMOND</span> JEWELLERY <span><i>COMPANY</i></span></h1>
        </div>
        <h3>CYBERFICTION AIMS TO BE A DECENTRALIZED COMMUNITY THAT CAN <br /> CREATE NEW VALUES AND PROFITS THROUGH PLAY IN THE VIRTUAL <br /> WORLD.</h3>
        <h4>...SCROLL TO READ</h4>
        <canvas ref={canvasRef}></canvas>
      </div>
      <div id="page1">
            <div id="right-text">
                <h3>CYBERFICTION / KEY WORD</h3>
                <h1>HAVE FUN<br/>LET'S PLAY<br/>JUST BE TOGETHER</h1>
            </div>
            <div id="left-text">
                <h1>MAKE A STORY<br/>TAKE A CHANCE<br/>BUILD AND OWNED</h1>
                <h3>..AND MAINTAIN GOOD HUMANITY</h3>
            </div>
        </div>
        <div id="page2">
            <div id="text1">
                <h3>CYBERFICTION / HAVE FUN</h3>
                <h1>LET'S<br/>HAVE FUN<br/>TOGETHER</h1>
            </div>
            <div id="text2">
                <p>LET'S HAVE A BLAST! LET'S JUST THROW AWAY AGE, GENDER, REGION, <br/> STATUS, ETC., DON'T COMPETE, DON'T FIGHT, COOPERATE AND SHARE <br/> WITH EACH OTHER AND ENJOY IT TOGETHER! SO THAT YOU CAN STAND <br/> THERE IN THE NOT-TOO-DISTANT FUTURE AND DREAM OF ANOTHER NEW <br/> FUTURE</p>
            </div>
        </div>
        <div id="page3">
            <div id="text3">
                <h3>CYBERFICTION / PLAYGROUND</h3>
                <h1>CYBERFIELD<br/>IS OUR<br/>PLAYGROUND</h1>
            </div>
        </div>
    </div>
  );
};

export default ScrollerAnimation;