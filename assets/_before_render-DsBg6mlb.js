import{o as e,t}from"./three.module-DZdNhZSH.js";import{B as n,Bt as r,Fi as i,G as a,St as o,U as s,Xt as c,Yt as l,ar as u,do as d,ea as f,kr as p,no as m,or as h,pa as g,qa as _,ro as v,ta as y,tr as b}from"./three.core-Dp-eO7LC.js";import{i as x}from"./geo-BbtJXpSL.js";import{a as S,i as C,n as w,o as T,r as E,t as D}from"./SMAAPass-DUgOG6Lz.js";import{n as O,t as k}from"./Pass-CKpvEJMp.js";var A={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},j=class extends O{constructor(){super(),this.isOutputPass=!0,this.uniforms=_.clone(A.uniforms),this.material=new i({name:A.name,uniforms:this.uniforms,vertexShader:A.vertexShader,fragmentShader:A.fragmentShader}),this._fsQuad=new k(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},a.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},M=[{h:0,zenith:461599,horizon:2500680,ground:1381660,sun:9414911,sunI:.35,sky:4872848,skyGround:2301218,hemiI:.6,fogD:.003,exposure:1.05,lamps:1.6,sunElev:50},{h:5.2,zenith:1317436,horizon:6968432,ground:2761256,sun:16752752,sunI:.3,sky:6974104,skyGround:3813424,hemiI:.65,fogD:.0028,exposure:1,lamps:1.4,sunElev:2},{h:6.6,zenith:6127551,horizon:15905932,ground:7166538,sun:16757370,sunI:2,sky:11058400,skyGround:8021072,hemiI:1.1,fogD:.0013,exposure:1,lamps:.2,sunElev:10},{h:9,zenith:3833046,horizon:11981290,ground:9206370,sun:16773334,sunI:2.7,sky:12112110,skyGround:10126960,hemiI:1.55,fogD:9e-4,exposure:1.02,lamps:0,sunElev:38},{h:15,zenith:3833046,horizon:12375272,ground:9206370,sun:16773596,sunI:2.8,sky:12112110,skyGround:10126960,hemiI:1.55,fogD:9e-4,exposure:1.02,lamps:0,sunElev:48},{h:17.4,zenith:5930944,horizon:15778970,ground:8021072,sun:16763018,sunI:2.8,sky:11582680,skyGround:8414800,hemiI:1.3,fogD:.0011,exposure:1.05,lamps:.1,sunElev:18},{h:18.6,zenith:4865156,horizon:14914940,ground:4864576,sun:16752740,sunI:2.1,sky:10521796,skyGround:6967368,hemiI:1.5,fogD:.0012,exposure:1.3,lamps:1,sunElev:8},{h:19.6,zenith:1711432,horizon:8017016,ground:2761264,sun:11571455,sunI:.45,sky:5921430,skyGround:3024432,hemiI:.8,fogD:.0026,exposure:1.1,lamps:1.5,sunElev:30},{h:24,zenith:461599,horizon:2500680,ground:1381660,sun:9414911,sunI:.35,sky:4872848,skyGround:2301218,hemiI:.6,fogD:.003,exposure:1.05,lamps:1.6,sunElev:50}],N=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,P=`
uniform vec3 zenith, horizon, ground, sunColor, sunDir;
uniform float sunVis, cover, time, dark;
varying vec3 vDir;
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
}
float fbm(vec2 p) { float v = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { v += a * noise(p); p = p * 2.03 + 17.0; a *= 0.5; } return v; }
void main() {
  vec3 d = normalize(vDir);
  float h = d.y;
  vec3 c = h > 0.0 ? mix(horizon, zenith, pow(clamp(h, 0.0, 1.0), 0.55)) : mix(horizon, ground, clamp(-h * 6.0, 0.0, 1.0));
  float s = max(dot(d, sunDir), 0.0);
  c += sunColor * (pow(s, 6.0) * 0.25 + pow(s, 64.0) * 0.6) * sunVis;
  c += sunColor * smoothstep(0.9993, 0.9997, s) * 2.5 * sunVis;
  if (h > 0.0 && cover > 0.01) {
    vec2 uv = d.xz / (h + 0.18) * 0.9 + vec2(time * 0.004, time * 0.0015);
    float n = fbm(uv) * 0.75 + fbm(uv * 3.1 + 4.0) * 0.25;
    float k = smoothstep(0.62 - cover * 0.45, 0.78 - cover * 0.3, n) * smoothstep(0.02, 0.25, h);
    float lit = 0.75 + 0.25 * fbm(uv * 2.0 - sunDir.xz * 0.6);
    vec3 cc = mix(horizon, vec3(1.0), 0.7) * lit * 1.08 + sunColor * pow(s, 3.0) * 0.5 * sunVis;
    cc *= mix(1.0, 0.55, dark);
    c = mix(c, cc, k * 0.92);
  }
  gl_FragColor = vec4(c, 1.0);
  #include <colorspace_fragment>
}`,F={uniforms:{tDiffuse:{value:null},sat:{value:1.14},vignette:{value:.28},tint:{value:new s(1.02,1,.97)}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse; uniform float sat, vignette; uniform vec3 tint; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      float l = dot(c.rgb, vec3(0.299, 0.587, 0.114));
      c.rgb = mix(vec3(l), c.rgb, sat) * tint;
      vec2 q = vUv - 0.5;
      c.rgb *= 1.0 - vignette * dot(q, q) * 2.2;
      gl_FragColor = c;
    }`},I=class{quality;renderer;scene=new f;camera=new p(55,1,.1,1800);sun=new o(16777215,3);hemi=new c(12375278,9074784,1.2);sky;composer;gtao;bloom;hour=9;overcast=0;cloud=.4;lamps=0;focus=new v;pmrem;envScene=new f;envGround;envRT=null;envKey=``;sunOffset=new v;constructor(i,a=`high`){this.quality=a,this.renderer=new e({canvas:i,antialias:!1,powerPreference:`high-performance`,preserveDrawingBuffer:!1}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,a===`high`?1.5:1)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.type=1,this.renderer.toneMapping=4,this.renderer.info.autoReset=!1;let o=this.sun;o.castShadow=!0;let c=a===`high`?4096:2048;o.shadow.mapSize.set(c,c),Object.assign(o.shadow.camera,{left:-75,right:75,top:75,bottom:-75,near:1,far:400}),o.shadow.bias=-4e-4,o.shadow.normalBias=.04,o.shadow.radius=2,this.scene.add(o,o.target,this.hemi),this.sky=new u(new g(1500,32,16),new y({vertexShader:N,fragmentShader:P,side:1,depthWrite:!1,fog:!1,uniforms:{zenith:{value:new s},horizon:{value:new s},ground:{value:new s},sunColor:{value:new s},sunDir:{value:new v},sunVis:{value:1},cover:{value:.3},time:{value:0},dark:{value:0}}})),this.sky.renderOrder=-1,this.sky.frustumCulled=!1,this.scene.add(this.sky),this.pmrem=new t(this.renderer);let f=new u(this.sky.geometry,this.sky.material),p=new u(new n(1400,24).rotateX(-Math.PI/2),new h({color:7829367}));p.position.y=-20,this.envGround=p.material,this.envScene.add(f,p),this.scene.fog=new r(13622758,.0026);let _=new d(1,1,{type:l,samples:a===`high`?4:0});this.composer=new S(this.renderer,_),this.composer.addPass(new C(this.scene,this.camera)),a===`high`&&(this.gtao=new E(this.scene,this.camera,1,1),this.gtao.blendIntensity=.7,this.gtao.updateGtaoMaterial({radius:1.6,distanceExponent:1.6,thickness:1.5,scale:1.2,samples:12}),this.gtao.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),this.composer.addPass(this.gtao)),this.bloom=new w(new m(1,1),.55,.5,.95),this.composer.addPass(this.bloom),this.composer.addPass(new j),this.composer.addPass(new T(F)),a!==`high`&&this.composer.addPass(new D),addEventListener(`resize`,()=>this.resize()),this.resize(),this.setHour(this.hour)}resize(){let e=innerWidth,t=innerHeight;this.renderer.setSize(e,t,!1),this.composer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}setHour(e){this.hour=(e%24+24)%24;let t=0;for(;M[t+1].h<this.hour;)t++;let n=M[t],r=M[t+1],i=(this.hour-n.h)/(r.h-n.h),a=(e,t)=>new s(e).lerp(new s(t),i),o=(e,t)=>e+(t-e)*i,c=(e,t)=>e.lerp(new s(e.r*.3+e.g*.59+e.b*.11,e.r*.3+e.g*.59+e.b*.11,e.r*.3+e.g*.59+e.b*.11).multiplyScalar(.75),t),l=this.overcast,u=this.sky.material.uniforms;u.zenith.value.copy(c(a(n.zenith,r.zenith),l)),u.horizon.value.copy(c(a(n.horizon,r.horizon),l)),u.ground.value.copy(a(n.ground,r.ground)),this.scene.fog.color.copy(u.horizon.value),this.scene.fog.density=o(n.fogD,r.fogD)*(1+l*1.6),this.sun.color.copy(a(n.sun,r.sun)),this.sun.intensity=o(n.sunI,r.sunI)*(1-l*.75),u.sunColor.value.copy(this.sun.color),u.sunVis.value=1-l,u.cover.value=Math.max(this.cloud,l),u.dark.value=l,this.hemi.color.copy(c(a(n.sky,r.sky),l*.6)),this.hemi.groundColor.copy(a(n.skyGround,r.skyGround)),this.hemi.intensity=o(n.hemiI,r.hemiI),this.renderer.toneMappingExposure=o(n.exposure,r.exposure),this.lamps=Math.max(o(n.lamps,r.lamps),l*.8),x().glow.color.setScalar(.35+this.lamps*1.1),this.bloom.strength=.25+this.lamps*.35;let d=this.hour>=5.2&&this.hour<=19.6,f=b.degToRad(o(n.sunElev,r.sunElev)),p=d?(this.hour-6)/12*Math.PI:(this.hour+6)%24/12*Math.PI;this.sunOffset.set(Math.cos(p),0,.45).normalize().multiplyScalar(Math.cos(f)).setY(Math.sin(f)).normalize(),u.sunDir.value.copy(this.sunOffset);let m=`${Math.round(this.hour*4)}|${Math.round(l*10)}`;if(m!==this.envKey){this.envKey=m,this.envGround.color.copy(this.hemi.groundColor).multiplyScalar(.6);let e=this.pmrem.fromScene(this.envScene,.02);this.envRT?.dispose(),this.envRT=e,this.scene.environment=e.texture}this.scene.environmentIntensity=.75,this.hemi.intensity*=.45}render(){let e=this.sun,t=e.shadow.camera,n=(t.right-t.left)/e.shadow.mapSize.x,r=this.focus,i=Math.round(r.x/n)*n,a=Math.round(r.z/n)*n;e.target.position.set(i,0,a),e.position.set(i,0,a).addScaledVector(this.sunOffset,200),this.sky.position.copy(this.camera.position),this.sky.material.uniforms.time.value=performance.now()/1e3,this.renderer.info.reset(),this.renderer.shadowMap.needsUpdate=!0,this.composer.render()}};export{I as Renderer};