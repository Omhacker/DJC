import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler.js';

const DiamondRing = () => {
    const containerRef = useRef(null);
    const animationIdRef = useRef(null); // To store the animation frame id
    const startedRef = useRef(false); // To track if the animation has started

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        containerRef.current.appendChild(renderer.domElement);

        camera.position.z = 220;
        camera.position.y = 100;

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableRotate = false;
        controls.enableZoom = false;

        const group = new THREE.Group();
        scene.add(group);

        let sampler = null;
        let paths = [];

        new OBJLoader().load(
            "src/components/images/diamond_ring3.obj", // Update with the correct path to your OBJ file
            (obj) => {
                const mesh = obj.children[0];
                if (mesh && mesh.geometry && mesh.geometry.isBufferGeometry) {
                    sampler = new MeshSurfaceSampler(mesh).build();
                    for (let i = 0; i < 4; i++) {
                        const path = new Path(i);
                        paths.push(path);
                        group.add(path.line);
                    }

                    const scaleFactor = 400;
                    group.scale.set(scaleFactor, scaleFactor, scaleFactor);
                    group.position.set(0, -30, 0);

                    // Renderer is not set to animation loop until visible
                    // renderer.setAnimationLoop(render);
                } else {
                    console.error("Mesh or BufferGeometry not found in the loaded object.");
                }
            },
            (xhr) => console.log((xhr.loaded / xhr.total) * 100 + "% loaded"),
            (err) => console.error(err)
        );

        const tempPosition = new THREE.Vector3();
        const materials = [
            new THREE.LineBasicMaterial({ color: 0xF1E5AC, transparent: true, opacity: 0.5 }),
            new THREE.LineBasicMaterial({ color: 0xE8E4C9, transparent: true, opacity: 0.5 }),
            new THREE.LineBasicMaterial({ color: 0xEEE8AA, transparent: true, opacity: 0.5 }),
            new THREE.LineBasicMaterial({ color: 0xEDE275, transparent: true, opacity: 0.5 }),
        ];

        class Path {
            constructor(index) {
                this.geometry = new THREE.BufferGeometry();
                this.material = materials[index % 4];
                this.line = new THREE.Line(this.geometry, this.material);
                this.vertices = [];
                this.updateVertex();
                this.previousPoint = tempPosition.clone();
            }

            updateVertex() {
                sampler.sample(tempPosition);
                this.vertices.push(tempPosition.x, tempPosition.y, tempPosition.z);
            }

            update() {
                let pointFound = false;
                while (!pointFound) {
                    sampler.sample(tempPosition);
                    const distance = tempPosition.distanceTo(this.previousPoint);
                    const maxDistance = 0.03;

                    if (distance < maxDistance) {
                        this.vertices.push(tempPosition.x, tempPosition.y, tempPosition.z);
                        this.previousPoint = tempPosition.clone();
                        pointFound = true;
                    }
                }
                if (this.vertices.length >= 10000) {
                    this.vertices = [];
                }
                this.geometry.setAttribute("position", new THREE.Float32BufferAttribute(this.vertices, 3));
            }
        }

        function render() {
            group.rotation.y += 0.002;
            paths.forEach(path => {
                path.update();
            });

            controls.update();
            renderer.render(scene, camera);
            animationIdRef.current = requestAnimationFrame(render); // Store the animation frame id
        }

        window.addEventListener("resize", onWindowResize, false);

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        // Setup Intersection Observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (!startedRef.current) {
                            startedRef.current = true;
                            render(); // Start rendering when the element is visible
                            observer.disconnect(); // Stop observing after starting the animation
                        }
                    }
                });
            },
            { threshold: 0.1 } // Adjust the threshold as needed
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            // Cleanup Three.js renderer and scene
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
            }
            renderer.dispose();
            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default DiamondRing;
