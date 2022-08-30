import scene from './scene';
import * as THREE from 'three';

const createShape = () => {
  let radius = 5;
  let height = 5;
  let segments = 32;
  let color = 0xddddff;
  let emissive = 0x9999cc; // color unneffected by other lighting

  // an object consists of three things.
  const geometry = new THREE.ConeGeometry(radius, height, segments); // geometry of the shape
  const material = new THREE.MeshLambertMaterial({
    color,
    emissive,
  }); //what is the shape made out of and how does it reflect light
  const shape = new THREE.Mesh(geometry, material); //A mesh is a combination of the geometry and material.

  shape.rotateX(0.5);
  shape.rotateZ(0.5);

  scene.add(shape);
};

createShape();
