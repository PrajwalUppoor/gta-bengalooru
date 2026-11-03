import{a as e,i as t,n,o as r,r as i,t as a}from"./three.module-DZdNhZSH.js";import{a as o,o as s,t as c}from"./quality-Bk3wZrHX.js";import{$ as l,B as u,Bt as d,Dn as f,Dr as p,Ht as m,Lt as h,Ma as g,Nr as _,Qi as v,Rn as y,U as b,V as x,Wi as S,Wr as C,Xt as w,Yt as T,_r as E,ar as D,bt as ee,ct as O,do as k,ea as A,io as j,ir as M,j as te,kn as ne,kr as re,no as N,or as ie,pa as ae,ro as P,ta as F,tr as I,wr as oe}from"./three.core-Dp-eO7LC.js";import{t as se}from"./prefs-ChC9Ov7S.js";import{i as ce}from"./geo-BbtJXpSL.js";import{a as le,i as ue,n as de,o as fe,r as pe,t as me}from"./SMAAPass-DUgOG6Lz.js";import{n as he,t as ge}from"./Pass-CKpvEJMp.js";import{i as _e,n as ve,r as ye}from"./batch-cull-Bcs3MrxA.js";var L=new M,R=new M,z=new P,B=new P,V=new P,H=[new P,new P,new P,new P],be=[new P,new P,new P,new P],U=[new P,new P,new P,new P,new P,new P,new P,new P],W=2,xe=.1,Se=class extends ne{constructor(){super(new p(-5,5,5,-5,.5,500)),this.isSunLightShadow=!0,this.mapSize.set(1024,1024),this._cameras=[],this._matrices=[],this._frustums=[],this._cascadeSplits=[,,,].fill(0),this._cascadeData=[],this._viewportCount=W,this._frameExtents.set(2,1);for(let e=0;e<W;e++)this._cameras.push(new p),this._matrices.push(new M),this._frustums.push(new m),this._cascadeData.push(new j);for(;this._viewports.length<W;)this._viewports.push(new j)}getCamera(e=0){return this._cameras[e]}getMatrix(e=0){return this._matrices[e]}getFrustum(e=0){return this._frustums[e]}updateMatrices(e,t){if(t===void 0)return;let n=Math.min(.25,(Math.ceil(this.radius)+1)/this.mapSize.x),r=Math.min(.25,(Math.ceil(this.radius)+1)/this.mapSize.y);for(let e=0;e<W;e++)this._viewports[e].set(e+n,r,1-2*n,1-2*r);let i=this.mapSize.x*(1-2*n),a=this.mapSize.y*(1-2*r),o=Math.min(i,a),s=this.camera,c=t.near,l=Math.max(c+1e-6,Math.min(s.far,t.far)),u=this._cascadeSplits;u[0]=c;for(let e=1;e<W;e++){let t=e/W,n=c+(l-c)*t,r=c>0?c*(l/c)**+t:n;u[e]=(n+r)*.5}u[W]=l,z.setFromMatrixPosition(e.matrixWorld).negate().normalize(),B.set(0,1,0),Math.abs(B.dot(z))>.99&&B.set(0,0,1),L.lookAt(V.set(0,0,0),z,B),R.copy(L).transpose().multiply(t.matrixWorld);let d=t.reversedDepth?1:t.coordinateSystem===2001?0:-1,f=t.projectionMatrixInverse,p=-1/0;for(let e=0;e<4;e++){let n=e===0||e===1?1:-1,r=e===0||e===3?1:-1,i=H[e].set(n,r,d).applyMatrix4(f),a=be[e];t.isPerspectiveCamera===!0?a.copy(i).multiplyScalar(l/c):a.set(i.x,i.y,-l),i.applyMatrix4(R),a.applyMatrix4(R),p=Math.max(p,i.z,a.z)}p+=l;let m=s.near;for(let e=0;e<W;e++){let t=e===0?u[0]:this._cascadeData[e-1].z,n=u[e+1],r=n-xe*(n-u[e]);this._cascadeData[e].set(e===0?-1e10:t,n,r,0);let d=(t-c)/(l-c),f=(n-c)/(l-c);V.set(0,0,0);for(let e=0;e<4;e++)U[e*2].lerpVectors(H[e],be[e],d),U[e*2+1].lerpVectors(H[e],be[e],f),V.add(U[e*2]).add(U[e*2+1]);V.multiplyScalar(1/8);let h=0,g=1/0;for(let e=0;e<8;e++)h=Math.max(h,U[e].distanceToSquared(V)),g=Math.min(g,U[e].z);let _=Math.sqrt(h);if(o>1){_/=1-1/o;let e=2*_/i,t=2*_/a;V.x=Math.round(V.x/e)*e,V.y=Math.round(V.y/t)*t}V.z=p+m,V.applyMatrix4(L);let v=this._cameras[e];v.position.copy(V),v.quaternion.setFromRotationMatrix(L),v.left=-_,v.right=_,v.top=_,v.bottom=-_,v.near=m,v.far=p-g+2*m,v.coordinateSystem=s.coordinateSystem,v._reversedDepth=s.reversedDepth,v.updateProjectionMatrix(),v.updateMatrixWorld(),this._updateMatrix(v,this._matrices[e],this._frustums[e],this._viewports[e])}}},Ce=class extends f{constructor(e,t){super(e,t),this.isSunLight=!0,this.type=`SunLight`,this.position.copy(oe.DEFAULT_UP),this.updateMatrix(),this.shadow=new Se}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t}},G={aoNormals:!0,lampDay:!0};for(let e of(new URLSearchParams(location.search).get(`ab`)??``).split(`,`)){let[t,n]=e.split(`:`);t in G&&(G[t]=n!==`0`)}window.__ab=G;var we=6,K={blur:0,focus:10,dof:0},Te=new Set,Ee=null;function De(e){Ee?Ee.reflect(e):Te.add(e)}var q={zenith:198418,horizon:1712696,glow:0,ground:658192,sun:10466559,sunI:0,sky:5925532,skyGround:3812386,hemiI:1.9,bounce:2760730,fogD:.0022,exposure:1.55,lamps:1.5,cloudLit:1843762,cloudShade:724502,sat:.98,con:1.06,lift:395804,gain:16184575,vig:.4,bloom:.5},J=[{h:0,...q},{h:4.9,...q,zenith:395806,horizon:2763336,glow:1708064,lamps:1.5},{h:5.9,zenith:2373228,horizon:11048090,glow:11558968,ground:2761768,sun:16751208,sunI:.2,sky:6977708,skyGround:3420212,hemiI:.8,bounce:3551284,fogD:.0022,exposure:1.15,lamps:1.1,cloudLit:14196880,cloudShade:4869740,sat:1,con:1.04,lift:395290,gain:16773868,vig:.34,bloom:.5},{h:6.6,zenith:4879548,horizon:15256240,glow:16752736,ground:6968904,sun:16757876,sunI:2,sky:9876192,skyGround:7234648,hemiI:1.15,bounce:8415832,fogD:.0017,exposure:1.05,lamps:.25,cloudLit:16766128,cloudShade:9080492,sat:1.03,con:1.05,lift:263436,gain:16773860,vig:.3,bloom:.4},{h:8,zenith:2582224,horizon:11850480,glow:4204568,ground:9206370,sun:16770236,sunI:3,sky:10404590,skyGround:10125412,hemiI:1.7,bounce:11045478,fogD:.0011,exposure:1,lamps:0,cloudLit:16777215,cloudShade:11845844,sat:1.05,con:1.07,lift:263692,gain:16774888,vig:.26,bloom:.28},{h:10.5,zenith:2254036,horizon:12113136,glow:0,ground:9206370,sun:16773340,sunI:3.2,sky:10667246,skyGround:9863270,hemiI:1.7,bounce:10521192,fogD:.0011,exposure:.98,lamps:0,cloudLit:16777215,cloudShade:12109014,sat:1.04,con:1.07,lift:263692,gain:16775922,vig:.24,bloom:.26},{h:13.5,zenith:2779856,horizon:12638446,glow:0,ground:9206370,sun:16774890,sunI:3.3,sky:10929900,skyGround:9863784,hemiI:1.7,bounce:10258538,fogD:.0013,exposure:.96,lamps:0,cloudLit:16777215,cloudShade:12371670,sat:1.02,con:1.07,lift:263692,gain:16776440,vig:.24,bloom:.26},{h:16,zenith:3832012,horizon:13687008,glow:3153936,ground:9206370,sun:16771268,sunI:3.1,sky:10797284,skyGround:9863268,hemiI:1.7,bounce:11045476,fogD:.0014,exposure:.98,lamps:0,cloudLit:16775406,cloudShade:12106956,sat:1.04,con:1.07,lift:263692,gain:16774372,vig:.26,bloom:.28},{h:17.3,zenith:4617920,horizon:14472902,glow:13666888,ground:8021072,sun:16758888,sunI:3.2,sky:9220846,skyGround:6710896,hemiI:1.75,bounce:10123872,fogD:.0014,exposure:1.1,lamps:.05,cloudLit:16769208,cloudShade:10132660,sat:1.12,con:1.1,lift:263951,gain:16773340,vig:.3,bloom:.32},{h:18.05,zenith:4216990,horizon:15119504,glow:16740408,ground:5916224,sun:16748624,sunI:2.3,sky:8428772,skyGround:5263966,hemiI:1.95,bounce:7232080,fogD:.0017,exposure:1.26,lamps:.35,cloudLit:16752752,cloudShade:8024212,sat:1.12,con:1.09,lift:329754,gain:16772828,vig:.32,bloom:.44},{h:18.6,zenith:2306158,horizon:11832456,glow:15755840,ground:3813432,sun:16743016,sunI:.15,sky:7375048,skyGround:4867152,hemiI:1.9,bounce:3946048,fogD:.0019,exposure:1.4,lamps:1.15,cloudLit:14190714,cloudShade:4210794,sat:1.04,con:1.07,lift:461858,gain:15922431,vig:.34,bloom:.5},{h:19.3,zenith:1054282,horizon:4080240,glow:4859952,ground:1578526,sun:10466559,sunI:0,sky:6189226,skyGround:3812914,hemiI:1.95,bounce:3155498,fogD:.0022,exposure:1.5,lamps:1.5,cloudLit:4208730,cloudShade:1447976,sat:.95,con:1.05,lift:526878,gain:16184063,vig:.38,bloom:.5},{h:20.5,...q},{h:24,...q}],Oe=/[?&]refl=0/.test(location.search),ke=6.15,Ae=64,je=Number(new URLSearchParams(location.search).get(`minelev`)??24),Me={color:11057407,intensity:1},Ne=[[0,6],[4.8,6],[5.7,0],[6.25,0],[7.3,3],[8.75,1],[12.2,2],[15,2],[17.09,3],[17.88,4],[18.55,5],[19.5,6],[24,6]],Pe=.35,Fe=`./textures/sky/`,Y={sunDir:new P(0,1,0),sunScatter:new b(0,0,0),fog:new j(0,1,0,0),wet:new j(0,0,0,0)},Ie=25,Le=.72,Re=!1;function ze(){if(Re||new URLSearchParams(location.search).get(`old`)===`1`)return;Re=!0;let e=n;e.common+=`
struct NuLook { vec3 sunDir; vec3 sunScatter; vec4 fog; vec4 wet; };
uniform NuLook nuLook;
float nuHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float nuNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(nuHash(i), nuHash(i + vec2(1, 0)), f.x), mix(nuHash(i + vec2(0, 1)), nuHash(i + vec2(1, 1)), f.x), f.y);
}`,e.fog_pars_vertex=`
#ifdef USE_FOG
  varying float vFogDepth;
  varying vec3 vNuFogRay;
#endif`,e.fog_vertex=`
#ifdef USE_FOG
  vFogDepth = - mvPosition.z;
  vNuFogRay = ( vec4( mvPosition.xyz, 0.0 ) * viewMatrix ).xyz; // camera -> vertex, world space
#endif`,e.fog_pars_fragment=`
#ifdef USE_FOG
  uniform vec3 fogColor;
  varying float vFogDepth;
  varying vec3 vNuFogRay;
  #ifdef FOG_EXP2
    uniform float fogDensity;
  #else
    uniform float fogNear;
    uniform float fogFar;
  #endif
#endif`,e.fog_fragment=`
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float nuDist = length( vNuFogRay );
    vec3 nuDir = vNuFogRay / max( nuDist, 1e-4 );
    // height fog: density falls off exponentially above street level; average it along the ray
    float nuK = nuLook.fog.x, nuHF = 1.0;
    if ( nuK > 0.0 ) {
      float a = nuK * max( cameraPosition.y - nuLook.fog.z, 0.0 ), b = nuK * vNuFogRay.y;
      nuHF = exp( - a ) * ( abs( b ) > 1e-3 ? ( 1.0 - exp( - b ) ) / b : 1.0 );
    }
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * nuDist * nuDist * nuHF );
    fogFactor = min( fogFactor, nuLook.fog.y > 0.0 ? nuLook.fog.y : 1.0 );
    float nuSun = max( dot( nuDir, nuLook.sunDir ), 0.0 );
    vec3 nuFogColor = fogColor + nuLook.sunScatter * ( nuSun * nuSun * nuSun * nuSun * nuSun * nuSun );
    gl_FragColor.rgb = mix( gl_FragColor.rgb, nuFogColor, fogFactor );
  #else
    float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
    gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
  #endif
#endif`,e.lights_physical_fragment=`
float nuPud = 0.0;
if ( nuLook.wet.x > 0.001 ) {
  vec3 nuUp = normalize( ( viewMatrix * vec4( 0.0, 1.0, 0.0, 0.0 ) ).xyz );
  float nuFacing = smoothstep( 0.5, 0.9, dot( nonPerturbedNormal, nuUp ) );
  vec3 nuW = cameraPosition - ( vec4( vViewPosition, 0.0 ) * viewMatrix ).xyz;
  float nuN = nuNoise( nuW.xz * 0.21 ) * 0.65 + nuNoise( nuW.xz * 0.9 + 7.0 ) * 0.35;
  float nuPuddle = smoothstep( 0.58 - nuLook.wet.y * 0.12, 0.72 - nuLook.wet.y * 0.12, nuN ) * nuFacing * nuLook.wet.y;
  // Upgrade R4: walls do not wet evenly. A porous surface (rough, not metal: plaster, brick, concrete, wood) drinks the rain in
  // dark runs down the face; glossy stone, glass and metal stay nearly as they were. Runs: noise stretched down the wall.
  float nuPoro = smoothstep( 0.3, 0.75, roughnessFactor ) * ( 1.0 - metalnessFactor );
  float nuRun = nuNoise( vec2( ( nuW.x + nuW.z * 1.37 ) * 0.8, nuW.y * 0.07 ) ) * 0.7 + nuNoise( vec2( ( nuW.x + nuW.z * 1.37 ) * 2.9, nuW.y * 0.3 + 3.0 ) ) * 0.3;
  float nuWall = ${ot?`mix( 0.25, 0.3 + 0.7 * smoothstep( 0.4, 0.66, nuRun ), nuPoro )`:`0.35`};
  float nuWet = nuLook.wet.x * mix( nuWall, 1.0, nuFacing );
  diffuseColor.rgb *= 1.0 - 0.42 * nuWet * ( 1.0 - metalnessFactor );
  roughnessFactor = mix( roughnessFactor, mix( 0.34, 0.06, nuPuddle ), max( nuWet * 0.75, nuPuddle ) );
  diffuseColor.rgb *= 1.0 - 0.35 * nuPuddle;
  normal = normalize( mix( normal, nuUp, nuPuddle ) );
  nuPud = nuPuddle;
}
`+e.lights_physical_fragment+`
// The overnight pass (owner screenshot 10-19, rain): the sky environment is sky only (no buildings, no trees), so a mirror puddle at a
// grazing angle showed pure bright sky and, down the road, read as white patches (snow). Keep the grazing (Fresnel) reflection of a
// puddle down: dark water with a sheen of the sky and the lamps, as a street puddle looks
material.specularF90 = mix( material.specularF90, 0.42, nuPud );
material.specularColor *= 1.0 - 0.35 * nuPud;
material.specularColorBlended *= 1.0 - 0.35 * nuPud;
#if defined( USE_ALPHATEST ) && defined( DOUBLE_SIDED )
  material.specularColor *= 0.35;
  material.specularColorBlended *= 0.35;
  material.specularF90 = 0.3;
#endif
`,e.lights_pars_begin=e.lights_pars_begin.replace(`light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );`,`bool nuStreet = pointLight.decay > 1.75 && pointLight.decay < 2.01;
		light.color *= getDistanceAttenuation( nuStreet ? sqrt( lightDistance * lightDistance + `+Ie.toFixed(1)+` ) : lightDistance, pointLight.distance, pointLight.decay );
		if ( nuStreet ) light.color *= smoothstep( 0.3, 0.8, dot( light.direction, normalize( ( viewMatrix * vec4( 0.0, 1.0, 0.0, 0.0 ) ).xyz ) ) );`),e.common+=`
#ifdef PERSON_LOOK
  float pSkinG = 0.0;
#endif`,e.lights_fragment_begin=`
#if defined( PERSON_LOOK ) && defined( USE_ROUGHNESSMAP )
  pSkinG = texture2D( roughnessMap, vRoughnessMapUv ).r;
#endif
`+e.lights_fragment_begin,e.lights_physical_pars_fragment=e.lights_physical_pars_fragment.replace(`reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );`,`#ifdef PERSON_LOOK
	float pNL = dot( geometryNormal, directLight.direction );
	vec3 pWrap = saturate( ( pNL + 0.4 ) / 1.4 ) * mix( vec3( 1.0, 0.5, 0.36 ), vec3( 1.0 ), smoothstep( -0.1, 0.45, pNL ) ) * directLight.color;
	reflectedLight.directDiffuse += mix( irradiance, pWrap, pSkinG ) * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
	#else
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
	#endif`),e.lights_fragment_end+=`
#if defined( PERSON_LOOK ) && defined( USE_ROUGHNESSMAP )
  {
    vec3 pOrm = texture2D( roughnessMap, vRoughnessMapUv ).rgb;
    float pSkin = pOrm.r, pNV = saturate( dot( normal, normalize( vViewPosition ) ) );
    float pRim = ( 1.0 - pNV ); pRim *= pRim * pRim;
    float pSheen = ( 1.0 - pSkin ) * mix( 0.35, 0.9, 1.0 - smoothstep( 0.35, 0.85, pOrm.g ) );
    reflectedLight.directDiffuse *= 1.0 + pRim * pSheen;
    reflectedLight.indirectDiffuse *= 1.0 + pRim * pSheen * 0.6;
    reflectedLight.indirectDiffuse += pSkin * reflectedLight.indirectDiffuse * vec3( 0.22, 0.05, 0.02 );
    // Upgrade C3: eyes (the bake's smoothest texels, roughness 0.12): a small sharp catch-light from a key light up and to the side of
    // the camera, so eyes read wet and alive at close range instead of matte dots
    float pEye = 1.0 - smoothstep( 0.14, 0.22, pOrm.g );
    vec3 pR = reflect( - normalize( vViewPosition ), normal );
    reflectedLight.directSpecular += vec3( 1.4 ) * pEye * pow( max( dot( pR, normalize( vec3( -0.35, 0.5, 0.8 ) ) ), 0.0 ), 300.0 );
  }
#endif`;let r=i;for(let e in r)r[e].uniforms.nuLook={value:Y};t.fog.nuLook={value:Y}}var Be=`
uniform float keyA, keyB, keyT, ocK, sunAz, ready;
uniform vec3 horizon, zenith;
uniform sampler2D tKeys;
varying vec3 vDir, vSky;
// keys.png (bake-sky.py): rows 0-511 the eight glow tiles (64 rows each, zenith on top), rows 512-519 their gradient profiles
vec3 glowTap(float k, float u, float e) { return textureLod(tKeys, vec2(u, 1.0 - (k * 64.0 + 0.5 + (1.0 - e) * 63.0) / 520.0), 0.0).rgb * 4.0; }
float profTap(float k, float e) { return textureLod(tKeys, vec2((0.5 + e * 255.0) / 256.0, 1.0 - (512.5 + k) / 520.0), 0.0).r; }
void main() {
  vDir = normalize(position);
  // the keys are smooth (the bake blurs them ~6 degrees), so they are read per vertex (96 x 48 sphere, 3.75 degree steps) and the
  // colour is interpolated: no texture reads per sky pixel for the gradient. The game's own horizon -> zenith colours (KEYS) are laid
  // along the photo's profile, then the photo's glow pattern (round the sun, the darker anti-sun side) multiplies them.
  float h = vDir.y, az = atan(vDir.z, vDir.x) * 0.15915494, e = clamp(asin(clamp(h, 0.0, 1.0)) * 0.63661977, 0.0, 1.0);
  if (ready > 0.5) {
    float u = az - sunAz + 0.5;
    float w = mix(profTap(keyA, e), profTap(keyB, e), keyT);
    vec3 g = mix(glowTap(keyA, u, e), glowTap(keyB, u, e), keyT);
    if (ocK > 0.01) { w = mix(w, profTap(7.0, e), ocK); g = mix(g, glowTap(7.0, az, e), ocK); }
    w = mix(w, sqrt(clamp(h, 0.0, 1.0)), 0.5);
    g = mix(vec3(1.0), g, mix(vec3(0.4), vec3(0.85), step(1.0, g))); // keep most of the glow, little of the darker anti-sun side (milky haze) // half the photo's profile, half the old curve: the dawn photo stays pale for 40 degrees, noon's turns deep blue by 20
    vSky = mix(horizon, zenith, w) * g;
  } else vSky = mix(horizon, zenith, pow(clamp(h, 0.0, 1.0), 0.5)); // until the atlas has loaded
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,Ve=`
uniform vec3 zenith, horizon, glow, ground, sunColor, sunDir, moonDir, cloudLit, cloudShade, cityGlow, scatter;
uniform float sunVis, cover, time, dark, night, flash, haze, envMode, ocK, ready;
uniform sampler2D tClouds;
varying vec3 vDir, vSky;
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float hash3(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
}
void main() {
  vec3 d = normalize(vDir);
  float h = d.y;
  float s = dot(d, sunDir);
  float sp = max(s, 0.0);
  vec3 c = vSky;
  // dawn/dusk glow: wide around the sun's azimuth, hugging the horizon (the photos carry most of it now)
  c += glow * pow(0.5 + 0.5 * s, 5.0) * exp(-max(h, 0.0) * 5.0) * (1.0 - 0.5 * ready);
  // haze band at the horizon, same colour the fog uses (incl. warm scatter towards the sun) so the city melts into it
  vec3 hazeCol = horizon + scatter * pow(sp, 6.0);
  c = mix(c, hazeCol, haze * exp(-max(h, 0.0) * 14.0));
  if (h < 0.0) c = mix(hazeCol, ground, clamp(-h * 5.0, 0.0, 1.0));
  // sun: halo, glare and disc (hidden once it has set)
  float up = smoothstep(-0.03, 0.02, sunDir.y);
  c += sunColor * (pow(sp, 10.0) * 0.18 + pow(sp, 120.0) * 0.5) * sunVis * up;
  c += sunColor * smoothstep(0.99955, 0.99972, s) * 7.0 * sunVis * up * smoothstep(-0.02, 0.0, h) * mix(0.35, 1.0, smoothstep(0.0, 0.3, sunDir.y)) * (1.0 - envMode); // F12c: no disc in the env capture (glare blobs on water/glass)
  // night: stars and the moon
  float k = 0.0;
  if (night > 0.01 && h > 0.0) {
    vec3 sd = d * 260.0, cell = floor(sd), f = fract(sd) - 0.5;
    float r = hash3(cell);
    float star = step(0.987, r) * smoothstep(0.3, 0.0, length(f)) * (0.55 + 0.45 * sin(time * (1.5 + r * 3.0) + r * 60.0));
    c += vec3(0.85, 0.9, 1.0) * star * night * smoothstep(0.05, 0.35, h) * 1.4;
    float m = dot(d, moonDir);
    float disc = smoothstep(0.99966, 0.99978, m);
    float shade = 0.82 + 0.18 * noise(d.xz * 900.0);
    c += vec3(0.95, 0.97, 1.0) * (disc * 2.4 * shade + pow(max(m, 0.0), 300.0) * 0.25 + pow(max(m, 0.0), 20.0) * 0.04) * night;
  }
  // clouds: two layers cut from real skies (R density + G shading of scattered cumulus, B density of bigger masses), each turning
  // slowly about the zenith; more cover lowers the threshold (only the dense cores show on a fair day) and brings in the big masses
  if (h > 0.0 && cover > 0.01 && ready > 0.5) {
    // one read, at an explicit level 0 (the map has no mip chain): an implicit-LOD read (texture2D) measured ~0.3-0.5 ms per full
    // 1080p sky on ANGLE/Metal, the explicit one ~0.03 ms, the same as the old procedural sky
    float az = atan(d.z, d.x) * 0.15915494, e = asin(min(h, 1.0)) * 0.63661977;
    vec3 ca = textureLod(tClouds, vec2(az + time * 0.00009, e), 0.0).rgb;
    float cv = clamp(cover, 0.0, 1.0);
    float kA = smoothstep(0.66 - cv * 0.7, 1.1 - cv * 0.6, ca.r);
    float kB = smoothstep(0.9 - cv * 0.75, 1.2 - cv * 0.6, ca.b) * smoothstep(0.3, 0.7, cv);
    k = max(kA, kB);
    float lit = kA >= kB ? ca.g : mix(ca.g, 0.75 - 0.3 * ca.b, 0.5);
    k *= smoothstep(0.0, 0.08, h) * (1.0 - ocK * 0.55);
    lit = clamp(lit * 1.15 - 0.12 - 0.15 * k, 0.0, 1.0);                // dark bases, bright tops, thick cores a little darker
    lit = mix(lit, 0.3, dark);
    vec3 cc = mix(cloudShade * 0.8, cloudLit, lit);
    cc += sunColor * pow(sp, 6.0) * 0.6 * sunVis * up * (1.0 - k * 0.6); // silver lining near the sun
    cc += cityGlow * (0.25 - 0.15 * lit) * (1.0 - h);                     // sodium-orange city light on the undersides
    cc = mix(cc, hazeCol, haze * exp(-h * 9.0));                         // distant clouds fade into the haze
    c = mix(c, cc, k * 0.92);
  }
  c += vec3(0.7, 0.75, 0.95) * flash * (0.4 + k);
  // in the reflection/ambient capture, tame the saturated horizon so dusk light on walls is not a single orange
  if (envMode > 0.5) { float l = dot(c, vec3(0.2126, 0.7152, 0.0722)); c = mix(c, vec3(l) * vec3(0.9, 0.95, 1.1), 0.55 * exp(-max(h, 0.0) * 3.0)); } // F12c 0.4 -> 0.55, cooler: shade at dusk reads blue, not salmon
  gl_FragColor = vec4(c, 1.0);
  #include <colorspace_fragment>
}`,He=1400*Math.tan(I.degToRad(14)),Ue=1400*Math.tan(I.degToRad(1.2)),We=`
varying vec3 vDir; varying float vU, vE;
void main() {
  vDir = position; vU = uv.x; vE = position.y / ${He.toFixed(2)};
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Ge=`
uniform vec3 horizon, sunColor, sunDir, cloudLit, cloudShade, cityGlow, scatter;
uniform float sunVis, cover, time, dark, haze, ocK, ready;
uniform sampler2D tRing;
varying vec3 vDir; varying float vU, vE;
void main() {
  vec3 d = normalize(vDir);
  float sp = max(dot(d, sunDir), 0.0);
  vec2 rt = textureLod(tRing, vec2(vU + time * 0.00007, clamp(vE, 0.004, 0.996)), 0.0).rg; // explicit level: see SKY_FRAG
  float cv = clamp(cover, 0.0, 1.0);
  float k = smoothstep(0.5 - cv * 0.45, 0.88 - cv * 0.4, rt.r);
  k *= smoothstep(-0.12, 0.1, vE) * (1.0 - smoothstep(0.65, 1.0, vE)) * (1.0 - ocK * 0.5) * ready;
  if (k < 0.004) discard;
  float lit = clamp(rt.g * 1.15 - 0.1, 0.0, 1.0);
  lit = mix(lit, 0.3, dark);
  vec3 cc = mix(cloudShade * 0.8, cloudLit, lit);
  cc += sunColor * pow(sp, 6.0) * 0.6 * sunVis * (1.0 - k * 0.5);
  cc += cityGlow * (1.0 - lit);
  vec3 hazeCol = horizon + scatter * pow(sp, 6.0);
  cc = mix(cc, hazeCol, clamp(haze * (0.4 + 0.45 * (1.0 - clamp(vE, 0.0, 1.0))), 0.0, 0.85)); // far out: deep in the haze, more so low down
  gl_FragColor = vec4(cc, k * 0.92);
  #include <colorspace_fragment>
}`,Ke=`
attribute float hgt; varying float vH; varying vec3 vP;
void main() { vH = hgt; vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,qe=`
uniform vec3 top, bottom, win; uniform float lit;
varying float vH; varying vec3 vP;
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
void main() {
  vec3 c = mix(bottom, top, vH);
  vec2 g = vec2(atan(vP.z, vP.x) * 160.0, vP.y / 3.4);
  float w = step(0.35, fract(g.x)) * step(0.4, fract(g.y)) * step(0.55, hash(floor(g)));
  c += win * w * lit;
  gl_FragColor = vec4(c, 1.0);
  #include <colorspace_fragment>
}`,Je={defines:{TM:0},uniforms:{tDiffuse:{value:null},tAO:{value:null},ao:{value:0},tDepth:{value:null},camNF:{value:new N(.1,1800)},tBloom:{value:null},bloomOn:{value:1},toneMappingExposure:{value:1},sat:{value:1.1},con:{value:1.05},lift:{value:new b},gain:{value:new b(1,1,1)},vignette:{value:.28},tShadow:{value:new P},tHigh:{value:new P},grain:{value:0},flash:{value:0},time:{value:0},sunUV:{value:new N(.5,.5)},shafts:{value:0},shaftCol:{value:new b},aspect:{value:1.78},speedBlur:{value:0},dofFocus:{value:10},dofAmt:{value:0}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse, tAO, tBloom, tDepth; uniform vec2 camNF; uniform float bloomOn, ao, sat, con, vignette, grain, flash, time; uniform vec3 lift, gain, tShadow, tHigh;
    uniform vec2 sunUV; uniform float shafts, aspect; uniform vec3 shaftCol;
    uniform float speedBlur, dofFocus, dofAmt;
    varying vec2 vUv;
    #include <tonemapping_pars_fragment>
    float rnd(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec3 c = texture2D(tDiffuse, vUv).rgb;
      // GTA pass item 5: cutscene depth of field. The shot's subject (dofFocus m away) stays sharp; what lies well behind or in front
      // softens over a 12-tap disc, wider the further from the focus (a long lens on a close-up, not a tilt-shift on wide shots).
      if (dofAmt > 0.0) {
        float dz = texture2D(tDepth, vUv).x, dist = camNF.x * camNF.y / (camNF.y - (camNF.y - camNF.x) * dz);
        float coc = clamp((abs(dist - dofFocus) / max(dofFocus, 0.5) - 0.25) * 0.8, 0.0, 1.0) * dofAmt;
        if (coc > 0.02) {
          vec3 acc = c; float wsum = 1.0;
          for (int i = 0; i < 12; i++) {
            float a = float(i) * 2.39996, r = sqrt((float(i) + 0.5) / 12.0);
            vec2 o = vec2(cos(a), sin(a)) * r * coc * vec2(0.0065 / aspect * 1.78, 0.0065);
            float dz2 = texture2D(tDepth, vUv + o).x, d2 = camNF.x * camNF.y / (camNF.y - (camNF.y - camNF.x) * dz2);
            float w = step(dofFocus * 0.8, d2) + step(d2, dofFocus * 0.8) * step(dist, dofFocus * 0.8); // the sharp subject does not bleed into the blur behind it
            acc += texture2D(tDiffuse, vUv + o).rgb * w; wsum += w;
          }
          c = acc / wsum;
        }
      }
      // Speed blur (Settings > Motion blur): fast in a vehicle, the edges of the frame streak towards the middle; the centre stays sharp.
      if (speedBlur > 0.0) {
        vec2 d = vUv - 0.5;
        float k = speedBlur * smoothstep(0.12, 0.62, length(d * vec2(aspect / 1.78, 1.0)));
        if (k > 0.002) {
          vec3 acc = c;
          for (int i = 1; i < 8; i++) acc += texture2D(tDiffuse, vUv - d * (float(i) * 0.0075 * k)).rgb;
          c = acc / 8.0;
        }
      }
      if (bloomOn > 0.5) c += texture2D(tBloom, vUv).rgb;
      // Upgrade R3: sun shafts at dawn and dusk. March from this pixel towards the sun across the depth buffer; every step that lands
      // on open sky (depth at the far plane) lets light through, the rest (trees, buildings, wires) block it. Gaps in the rain-tree
      // canopy and between buildings become rays in the haze. Only with a low sun in a clear sky, on the High tier (needs the depth).
      if (shafts > 0.0) {
        vec2 toSun = sunUV - vUv;
        float reach = 1.0 - smoothstep(0.15, 1.05, length(toSun * vec2(aspect, 1.0)));
        if (reach > 0.0) {
          vec2 stepv = toSun * (0.9 / 20.0);
          vec2 p = vUv + stepv * rnd(vUv * 911.0 + fract(time * 7.0)); // jittered start: banding becomes fine noise
          float acc = 0.0, w = 1.0, wsum = 0.0;
          for (int i = 0; i < 20; i++) {
            float sky = step(0.999995, texture2D(tDepth, clamp(p, 0.001, 0.999)).x);
            acc += sky * w; wsum += w; w *= 0.93; p += stepv;
          }
          // the sky round the sun is already bright: there the shafts add only a little (else it is just a bigger sun glow); on
          // trees, walls and road they show as light in the haze, broken by whatever stands between them and the sun
          // and the light is scattered by the air between the eye and the surface, so it builds with distance: little on Arjun 3 m
          // away (no washed-out hero), full on the far trees
          float dz0 = texture2D(tDepth, vUv).x, here = step(0.999995, dz0);
          float dist = camNF.x * camNF.y / (camNF.y - (camNF.y - camNF.x) * dz0);
          float air = here > 0.5 ? 0.5 : 1.0 - exp(-dist / 20.0);
          c += shaftCol * (acc / wsum) * reach * reach * shafts * air;
        }
      }
      if (ao > 0.0) {
        // AO is a 1.4 m radius effect: past ~150 m it is sub-pixel noise (dark speckle on the far skyline slabs), so it fades out with view distance
        float zn = camNF.x, zf = camNF.y, dz = texture2D(tDepth, vUv).x, viewZ = zn * zf / ((zf - zn) * dz - zf);
        c *= mix(1.0, texture2D(tAO, vUv).r, ao * (1.0 - smoothstep(120.0, 320.0, -viewZ)));
      }
      c *= 1.0 + flash * 1.6;
      #if TM == 1
        c = ACESFilmicToneMapping(c);
      #elif TM == 2
        c = AgXToneMapping(c);
      #else
        c = NeutralToneMapping(c);
      #endif
      c = sRGBTransferOETF(vec4(c, 1.0)).rgb;
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      c = mix(vec3(l), c, sat);
      c = clamp((c - 0.5) * con + 0.5, 0.0, 1.0);
      c = c * gain + lift * (1.0 - c);
      { float l2 = dot(c, vec3(0.2126, 0.7152, 0.0722)); c = clamp(c + tShadow * (1.0 - smoothstep(0.0, 0.5, l2)) + tHigh * smoothstep(0.4, 1.0, l2), 0.0, 1.0); } // R1 split tone
      vec2 q = vUv - 0.5;
      c *= 1.0 - vignette * dot(q, q) * 2.2;
      float n = rnd(vUv * 1000.0 + fract(time) * 37.0);
      c += (n - 0.5) * (1.0 / 255.0 + grain * 0.06);
      gl_FragColor = vec4(c, 1.0);
    }`},Ye=new N(1,0),Xe=new N(0,1),Ze=class extends de{quad=new ge;render(e,t,n){let r=e.getClearColor(new b),i=e.getClearAlpha(),a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0);let o=this.highPassUniforms;o.tDiffuse.value=n.texture,o.luminosityThreshold.value=this.threshold;let s=this.quad,c=(t,n)=>{s.material=t,e.setRenderTarget(n),e.clear(),s.render(e)};c(this.materialHighPassFilter,this.renderTargetBright);let l=this.renderTargetBright;for(let e=0;e<this.nMips;e++){let t=this.separableBlurMaterials[e];t.uniforms.colorTexture.value=l.texture,t.uniforms.direction.value=Ye,c(t,this.renderTargetsHorizontal[e]),t.uniforms.colorTexture.value=this.renderTargetsHorizontal[e].texture,t.uniforms.direction.value=Xe,c(t,this.renderTargetsVertical[e]),l=this.renderTargetsVertical[e]}this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,c(this.compositeMaterial,this.renderTargetsHorizontal[0]),e.setClearColor(r,i),e.autoClear=a}get texture(){return this.renderTargetsHorizontal[0].texture}},Qe={uniforms:{tDepth:{value:null},cameraProjectionMatrixInverse:{value:new M}},vertexShader:`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform highp sampler2D tDepth; uniform mat4 cameraProjectionMatrixInverse; varying vec2 vUv;
    vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
    #ifdef USE_REVERSED_DEPTH_BUFFER
      vec4 clipSpacePosition = vec4(vec2(screenPosition) * 2.0 - 1.0, depth, 1.0);
    #else
      vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
    #endif
      vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
      return viewSpacePosition.xyz / viewSpacePosition.w;
    }
    float fetchDepth(const ivec2 uv) { return texelFetch(tDepth, uv.xy, 0).x; }
    void main() {
      vec2 uv = vUv, size = vec2(textureSize(tDepth, 0));
      ivec2 p = ivec2(uv * size);
      float c0 = fetchDepth(p);
      float l2 = fetchDepth(p - ivec2(2, 0)), l1 = fetchDepth(p - ivec2(1, 0)), r1 = fetchDepth(p + ivec2(1, 0)), r2 = fetchDepth(p + ivec2(2, 0));
      float b2 = fetchDepth(p - ivec2(0, 2)), b1 = fetchDepth(p - ivec2(0, 1)), t1 = fetchDepth(p + ivec2(0, 1)), t2 = fetchDepth(p + ivec2(0, 2));
      float dl = abs((2.0 * l1 - l2) - c0), dr = abs((2.0 * r1 - r2) - c0), db = abs((2.0 * b1 - b2) - c0), dt = abs((2.0 * t1 - t2) - c0);
      vec3 ce = getViewPosition(uv, c0).xyz;
      vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
      vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
      gl_FragColor = vec4(normalize(cross(dpdx, dpdy)), 1.0);
    }`},$e=class extends he{gtao;normals=new k(1,1,{type:T,minFilter:E,magFilter:E,depthBuffer:!1,generateMipmaps:!1});normalQuad=new ge(new F(Qe));normalsOn=!1;useNormals(e){if(e!==this.normalsOn){this.normalsOn=e;for(let t of[this.gtao.gtaoMaterial,this.gtao.pdMaterial])t.defines.NORMAL_VECTOR_TYPE=e?2:0,t.uniforms.tNormal.value=e?this.normals.texture:null,t.needsUpdate=!0}}constructor(e){super(),this.gtao=e,this.needsSwap=!1,e.output=pe.OUTPUT.Off}depthOut;nfOut;render(e,t,n){let r=n.depthTexture;if(this.depthOut&&(this.depthOut.value=r),this.nfOut){let e=this.gtao.camera;this.nfOut.value.set(e.near,e.far)}if(this.gtao.gtaoMaterial.uniforms.tDepth.value=r,this.gtao.pdMaterial.uniforms.tDepth.value=r,this.useNormals(G.aoNormals),this.normalsOn){let t=this.normalQuad.material;t.uniforms.tDepth.value=r,t.uniforms.cameraProjectionMatrixInverse.value.copy(this.gtao.camera.projectionMatrixInverse),e.setRenderTarget(this.normals),this.normalQuad.render(e)}this.gtao.render(e,t,n,0,!1)}setSize(e,t){this.gtao.setSize(Math.max(1,Math.ceil(e/2)),Math.max(1,Math.ceil(t/2))),this.normals.setSize(Math.max(1,e),Math.max(1,t))}get texture(){return this.gtao.pdRenderTarget.texture}},et={neutral:0,aces:1,agx:2},X=new b,tt=new b,Z=new P,Q=new P,nt=new Float64Array(5),rt=[,,,,,],it=new WeakMap,at=e=>e.id,ot=new URLSearchParams(location.search).get(`r4`)!==`0`,st=new URLSearchParams(location.search).get(`shafts`)!==`0`,ct=Number(new URLSearchParams(location.search).get(`goldfill`)??.9),lt=Number(new URLSearchParams(location.search).get(`goldwarm`)??.18),ut=new URLSearchParams(location.search).get(`grade`)!==`0`,dt=new P,ft=class{quality;static keys=J;renderer;scene=new A;camera=new re(55,1,.1,1800);sun=new Ce(16777215,3);hemi=new w(12375278,9074784,1.2);sky;cloudRing;composer;gtao;bloom;hour=9;overcast=0;cloud=.25;wet=0;flash=0;lamps=0;focus=new P;autoQuality=!0;autoQuiet=performance.now()+15e3;holdAuto(e){this.autoQuiet=Math.max(this.autoQuiet,performance.now()+e)}blockStepUp(e){this.upBlocked=Math.max(this.upBlocked,performance.now()+e)}afterContextRestore(){this.envKey=``,this.autoQuiet=performance.now()+1e4,this.initGpuTimer()}drs=1;drsMin=.6;onDrs=null;cpuMs=8;noteCpu(e){e>0&&e<250&&(this.cpuMs+=(e-this.cpuMs)*.05)}gpuMs=-1;gpuT=null;initGpuTimer(){try{let e=this.renderer.getContext(),t=e.getExtension(`EXT_disjoint_timer_query_webgl2`);this.gpuT=t?{gl:e,ext:t,wait:[]}:null}catch{this.gpuT=null}}gpuBegin(){let e=this.gpuT;if(!e||this.frame%4||e.wait.length>4)return null;try{let t=e.gl.createQuery();return t?(e.gl.beginQuery(e.ext.TIME_ELAPSED_EXT,t),t):null}catch{return null}}gpuEnd(e){let t=this.gpuT;if(t)try{for(e&&(t.gl.endQuery(t.ext.TIME_ELAPSED_EXT),t.wait.push(e));t.wait.length&&t.gl.getQueryParameter(t.wait[0],t.gl.QUERY_RESULT_AVAILABLE);){let e=t.wait.shift(),n=t.gl.getQueryParameter(e,t.gl.QUERY_RESULT),r=t.gl.getParameter(t.ext.GPU_DISJOINT_EXT);t.gl.deleteQuery(e);let i=n/1e6;!r&&i>0&&i<250&&(this.gpuMs=this.gpuMs<0?i:this.gpuMs+(i-this.gpuMs)*.15)}}catch{t.wait.length=0}}probe=null;cpuBoundUntil=0;pictureStepUntil=0;capMs=0;drsT=0;drsFast=0;vsyncMs=1e3/60;paceMs=0;drsUpWait=5e3;tierUpWait=45e3;drsUpT=-1e9;tierUpT=-1e9;upBlocked=0;dts=new Float32Array(400);dtsSorted=new Float32Array(400);onAutoStep=null;qualityStep=0;bottomed=!1;tier=c.high;refl={cube:null,cam:null,rt:null,mats:new Set,face:-1,at:new P(1e9,0,0),t:0,key:``,map:{value:null},on:{value:0},tick:0};reflect(e){if(this.refl.mats.has(e))return;this.refl.mats.add(e);let t=this.refl,r=e.onBeforeCompile,i=e.customProgramCacheKey;e.onBeforeCompile=function(e,i){r.call(this,e,i),e.uniforms.probeMap=t.map,e.uniforms.probeOn=t.on,e.fragmentShader=e.fragmentShader.replace(`#include <envmap_physical_pars_fragment>`,`#include <envmap_physical_pars_fragment>
#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
uniform sampler2D probeMap; uniform float probeOn;
vec3 getProbeRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
  vec3 sky = getIBLRadiance( viewDir, normal, roughness );
  if ( probeOn < 0.001 ) return sky;
  vec3 rv = normalize( mix( reflect( - viewDir, normal ), normal, pow4( roughness ) ) );
  rv = transformDirectionByInverseViewMatrix( rv, viewMatrix );
  return mix( sky, textureCubeUV( probeMap, envMapRotation * rv, roughness ).rgb * envMapIntensity, probeOn );
}
#else
vec3 getProbeRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) { return getIBLRadiance( viewDir, normal, roughness ); }
#endif`).replace(`#include <lights_fragment_maps>`,n.lights_fragment_maps.replaceAll(`getIBLRadiance(`,`getProbeRadiance(`))},e.customProgramCacheKey=()=>i.call(e)+`|probe`,e.needsUpdate=!0}stepReflections(e){let t=this.refl;if(this.tier.shadows===!1||!t.mats.size||Oe){t.on.value=0,t.at.set(1e9,0,0);return}let n=this.camera.position;if(t.face<0){let r=`${Math.round(this.hour*12)}|${Math.round(this.overcast*10)}|${Math.round(this.wet*4)}`;if(n.distanceToSquared(t.at)<144&&e-t.t<4e3&&r===t.key)return;t.key=r,t.t=e,t.at.copy(n),t.face=0,t.cam.position.set(n.x,Math.max(n.y,1.6),n.z),t.cam.updateMatrixWorld(!0)}let r=this.renderer,i=this.sky.material.uniforms;if(!(t.tick=t.tick+1&1)){if(t.face<6){let e=r.getRenderTarget(),n=r.getActiveCubeFace(),a=r.getActiveMipmapLevel();i.envMode.value=1,r.setRenderTarget(t.cube,t.face),r.render(this.scene,t.cam.children[t.face]),r.setRenderTarget(e,n,a),i.envMode.value=0,t.face++}else t.face=-1,t.rt=this.pmrem.fromCubemap(t.cube.texture,t.rt??void 0),t.map.value=t.rt.texture,t.on.value=.85}}smaa;fastT=0;lastStep=-1e9;slowW=0;lateShare=0;frameMs=16;final;ao;pmrem;envScene=new A;envCube;envCam;envGround;ringMat;envRT=null;envKey=``;sunDir=new P(0,1,0);lightDir=new P(0,1,0);grade={sat:1,con:1,lift:new b,gain:new b,vig:.3};satMul=1;hurtSat=1;lampLights=[];lampWant=!0;lampWarming=!1;lampPrewarmed=!1;lampWarmP=null;lampDark=!1;lampPrep=null;lampList=[];lampSource=null;frame=0;lastT=0;slowT=0;winT=0;winN=0;winSum=0;adopted=new WeakSet;adoptedList=[];indoorK=0;indoorSunCut=.85;envScale=1;constructor(t,n=`high`){this.quality=n,ze();let i=new URLSearchParams(location.search),o=n===`high`;this.renderer=new r({canvas:t,antialias:!1,powerPreference:`high-performance`,preserveDrawingBuffer:!1}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,o?1.5:1)),this.renderer.shadowMap.enabled=!0,this.renderer.debug.checkShaderErrors=i.has(`shadercheck`),this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.type=1,this.renderer.toneMapping=0,this.renderer.info.autoReset=!1,this.initGpuTimer(),i.get(`aq`)===`0`&&(this.autoQuality=!1);let s=this.renderer.shadowMap,c=s.render.bind(s);s.render=(e,t,n)=>{let r=n.layers.mask;n.layers.mask|=this.sun.shadow.camera.layers.mask,ve(n,this.sun),c(e,t,n),ye(),n.layers.mask=r};let f=this.renderer.renderBufferDirect.bind(this.renderer);this.renderer.renderBufferDirect=(e,t,n,r,i,a)=>{(t!==null||_e(i,e))&&f(e,t,n,r,i,a)};let p=this.sun;p.castShadow=!0,p.shadow.mapSize.set(o?2048:1024,o?2048:1024),p.shadow.camera.near=.5,p.shadow.camera.far=o?150:100,p.shadow.bias=-3e-4,p.shadow.normalBias=.035,p.shadow.radius=o?2.5:1.5,this.scene.add(p,this.hemi);for(let e=0;e<4;e++){let e=new _(16752720,0,18,2);this.lampLights.push(e),this.scene.add(e)}this.sky=new D(new ae(1500,96,48),new F({vertexShader:Be,fragmentShader:Ve,side:1,depthWrite:!1,fog:!1,uniforms:{zenith:{value:new b},horizon:{value:new b},glow:{value:new b},ground:{value:new b},sunColor:{value:new b},sunDir:{value:new P},moonDir:{value:new P(0,1,0)},cloudLit:{value:new b},cloudShade:{value:new b},cityGlow:{value:new b},scatter:{value:new b},sunVis:{value:1},cover:{value:.3},time:{value:0},dark:{value:0},night:{value:0},flash:{value:0},haze:{value:.6},envMode:{value:0},keyA:{value:2},keyB:{value:2},keyT:{value:0},ocK:{value:0},sunAz:{value:0},ready:{value:0},tKeys:{value:null},tClouds:{value:null}}})),this.sky.renderOrder=1e6,this.sky.frustumCulled=!1,this.scene.add(this.sky);{let e=this.sky.material.uniforms,t=new g,n=0,r=()=>{++n===2&&(e.ready.value=1,this.envKey=``)},i=(e,n,i=!0)=>{let a=t.load(Fe+e,i?r:void 0);return a.colorSpace=n?v:``,a.wrapS=S,a.wrapT=x,a.generateMipmaps=!1,a.minFilter=y,a.magFilter=y,a};e.tKeys.value=i(`keys.png`,!0),e.tClouds.value=i(`clouds.webp`,!1);let a=i(`ring.webp`,!1,!1),o=[`horizon`,`sunColor`,`sunDir`,`cloudLit`,`cloudShade`,`cityGlow`,`scatter`,`sunVis`,`cover`,`time`,`dark`,`haze`,`ocK`,`ready`],s={tRing:{value:a}};for(let t of o)s[t]=e[t];let c=new O(1400,1400,He+Ue,96,1,!0).translate(0,(He-Ue)/2,0);this.cloudRing=new D(c,new F({vertexShader:We,fragmentShader:Ge,uniforms:s,transparent:!0,depthWrite:!1,side:1,fog:!1})),this.cloudRing.name=`horizon cloud ring`,this.cloudRing.renderOrder=-6,this.cloudRing.frustumCulled=!1,this.scene.add(this.cloudRing)}this.pmrem=new a(this.renderer);let m=o?128:64;this.envCube=new e(m,{type:T,generateMipmaps:!1}),this.envCam=new l(1,4e3,this.envCube);let h=new D(this.sky.geometry,this.sky.material);h.frustumCulled=!1;let C=new D(new u(1400,32).rotateX(-Math.PI/2),new ie({color:7829367,fog:!1}));C.position.y=-3,this.envGround=C.material,this.ringMat=new F({vertexShader:Ke,fragmentShader:qe,fog:!1,side:2,uniforms:{top:{value:new b},bottom:{value:new b},win:{value:new b(1,.62,.3)},lit:{value:0}}}),this.envScene.add(h,C,new D(pt(),this.ringMat),this.envCam),this.refl.cube=new e(m,{type:T,generateMipmaps:!1}),this.refl.cam=new l(.5,2e3,this.refl.cube);for(let e of this.refl.cam.children)e.layers.set(6);this.sky.layers.enable(6),Ee=this;for(let e of Te)this.reflect(e);Te.clear(),this.scene.fog=new d(13622758,.0015);let w=new k(1,1,{type:T,samples:4});w.depthTexture=new ee(1,1),this.composer=new le(this.renderer,w),this.composer.addPass(new ue(this.scene,this.camera)),this.gtao=new pe(this.scene,this.camera,1,1),this.gtao.setGBuffer(w.depthTexture),this.gtao.updateGtaoMaterial({radius:1.4,distanceExponent:1.5,thickness:1.6,scale:1.25,samples:12}),this.gtao.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:5,rings:2,samples:8}),this.ao=new $e(this.gtao),this.composer.addPass(this.ao),this.bloom=new Ze(new N(1,1),.4,.55,1),this.bloom.materialHighPassFilter.fragmentShader=this.bloom.materialHighPassFilter.fragmentShader.replace(`vec4 texel = texture2D( tDiffuse, vUv );`,`vec4 texel = texture2D( tDiffuse, vUv ); if ( any( isnan( texel.rgb ) ) || any( isinf( texel.rgb ) ) ) texel.rgb = vec3( 0.0 ); texel.rgb = min( texel.rgb, vec3( 6e4 ) ); texel.rgb *= min( 1.0, 4.0 / max( luminance( texel.rgb ), 1e-4 ) );`),this.composer.addPass(this.bloom),this.final=new fe(Je);let E=et[i.get(`tm`)??``]??0;this.final.material.defines.TM=E,this.final.uniforms.grain.value=Number(i.get(`grain`)??0),this.composer.addPass(this.final),this.smaa=new me,this.composer.addPass(this.smaa),this.final.uniforms.tBloom.value=this.bloom.texture,this.ao&&(this.ao.depthOut=this.final.uniforms.tDepth,this.ao.nfOut=this.final.uniforms.camNF,this.final.uniforms.tAO.value=this.ao.texture,this.final.uniforms.ao.value=Le),this.applyTier(o?`high`:`low`),addEventListener(`resize`,()=>this.resize()),this.resize(),this.setHour(this.hour)}applyTier(e,t){let n=t??c[e];this.tier=n,s.tier=e,s.spec=n,this.quality=e===`low`?`low`:`high`;for(let e of[this.composer.renderTarget1,this.composer.renderTarget2])e.samples!==n.msaa&&(e.samples=n.msaa,e.dispose());this.smaa.enabled=n.msaa===0,o.value=n.msaa,this.sun.shadow.mapSize.x!==n.shadowMap&&(this.sun.shadow.mapSize.set(n.shadowMap,n.shadowMap),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null),this.ao&&(this.ao.enabled=n.ao,this.final.uniforms.ao.value=n.ao?Le:0,n.ao||(this.final.uniforms.tDepth.value=null),this.gtao&&this.gtao.gtaoMaterial.defines.SAMPLES!==n.aoSamples&&this.gtao.updateGtaoMaterial({samples:n.aoSamples})),this.setLampLights(n.lampLights),this.setHour(this.hour)}setLampLights(e){if(this.lampWant=e,e)this.lampVis();else if(this.frame===0)for(let e of this.lampLights)e.visible=!1;else if(this.lampPrewarmed||this.lampWarming)this.lampPrewarmed&&this.lampVis();else{for(let e of this.lampLights)e.visible=!1;this.prewarmLampOff();for(let e of this.lampLights)e.visible=!this.lampDark}}lampVis(){let e=this.lampWant&&!this.lampDark;for(let t of this.lampLights)t.visible=e}stepLampPrep(){let e=G.lampDay&&this.lampPrewarmed&&this.lamps<(this.lampDark?.25:.2),t=this.lampPrep;if(t&&t.want!==!e&&(t=this.lampPrep=null),e===this.lampDark)return;if(!this.lampWant){this.lampDark=e;return}let n=this.renderer;if(!t){let n=[];this.scene.traverse(e=>{e.material&&n.push(e)});let r=new A;r.traverseVisible=e=>this.scene.traverseVisible(e),t=this.lampPrep={want:!e,list:n,i:0,seen:new Set,proxy:r}}if(t.i<t.list.length){let e=performance.now()+1.2,{list:r,seen:i}=t,a=t.i,o={traverse:t=>{for(;a<r.length&&!(!(a&31)&&performance.now()>e);a++){let e=r[a],n=e.geometry,o=e.material,s=n?it.get(n):``;s===void 0&&(s=`${Object.keys(n.attributes).join()}|${Object.keys(n.morphAttributes).join()}`,it.set(n,s));let c=`${Array.isArray(o)?o.map(at).join():at(o)}|${e.type}|${+e.receiveShadow}|${+!!e.instanceColor}|${s}`;i.has(c)||(i.add(c),t(e))}},traverseVisible(){}};t.proxy.fog=this.scene.fog,t.proxy.environment=this.scene.environment;for(let e of this.lampLights)e.visible=t.want;let s=n.getRenderTarget();n.setRenderTarget(this.composer.renderTarget1),n.compile(o,this.camera,t.proxy),n.setRenderTarget(s),this.lampVis(),t.i=a}else n.info.programs?.every(e=>e.isReady?.()??!0)&&(this.lampDark=e,this.lampPrep=null,this.lampVis())}prewarmLampOff(){if(this.lampPrewarmed)return Promise.resolve();if(this.lampWarmP)return this.lampWarmP;this.lampWarming=!0;let e=this.lampLights.map(e=>e.visible);for(let e of this.lampLights)e.visible=!1;let t=[],n=new Set(this.lampLights),r=e=>{if(!(e.isLight||n.has(e))){e.visible||(e.visible=!0,t.push(e));for(let t of e.children)r(t)}};r(this.scene),this.renderer.setRenderTarget(this.composer.renderTarget1);let i=this.renderer.compileAsync(this.scene,this.camera).catch(()=>{});this.renderer.setRenderTarget(null);for(let e of t)e.visible=!1;return this.lampLights.forEach((t,n)=>{t.visible=e[n]}),this.lampWarmP=i.then(()=>{this.lampWarming=!1,this.lampPrewarmed=!0,this.lampVis()}),this.lampWarmP}shaftK=0;updateShafts(){let e=this.final.uniforms,t=this.camera,n=0;if(st&&this.shaftK>.01&&e.tDepth.value){t.getWorldDirection(Z);let r=Z.dot(this.sunDir);r>.05&&(Q.copy(this.sunDir).multiplyScalar(1e3).add(t.position).project(t),e.sunUV.value.set(Q.x*.5+.5,Q.y*.5+.5),n=this.shaftK*I.smoothstep(r,.05,.45))}e.shafts.value=n,e.aspect.value=t.aspect}renderWithSmaa(){let e=this.smaa.enabled;this.smaa.enabled=!0;try{this.render()}finally{this.smaa.enabled=e}}resize(){let e=innerWidth,t=innerHeight;this.renderer.setSize(e,t,!1),this.composer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}indoor(e){this.indoorK=Math.min(Math.max(e,0),1),this.setHour(this.hour)}get indoorAmount(){return this.indoorK}setHour(e){this.hour=(e%24+24)%24;let t=0;for(;J[t+1].h<this.hour;)t++;let n=J[t],r=J[t+1],i=$((this.hour-n.h)/(r.h-n.h)),a=(e,t,n)=>e.set(t).lerp(tt.set(n),i),o=(e,t)=>e+(t-e)*i,s=(e,t)=>{let n=e.r*.3+e.g*.59+e.b*.11;return e.lerp(tt.setRGB(n,n,n).multiplyScalar(.8),t)},c=this.overcast,l=this.hour,u=this.sky.material.uniforms,d=1-$((l-4.9)/1)*(1-$((l-19)/1.2)),f=(l-ke)/12.1,p=Math.sin(Math.PI*f)*I.degToRad(Ae),m=Math.PI*f;this.sunDir.set(Math.cos(m),0,.42).normalize().multiplyScalar(Math.cos(p)).setY(Math.sin(p)).normalize();let h=Math.max(p,I.degToRad(je)),g=((l-18.8)%24+24)%24/11.5,_=Math.sin(Math.PI*Math.min(Math.max(g,0),1))*I.degToRad(58)+.12,v=u.moonDir.value;v.set(Math.cos(Math.PI*g),0,-.3).normalize().multiplyScalar(Math.cos(_)).setY(Math.sin(_)).normalize();let y=o(n.sunI,r.sunI)*(1-c*.8)*$((p+.035)/.06),b=Me.intensity*$((d-.6)/.4)*(1-c*.7);y>=b?(this.lightDir.set(this.sunDir.x,0,this.sunDir.z).normalize().multiplyScalar(Math.cos(h)).setY(Math.sin(h)),a(this.sun.color,n.sun,r.sun),this.sun.intensity=y):(this.lightDir.copy(v),this.sun.color.set(Me.color),this.sun.intensity=b),this.sun.position.copy(this.lightDir).multiplyScalar(100),this.sun.shadow.intensity=this.tier.shadows===!1?0:.93-c*.5,this.sun.shadow.radius=(this.tier.shadowMap>=2048?2.5:this.tier.shadowMap>=1536?2:1.5)*(1+c*1.5),s(a(u.zenith.value,n.zenith,r.zenith),c*.85).multiplyScalar(1-c*.35);{let e=u.zenith.value,t=e.r*.2126+e.g*.7152+e.b*.0722;e.lerp(tt.setRGB(t,t,t),Pe)}s(a(u.horizon.value,n.horizon,r.horizon),c*.8).multiplyScalar(1-c*.25),a(u.glow.value,n.glow,r.glow).multiplyScalar(.55*(1-c)),a(u.ground.value,n.ground,r.ground),a(u.cloudLit.value,n.cloudLit,r.cloudLit),s(a(u.cloudShade.value,n.cloudShade,r.cloudShade),c*.6).multiplyScalar(1-c*.45),s(u.cloudLit.value,c*.7).multiplyScalar(1-c*.5),u.sunColor.value.copy(this.sun.color),y<b&&a(u.sunColor.value,n.sun,r.sun),u.sunVis.value=(1-c)*$((p+.06)/.1),u.sunDir.value.copy(this.sunDir),u.cover.value=Math.max(this.cloud,c*1.1),u.dark.value=c,u.night.value=d*(1-c),u.flash.value=this.flash,u.haze.value=.55+c*.4;{let e=0;for(;Ne[e+1][0]<l;)e++;let t=Ne[e],n=Ne[e+1],r=$((l-t[0])/(n[0]-t[0])),i=$((c-.15)/.6);u.keyA.value=t[1],u.keyB.value=n[1],u.keyT.value=r,u.ocK.value=i,u.sunAz.value=Math.atan2(this.sunDir.z,this.sunDir.x)/(Math.PI*2)}u.cityGlow.value.setRGB(1,.62,.4).multiplyScalar(.05*Math.max(0,this.lamps-.3)*(.4+c));let x=1-$((p-.05)/.5);X.copy(this.sun.color).multiplyScalar(.35*x*(1-c)*$((p+.08)/.1)),u.scatter.value.copy(X),Y.sunScatter.copy(X),Y.sunDir.copy(this.sunDir);let S=this.scene.fog;S.color.copy(u.horizon.value).lerp(u.zenith.value,.22+.16*x*(1-d)),S.density=o(n.fogD,r.fogD)*(1+c*1.8),Y.fog.set(1/(28+c*40),.97,0,0),s(a(this.hemi.color,n.sky,r.sky),c*.7),a(this.hemi.groundColor,n.skyGround,r.skyGround);let C=lt*x*(1-c)*$((p+.06)/.1)*(1-d);C>0&&(this.hemi.color.lerp(X.set(16760970),C),this.hemi.groundColor.lerp(X.set(12615760),C)),this.hemi.intensity=o(n.hemiI,r.hemiI)*.38*(1+c*.35)*(1+this.flash*3)*(1+3.2*$((o(n.lamps,r.lamps)-.3)/1.2)),this.lamps=Math.max(o(n.lamps,r.lamps),c*.9),ce().glow.color.setScalar(.35+this.lamps*1.1);let w=o(n.exposure,r.exposure)*(1+c*.12)*(se.v.bright||1),T=Number.isFinite(w)?w:1;this.renderer.toneMappingExposure=T,this.final.uniforms.toneMappingExposure.value=T,this.bloom.strength=o(n.bloom,r.bloom),this.bloom.threshold=1-Math.min(this.lamps,1.5)*.04;let E=this.grade;E.sat=o(n.sat,r.sat)*(1-c*.18),E.con=o(n.con,r.con),a(E.lift,n.lift,r.lift),a(E.gain,n.gain,r.gain),s(E.gain,c*.8),E.vig=o(n.vig,r.vig);let D=this.final.uniforms;D.sat.value=E.sat,D.con.value=E.con,D.vignette.value=E.vig,D.flash.value=this.flash*.35,D.lift.value.copy(E.lift),D.gain.value.copy(E.gain);{let e=x*(1-d)*(1-c),t=c,n=d*(1-c),r=ut?1-this.indoorK:0;D.tHigh.value.set(.034*e-.01*t+.03*n,.016*e+.012*t+.011*n,-.022*e+.004*t-.024*n).multiplyScalar(r),D.tShadow.value.set(.01*e-.016*t-.004*n,.002*e+.012*t,-.008*e+.01*t+.016*n).multiplyScalar(r),this.shaftK=e*u.sunVis.value*(1-this.indoorK)*.8,D.shaftCol.value.copy(u.sunColor.value)}let ee=Math.max(D.gain.value.r,D.gain.value.g,D.gain.value.b);D.gain.value.multiplyScalar(1/ee);let O=this.indoorK;O>0&&(this.sun.intensity*=1-this.indoorSunCut*O,this.hemi.color.lerp(X.set(16052456),O),this.hemi.groundColor.lerp(X.set(9075304),O),this.hemi.intensity+=(.7-this.hemi.intensity)*O,S.density*=1-O,this.final.uniforms.toneMappingExposure.value=T*(1+.3*O));let k=1-.65*O;if(k!==this.envScale){this.envScale=k;for(let e of this.adoptedList)e.m.envMapIntensity=e.i*k}this.envRT&&(this.scene.environmentIntensity=.85*k*(1+ct*x*(1-d)*(1-c)));let A=`${Math.round(l*6)}|${Math.round(c*10)}|${Math.round(this.cloud*5)}`;if(A!==this.envKey){this.envKey=A;let e=this.sun.intensity*Math.max(Math.sin(h),0)*+(y>=b);a(this.envGround.color,n.bounce,r.bounce).multiplyScalar(.55+e*.12),s(this.envGround.color,c*.6);let t=this.ringMat.uniforms;t.top.value.copy(u.horizon.value).multiplyScalar(.75),t.bottom.value.copy(this.envGround.color).lerp(u.horizon.value,.35).multiplyScalar(.7),t.lit.value=Math.max(0,this.lamps-.3)*.6,this.updateEnvironment()}}updateEnvironment(){let e=this.renderer,t=this.sky.material.uniforms;t.envMode.value=1,this.envCam.update(e,this.envScene),t.envMode.value=0;let n=this.pmrem.fromCubemap(this.envCube.texture,this.envRT);this.envRT||(this.envRT=n,this.scene.environment=n.texture,this.scene.environmentIntensity=.85*this.envScale)}adoptScene(){let e=this.envRT?.texture;e&&this.scene.traverse(t=>{let n=t.material;if(n){for(let r of Array.isArray(n)?n:[n]){if(this.adopted.has(r))continue;if(this.adopted.add(r),r.transparent&&r.side===2&&!r.forceSinglePass&&!r.userData.twoPass){let e=r.blending===2,n=t.geometry;if(!e&&n?.attributes?.position){n.boundingBox||n.computeBoundingBox();let t=n.boundingBox.getSize(dt),r=Math.min(t.x,t.y,t.z),i=Math.max(t.x,t.y,t.z);e=i>0&&r<=i*.02}e&&(r.forceSinglePass=!0)}let n=r;if(!n.isMeshStandardMaterial||!n.envMap||n.envMap===e||r.userData.ownEnv)continue;let i=n.envMapIntensity;n.envMap=e;let a=Math.min(i*2.2,Math.max(i,1.2));n.envMapIntensity=a*this.envScale,n.needsUpdate=!0,this.adoptedList.push({m:n,i:a})}t.name===`light pools`&&t.geometry!==this.lampSource&&this.readLamps(t.geometry)}})}readLamps(e){this.lampSource=e,this.lampList=[];let t=e.userData.lamps;if(t){for(let e of t)e.r>=3&&this.lampList.push({x:e.x,y:e.y,z:e.z,c:new b(e.c),r:e.r});return}let n=e.getAttribute(`position`),r=e.getAttribute(`color`);if(n)for(let e=0;e+5<n.count;e+=6){let t=(n.getX(e+1)-n.getX(e))/2;if(t<3)continue;let i=r?new b(r.getX(e),r.getY(e),r.getZ(e)):new b(1,.6,.3);this.lampList.push({x:n.getX(e)+t,y:n.getY(e),z:n.getZ(e)+t,c:i,r:t})}}updateLampLights(){let e=this.lampLights;if(!e.length)return;if(!(this.lamps>.3&&this.tier.lampLights&&this.lampList.length>0)){for(let t of e)t.intensity=0;return}this.camera.getWorldDirection(Q).setY(0).normalize(),Z.copy(this.camera.position).addScaledVector(Q,10);let t=nt,n=rt,r=0;for(let e of this.lampList){let i=e.x-Z.x,a=e.z-Z.z,o=i*i+a*a;if(r===5&&o>=t[4])continue;let s=r<5?r++:4;for(;s>0&&t[s-1]>o;)t[s]=t[s-1],n[s]=n[s-1],s--;t[s]=o,n[s]=e}let i=r>4?Math.sqrt(t[4]):1e9,a=Math.min(this.lamps,1.6)/1.6;for(let o=0;o<e.length;o++){if(o>=r){e[o].intensity=0;continue}let s=n[o],c=Math.sqrt(t[o]),l=s.r>=6.5?6.5:4.5,u=Math.min(1,(i-c)/6)*(1-$((c-45)/20));e[o].position.set(s.x,s.y+l,s.z),e[o].color.copy(s.c),e[o].distance=s.r*2.6,e[o].decay=s.r>=6.5?2:2.02,e[o].intensity=(s.r>=6.5?l*l+Ie:l*l)*3.8*a*u*(1-.9*this.indoorK)}}autoTune(e){let t=e-this.lastT;if(this.lastT=e,t>250&&(this.autoQuiet=e+8e3),this.frame<3||t<=0||t>250||(this.frameMs+=(t-this.frameMs)*.05,!this.autoQuality||!this.onAutoStep)||(this.probe&&e-this.probe.t>1e3&&(this.probe.sum+=t,this.probe.n++),this.winN<this.dts.length&&(this.dts[this.winN]=t),this.winSum+=t,this.winN++,e-this.winT<1e3))return;let n=Math.min(this.winN,this.dts.length),r=this.winSum/this.winN;if(this.winT=e,this.winSum=0,this.winN=0,n<10)return;let i=this.dtsSorted.subarray(0,n);i.set(this.dts.subarray(0,n)),i.sort();let a=i[Math.floor(n*.1)],o=i[n>>1],s=i[Math.floor(n*.75)];if(this.vsyncMs=Math.min(1e3/60+.3,a<this.vsyncMs?a:this.vsyncMs+(a-this.vsyncMs)*.01),e<this.autoQuiet){this.slowT=0,this.fastT=0,this.drsFast=0,this.slowW=0;return}let c=this.gpuMs>=0,l=c&&this.gpuMs<r*.6&&this.cpuMs<r*.6,u=c?this.gpuMs>=this.cpuMs*1.25:this.cpuMs<r*.7,d=!u&&(!c||this.gpuMs>=this.cpuMs*.75),f=[1,.9,.8,.7,.6],p=u||d&&e>this.cpuBoundUntil;if(c&&l&&o>18&&Math.abs(o-this.capMs)>1?(this.capMs=o,console.info(`[render] frames paced at ${o.toFixed(1)} ms by the browser or screen (gpu ${this.gpuMs.toFixed(1)}, cpu ${this.cpuMs.toFixed(1)} ms): no step down for it`)):this.capMs&&o<this.capMs*.8&&(this.capMs=0,console.info(`[render] frame pace cap lifted`)),this.probe&&e-this.probe.t>4500){let t=this.probe;this.probe=null;let n=t.n?t.sum/t.n:r;if(n>t.avg*.985&&!(t.tier===!1&&u)){!t.tier&&this.cpuMs>n*.7&&!l?this.cpuBoundUntil=e+6e4:t.cpu?this.pictureStepUntil=e+6e4:this.capMs=t.med,console.info(`[render] step down bought nothing (${t.avg.toFixed(1)} -> ${n.toFixed(1)} ms): ${e<this.cpuBoundUntil?`CPU-bound`:`the pace is set elsewhere`}; taking it back`),t.tier?(this.onAutoStep(1,r,!1),this.fastT=0,this.slowT=0):(this.drs=t.drs,this.onDrs?.()),this.slowW=0,this.drsFast=0,this.drsT=e;return}}let m=f.indexOf(this.drs);m<0&&(m=0);let h=this.tier.pixelRatio>1?Math.max(this.drsMin,.9):this.drsMin,g=m;for(;g+1<f.length&&f[g+1]>=h-.001;)g++;m>g&&(this.drs=f[g],m=g,this.onDrs?.());let _=this.vsyncMs>13&&o<=this.vsyncMs*1.1&&s<=this.vsyncMs*1.25,v=Math.max(1e3/60,this.paceMs),y=0;for(let e=0;e<n;e++)this.dts[e]>v*1.5&&y++;let b=this.lateShare=y/n,x=b>.04&&!l&&!this.probe&&!(this.capMs&&o<this.capMs*1.12),S=(o<14.2&&s<16||_||c&&this.capMs>0&&this.gpuMs<this.capMs*.7&&this.cpuMs<this.capMs*.7)&&b<.01,C=s>v*1.14&&r>v*1.11&&!l&&!(this.capMs&&o<this.capMs*1.12)&&!this.probe||x;if(this.slowW=C?this.slowW+1:0,this.drsFast=S?this.drsFast+1:0,this.slowW&&e-this.drsUpT<8e3?(this.drsUpWait=Math.min(this.drsUpWait*2,12e4),this.drsUpT=-1e9):e-this.drsUpT>3e4&&this.drsUpWait>5e3&&(this.drsUpWait=Math.max(5e3,this.drsUpWait*.98)),this.slowW>=2&&p&&m<g&&e-this.drsT>2e3)this.probe={t:e,med:o,avg:r,drs:this.drs,tier:!1,sum:0,n:0},this.drs=f[m+1],this.drsT=e,this.slowW=0,this.slowT=0,this.onDrs?.(),console.info(`[render] drs ${this.drs} (frame ${r.toFixed(1)} ms, p75 ${s.toFixed(1)}, cpu ${this.cpuMs.toFixed(1)} ms)`);else if(this.drsFast>=3&&m>0&&e-this.drsT>this.drsUpWait&&e>this.upBlocked)this.drs=f[m-1],this.drsT=this.drsUpT=e,this.drsFast=0,this.onDrs?.(),console.info(`[render] drs ${this.drs} (headroom, med ${o.toFixed(1)} ms, vsync ${this.vsyncMs.toFixed(1)})`);else if(this.slowT=C&&(r>v*1.2||x)&&(m===g||!p)?this.slowT+1:0,this.fastT=S&&m===0?this.fastT+1:0,this.slowT>=4){e-this.tierUpT<12e4&&(this.tierUpWait=Math.min(this.tierUpWait*2,6e5)),this.tierUpT=-1e9,this.slowT=0,this.fastT=0,this.lastStep=e;let t=!u&&e>this.pictureStepUntil&&!(x&&this.tier.pixelRatio>1);this.onAutoStep(-1,r,t)===!1?(this.slowT=-20,this.bottomed=!0):(this.qualityStep++,this.probe={t:e,med:o,avg:r,drs:this.drs,tier:!0,cpu:t,sum:0,n:0},console.info(`[render] auto quality: frames averaged ${r.toFixed(1)} ms (cpu ${this.cpuMs.toFixed(1)}), stepping down${t?` (the picture stays sharp)`:``}`))}else this.fastT>=20&&e-this.lastStep>this.tierUpWait&&e>this.upBlocked&&(this.qualityStep===0||this.cpuMs<v*.65)&&(this.fastT=0,this.onAutoStep(1,r,!p)!==!1&&(this.lastStep=this.tierUpT=e,this.bottomed=!1,console.info(`[render] auto quality: frames averaged ${r.toFixed(1)} ms (vsync ${this.vsyncMs.toFixed(1)}), stepping up`)))}camOk={p:new P(0,20,0),q:new C,fov:55,warned:!1};guardCamera(){let e=this.camera,t=e.position,n=e.quaternion,r=this.camOk,i=Number.isFinite(e.fov)&&e.fov>1&&e.fov<170;Number.isFinite(t.x+t.y+t.z+n.x+n.y+n.z+n.w)&&i?(r.p.copy(t),r.q.copy(n),r.fov=e.fov):(r.warned||(r.warned=!0,console.warn(`[render] non-finite camera, restoring the last good pose`,t.toArray(),e.fov)),t.copy(r.p),n.copy(r.q),i||(e.fov=r.fov,e.updateProjectionMatrix()),e.updateMatrixWorld(!0))}lost=!1;render(){if(this.lost)return;let e=performance.now();this.guardCamera(),this.autoTune(e),this.frame++%60==0&&this.adoptScene(),this.updateLampLights(),this.stepLampPrep(),this.updateShafts(),this.sky.position.copy(this.camera.position),this.cloudRing.position.copy(this.camera.position);let t=this.tier.shadowFar;this.sun.shadow.camera.far=t+Math.min(Math.max(this.camera.position.y-5,0)*2.2,300);let n=e/1e3;this.sky.material.uniforms.time.value=n,this.final.uniforms.time.value=n,Y.wet.set(this.wet,$((this.wet-.25)/.6),n,0),this.stepReflections(e),this.renderer.info.reset(),this.renderer.shadowMap.needsUpdate=this.sun.intensity>.01&&this.tier.shadows!==!1||!this.sun.shadow.map,this.final.uniforms.bloomOn.value=+!!this.bloom.enabled;{let e=this.final.uniforms,t=!!e.tDepth.value;e.speedBlur.value=K.blur,e.dofFocus.value=K.focus,e.dofAmt.value=t?K.dof:0}this.final.uniforms.sat.value=this.grade.sat*this.satMul*this.hurtSat;let r=this.gpuBegin();this.composer.render(),this.gpuEnd(r)}};function $(e){let t=Math.min(Math.max(e,0),1);return t*t*(3-2*t)}function pt(){let e=[],t=[],n=[],r=7,i=()=>(r=r*16807%2147483647)/2147483647;for(let r=0;r<150;r++){if(i()<.08)continue;let a=r/150*Math.PI*2,o=a+Math.PI*2/150*(.75+i()*.3),s=r%23==11,c=700*(.9+i()*.2),l=s?40+i()*20:8+i()*8,u=(e,t)=>[Math.cos(e)*c,t,Math.sin(e)*c],d=e.length/3;for(let[n,r,i]of[[a,-5,0],[o,-5,0],[o,l,1],[a,l,1]])e.push(...u(n,r)),t.push(i);n.push(d,d+2,d+1,d,d+3,d+2)}let a=new te;return a.setAttribute(`position`,new h(e,3)),a.setAttribute(`hgt`,new h(t,1)),a.setIndex(n),a}export{De as i,we as n,ft as r,K as t};