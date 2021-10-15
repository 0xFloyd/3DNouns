import * as THREE from "three";
import { extend } from "@react-three/fiber";

export class ImageFadeMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        tex: { value: undefined },
        tex2: { value: undefined },
      },
      vertexShader: `varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }`,

      fragmentShader: `void main(void) {
        vec3 c;
        vec4 Ca = texture2D(tex, vUv);
        vec4 Cb = texture2D(tex2, vUv);
        c = Ca.rgb * Ca.a + Cb.rgb * Cb.a * (1.0 - Ca.a);  // blending equation
        gl_FragColor= vec4(c, 1.0);
      }`,
    });
  }

  // get effectFactor() {
  //   return this.uniforms.effectFactor.value;
  // }
  // set effectFactor(v) {
  //   return (this.uniforms.effectFactor.value = v);
  // }
  // get dispFactor() {
  //   return this.uniforms.dispFactor.value;
  // }
  // set dispFactor(v) {
  //   return (this.uniforms.dispFactor.value = v);
  // }
  // get tex() {
  //   return this.uniforms.tex.value;
  // }
  // set tex(v) {
  //   return (this.uniforms.tex.value = v);
  // }
  // get tex2() {
  //   return this.uniforms.tex2.value;
  // }
  // set tex2(v) {
  //   return (this.uniforms.tex2.value = v);
  // }
  // get disp() {
  //   return this.uniforms.disp.value;
  // }
  // set disp(v) {
  //   return (this.uniforms.disp.value = v);
  // }
}

extend({ ImageFadeMaterial });
