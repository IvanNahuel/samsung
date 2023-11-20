import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { SDescription } from "../../SDescription";

export const S21 = () => {
  const mountRef = useRef(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    //Data from the canvas
    const currentRef = mountRef.current;
    const { clientWidth: width, clientHeight: height } = currentRef;

    //Scene, camera, renderer
    const scene = new THREE.Scene();
    scene.background = null;
    const camera = new THREE.PerspectiveCamera(25, width / height, 0.1, 1000);
    scene.add(camera);
    camera.position.set(150, 50, 150);
    camera.lookAt(new THREE.Vector3());

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    currentRef.appendChild(renderer.domElement);

    //OrbitControls
    const orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enableDamping = true;
    orbitControls.enableZoom = false;
    orbitControls.enableRotate= false;

    //raycaster
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    //Resize canvas
    const resize = () => {
      renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
      camera.aspect = currentRef.clientWidth / currentRef.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", resize);

    //import model S21
    let model;
    const loader = new GLTFLoader();
    loader.load("./s21/s21.gltf", (gltf) => {
      gltf.scene.scale.set(0.35, 0.35, 0.35);
      model = gltf.scene;
      model.position.set(0, 15, 0);
      model.rotation.set(0, 3.9, 0);
      scene.add(model);
    });

    //Raycasting method
    const onDocumentMouseMove = (event) => {
      mouse.x = (event.clientX / currentRef.clientWidth) * 2 - 1;
      mouse.y = -(event.clientY / currentRef.clientHeight) * 2 + 1;
    
      raycaster.setFromCamera(mouse, camera);
    
      const intersects = raycaster.intersectObjects(scene.children, true);
    
      if (intersects.length > 0) {
        console.log('Mouse sobre un objeto 3D');
      }
    };

    document.addEventListener('mousemove', onDocumentMouseMove, false);

    //Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLights = new THREE.DirectionalLight(0xffffff, 1.5);
    pointLights.position.set(30, 0, 0);
    scene.add(pointLights);

    const pointLights1 = new THREE.DirectionalLight(0xffffff, 1.5);
    pointLights1.position.set(-30, 0, 0);
    scene.add(pointLights1);

    //Animate the scene
    const animate = () => {
      orbitControls.update();
      if (model) {
        //model.rotation.y +=0.005
      }

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    setTimeout(() => {
      setOpacity(1);
    }, 100);

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener('mousemove', onDocumentMouseMove, false);
      currentRef.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="flex flex-col mobile-card-container w-full h-full bg-slate-300 bg-transparent items-center"
      style={{
        opacity: `${opacity}`,
      }}
    >
      <SDescription
        title="S21 Ultra"
        storage="Almacenamiento 126 GB"
        ram="6 GB Ram"
        mpx="32 MPX"
      />
    </div>
  );
};
