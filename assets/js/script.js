gsap.registerPlugin(ScrollTrigger);

const pageContainer = document.querySelector(".trans");

/* SMOOTH SCROLL */
const scroller = new LocomotiveScroll({
  el: pageContainer,
  smooth: true,
});

scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(pageContainer, {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: pageContainer.style.transform ? "transform" : "fixed",
});

////////////////////////////////////
////////////////////////////////////
window.addEventListener("load", function () {
  let scriptWrap = document.querySelector(".script_wrap");
  let scriptWrapWidth = scriptWrap.offsetWidth;
  let horizontalScrollLength = scriptWrapWidth - window.innerWidth;

  // Pinning and horizontal scrolling

  gsap.to(".script_wrap", {
    scrollTrigger: {
      scroller: pageContainer, //locomotive-scroll
      scrub: true,
      trigger: "#section_script",
      pin: true,
      anticipatePin: 1,
      start: "top top",
      end: `+=${scriptWrapWidth}`,
    },
    x: -horizontalScrollLength,
    ease: "linear",
  });

  ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll
  ScrollTrigger.refresh();
});
// E: scroll smooth & width scroll

// 메인 타이틀 애니메이션-------------------------------------------------------
const titleTop = document.querySelector(".title_top1");
let titleSp = titleTop.innerHTML.split("");

function title() {
  for (let i = 0; i < titleSp.length; i++) {
    let span = `<span class = sub_t${i + 1} style = "top:100">${
      titleSp[i]
    }</span>`;
    titleSp[i] = span;
  }
}
title();
titleTop.innerHTML = titleSp.join("");
// 메인 타이틀 스팬+클래스 추가 -------------------------------------------------------------------------------------------
function main() {
  for (let i = 1; i <= titleSp.length; i++) {
    gsap.set(".sub_t" + i, {
      y: -100,
      opacity: 0,
    });
  }
}
main();

// 메인 효과주기2-------------------------------------------------------
const titleTop2 = document.querySelector(".title_top2");
let titleSp2 = titleTop2.innerHTML.split("");

function title2() {
  for (let i = 0; i < titleSp2.length; i++) {
    let span2 = `<span class = sub_b${i + 1}>${titleSp2[i]}</span>`;
    titleSp2[i] = span2;
  }
}
title2();

titleTop2.innerHTML = titleSp2.join("");

// 메인 타이틀2 스팬+클래스 추가 -------------------------------------------------------------------------------------------
function main2() {
  for (let i = 1; i <= titleSp2.length; i++) {
    gsap.set(".sub_b" + i, {
      opacity: 0,
    });
  }
}
main2();

// 클래스에 gsap 셋팅 -------------------------------------------------------------------------------------------
gsap.set("#webgl-canvas", {
  scale: 0,
});
gsap.set("#container1", {
  opacity: 0,
});
gsap.set("#header ", {
  opacity: 0,
  top: -100,
});
gsap.set(".title_bottom ", {
  opacity: 0,
  bottom: -100,
});

setTimeout(() => {
  gsap.to("#webgl-canvas", {
    duration: 0.5,
    scale: 1,
    ease: "power1.out",
  });
  gsap.to("#container1", {
    duration: 5,
    delay: 0.7,
    opacity: 0.3,
  });
  gsap.to(".title_bottom ", {
    duration: 1,
    opacity: 1,
    ease: "power1.out",
    delay: 2,
    bottom: 0,
  });
  gsap.to("#header", {
    duration: 0.7,
    opacity: 1,
    top: 0,
    ease: "power1.out",
    delay: 2.5,
  });

  gsap.to(".sub_t1", {
    delay: 1,
    duration: 2,
    opacity: 1,
    ease: "linear",
  });
  gsap.to(".sub_t2", {
    delay: 1.05,
    duration: 2,
    opacity: 1,
    ease: "linear",
  });
  gsap.to(".sub_t3", {
    delay: 1.1,
    duration: 2,
    opacity: 1,
    ease: "linear",
  });
  gsap.to(".sub_t4", {
    delay: 1.15,
    duration: 2,
    opacity: 1,
    ease: "linear",
  });
  gsap.to(".sub_t5", {
    delay: 1.2,
    duration: 2,
    opacity: 1,
    ease: "linear",
  });
  gsap.to(".sub_t6", {
    delay: 1.25,
    duration: 2,
    opacity: 1,
    ease: "linear",
  });
  gsap.to(".sub_t7", {
    delay: 1.3,
    duration: 2,
    opacity: 1,
    ease: "linear",
  });
  gsap.to(".sub_t8", {
    delay: 1.35,
    duration: 2,
    opacity: 1,
    ease: "linear",
  });
  // sub_t
  gsap.to(".sub_b1", {
    delay: 1.9,
    duration: 2,
    opacity: 1,
    ease: "linear",
  });
  gsap.to(".sub_b2", {
    delay: 1.85,
    duration: 2,
    opacity: 1,
    ease: "linear",
  });
  gsap.to(".sub_b3", {
    delay: 1.8,
    duration: 2,
    opacity: 1,
    ease: "linear",
  });
  gsap.to(".sub_b4", {
    delay: 1.75,
    duration: 2,
    opacity: 1,
    ease: "linear",
  });
  gsap.to(".sub_b5", {
    delay: 1.7,
    duration: 2,
    opacity: 1,
    ease: "linear",
  });
  gsap.to(".sub_b6", {
    delay: 1.65,
    duration: 2,
    opacity: 1,
    ease: "linear",
  });
  gsap.to(".sub_b7", {
    delay: 1.6,
    duration: 2,
    opacity: 1,
    ease: "linear",
  });
  gsap.to(".sub_b8", {
    delay: 1.55,
    duration: 2,
    opacity: 1,
    ease: "linear",
  });
  gsap.to(".sub_b9", {
    delay: 1.5,
    duration: 2,
    opacity: 1,
    ease: "linear",
  });
}, 2000);
//  메인 효과-----------------------------------------------------------------------------------------------------------

/* arrow 효과 ==============================================================================================*/
gsap.set(".arrow", {
  y: "-100vh",
  opacity: 0,
});
gsap.to(".arrow", {
  scrollTrigger: {
    trigger: ".section_arrow",
    scroller: pageContainer,
    start: "top 100%",
  },
  duration: 1.5,
  y: 0,
  opacity: 1,
  ease: "ease",
});
/* arrow 효과 ==============================================================================================*/

// profile 효과 ==============================================================================================
gsap.set(".profile_img_wrap", {
  opacity: 0,
  x: -50,
});
gsap.set(".text1", {
  opacity: 0,
  y: 50,
});
gsap.set(".text2", {
  opacity: 0,
  y: 50,
});
gsap.set(".scroll_down", {
  opacity: 0,
  y: 50,
  rotate: "-360deg",
});

let g1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_profile",
    scroller: pageContainer,
    start: "top 60%",
  },
});

gsap.to(".profile_img_wrap", {
  scrollTrigger: {
    trigger: ".section_profile",
    scroller: pageContainer,
    start: "top 60%",
  },
  duration: 1.5,
  opacity: 1,
  x: 0,
  ease: "ease",
});
g1.to(".text1", {
  duration: 0.3,
  opacity: 1,
  y: 0,
  ease: "ease",
});
g1.to(".text2", {
  duration: 0.5,

  opacity: 1,
  y: 0,
  ease: "ease",
});
g1.to(".scroll_down", {
  duration: 0.5,

  opacity: 1,
  y: 0,
  ease: "ease",
});

gsap.to(".scroll_down", {
  rotate: "360deg",
  ease: "linear",
  scrollTrigger: {
    scroller: pageContainer,
    trigger: ".img_wrap",
    scrub: 1,
  },
});
// profile 효과 ==============================================================================================

// web 효과 ==============================================================================================

gsap.set(".web_l_img .web_img_wrap img", {
  y: 100,
  opacity: 0,
});
gsap.set(".web_r_img .web_img_wrap img", {
  y: 100,
  opacity: 0,
});

gsap.to(".web_l_1 .web_img_wrap img", {
  scrollTrigger: {
    trigger: ".web_l_1",
    scroller: pageContainer,
    start: "top 45%",
  },
  duration: 0.3,
  ease: "none",
  y: 0,
  opacity: 1,
});
let w1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".web_l_1",
    scroller: pageContainer,
    start: "top 45%",
  },
});

w1.to(".web_l_1 .web_t_r", {
  transform: "rotateX(0deg)",
  duration: 0.5,
  delay: 0.6,
});
w1.to(".web_l_1 .web_title", {
  transform: "rotateX(0deg)",
  duration: 0.5,
});
w1.to(".web_l_1 .web_img_b", {
  transform: "rotateX(0deg)",
  duration: 0.5,
});

/* .web_l_1 ======================================= */

gsap.to(".web_r_1 .web_img_wrap img", {
  scrollTrigger: {
    trigger: ".web_r_1",
    scroller: pageContainer,
    start: "top 45%",
  },
  duration: 0.5,
  ease: "none",
  y: 0,
  opacity: 1,
});

let w2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".web_r_1",
    scroller: pageContainer,
    start: "top 45%",
  },
});

w2.to(".web_r_1 .web_t_r", {
  transform: "rotateX(0deg)",
  duration: 0.5,
  delay: 0.6,
});
w2.to(".web_r_1 .web_title", {
  transform: "rotateX(0deg)",
  duration: 0.5,
});
w2.to(".web_r_1 .web_img_b", {
  transform: "rotateX(0deg)",
  duration: 0.5,
});
/* .web_r_1 ======================================= */

gsap.to(".web_l_2 .web_img_wrap img", {
  scrollTrigger: {
    trigger: ".web_l_2",
    scroller: pageContainer,
    start: "top 45%",
  },
  duration: 0.5,
  ease: "none",
  y: 0,
  opacity: 1,
});

let w3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".web_l_2",
    scroller: pageContainer,
    start: "top 45%",
  },
});

w3.to(".web_l_2 .web_t_r", {
  transform: "rotateX(0deg)",
  duration: 0.5,
  delay: 0.6,
});
w3.to(".web_l_2 .web_title", {
  transform: "rotateX(0deg)",
  duration: 0.5,
});
w3.to(".web_l_2 .web_img_b", {
  transform: "rotateX(0deg)",
  duration: 0.5,
});
/* .web_l_2 ======================================= */

gsap.to(".web_r_2 .web_img_wrap img", {
  scrollTrigger: {
    trigger: ".web_r_2",
    scroller: pageContainer,
    start: "top 45%",
  },
  duration: 0.5,
  ease: "none",
  y: 0,
  opacity: 1,
});

let w4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".web_r_2",
    scroller: pageContainer,
    start: "top 45%",
  },
});

w4.to(".web_r_2 .web_t_r", {
  transform: "rotateX(0deg)",
  duration: 0.5,
  delay: 0.6,
});
w4.to(".web_r_2 .web_title", {
  transform: "rotateX(0deg)",
  duration: 0.5,
});
w4.to(".web_r_2 .web_img_b", {
  transform: "rotateX(0deg)",
  duration: 0.5,
});
/* .web_r_2 ======================================= */

gsap.to(".web_l_3 .web_img_wrap img", {
  scrollTrigger: {
    trigger: ".web_l_3",
    scroller: pageContainer,
    start: "top 45%",
  },
  duration: 0.5,
  ease: "none",
  y: 0,
  opacity: 1,
});

let w5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".web_l_3",
    scroller: pageContainer,
    start: "top 45%",
  },
});

w5.to(".web_l_3 .web_t_r", {
  transform: "rotateX(0deg)",
  duration: 0.5,
  delay: 0.6,
});
w5.to(".web_l_3 .web_title", {
  transform: "rotateX(0deg)",
  duration: 0.5,
});
w5.to(".web_l_3 .web_img_b", {
  transform: "rotateX(0deg)",
  duration: 0.5,
});
/* .web_l_3 ======================================= */

gsap.to(".web_r_3 .web_img_wrap img", {
  scrollTrigger: {
    trigger: ".web_r_3",
    scroller: pageContainer,
    start: "top 45%",
  },
  duration: 0.5,
  ease: "none",
  y: 0,
  opacity: 1,
});

let w6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".web_r_3",
    scroller: pageContainer,
    start: "top 45%",
  },
});

w6.to(".web_r_3 .web_t_r", {
  transform: "rotateX(0deg)",
  duration: 0.5,
  delay: 0.6,
});
w6.to(".web_r_3 .web_title", {
  transform: "rotateX(0deg)",
  duration: 0.5,
});
w6.to(".web_r_3 .web_img_b", {
  transform: "rotateX(0deg)",
  duration: 0.5,
});
/* .web_r_2 ======================================= */

// web 효과 ==============================================================================================

// 애니메이션 마우스따라다니는 효과 ==============================================================================================
const cursor = document.querySelector(".move_img_wrap");

const circle = cursor.getBoundingClientRect();

function follow(e) {
  gsap.to(".move_img_wrap", {
    duration: 0.15,
    x: e.pageX - circle.width + 100,
    y: e.pageY - circle.height - pageContainer.offsetTop,
  });
}

document.addEventListener("mousemove", follow);
// 애니메이션 마우스따라다니는 효과 ==============================================================================================

/* S:메인 배경 효과 ========================*/
class Stage {
  constructor() {
    this.renderParam = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    this.cameraParam = {
      fov: 70,
      lookAt: new THREE.Vector3(0, 0, 0),
    };

    this.fogParam = {
      color: 0x000000,
      start: 50,
      end: 2000,
    };

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.geometry = null;
    this.material = null;
    this.mesh = null;
    this.isInitialized = false;
  }

  init() {
    this._setScene();
    this._setRender();
    this._setCamera();
    this._setFog();

    this.isInitialized = true;
  }

  _setScene() {
    this.scene = new THREE.Scene();
  }

  _setRender() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById("webgl-canvas"),
      alpha: true,
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.renderParam.width, this.renderParam.height);
  }

  _setCamera() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    if (!this.isInitialized) {
      this.camera = new THREE.PerspectiveCamera(
        this.cameraParam.fov,
        this.renderParam.width / this.renderParam.height
      );

      this.camera.lookAt(this.cameraParam.lookAt);
    }

    this.camera.aspect = windowWidth / windowHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(windowWidth, windowHeight);
  }

  _setFog() {
    this.scene.fog = new THREE.Fog(
      this.fogParam.fov,
      this.fogParam.start,
      this.fogParam.end
    );
  }

  _render() {
    let rot = 0;
    const radian = (rot * Math.PI) / 180;

    rot += 0.1;
    this.camera.position.x = 1000 * Math.sin(radian);
    this.camera.position.z = 1000 * Math.cos(radian);
    this.renderer.render(this.scene, this.camera);
  }

  onResize() {
    this._setCamera();
  }

  onRaf() {
    this._render();
  }
}

class Mesh {
  constructor(stage) {
    this.stage = stage;
    this.mesh = null;
  }

  init() {
    this._setMesh();
  }

  _setMesh() {
    const vertices = [];
    const SIZE = 3000;
    const LENGTH = 3000;
    const geometry = new THREE.BufferGeometry();
    const material = new THREE.PointsMaterial({
      color: 0xffffff,
    });

    for (let i = 0; i < LENGTH; i++) {
      const x = SIZE * (Math.random() - 0.5);
      const y = SIZE * (Math.random() - 0.5);
      const z = SIZE * (Math.random() - 0.5);

      vertices.push(x, y, z);
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    this.mesh = new THREE.Points(geometry, material);
    this.stage.scene.add(this.mesh);
  }

  _render() {
    this.mesh.rotation.y += 0.001;
  }

  onRaf() {
    this._render();
  }
}

(() => {
  const stage = new Stage();
  const mesh = new Mesh(stage);

  stage.init();
  mesh.init();

  window.addEventListener("resize", () => {
    stage.onResize();
  });

  const _raf = () => {
    window.requestAnimationFrame(() => {
      stage.onRaf();
      mesh.onRaf();

      _raf();
    });
  };

  _raf();
})();
/* E: 메인 배경효과 */

/* S: 메인 리본 효과 */
let scene, camera, renderer, ribbon;

const container = document.querySelector("#container1");

const init = () => {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, 1, 0.1, 10000);
  camera.position.z = 2;

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  container.appendChild(renderer.domElement);

  ribbon = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1, 128, 128),
    new THREE.ShaderMaterial({
      uniforms: {
        time: {
          value: 1.0,
        },
      },
      vertexShader: `
        varying vec3 vEC;
        uniform float time;

        float iqhash(float n) {
          return fract(sin(n) * 43758.5453);
        }

        float noise(vec3 x) {
          vec3 p = floor(x);
          vec3 f = fract(x);
          f = f * f * (3.0 - 2.0 * f);
          float n = p.x + p.y * 57.0 + 113.0 * p.z;
          return mix(mix(mix(iqhash(n), iqhash(n + 1.0), f.x),
                     mix(iqhash(n + 57.0), iqhash(n + 58.0), f.x), f.y),
                     mix(mix(iqhash(n + 113.0), iqhash(n + 114.0), f.x),
                     mix(iqhash(n + 170.0), iqhash(n + 171.0), f.x), f.y), f.z);
        }

        float xmb_noise2(vec3 x) {
          return cos(x.z * 4.0) * cos(x.z + time / 10.0 + x.x);
        }

        void main() {
          vec4 pos = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          vec3 v = vec3(pos.x, 0.0, pos.y);
          vec3 v2 = v;
          vec3 v3 = v;

          v.y = xmb_noise2(v2) / 8.0;

          v3.x -= time / 5.0;
          v3.x /= 4.0;

          v3.z -= time / 10.0;
          v3.y -= time / 100.0;

          v.z -= noise(v3 * 7.0) / 15.0;
          v.y -= noise(v3 * 7.0) / 15.0 + cos(v.x * 2.0 - time / 2.0) / 5.0 - 0.3;

          vEC = v;
          gl_Position = vec4(v, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec3 vEC;

        void main()
        {
           const vec3 up = vec3(0.0, 0.0, 1.0);
           vec3 x = dFdx(vEC);
           vec3 y = dFdy(vEC);
           vec3 normal = normalize(cross(x, y));
           float c = 1.0 - dot(normal, up);
           c = (1.0 - cos(c * c)) / 3.0;
           gl_FragColor = vec4(1.0, 1.0, 1.0, c * 1.5);
        }
      `,
      extensions: {
        derivatives: true,
        fragDepth: false,
        drawBuffers: false,
        shaderTextureLOD: false,
      },
      side: THREE.DoubleSide,
      transparent: true,
      depthTest: false,
    })
  );

  scene.add(ribbon);

  resize();
  window.addEventListener("resize", resize);
};

const resize = () => {
  const { offsetWidth, offsetHeight } = container;

  renderer.setSize(offsetWidth, offsetHeight);
  renderer.setPixelRatio(devicePixelRatio);

  camera.aspect = offsetWidth / offsetHeight;
  camera.updateProjectionMatrix();

  ribbon.scale.set(camera.aspect * 1.55, 0.75, 1);
};

const animate = () => {
  ribbon.material.uniforms.time.value += 0.01;

  renderer.render(scene, camera);
  requestAnimationFrame(() => animate());
};

init();
animate();
// E:메인 리본 효과 =============================================================================================================
// E:메인 리본 효과 =============================================================================================================
// E:메인 리본 효과 =============================================================================================================

$("#wait").click(() => {
  alert("죄송합니다 현재 제작중입니다.");
});
