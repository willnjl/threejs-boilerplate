import * as THREE from 'three'
import { WEBGL } from './webgl'

if (WEBGL.isWebGLAvailable()) {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
  })
  renderer.setSize(window.in)
} else {
  var warning = WEBGL.getWebGLErrorMessage()
  document.body.appendChild(warning)
}
