import React, { useEffect, useRef } from "react";
import "./home.css";
import * as THREE from "three";
import TWEEN from "@tweenjs/tween.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { LensDistortionShader } from "./shaders/LensDistortionShader.js";
import djc_bg_logo from "./images/temp0_bgless.png";
import DiamondRing from "./DiamondRenderer.jsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const sceneRef = useRef(null);

  useEffect(() => {
    // Setup Three.js scene
    const setupScene = () => {
      // DRACO LOADER TO LOAD DRACO COMPRESSED MODELS FROM BLENDER
      const dracoLoader = new DRACOLoader();
      const loader = new GLTFLoader();
      dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
      dracoLoader.setDecoderConfig({ type: "js" });
      loader.setDRACOLoader(dracoLoader);

      // SCENE CREATION
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xc0c0c0);

      // RENDERER CONFIG
      const renderer = new THREE.WebGLRenderer({
        antialias: false,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.outputEncoding = THREE.sRGBEncoding;

      // Append renderer to container div
      containerRef.current.appendChild(renderer.domElement);

      // CAMERAS CONFIG
      const camera = new THREE.PerspectiveCamera(
        35,
        window.innerWidth / window.innerHeight,
        1,
        100
      );
      camera.position.set(34, 16, -20);
      scene.add(camera);

      // MAKE EXPERIENCE FULL SCREEN
      window.addEventListener("resize", () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
        composer.setSize(width, height);
        renderer.setPixelRatio(2);
      });

      // CREATE ORBIT CONTROLS
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableRotate = true;
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.minPolarAngle = Math.PI / 2;
      controls.maxPolarAngle = Math.PI / 2;

      // LOADING GLB/GLTF MODEL FROM BLENDER
      loader.load("src/components/images/diamond.glb", function (gltf) {
        gltf.scene.traverse((obj) => {
          if (obj.isMesh) {
            sampler = new MeshSurfaceSampler(obj).build();
          }
        });
        transformMesh();
      });

      // TRANSFORM MESH INTO POINTS
      let sampler;
      let pointsGeometry = new THREE.BufferGeometry();
      const vertices = [];
      const tempPosition = new THREE.Vector3();

      function transformMesh() {
        // Loop to sample a coordinate for each points
        for (let i = 0; i < 5000; i++) {
          // Sample a random position in the model
          sampler.sample(tempPosition);
          // Push the coordinates of the sampled coordinates into the array
          vertices.push(tempPosition.x, tempPosition.y, tempPosition.z);
        }

        // Define all points positions from the previously created array
        pointsGeometry.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(vertices, 3)
        );

        // Define the material of the points
        const pointsMaterial = new THREE.PointsMaterial({
          color: 0x4ee2ec,
          size: 0.1,
          blending: THREE.AdditiveBlending,
          transparent: true,
          opacity: 0.3,
          depthWrite: false,
          sizeAttenuation: true,
          alphaMap: new THREE.TextureLoader().load(
            "src/components/images/particle-texture.jpg"
          ),
        });

        // Create an instance of points based on the geometry & material
        const points = new THREE.Points(pointsGeometry, pointsMaterial);

        // Add them into the main group
        scene.add(points);
      }

      // INTRO CAMERA ANIMATION USING TWEEN
      function introAnimation() {
        controls.enabled = false; //disable orbit controls to animate the camera

        new TWEEN.Tween(camera.position.set(-1, -0.1, 0))
          .to({ x: 2, y: -0.9, z: 5 }, 6500) // time take to animate
          .easing(TWEEN.Easing.Quadratic.InOut)
          .start() // define delay, easing
          .onComplete(function () {
            //on finish animation
            controls.enabled = true; //enable orbit controls
            document.querySelector(".main--title").classList.add("ended");
            setOrbitControlsLimits(); //enable controls limits
            TWEEN.remove(this); // remove the animation from memory
          });
      }

      introAnimation(); // call intro animation on start

      // DEFINE ORBIT CONTROLS LIMITS
      function setOrbitControlsLimits() {
        controls.enableDamping = true;
        controls.dampingFactor = 0.04;
        controls.minDistance = 0.5;
        controls.maxDistance = 9;
        controls.enableRotate = true;
        controls.autoRotate = true;
      }

      // POST PROCESSING EFFECTS
      const width = window.innerWidth;
      const height = window.innerHeight;
      const renderPass = new RenderPass(scene, camera);
      const renderTarget = new THREE.WebGLRenderTarget(width, height, {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBAFormat,
      });

      const composer = new EffectComposer(renderer, renderTarget);
      composer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // DISTORT PASS
      const distortPass = new ShaderPass(LensDistortionShader);
      distortPass.material.defines.CHROMA_SAMPLES = 4;
      distortPass.enabled = true;
      distortPass.material.uniforms.baseIor.value = 0.91;
      distortPass.material.uniforms.bandOffset.value = 0.0019;
      distortPass.material.uniforms.jitterIntensity.value = 20.7;
      distortPass.material.defines.BAND_MODE = 2;

      composer.addPass(renderPass);
      // composer.addPass(distortPass);

      scene.background = new THREE.Color(0x000010); // Set the background color to black

      // RENDER LOOP FUNCTION
      const clock = new THREE.Clock();
      function renderLoop() {
        TWEEN.update(); // update animations
        controls.update(); // update orbit controls
        composer.render(); //render the scene with the composer
        distortPass.material.uniforms.jitterOffset.value += 0.01;
        requestAnimationFrame(renderLoop); //loop the render function
      }

      renderLoop(); //start rendering

      // Save scene-related objects in the ref
      sceneRef.current = { scene, renderer, controls, composer };
    };

    setupScene();

    return () => {
      // Cleanup Three.js scene
      if (sceneRef.current) {
        const { scene, renderer, controls, composer } = sceneRef.current;

        // Dispose of geometries and materials
        scene.traverse((child) => {
          if (child.geometry) child.geometry.dispose();
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach((material) => material.dispose());
            } else {
              child.material.dispose();
            }
          }
        });

        // Dispose of the renderer and controls
        renderer.dispose();
        controls.dispose();

        // Dispose of composer passes
        composer.passes.forEach((pass) => pass.dispose());

        sceneRef.current = null;
      }
    };
  }, []);

  const handleBuyNowClick = () => {
    navigate("/page2");
  };

  return (
    <section id="home">
      <div className="main--container" ref={containerRef}>
        <h1 className="main--title"></h1>
      </div>
      <div className="logo-bg">
        <img src={djc_bg_logo} alt="hel" />
      </div>
      <div className="container">
        <h1>Diamond Jewellery Company</h1>
        <h3>
          Step into a world of luxury with our exquisite selection of diamond
          and gold jewellery. Each piece is a masterpiece, crafted with
          precision and passion to elevate your style and make every moment
          unforgettable. Begin your journey to brilliance now.
        </h3>
        <button className="button-74" role="button" onClick={handleBuyNowClick}>
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default Home;
