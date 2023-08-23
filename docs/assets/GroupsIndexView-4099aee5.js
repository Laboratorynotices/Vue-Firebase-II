import{d as Uu,r as Bu,o as qu,a as _e,c as $u,b as ju,F as zu,e as as,f as Hu,w as ye,g as hn,h as ar,t as Gu}from"./index-1e8f61f7.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Ku=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Eo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,u=i+2<e.length,h=u?e[i+2]:0,c=s>>2,l=(s&3)<<4|a>>4;let d=(a&15)<<2|h>>6,g=h&63;u||(g=64,o||(d=64)),r.push(n[c],n[l],n[d],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(yo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ku(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const h=i<e.length?n[e.charAt(i)]:64;++i;const l=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||h==null||l==null)throw new Qu;const d=s<<2|a>>4;if(r.push(d),h!==64){const g=a<<4&240|h>>2;if(r.push(g),l!==64){const w=h<<6&192|l;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Qu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wu=function(e){const t=yo(e);return Eo.encodeByteArray(t,!0)},In=function(e){return Wu(e).replace(/\./g,"")},Yu=function(e){try{return Eo.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=()=>Xu().__FIREBASE_DEFAULTS__,Zu=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},th=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Yu(e[1]);return t&&JSON.parse(t)},vo=()=>{try{return Ju()||Zu()||th()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},eh=e=>{var t,n;return(n=(t=vo())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},nh=e=>{const t=eh(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},To=()=>{var e;return(e=vo())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[In(JSON.stringify(n)),In(JSON.stringify(o)),a].join(".")}function sh(){try{return typeof indexedDB=="object"}catch{return!1}}function oh(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah="FirebaseError";class ce extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=ah,Object.setPrototypeOf(this,ce.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Io.prototype.create)}}class Io{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?uh(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ce(i,a,r)}}function uh(e,t){return e.replace(hh,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const hh=/\{\$([^}]+)}/g;function Rr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(us(s)&&us(o)){if(!Rr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function us(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(e){return e&&e._delegate?e._delegate:e}class ke{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new rh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(dh(t))try{this.getOrInitializeService({instanceIdentifier:Nt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Nt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Nt){return this.instances.has(t)}getOptions(t=Nt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lh(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Nt){return this.component?this.component.multipleInstances?t:Nt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lh(e){return e===Nt?void 0:e}function dh(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new ch(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var S;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(S||(S={}));const ph={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},gh=S.INFO,mh={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},_h=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=mh[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ao{constructor(t){this.name=t,this._logLevel=gh,this._logHandler=_h,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in S))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ph[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...t),this._logHandler(this,S.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...t),this._logHandler(this,S.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,S.INFO,...t),this._logHandler(this,S.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,S.WARN,...t),this._logHandler(this,S.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...t),this._logHandler(this,S.ERROR,...t)}}const yh=(e,t)=>t.some(n=>e instanceof n);let hs,cs;function Eh(){return hs||(hs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vh(){return cs||(cs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wo=new WeakMap,Pr=new WeakMap,Ro=new WeakMap,ur=new WeakMap,si=new WeakMap;function Th(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Rt(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&wo.set(n,e)}).catch(()=>{}),si.set(t,e),t}function Ih(e){if(Pr.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Pr.set(e,t)}let Cr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Pr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ro.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ah(e){Cr=e(Cr)}function wh(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(hr(this),t,...n);return Ro.set(r,t.sort?t.sort():[t]),Rt(r)}:vh().includes(e)?function(...t){return e.apply(hr(this),t),Rt(wo.get(this))}:function(...t){return Rt(e.apply(hr(this),t))}}function Rh(e){return typeof e=="function"?wh(e):(e instanceof IDBTransaction&&Ih(e),yh(e,Eh())?new Proxy(e,Cr):e)}function Rt(e){if(e instanceof IDBRequest)return Th(e);if(ur.has(e))return ur.get(e);const t=Rh(e);return t!==e&&(ur.set(e,t),si.set(t,e)),t}const hr=e=>si.get(e);function Ph(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Rt(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Rt(o.result),u.oldVersion,u.newVersion,Rt(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const Ch=["get","getKey","getAll","getAllKeys","count"],Sh=["put","add","delete","clear"],cr=new Map;function ls(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(cr.get(t))return cr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Sh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ch.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),i&&u.done]))[0]};return cr.set(t,s),s}Ah(e=>({...e,get:(t,n,r)=>ls(t,n)||e.get(t,n,r),has:(t,n)=>!!ls(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Dh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Dh(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Sr="@firebase/app",ds="0.9.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=new Ao("@firebase/app"),bh="@firebase/app-compat",Nh="@firebase/analytics-compat",kh="@firebase/analytics",Mh="@firebase/app-check-compat",Oh="@firebase/app-check",xh="@firebase/auth",Fh="@firebase/auth-compat",Lh="@firebase/database",Uh="@firebase/database-compat",Bh="@firebase/functions",qh="@firebase/functions-compat",$h="@firebase/installations",jh="@firebase/installations-compat",zh="@firebase/messaging",Hh="@firebase/messaging-compat",Gh="@firebase/performance",Kh="@firebase/performance-compat",Qh="@firebase/remote-config",Wh="@firebase/remote-config-compat",Yh="@firebase/storage",Xh="@firebase/storage-compat",Jh="@firebase/firestore",Zh="@firebase/firestore-compat",tc="firebase",ec="10.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="[DEFAULT]",nc={[Sr]:"fire-core",[bh]:"fire-core-compat",[kh]:"fire-analytics",[Nh]:"fire-analytics-compat",[Oh]:"fire-app-check",[Mh]:"fire-app-check-compat",[xh]:"fire-auth",[Fh]:"fire-auth-compat",[Lh]:"fire-rtdb",[Uh]:"fire-rtdb-compat",[Bh]:"fire-fn",[qh]:"fire-fn-compat",[$h]:"fire-iid",[jh]:"fire-iid-compat",[zh]:"fire-fcm",[Hh]:"fire-fcm-compat",[Gh]:"fire-perf",[Kh]:"fire-perf-compat",[Qh]:"fire-rc",[Wh]:"fire-rc-compat",[Yh]:"fire-gcs",[Xh]:"fire-gcs-compat",[Jh]:"fire-fst",[Zh]:"fire-fst-compat","fire-js":"fire-js",[tc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new Map,Dr=new Map;function rc(e,t){try{e.container.addComponent(t)}catch(n){Ut.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function wn(e){const t=e.name;if(Dr.has(t))return Ut.debug(`There were multiple attempts to register component ${t}.`),!1;Dr.set(t,e);for(const n of An.values())rc(n,e);return!0}function ic(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pt=new Io("app","Firebase",sc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ke("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=ec;function Po(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Vr,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Pt.create("bad-app-name",{appName:String(i)});if(n||(n=To()),!n)throw Pt.create("no-options");const s=An.get(i);if(s){if(Rr(n,s.options)&&Rr(r,s.config))return s;throw Pt.create("duplicate-app",{appName:i})}const o=new fh(i);for(const u of Dr.values())o.addComponent(u);const a=new oc(n,r,o);return An.set(i,a),a}function uc(e=Vr){const t=An.get(e);if(!t&&e===Vr&&To())return Po();if(!t)throw Pt.create("no-app",{appName:e});return t}function Wt(e,t,n){var r;let i=(r=nc[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ut.warn(a.join(" "));return}wn(new ke(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc="firebase-heartbeat-database",cc=1,Me="firebase-heartbeat-store";let lr=null;function Co(){return lr||(lr=Ph(hc,cc,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Me)}}}).catch(e=>{throw Pt.create("idb-open",{originalErrorMessage:e.message})})),lr}async function lc(e){try{return await(await Co()).transaction(Me).objectStore(Me).get(So(e))}catch(t){if(t instanceof ce)Ut.warn(t.message);else{const n=Pt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ut.warn(n.message)}}}async function fs(e,t){try{const r=(await Co()).transaction(Me,"readwrite");await r.objectStore(Me).put(t,So(e)),await r.done}catch(n){if(n instanceof ce)Ut.warn(n.message);else{const r=Pt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ut.warn(r.message)}}}function So(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=1024,fc=30*24*60*60*1e3;class pc{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mc(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ps();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=fc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ps(),{heartbeatsToSend:n,unsentEntries:r}=gc(this._heartbeatsCache.heartbeats),i=In(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ps(){return new Date().toISOString().substring(0,10)}function gc(e,t=dc){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),gs(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),gs(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class mc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sh()?oh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await lc(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fs(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fs(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function gs(e){return In(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(e){wn(new ke("platform-logger",t=>new Vh(t),"PRIVATE")),wn(new ke("heartbeat",t=>new pc(t),"PRIVATE")),Wt(Sr,ds,e),Wt(Sr,ds,"esm2017"),Wt("fire-js","")}_c("");var yc="firebase",Ec="10.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt(yc,Ec,"app");var vc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m,oi=oi||{},v=vc||self;function Fn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Ke(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Tc(e){return Object.prototype.hasOwnProperty.call(e,dr)&&e[dr]||(e[dr]=++Ic)}var dr="closure_uid_"+(1e9*Math.random()>>>0),Ic=0;function Ac(e,t,n){return e.call.apply(e.bind,arguments)}function wc(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function X(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?X=Ac:X=wc,X.apply(null,arguments)}function cn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function z(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Dt(){this.s=this.s,this.o=this.o}var Rc=0;Dt.prototype.s=!1;Dt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Rc!=0)&&Tc(this)};Dt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Vo=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function ai(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function ms(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Fn(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function J(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};var Pc=function(){if(!v.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{v.addEventListener("test",()=>{},t),v.removeEventListener("test",()=>{},t)}catch{}return e}();function Oe(e){return/^[\s\xa0]*$/.test(e)}function Ln(){var e=v.navigator;return e&&(e=e.userAgent)?e:""}function lt(e){return Ln().indexOf(e)!=-1}function ui(e){return ui[" "](e),e}ui[" "]=function(){};function Cc(e,t){var n=El;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Sc=lt("Opera"),ne=lt("Trident")||lt("MSIE"),Do=lt("Edge"),br=Do||ne,bo=lt("Gecko")&&!(Ln().toLowerCase().indexOf("webkit")!=-1&&!lt("Edge"))&&!(lt("Trident")||lt("MSIE"))&&!lt("Edge"),Vc=Ln().toLowerCase().indexOf("webkit")!=-1&&!lt("Edge");function No(){var e=v.document;return e?e.documentMode:void 0}var Nr;t:{var fr="",pr=function(){var e=Ln();if(bo)return/rv:([^\);]+)(\)|;)/.exec(e);if(Do)return/Edge\/([\d\.]+)/.exec(e);if(ne)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Vc)return/WebKit\/(\S+)/.exec(e);if(Sc)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(pr&&(fr=pr?pr[1]:""),ne){var gr=No();if(gr!=null&&gr>parseFloat(fr)){Nr=String(gr);break t}}Nr=fr}var kr;if(v.document&&ne){var _s=No();kr=_s||parseInt(Nr,10)||void 0}else kr=void 0;var Dc=kr;function xe(e,t){if(J.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(bo){t:{try{ui(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:bc[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&xe.$.h.call(this)}}z(xe,J);var bc={2:"touch",3:"pen",4:"mouse"};xe.prototype.h=function(){xe.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Qe="closure_listenable_"+(1e6*Math.random()|0),Nc=0;function kc(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++Nc,this.fa=this.ia=!1}function Un(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function hi(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Mc(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function ko(e){const t={};for(const n in e)t[n]=e[n];return t}const ys="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Mo(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<ys.length;s++)n=ys[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Bn(e){this.src=e,this.g={},this.h=0}Bn.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Or(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new kc(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function Mr(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=Vo(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Un(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Or(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var ci="closure_lm_"+(1e6*Math.random()|0),mr={};function Oo(e,t,n,r,i){if(r&&r.once)return Fo(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Oo(e,t[s],n,r,i);return null}return n=fi(n),e&&e[Qe]?e.O(t,n,Ke(r)?!!r.capture:!!r,i):xo(e,t,n,!1,r,i)}function xo(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Ke(i)?!!i.capture:!!i,a=di(e);if(a||(e[ci]=a=new Bn(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=Oc(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Pc||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Uo(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Oc(){function e(n){return t.call(e.src,e.listener,n)}const t=xc;return e}function Fo(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Fo(e,t[s],n,r,i);return null}return n=fi(n),e&&e[Qe]?e.P(t,n,Ke(r)?!!r.capture:!!r,i):xo(e,t,n,!0,r,i)}function Lo(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Lo(e,t[s],n,r,i);else r=Ke(r)?!!r.capture:!!r,n=fi(n),e&&e[Qe]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Or(s,n,r,i),-1<n&&(Un(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=di(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Or(t,n,r,i)),(n=-1<e?t[e]:null)&&li(n))}function li(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Qe])Mr(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Uo(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=di(t))?(Mr(n,e),n.h==0&&(n.src=null,t[ci]=null)):Un(e)}}}function Uo(e){return e in mr?mr[e]:mr[e]="on"+e}function xc(e,t){if(e.fa)e=!0;else{t=new xe(t,this);var n=e.listener,r=e.la||e.src;e.ia&&li(e),e=n.call(r,t)}return e}function di(e){return e=e[ci],e instanceof Bn?e:null}var _r="__closure_events_fn_"+(1e9*Math.random()>>>0);function fi(e){return typeof e=="function"?e:(e[_r]||(e[_r]=function(t){return e.handleEvent(t)}),e[_r])}function j(){Dt.call(this),this.i=new Bn(this),this.S=this,this.J=null}z(j,Dt);j.prototype[Qe]=!0;j.prototype.removeEventListener=function(e,t,n,r){Lo(this,e,t,n,r)};function K(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new J(t,e);else if(t instanceof J)t.target=t.target||e;else{var i=t;t=new J(r,e),Mo(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=ln(o,r,!0,t)&&i}if(o=t.g=e,i=ln(o,r,!0,t)&&i,i=ln(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=ln(o,r,!1,t)&&i}j.prototype.N=function(){if(j.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Un(n[r]);delete e.g[t],e.h--}}this.J=null};j.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};j.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function ln(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&Mr(e.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var pi=v.JSON.stringify;class Fc{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Lc(){var e=gi;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Uc{constructor(){this.h=this.g=null}add(t,n){const r=Bo.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Bo=new Fc(()=>new Bc,e=>e.reset());class Bc{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function qc(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function $c(e){v.setTimeout(()=>{throw e},0)}let Fe,Le=!1,gi=new Uc,qo=()=>{const e=v.Promise.resolve(void 0);Fe=()=>{e.then(jc)}};var jc=()=>{for(var e;e=Lc();){try{e.h.call(e.g)}catch(n){$c(n)}var t=Bo;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Le=!1};function qn(e,t){j.call(this),this.h=e||1,this.g=t||v,this.j=X(this.qb,this),this.l=Date.now()}z(qn,j);m=qn.prototype;m.ga=!1;m.T=null;m.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),K(this,"tick"),this.ga&&(mi(this),this.start()))}};m.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function mi(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}m.N=function(){qn.$.N.call(this),mi(this),delete this.g};function _i(e,t,n){if(typeof e=="function")n&&(e=X(e,n));else if(e&&typeof e.handleEvent=="function")e=X(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:v.setTimeout(e,t||0)}function $o(e){e.g=_i(()=>{e.g=null,e.i&&(e.i=!1,$o(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class zc extends Dt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:$o(this)}N(){super.N(),this.g&&(v.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ue(e){Dt.call(this),this.h=e,this.g={}}z(Ue,Dt);var Es=[];function jo(e,t,n,r){Array.isArray(n)||(n&&(Es[0]=n.toString()),n=Es);for(var i=0;i<n.length;i++){var s=Oo(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function zo(e){hi(e.g,function(t,n){this.g.hasOwnProperty(n)&&li(t)},e),e.g={}}Ue.prototype.N=function(){Ue.$.N.call(this),zo(this)};Ue.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function $n(){this.g=!0}$n.prototype.Ea=function(){this.g=!1};function Hc(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var h=a[u].split("=");if(1<h.length){var c=h[0];h=h[1];var l=c.split("_");o=2<=l.length&&l[1]=="type"?o+(c+"="+h+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Gc(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function Qt(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Qc(e,n)+(r?" "+r:"")})}function Kc(e,t){e.info(function(){return"TIMEOUT: "+t})}$n.prototype.info=function(){};function Qc(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return pi(n)}catch{return t}}var jt={},vs=null;function jn(){return vs=vs||new j}jt.Ta="serverreachability";function Ho(e){J.call(this,jt.Ta,e)}z(Ho,J);function Be(e){const t=jn();K(t,new Ho(t))}jt.STAT_EVENT="statevent";function Go(e,t){J.call(this,jt.STAT_EVENT,e),this.stat=t}z(Go,J);function nt(e){const t=jn();K(t,new Go(t,e))}jt.Ua="timingevent";function Ko(e,t){J.call(this,jt.Ua,e),this.size=t}z(Ko,J);function We(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return v.setTimeout(function(){e()},t)}var zn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Qo={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function yi(){}yi.prototype.h=null;function Ts(e){return e.h||(e.h=e.i())}function Wo(){}var Ye={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ei(){J.call(this,"d")}z(Ei,J);function vi(){J.call(this,"c")}z(vi,J);var xr;function Hn(){}z(Hn,yi);Hn.prototype.g=function(){return new XMLHttpRequest};Hn.prototype.i=function(){return{}};xr=new Hn;function Xe(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Ue(this),this.P=Wc,e=br?125:void 0,this.V=new qn(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Yo}function Yo(){this.i=null,this.g="",this.h=!1}var Wc=45e3,Fr={},Rn={};m=Xe.prototype;m.setTimeout=function(e){this.P=e};function Lr(e,t,n){e.L=1,e.v=Kn(Et(t)),e.s=n,e.S=!0,Xo(e,null)}function Xo(e,t){e.G=Date.now(),Je(e),e.A=Et(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),sa(n.i,"t",r),e.C=0,n=e.l.J,e.h=new Yo,e.g=Pa(e.l,n?t:null,!e.s),0<e.O&&(e.M=new zc(X(e.Pa,e,e.g),e.O)),jo(e.U,e.g,"readystatechange",e.nb),t=e.I?ko(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Be(),Hc(e.j,e.u,e.A,e.m,e.W,e.s)}m.nb=function(e){e=e.target;const t=this.M;t&&ft(e)==3?t.l():this.Pa(e)};m.Pa=function(e){try{if(e==this.g)t:{const c=ft(this.g);var t=this.g.Ia();const l=this.g.da();if(!(3>c)&&(c!=3||br||this.g&&(this.h.h||this.g.ja()||Rs(this.g)))){this.J||c!=4||t==7||(t==8||0>=l?Be(3):Be(2)),Gn(this);var n=this.g.da();this.ca=n;e:if(Jo(this)){var r=Rs(this.g);e="";var i=r.length,s=ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kt(this),Pe(this);var o="";break e}this.h.i=new v.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Gc(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Oe(a)){var h=a;break e}}h=null}if(n=h)Qt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ur(this,n);else{this.i=!1,this.o=3,nt(12),kt(this),Pe(this);break t}}this.S?(Zo(this,c,o),br&&this.i&&c==3&&(jo(this.U,this.V,"tick",this.mb),this.V.start())):(Qt(this.j,this.m,o,null),Ur(this,o)),c==4&&kt(this),this.i&&!this.J&&(c==4?Ia(this.l,this):(this.i=!1,Je(this)))}else ml(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,nt(12)):(this.o=0,nt(13)),kt(this),Pe(this)}}}catch{}finally{}};function Jo(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Zo(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=Yc(e,n),i==Rn){t==4&&(e.o=4,nt(14),r=!1),Qt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Fr){e.o=4,nt(15),Qt(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Qt(e.j,e.m,i,null),Ur(e,i);Jo(e)&&i!=Rn&&i!=Fr&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,nt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Pi(t),t.M=!0,nt(11))):(Qt(e.j,e.m,n,"[Invalid Chunked Response]"),kt(e),Pe(e))}m.mb=function(){if(this.g){var e=ft(this.g),t=this.g.ja();this.C<t.length&&(Gn(this),Zo(this,e,t),this.i&&e!=4&&Je(this))}};function Yc(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Rn:(n=Number(t.substring(n,r)),isNaN(n)?Fr:(r+=1,r+n>t.length?Rn:(t=t.slice(r,r+n),e.C=r+n,t)))}m.cancel=function(){this.J=!0,kt(this)};function Je(e){e.Y=Date.now()+e.P,ta(e,e.P)}function ta(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=We(X(e.lb,e),t)}function Gn(e){e.B&&(v.clearTimeout(e.B),e.B=null)}m.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Kc(this.j,this.A),this.L!=2&&(Be(),nt(17)),kt(this),this.o=2,Pe(this)):ta(this,this.Y-e)};function Pe(e){e.l.H==0||e.J||Ia(e.l,e)}function kt(e){Gn(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,mi(e.V),zo(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Ur(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Br(n.i,e))){if(!e.K&&Br(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Sn(n),Yn(n);else break t;Ri(n),nt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=We(X(n.ib,n),6e3));if(1>=ua(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Mt(n,11)}else if((e.K||n.g==e)&&Sn(n),!Oe(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let h=i[t];if(n.V=h[0],h=h[1],n.H==2)if(h[0]=="c"){n.K=h[1],n.pa=h[2];const c=h[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const l=h[4];l!=null&&(n.Ga=l,n.l.info("SVER="+n.Ga));const d=h[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=e.g;if(g){const w=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var s=r.i;s.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Ti(s,s.h),s.h=null))}if(r.F){const D=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;D&&(r.Da=D,N(r.I,r.F,D))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Ra(r,r.J?r.pa:null,r.Y),o.K){ha(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.B&&(Gn(a),Je(a)),r.g=o}else va(r);0<n.j.length&&Xn(n)}else h[0]!="stop"&&h[0]!="close"||Mt(n,7);else n.H==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?Mt(n,7):wi(n):h[0]!="noop"&&n.h&&n.h.Aa(h),n.A=0)}}Be(4)}catch{}}function Xc(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Fn(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Jc(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Fn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function ea(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Fn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Jc(e),r=Xc(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var na=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zc(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function xt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof xt){this.h=e.h,Pn(this,e.j),this.s=e.s,this.g=e.g,Cn(this,e.m),this.l=e.l;var t=e.i,n=new qe;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Is(this,n),this.o=e.o}else e&&(t=String(e).match(na))?(this.h=!1,Pn(this,t[1]||"",!0),this.s=Te(t[2]||""),this.g=Te(t[3]||"",!0),Cn(this,t[4]),this.l=Te(t[5]||"",!0),Is(this,t[6]||"",!0),this.o=Te(t[7]||"")):(this.h=!1,this.i=new qe(null,this.h))}xt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ie(t,As,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ie(t,As,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Ie(n,n.charAt(0)=="/"?nl:el,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ie(n,il)),e.join("")};function Et(e){return new xt(e)}function Pn(e,t,n){e.j=n?Te(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Cn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Is(e,t,n){t instanceof qe?(e.i=t,sl(e.i,e.h)):(n||(t=Ie(t,rl)),e.i=new qe(t,e.h))}function N(e,t,n){e.i.set(t,n)}function Kn(e){return N(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Te(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ie(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,tl),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function tl(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var As=/[#\/\?@]/g,el=/[#\?:]/g,nl=/[#\?]/g,rl=/[#\?@]/g,il=/#/g;function qe(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function bt(e){e.g||(e.g=new Map,e.h=0,e.i&&Zc(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}m=qe.prototype;m.add=function(e,t){bt(this),this.i=null,e=le(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function ra(e,t){bt(e),t=le(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function ia(e,t){return bt(e),t=le(e,t),e.g.has(t)}m.forEach=function(e,t){bt(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};m.ta=function(){bt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};m.Z=function(e){bt(this);let t=[];if(typeof e=="string")ia(this,e)&&(t=t.concat(this.g.get(le(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};m.set=function(e,t){return bt(this),this.i=null,e=le(this,e),ia(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};m.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function sa(e,t,n){ra(e,t),0<n.length&&(e.i=null,e.g.set(le(e,t),ai(n)),e.h+=n.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function le(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function sl(e,t){t&&!e.j&&(bt(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(ra(this,r),sa(this,i,n))},e)),e.j=t}var ol=class{constructor(e,t){this.g=e,this.map=t}};function oa(e){this.l=e||al,v.PerformanceNavigationTiming?(e=v.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(v.g&&v.g.Ka&&v.g.Ka()&&v.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var al=10;function aa(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function ua(e){return e.h?1:e.g?e.g.size:0}function Br(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Ti(e,t){e.g?e.g.add(t):e.h=t}function ha(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}oa.prototype.cancel=function(){if(this.i=ca(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function ca(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return ai(e.i)}var ul=class{stringify(e){return v.JSON.stringify(e,void 0)}parse(e){return v.JSON.parse(e,void 0)}};function hl(){this.g=new ul}function cl(e,t,n){const r=n||"";try{ea(e,function(i,s){let o=i;Ke(i)&&(o=pi(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function ll(e,t){const n=new $n;if(v.Image){const r=new Image;r.onload=cn(dn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=cn(dn,n,r,"TestLoadImage: error",!1,t),r.onabort=cn(dn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=cn(dn,n,r,"TestLoadImage: timeout",!1,t),v.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function dn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Ze(e){this.l=e.fc||null,this.j=e.ob||!1}z(Ze,yi);Ze.prototype.g=function(){return new Qn(this.l,this.j)};Ze.prototype.i=function(e){return function(){return e}}({});function Qn(e,t){j.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Ii,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}z(Qn,j);var Ii=0;m=Qn.prototype;m.open=function(e,t){if(this.readyState!=Ii)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,$e(this)};m.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||v).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,tn(this)),this.readyState=Ii};m.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,$e(this)),this.g&&(this.readyState=3,$e(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof v.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;la(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function la(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}m.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tn(this):$e(this),this.readyState==3&&la(this)}};m.Za=function(e){this.g&&(this.response=this.responseText=e,tn(this))};m.Ya=function(e){this.g&&(this.response=e,tn(this))};m.ka=function(){this.g&&tn(this)};function tn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,$e(e)}m.setRequestHeader=function(e,t){this.v.append(e,t)};m.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function $e(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Qn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var dl=v.JSON.parse;function M(e){j.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=da,this.L=this.M=!1}z(M,j);var da="",fl=/^https?$/i,pl=["POST","PUT"];m=M.prototype;m.Oa=function(e){this.M=e};m.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():xr.g(),this.C=this.u?Ts(this.u):Ts(xr),this.g.onreadystatechange=X(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){ws(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=v.FormData&&e instanceof v.FormData,!(0<=Vo(pl,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ga(this),0<this.B&&((this.L=gl(this.g))?(this.g.timeout=this.B,this.g.ontimeout=X(this.ua,this)):this.A=_i(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){ws(this,s)}};function gl(e){return ne&&typeof e.timeout=="number"&&e.ontimeout!==void 0}m.ua=function(){typeof oi<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,K(this,"timeout"),this.abort(8))};function ws(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,fa(e),Wn(e)}function fa(e){e.F||(e.F=!0,K(e,"complete"),K(e,"error"))}m.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,K(this,"complete"),K(this,"abort"),Wn(this))};m.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Wn(this,!0)),M.$.N.call(this)};m.La=function(){this.s||(this.G||this.v||this.l?pa(this):this.kb())};m.kb=function(){pa(this)};function pa(e){if(e.h&&typeof oi<"u"&&(!e.C[1]||ft(e)!=4||e.da()!=2)){if(e.v&&ft(e)==4)_i(e.La,0,e);else if(K(e,"readystatechange"),ft(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(na)[1]||null;!i&&v.self&&v.self.location&&(i=v.self.location.protocol.slice(0,-1)),r=!fl.test(i?i.toLowerCase():"")}n=r}if(n)K(e,"complete"),K(e,"success");else{e.m=6;try{var s=2<ft(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",fa(e)}}finally{Wn(e)}}}}function Wn(e,t){if(e.g){ga(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||K(e,"ready");try{n.onreadystatechange=r}catch{}}}function ga(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(v.clearTimeout(e.A),e.A=null)}m.isActive=function(){return!!this.g};function ft(e){return e.g?e.g.readyState:0}m.da=function(){try{return 2<ft(this)?this.g.status:-1}catch{return-1}};m.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),dl(t)}};function Rs(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case da:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function ml(e){const t={};e=(e.g&&2<=ft(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Oe(e[r]))continue;var n=qc(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}Mc(t,function(r){return r.join(", ")})}m.Ia=function(){return this.m};m.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ma(e){let t="";return hi(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Ai(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=ma(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):N(e,t,n))}function Ee(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function _a(e){this.Ga=0,this.j=[],this.l=new $n,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ee("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ee("baseRetryDelayMs",5e3,e),this.hb=Ee("retryDelaySeedMs",1e4,e),this.eb=Ee("forwardChannelMaxRetries",2,e),this.xa=Ee("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new oa(e&&e.concurrentRequestLimit),this.Ja=new hl,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}m=_a.prototype;m.ra=8;m.H=1;function wi(e){if(ya(e),e.H==3){var t=e.W++,n=Et(e.I);if(N(n,"SID",e.K),N(n,"RID",t),N(n,"TYPE","terminate"),en(e,n),t=new Xe(e,e.l,t),t.L=2,t.v=Kn(Et(n)),n=!1,v.navigator&&v.navigator.sendBeacon)try{n=v.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&v.Image&&(new Image().src=t.v,n=!0),n||(t.g=Pa(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Je(t)}wa(e)}function Yn(e){e.g&&(Pi(e),e.g.cancel(),e.g=null)}function ya(e){Yn(e),e.u&&(v.clearTimeout(e.u),e.u=null),Sn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&v.clearTimeout(e.m),e.m=null)}function Xn(e){if(!aa(e.i)&&!e.m){e.m=!0;var t=e.Na;Fe||qo(),Le||(Fe(),Le=!0),gi.add(t,e),e.C=0}}function _l(e,t){return ua(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=We(X(e.Na,e,t),Aa(e,e.C)),e.C++,!0)}m.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Xe(this,this.l,e);let s=this.s;if(this.U&&(s?(s=ko(s),Mo(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Ea(this,i,t),n=Et(this.I),N(n,"RID",e),N(n,"CVER",22),this.F&&N(n,"X-HTTP-Session-Id",this.F),en(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(ma(s)))+"&"+t:this.o&&Ai(n,this.o,s)),Ti(this.i,i),this.bb&&N(n,"TYPE","init"),this.P?(N(n,"$req",t),N(n,"SID","null"),i.aa=!0,Lr(i,n,null)):Lr(i,n,t),this.H=2}}else this.H==3&&(e?Ps(this,e):this.j.length==0||aa(this.i)||Ps(this))};function Ps(e,t){var n;t?n=t.m:n=e.W++;const r=Et(e.I);N(r,"SID",e.K),N(r,"RID",n),N(r,"AID",e.V),en(e,r),e.o&&e.s&&Ai(r,e.o,e.s),n=new Xe(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Ea(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Ti(e.i,n),Lr(n,r,t)}function en(e,t){e.na&&hi(e.na,function(n,r){N(t,r,n)}),e.h&&ea({},function(n,r){N(t,r,n)})}function Ea(e,t,n){n=Math.min(e.j.length,n);var r=e.h?X(e.h.Va,e.h,e):null;t:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let h=i[u].g;const c=i[u].map;if(h-=s,0>h)s=Math.max(0,i[u].g-100),a=!1;else try{cl(c,o,"req"+h+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function va(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Fe||qo(),Le||(Fe(),Le=!0),gi.add(t,e),e.A=0}}function Ri(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=We(X(e.Ma,e),Aa(e,e.A)),e.A++,!0)}m.Ma=function(){if(this.u=null,Ta(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=We(X(this.jb,this),e)}};m.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,nt(10),Yn(this),Ta(this))};function Pi(e){e.B!=null&&(v.clearTimeout(e.B),e.B=null)}function Ta(e){e.g=new Xe(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Et(e.wa);N(t,"RID","rpc"),N(t,"SID",e.K),N(t,"AID",e.V),N(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&N(t,"TO",e.qa),N(t,"TYPE","xmlhttp"),en(e,t),e.o&&e.s&&Ai(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Kn(Et(t)),n.s=null,n.S=!0,Xo(n,e)}m.ib=function(){this.v!=null&&(this.v=null,Yn(this),Ri(this),nt(19))};function Sn(e){e.v!=null&&(v.clearTimeout(e.v),e.v=null)}function Ia(e,t){var n=null;if(e.g==t){Sn(e),Pi(e),e.g=null;var r=2}else if(Br(e.i,t))n=t.F,ha(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=jn(),K(r,new Ko(r,n)),Xn(e)}else va(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&_l(e,t)||r==2&&Ri(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Mt(e,5);break;case 4:Mt(e,10);break;case 3:Mt(e,6);break;default:Mt(e,2)}}}function Aa(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Mt(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=X(e.pb,e);n||(n=new xt("//www.google.com/images/cleardot.gif"),v.location&&v.location.protocol=="http"||Pn(n,"https"),Kn(n)),ll(n.toString(),r)}else nt(2);e.H=0,e.h&&e.h.za(t),wa(e),ya(e)}m.pb=function(e){e?(this.l.info("Successfully pinged google.com"),nt(2)):(this.l.info("Failed to ping google.com"),nt(1))};function wa(e){if(e.H=0,e.ma=[],e.h){const t=ca(e.i);(t.length!=0||e.j.length!=0)&&(ms(e.ma,t),ms(e.ma,e.j),e.i.i.length=0,ai(e.j),e.j.length=0),e.h.ya()}}function Ra(e,t,n){var r=n instanceof xt?Et(n):new xt(n);if(r.g!="")t&&(r.g=t+"."+r.g),Cn(r,r.m);else{var i=v.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new xt(null);r&&Pn(s,r),t&&(s.g=t),i&&Cn(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&N(r,n,t),N(r,"VER",e.ra),en(e,r),r}function Pa(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new M(new Ze({ob:!0})):new M(e.va),t.Oa(e.J),t}m.isActive=function(){return!!this.h&&this.h.isActive(this)};function Ca(){}m=Ca.prototype;m.Ba=function(){};m.Aa=function(){};m.za=function(){};m.ya=function(){};m.isActive=function(){return!0};m.Va=function(){};function Vn(){if(ne&&!(10<=Number(Dc)))throw Error("Environmental error: no available transport.")}Vn.prototype.g=function(e,t){return new ot(e,t)};function ot(e,t){j.call(this),this.g=new _a(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Oe(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Oe(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new de(this)}z(ot,j);ot.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;nt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Ra(e,null,e.Y),Xn(e)};ot.prototype.close=function(){wi(this.g)};ot.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=pi(e),e=n);t.j.push(new ol(t.fb++,e)),t.H==3&&Xn(t)};ot.prototype.N=function(){this.g.h=null,delete this.j,wi(this.g),delete this.g,ot.$.N.call(this)};function Sa(e){Ei.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}z(Sa,Ei);function Va(){vi.call(this),this.status=1}z(Va,vi);function de(e){this.g=e}z(de,Ca);de.prototype.Ba=function(){K(this.g,"a")};de.prototype.Aa=function(e){K(this.g,new Sa(e))};de.prototype.za=function(e){K(this.g,new Va)};de.prototype.ya=function(){K(this.g,"b")};function yl(){this.blockSize=-1}function ut(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}z(ut,yl);ut.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function yr(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}ut.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)yr(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){yr(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){yr(this,r),i=0;break}}this.h=i,this.i+=t};ut.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function b(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var El={};function Ci(e){return-128<=e&&128>e?Cc(e,function(t){return new b([t|0],0>t?-1:0)}):new b([e|0],0>e?-1:0)}function pt(e){if(isNaN(e)||!isFinite(e))return Yt;if(0>e)return G(pt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=qr;return new b(t,0)}function Da(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return G(Da(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=pt(Math.pow(t,8)),r=Yt,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=pt(Math.pow(t,s)),r=r.R(s).add(pt(o))):(r=r.R(n),r=r.add(pt(o)))}return r}var qr=4294967296,Yt=Ci(0),$r=Ci(1),Cs=Ci(16777216);m=b.prototype;m.ea=function(){if(at(this))return-G(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:qr+r)*t,t*=qr}return e};m.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(yt(this))return"0";if(at(this))return"-"+G(this).toString(e);for(var t=pt(Math.pow(e,6)),n=this,r="";;){var i=bn(n,t).g;n=Dn(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,yt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};m.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function yt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function at(e){return e.h==-1}m.X=function(e){return e=Dn(this,e),at(e)?-1:yt(e)?0:1};function G(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new b(n,~e.h).add($r)}m.abs=function(){return at(this)?G(this):this};m.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new b(n,n[n.length-1]&-2147483648?-1:0)};function Dn(e,t){return e.add(G(t))}m.R=function(e){if(yt(this)||yt(e))return Yt;if(at(this))return at(e)?G(this).R(G(e)):G(G(this).R(e));if(at(e))return G(this.R(G(e)));if(0>this.X(Cs)&&0>e.X(Cs))return pt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,u=e.D(i)&65535;n[2*r+2*i]+=o*u,fn(n,2*r+2*i),n[2*r+2*i+1]+=s*u,fn(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,fn(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,fn(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new b(n,0)};function fn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function ve(e,t){this.g=e,this.h=t}function bn(e,t){if(yt(t))throw Error("division by zero");if(yt(e))return new ve(Yt,Yt);if(at(e))return t=bn(G(e),t),new ve(G(t.g),G(t.h));if(at(t))return t=bn(e,G(t)),new ve(G(t.g),t.h);if(30<e.g.length){if(at(e)||at(t))throw Error("slowDivide_ only works with positive integers.");for(var n=$r,r=t;0>=r.X(e);)n=Ss(n),r=Ss(r);var i=Ht(n,1),s=Ht(r,1);for(r=Ht(r,2),n=Ht(n,2);!yt(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Ht(r,1),n=Ht(n,1)}return t=Dn(e,i.R(t)),new ve(i,t)}for(i=Yt;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=pt(n),o=s.R(t);at(o)||0<o.X(e);)n-=r,s=pt(n),o=s.R(t);yt(s)&&(s=$r),i=i.add(s),e=Dn(e,o)}return new ve(i,e)}m.gb=function(e){return bn(this,e).h};m.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new b(n,this.h&e.h)};m.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new b(n,this.h|e.h)};m.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new b(n,this.h^e.h)};function Ss(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new b(n,e.h)}function Ht(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new b(i,e.h)}Vn.prototype.createWebChannel=Vn.prototype.g;ot.prototype.send=ot.prototype.u;ot.prototype.open=ot.prototype.m;ot.prototype.close=ot.prototype.close;zn.NO_ERROR=0;zn.TIMEOUT=8;zn.HTTP_ERROR=6;Qo.COMPLETE="complete";Wo.EventType=Ye;Ye.OPEN="a";Ye.CLOSE="b";Ye.ERROR="c";Ye.MESSAGE="d";j.prototype.listen=j.prototype.O;M.prototype.listenOnce=M.prototype.P;M.prototype.getLastError=M.prototype.Sa;M.prototype.getLastErrorCode=M.prototype.Ia;M.prototype.getStatus=M.prototype.da;M.prototype.getResponseJson=M.prototype.Wa;M.prototype.getResponseText=M.prototype.ja;M.prototype.send=M.prototype.ha;M.prototype.setWithCredentials=M.prototype.Oa;ut.prototype.digest=ut.prototype.l;ut.prototype.reset=ut.prototype.reset;ut.prototype.update=ut.prototype.j;b.prototype.add=b.prototype.add;b.prototype.multiply=b.prototype.R;b.prototype.modulo=b.prototype.gb;b.prototype.compare=b.prototype.X;b.prototype.toNumber=b.prototype.ea;b.prototype.toString=b.prototype.toString;b.prototype.getBits=b.prototype.D;b.fromNumber=pt;b.fromString=Da;var vl=function(){return new Vn},Tl=function(){return jn()},Er=zn,Il=Qo,Al=jt,Vs={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},wl=Ze,pn=Wo,Rl=M,Pl=ut,Xt=b;const Ds="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}W.UNAUTHENTICATED=new W(null),W.GOOGLE_CREDENTIALS=new W("google-credentials-uid"),W.FIRST_PARTY=new W("first-party-uid"),W.MOCK_USER=new W("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fe="10.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=new Ao("@firebase/firestore");function bs(){return Bt.logLevel}function y(e,...t){if(Bt.logLevel<=S.DEBUG){const n=t.map(Si);Bt.debug(`Firestore (${fe}): ${e}`,...n)}}function vt(e,...t){if(Bt.logLevel<=S.ERROR){const n=t.map(Si);Bt.error(`Firestore (${fe}): ${e}`,...n)}}function re(e,...t){if(Bt.logLevel<=S.WARN){const n=t.map(Si);Bt.warn(`Firestore (${fe}): ${e}`,...n)}}function Si(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e="Unexpected state"){const t=`FIRESTORE (${fe}) INTERNAL ASSERTION FAILED: `+e;throw vt(t),new Error(t)}function B(e,t){e||I()}function C(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends ce{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Cl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(W.UNAUTHENTICATED))}shutdown(){}}class Sl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Vl{constructor(t){this.t=t,this.currentUser=W.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Ft;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ft,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ft)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(B(typeof r.accessToken=="string"),new ba(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return B(t===null||typeof t=="string"),new W(t)}}class Dl{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=W.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class bl{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Dl(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(W.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Nl{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kl{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(B(typeof n.token=="string"),this.R=n.token,new Nl(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Ml(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function V(e,t){return e<t?-1:e>t?1:0}function ie(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new _(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new _(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new _(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new _(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return $.fromMillis(Date.now())}static fromDate(t){return $.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new $(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?V(this.nanoseconds,t.nanoseconds):V(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t){this.timestamp=t}static fromTimestamp(t){return new T(t)}static min(){return new T(new $(0,0))}static max(){return new T(new $(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(t,n,r){n===void 0?n=0:n>t.length&&I(),r===void 0?r=t.length-n:r>t.length-n&&I(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return je.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof je?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class k extends je{construct(t,n,r){return new k(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new _(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new k(n)}static emptyPath(){return new k([])}}const xl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends je{construct(t,n,r){return new et(t,n,r)}static isValidIdentifier(t){return xl.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new _(p.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new _(p.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new _(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new _(p.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new et(n)}static emptyPath(){return new et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(k.fromString(t))}static fromName(t){return new E(k.fromString(t).popFirst(5))}static empty(){return new E(k.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&k.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return k.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new k(t.slice()))}}function Fl(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=T.fromTimestamp(r===1e9?new $(n+1,0):new $(n,r));return new Ct(i,E.empty(),t)}function Ll(e){return new Ct(e.readTime,e.key,-1)}class Ct{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Ct(T.min(),E.empty(),-1)}static max(){return new Ct(T.max(),E.empty(),-1)}}function Ul(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=E.comparator(e.documentKey,t.documentKey),n!==0?n:V(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ql{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vi(e){if(e.code!==p.FAILED_PRECONDITION||e.message!==Bl)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new f((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof f?n:f.resolve(n)}catch(n){return f.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):f.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):f.reject(n)}static resolve(t){return new f((n,r)=>{n(t)})}static reject(t){return new f((n,r)=>{r(t)})}static waitFor(t){return new f((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(t){let n=f.resolve(!1);for(const r of t)n=n.next(i=>i?f.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new f((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const h=u;n(t[h]).next(c=>{o[h]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(t,n){return new f((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function nn(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Di.ae=-1;function Jn(e){return e==null}function Nn(e){return e===0&&1/e==-1/0}function $l(e){return typeof e=="number"&&Number.isInteger(e)&&!Nn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function rn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Na(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t,n){this.comparator=t,this.root=n||H.EMPTY}insert(t,n){return new x(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,H.BLACK,null,null))}remove(t){return new x(this.comparator,this.root.remove(t,this.comparator).copy(null,null,H.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new gn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new gn(this.root,t,this.comparator,!1)}getReverseIterator(){return new gn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new gn(this.root,t,this.comparator,!0)}}class gn{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class H{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??H.RED,this.left=i??H.EMPTY,this.right=s??H.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new H(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return H.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return H.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,H.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,H.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}H.EMPTY=null,H.RED=!0,H.BLACK=!1;H.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(t,n,r,i,s){return this}insert(t,n,r){return new H(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.comparator=t,this.data=new x(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new ks(this.data.getIterator())}getIteratorFrom(t){return new ks(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Z)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Z(this.comparator);return n.data=t,n}}class ks{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.fields=t,t.sort(et.comparator)}static empty(){return new At([])}unionWith(t){let n=new Z(et.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new At(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ie(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ka("Invalid base64 string: "+s):s}}(t);return new tt(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new tt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return V(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const jl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function St(e){if(B(!!e),typeof e=="string"){let t=0;const n=jl.exec(e);if(B(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:L(e.seconds),nanos:L(e.nanos)}}function L(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function qt(e){return typeof e=="string"?tt.fromBase64String(e):tt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ni(e){const t=e.mapValue.fields.__previous_value__;return bi(t)?Ni(t):t}function ze(e){const t=St(e.mapValue.fields.__local_write_time__.timestampValue);return new $(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(t,n,r,i,s,o,a,u,h){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=h}}class He{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new He("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof He&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $t(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?bi(e)?4:Hl(e)?9007199254740991:10:I()}function gt(e,t){if(e===t)return!0;const n=$t(e);if(n!==$t(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ze(e).isEqual(ze(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=St(i.timestampValue),a=St(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return qt(i.bytesValue).isEqual(qt(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return L(i.geoPointValue.latitude)===L(s.geoPointValue.latitude)&&L(i.geoPointValue.longitude)===L(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return L(i.integerValue)===L(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=L(i.doubleValue),a=L(s.doubleValue);return o===a?Nn(o)===Nn(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return ie(e.arrayValue.values||[],t.arrayValue.values||[],gt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Ns(o)!==Ns(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!gt(o[u],a[u])))return!1;return!0}(e,t);default:return I()}}function Ge(e,t){return(e.values||[]).find(n=>gt(n,t))!==void 0}function se(e,t){if(e===t)return 0;const n=$t(e),r=$t(t);if(n!==r)return V(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return V(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=L(s.integerValue||s.doubleValue),u=L(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(e,t);case 3:return Ms(e.timestampValue,t.timestampValue);case 4:return Ms(ze(e),ze(t));case 5:return V(e.stringValue,t.stringValue);case 6:return function(s,o){const a=qt(s),u=qt(o);return a.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let h=0;h<a.length&&h<u.length;h++){const c=V(a[h],u[h]);if(c!==0)return c}return V(a.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=V(L(s.latitude),L(o.latitude));return a!==0?a:V(L(s.longitude),L(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let h=0;h<a.length&&h<u.length;++h){const c=se(a[h],u[h]);if(c)return c}return V(a.length,u.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===mn.mapValue&&o===mn.mapValue)return 0;if(s===mn.mapValue)return 1;if(o===mn.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),h=o.fields||{},c=Object.keys(h);u.sort(),c.sort();for(let l=0;l<u.length&&l<c.length;++l){const d=V(u[l],c[l]);if(d!==0)return d;const g=se(a[u[l]],h[c[l]]);if(g!==0)return g}return V(u.length,c.length)}(e.mapValue,t.mapValue);default:throw I()}}function Ms(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return V(e,t);const n=St(e),r=St(t),i=V(n.seconds,r.seconds);return i!==0?i:V(n.nanos,r.nanos)}function oe(e){return jr(e)}function jr(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=St(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return qt(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return E.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=jr(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${jr(n.fields[o])}`;return i+"}"}(e.mapValue):I()}function Os(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function zr(e){return!!e&&"integerValue"in e}function ki(e){return!!e&&"arrayValue"in e}function xs(e){return!!e&&"nullValue"in e}function Fs(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function vr(e){return!!e&&"mapValue"in e}function Ce(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return rn(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Ce(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ce(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Hl(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.value=t}static empty(){return new dt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!vr(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ce(n)}setAll(t){let n=et.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ce(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());vr(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return gt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];vr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){rn(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new dt(Ce(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Y(t,0,T.min(),T.min(),T.min(),dt.empty(),0)}static newFoundDocument(t,n,r,i){return new Y(t,1,n,T.min(),r,i,0)}static newNoDocument(t,n){return new Y(t,2,n,T.min(),T.min(),dt.empty(),0)}static newUnknownDocument(t,n){return new Y(t,3,n,T.min(),T.min(),dt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(T.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=T.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Y&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Y(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(t,n){this.position=t,this.inclusive=n}}function Ls(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=E.comparator(E.fromName(o.referenceValue),n.key):r=se(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Us(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!gt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(t,n="asc"){this.field=t,this.dir=n}}function Gl(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{}class U extends Ma{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new Ql(t,n,r):n==="array-contains"?new Xl(t,r):n==="in"?new Jl(t,r):n==="not-in"?new Zl(t,r):n==="array-contains-any"?new td(t,r):new U(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Wl(t,r):new Yl(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(se(n,this.value)):n!==null&&$t(this.value)===$t(n)&&this.matchesComparison(se(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ht extends Ma{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new ht(t,n)}matches(t){return Oa(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(n=>n.isInequality());return t!==null?t.field:null}le(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Oa(e){return e.op==="and"}function xa(e){return Kl(e)&&Oa(e)}function Kl(e){for(const t of e.filters)if(t instanceof ht)return!1;return!0}function Hr(e){if(e instanceof U)return e.field.canonicalString()+e.op.toString()+oe(e.value);if(xa(e))return e.filters.map(t=>Hr(t)).join(",");{const t=e.filters.map(n=>Hr(n)).join(",");return`${e.op}(${t})`}}function Fa(e,t){return e instanceof U?function(r,i){return i instanceof U&&r.op===i.op&&r.field.isEqual(i.field)&&gt(r.value,i.value)}(e,t):e instanceof ht?function(r,i){return i instanceof ht&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Fa(o,i.filters[a]),!0):!1}(e,t):void I()}function La(e){return e instanceof U?function(n){return`${n.field.canonicalString()} ${n.op} ${oe(n.value)}`}(e):e instanceof ht?function(n){return n.op.toString()+" {"+n.getFilters().map(La).join(" ,")+"}"}(e):"Filter"}class Ql extends U{constructor(t,n,r){super(t,n,r),this.key=E.fromName(r.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.matchesComparison(n)}}class Wl extends U{constructor(t,n){super(t,"in",n),this.keys=Ua("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Yl extends U{constructor(t,n){super(t,"not-in",n),this.keys=Ua("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Ua(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>E.fromName(r.referenceValue))}class Xl extends U{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return ki(n)&&Ge(n.arrayValue,this.value)}}class Jl extends U{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ge(this.value.arrayValue,n)}}class Zl extends U{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ge(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ge(this.value.arrayValue,n)}}class td extends U{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!ki(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ge(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Bs(e,t=null,n=[],r=[],i=null,s=null,o=null){return new ed(e,t,n,r,i,s,o)}function Mi(e){const t=C(e);if(t.he===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Hr(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Jn(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>oe(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>oe(r)).join(",")),t.he=n}return t.he}function Oi(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Gl(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Fa(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Us(e.startAt,t.startAt)&&Us(e.endAt,t.endAt)}function Gr(e){return E.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function nd(e,t,n,r,i,s,o,a){return new sn(e,t,n,r,i,s,o,a)}function xi(e){return new sn(e)}function qs(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Ba(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Fi(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function qa(e){return e.collectionGroup!==null}function Ve(e){const t=C(e);if(t.Pe===null){t.Pe=[];const n=Fi(t),r=Ba(t);if(n!==null&&r===null)n.isKeyField()||t.Pe.push(new Se(n)),t.Pe.push(new Se(et.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new Se(et.keyField(),s))}}}return t.Pe}function Tt(e){const t=C(e);return t.Ie||(t.Ie=rd(t,Ve(e))),t.Ie}function rd(e,t){if(e.limitType==="F")return Bs(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Se(i.field,s)});const n=e.endAt?new kn(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new kn(e.startAt.position,e.startAt.inclusive):null;return Bs(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Kr(e,t){t.getFirstInequalityField(),Fi(e);const n=e.filters.concat([t]);return new sn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Qr(e,t,n){return new sn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Zn(e,t){return Oi(Tt(e),Tt(t))&&e.limitType===t.limitType}function $a(e){return`${Mi(Tt(e))}|lt:${e.limitType}`}function Wr(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>La(i)).join(", ")}]`),Jn(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>oe(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>oe(i)).join(",")),`Target(${r})`}(Tt(e))}; limitType=${e.limitType})`}function tr(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):E.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of Ve(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,u){const h=Ls(o,a,u);return o.inclusive?h<=0:h<0}(r.startAt,Ve(r),i)||r.endAt&&!function(o,a,u){const h=Ls(o,a,u);return o.inclusive?h>=0:h>0}(r.endAt,Ve(r),i))}(e,t)}function id(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ja(e){return(t,n)=>{let r=!1;for(const i of Ve(e)){const s=sd(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function sd(e,t,n){const r=e.field.isKeyField()?E.comparator(t.key,n.key):function(s,o,a){const u=o.data.field(s),h=a.data.field(s);return u!==null&&h!==null?se(u,h):I()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return I()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){rn(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return Na(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od=new x(E.comparator);function Vt(){return od}const za=new x(E.comparator);function Ae(...e){let t=za;for(const n of e)t=t.insert(n.key,n);return t}function ad(e){let t=za;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Ot(){return De()}function Ha(){return De()}function De(){return new pe(e=>e.toString(),(e,t)=>e.isEqual(t))}const ud=new Z(E.comparator);function P(...e){let t=ud;for(const n of e)t=t.add(n);return t}const hd=new Z(V);function cd(){return hd}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nn(t)?"-0":t}}function Ka(e){return{integerValue:""+e}}function ld(e,t){return $l(t)?Ka(t):Ga(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this._=void 0}}function dd(e,t,n){return e instanceof Yr?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&bi(s)&&(s=Ni(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof Mn?Qa(e,t):e instanceof On?Wa(e,t):function(i,s){const o=pd(i,s),a=$s(o)+$s(i.Ee);return zr(o)&&zr(i.Ee)?Ka(a):Ga(i.serializer,a)}(e,t)}function fd(e,t,n){return e instanceof Mn?Qa(e,t):e instanceof On?Wa(e,t):n}function pd(e,t){return e instanceof Xr?function(r){return zr(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Yr extends er{}class Mn extends er{constructor(t){super(),this.elements=t}}function Qa(e,t){const n=Ya(t);for(const r of e.elements)n.some(i=>gt(i,r))||n.push(r);return{arrayValue:{values:n}}}class On extends er{constructor(t){super(),this.elements=t}}function Wa(e,t){let n=Ya(t);for(const r of e.elements)n=n.filter(i=>!gt(i,r));return{arrayValue:{values:n}}}class Xr extends er{constructor(t,n){super(),this.serializer=t,this.Ee=n}}function $s(e){return L(e.integerValue||e.doubleValue)}function Ya(e){return ki(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function gd(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof Mn&&i instanceof Mn||r instanceof On&&i instanceof On?ie(r.elements,i.elements,gt):r instanceof Xr&&i instanceof Xr?gt(r.Ee,i.Ee):r instanceof Yr&&i instanceof Yr}(e.transform,t.transform)}class Lt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Lt}static exists(t){return new Lt(void 0,t)}static updateTime(t){return new Lt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function En(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Li{}function Xa(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new _d(e.key,Lt.none()):new Ui(e.key,e.data,Lt.none());{const n=e.data,r=dt.empty();let i=new Z(et.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new nr(e.key,r,new At(i.toArray()),Lt.none())}}function md(e,t,n){e instanceof Ui?function(i,s,o){const a=i.value.clone(),u=zs(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof nr?function(i,s,o){if(!En(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=zs(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Ja(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function be(e,t,n,r){return e instanceof Ui?function(s,o,a,u){if(!En(s.precondition,o))return a;const h=s.value.clone(),c=Hs(s.fieldTransforms,u,o);return h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(e,t,n,r):e instanceof nr?function(s,o,a,u){if(!En(s.precondition,o))return a;const h=Hs(s.fieldTransforms,u,o),c=o.data;return c.setAll(Ja(s)),c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(l=>l.field))}(e,t,n,r):function(s,o,a){return En(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function js(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ie(r,i,(s,o)=>gd(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Ui extends Li{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class nr extends Li{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ja(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function zs(e,t,n){const r=new Map;B(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,fd(o,a,n[i]))}return r}function Hs(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,dd(s,o,t))}return r}class _d extends Li{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&md(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=be(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=be(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Ha();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=Xa(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(T.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),P())}isEqual(t){return this.batchId===t.batchId&&ie(this.mutations,t.mutations,(n,r)=>js(n,r))&&ie(this.baseMutations,t.baseMutations,(n,r)=>js(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F,R;function Za(e){if(e===void 0)return vt("GRPC error has no .code"),p.UNKNOWN;switch(e){case F.OK:return p.OK;case F.CANCELLED:return p.CANCELLED;case F.UNKNOWN:return p.UNKNOWN;case F.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case F.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case F.INTERNAL:return p.INTERNAL;case F.UNAVAILABLE:return p.UNAVAILABLE;case F.UNAUTHENTICATED:return p.UNAUTHENTICATED;case F.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case F.NOT_FOUND:return p.NOT_FOUND;case F.ALREADY_EXISTS:return p.ALREADY_EXISTS;case F.PERMISSION_DENIED:return p.PERMISSION_DENIED;case F.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case F.ABORTED:return p.ABORTED;case F.OUT_OF_RANGE:return p.OUT_OF_RANGE;case F.UNIMPLEMENTED:return p.UNIMPLEMENTED;case F.DATA_LOSS:return p.DATA_LOSS;default:return I()}}(R=F||(F={}))[R.OK=0]="OK",R[R.CANCELLED=1]="CANCELLED",R[R.UNKNOWN=2]="UNKNOWN",R[R.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",R[R.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",R[R.NOT_FOUND=5]="NOT_FOUND",R[R.ALREADY_EXISTS=6]="ALREADY_EXISTS",R[R.PERMISSION_DENIED=7]="PERMISSION_DENIED",R[R.UNAUTHENTICATED=16]="UNAUTHENTICATED",R[R.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",R[R.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",R[R.ABORTED=10]="ABORTED",R[R.OUT_OF_RANGE=11]="OUT_OF_RANGE",R[R.UNIMPLEMENTED=12]="UNIMPLEMENTED",R[R.INTERNAL=13]="INTERNAL",R[R.UNAVAILABLE=14]="UNAVAILABLE",R[R.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return _n}static getOrCreateInstance(){return _n===null&&(_n=new Bi),_n}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let _n=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=new Xt([4294967295,4294967295],0);function Gs(e){const t=Td().encode(e),n=new Pl;return n.update(t),new Uint8Array(n.digest())}function Ks(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Xt([n,r],0),new Xt([i,s],0)]}class qi{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new we(`Invalid padding: ${n}`);if(r<0)throw new we(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new we(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new we(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*t.length-n,this.Re=Xt.fromNumber(this.Ae)}Ve(t,n,r){let i=t.add(n.multiply(Xt.fromNumber(r)));return i.compare(Id)===1&&(i=new Xt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ae===0)return!1;const n=Gs(t),[r,i]=Ks(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new qi(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Ae===0)return;const n=Gs(t),[r,i]=Ks(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class we extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,on.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new rr(T.min(),i,new x(V),Vt(),P())}}class on{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new on(r,n,P(),P(),P())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t,n,r,i){this.ge=t,this.removedTargetIds=n,this.key=r,this.pe=i}}class tu{constructor(t,n){this.targetId=t,this.ye=n}}class eu{constructor(t,n,r=tt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Qs{constructor(){this.we=0,this.Se=Ys(),this.be=tt.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return this.we!==0}get Fe(){return this.ve}Me(t){t.approximateByteSize()>0&&(this.ve=!0,this.be=t)}xe(){let t=P(),n=P(),r=P();return this.Se.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:I()}}),new on(this.be,this.De,t,n,r)}Oe(){this.ve=!1,this.Se=Ys()}Ne(t,n){this.ve=!0,this.Se=this.Se.insert(t,n)}Be(t){this.ve=!0,this.Se=this.Se.remove(t)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class Ad{constructor(t){this.Qe=t,this.Ke=new Map,this.$e=Vt(),this.Ue=Ws(),this.We=new x(V)}Ge(t){for(const n of t.ge)t.pe&&t.pe.isFoundDocument()?this.ze(n,t.pe):this.je(n,t.key,t.pe);for(const n of t.removedTargetIds)this.je(n,t.key,t.pe)}He(t){this.forEachTarget(t,n=>{const r=this.Je(n);switch(t.state){case 0:this.Ye(n)&&r.Me(t.resumeToken);break;case 1:r.ke(),r.Ce||r.Oe(),r.Me(t.resumeToken);break;case 2:r.ke(),r.Ce||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(t.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(t.resumeToken));break;default:I()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Ke.forEach((r,i)=>{this.Ye(i)&&n(i)})}Xe(t){var n;const r=t.targetId,i=t.ye.count,s=this.et(r);if(s){const o=s.target;if(Gr(o))if(i===0){const a=new E(o.path);this.je(r,a,Y.newNoDocument(a,T.min()))}else B(i===1);else{const a=this.tt(r);if(a!==i){const u=this.nt(t),h=u?this.rt(u,t,a):1;if(h!==0){this.Ze(r);const c=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(r,c)}(n=Bi.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,d,g,w,D){var A,O,rt,it,st,_t;const It={localCacheCount:l,existenceFilterCount:d.count,databaseId:g.database,projectId:g.projectId},ct=d.unchangedNames;return ct&&(It.bloomFilter={applied:D===0,hashCount:(A=ct==null?void 0:ct.hashCount)!==null&&A!==void 0?A:0,bitmapLength:(it=(rt=(O=ct==null?void 0:ct.bits)===null||O===void 0?void 0:O.bitmap)===null||rt===void 0?void 0:rt.length)!==null&&it!==void 0?it:0,padding:(_t=(st=ct==null?void 0:ct.bits)===null||st===void 0?void 0:st.padding)!==null&&_t!==void 0?_t:0,mightContain:ss=>{var me;return(me=w==null?void 0:w.mightContain(ss))!==null&&me!==void 0&&me}}),It}(a,t.ye,this.Qe.it(),u,h))}}}}nt(t){const n=t.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=qt(r).toUint8Array()}catch(u){if(u instanceof ka)return re("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new qi(o,i,s)}catch(u){return re(u instanceof we?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ae===0?null:a}rt(t,n,r){return n.ye.count===r-this.st(t,n.targetId)?0:2}st(t,n){const r=this.Qe.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Qe.it(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.je(n,s,null),i++)}),i}ot(t){const n=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&Gr(a.target)){const u=new E(a.target.path);this.$e.get(u)!==null||this._t(o,u)||this.je(o,u,Y.newNoDocument(u,t))}s.Fe&&(n.set(o,s.xe()),s.Oe())}});let r=P();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const h=this.et(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(t));const i=new rr(t,n,this.We,this.$e,r);return this.$e=Vt(),this.Ue=Ws(),this.We=new x(V),i}ze(t,n){if(!this.Ye(t))return;const r=this._t(t,n.key)?2:0;this.Je(t).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ut(n.key).add(t))}je(t,n,r){if(!this.Ye(t))return;const i=this.Je(t);this._t(t,n)?i.Ne(n,1):i.Be(n),this.Ue=this.Ue.insert(n,this.ut(n).delete(t)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(t){this.Ke.delete(t)}tt(t){const n=this.Je(t).xe();return this.Qe.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Le(t){this.Je(t).Le()}Je(t){let n=this.Ke.get(t);return n||(n=new Qs,this.Ke.set(t,n)),n}ut(t){let n=this.Ue.get(t);return n||(n=new Z(V),this.Ue=this.Ue.insert(t,n)),n}Ye(t){const n=this.et(t)!==null;return n||y("WatchChangeAggregator","Detected inactive target",t),n}et(t){const n=this.Ke.get(t);return n&&n.Ce?null:this.Qe.ct(t)}Ze(t){this.Ke.set(t,new Qs),this.Qe.getRemoteKeysForTarget(t).forEach(n=>{this.je(t,n,null)})}_t(t,n){return this.Qe.getRemoteKeysForTarget(t).has(n)}}function Ws(){return new x(E.comparator)}function Ys(){return new x(E.comparator)}const wd=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Rd=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Pd=(()=>({and:"AND",or:"OR"}))();class Cd{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Jr(e,t){return e.useProto3Json||Jn(t)?t:{value:t}}function Zr(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function nu(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Jt(e){return B(!!e),T.fromTimestamp(function(n){const r=St(n);return new $(r.seconds,r.nanos)}(e))}function ru(e,t){return function(r){return new k(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function iu(e){const t=k.fromString(e);return B(uu(t)),t}function Tr(e,t){const n=iu(t);if(n.get(1)!==e.databaseId.projectId)throw new _(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new _(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new E(su(n))}function ti(e,t){return ru(e.databaseId,t)}function Sd(e){const t=iu(e);return t.length===4?k.emptyPath():su(t)}function Xs(e){return new k(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function su(e){return B(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Vd(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(h,c){return h.useProto3Json?(B(c===void 0||typeof c=="string"),tt.fromBase64String(c||"")):(B(c===void 0||c instanceof Uint8Array),tt.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(h){const c=h.code===void 0?p.UNKNOWN:Za(h.code);return new _(c,h.message||"")}(o);n=new eu(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Tr(e,r.document.name),s=Jt(r.document.updateTime),o=r.document.createTime?Jt(r.document.createTime):T.min(),a=new dt({mapValue:{fields:r.document.fields}}),u=Y.newFoundDocument(i,s,o,a),h=r.targetIds||[],c=r.removedTargetIds||[];n=new vn(h,c,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Tr(e,r.document),s=r.readTime?Jt(r.readTime):T.min(),o=Y.newNoDocument(i,s),a=r.removedTargetIds||[];n=new vn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Tr(e,r.document),s=r.removedTargetIds||[];n=new vn([],s,i,null)}else{if(!("filter"in t))return I();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new vd(i,s),a=r.targetId;n=new tu(a,o)}}return n}function Dd(e,t){return{documents:[ti(e,t.path)]}}function bd(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=ti(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ti(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length!==0)return au(ht.create(u,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(h=>function(l){return{field:Gt(l.field),direction:Md(l.dir)}}(h))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Jr(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function Nd(e){let t=Sd(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){B(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let s=[];n.where&&(s=function(l){const d=ou(l);return d instanceof ht&&xa(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(l){return l.map(d=>function(w){return new Se(Kt(w.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(l){let d;return d=typeof l=="object"?l.value:l,Jn(d)?null:d}(n.limit));let u=null;n.startAt&&(u=function(l){const d=!!l.before,g=l.values||[];return new kn(g,d)}(n.startAt));let h=null;return n.endAt&&(h=function(l){const d=!l.before,g=l.values||[];return new kn(g,d)}(n.endAt)),nd(t,i,o,s,a,"F",u,h)}function kd(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return I()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function ou(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Kt(n.unaryFilter.field);return U.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Kt(n.unaryFilter.field);return U.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Kt(n.unaryFilter.field);return U.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Kt(n.unaryFilter.field);return U.create(o,"!=",{nullValue:"NULL_VALUE"});default:return I()}}(e):e.fieldFilter!==void 0?function(n){return U.create(Kt(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return ht.create(n.compositeFilter.filters.map(r=>ou(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return I()}}(n.compositeFilter.op))}(e):I()}function Md(e){return wd[e]}function Od(e){return Rd[e]}function xd(e){return Pd[e]}function Gt(e){return{fieldPath:e.canonicalString()}}function Kt(e){return et.fromServerFormat(e.fieldPath)}function au(e){return e instanceof U?function(n){if(n.op==="=="){if(Fs(n.value))return{unaryFilter:{field:Gt(n.field),op:"IS_NAN"}};if(xs(n.value))return{unaryFilter:{field:Gt(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Fs(n.value))return{unaryFilter:{field:Gt(n.field),op:"IS_NOT_NAN"}};if(xs(n.value))return{unaryFilter:{field:Gt(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gt(n.field),op:Od(n.op),value:n.value}}}(e):e instanceof ht?function(n){const r=n.getFilters().map(i=>au(i));return r.length===1?r[0]:{compositeFilter:{op:xd(n.op),filters:r}}}(e):I()}function uu(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t,n,r,i,s=T.min(),o=T.min(),a=tt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new wt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(t){this.lt=t}}function Ld(e){const t=Nd({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Qr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(){this.on=new Bd}addToCollectionParentIndex(t,n){return this.on.add(n),f.resolve()}getCollectionParents(t,n){return f.resolve(this.on.getEntries(n))}addFieldIndex(t,n){return f.resolve()}deleteFieldIndex(t,n){return f.resolve()}getDocumentsMatchingTarget(t,n){return f.resolve(null)}getIndexType(t,n){return f.resolve(0)}getFieldIndexes(t,n){return f.resolve([])}getNextCollectionGroupToUpdate(t){return f.resolve(null)}getMinOffset(t,n){return f.resolve(Ct.min())}getMinOffsetFromCollectionGroup(t,n){return f.resolve(Ct.min())}updateCollectionGroup(t,n,r){return f.resolve()}updateIndexEntries(t,n){return f.resolve()}}class Bd{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new Z(k.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Z(k.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new ae(0)}static Nn(){return new ae(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(){this.changes=new pe(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Y.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?f.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&be(r.mutation,i,At.empty(),$.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,P()).next(()=>r))}getLocalViewOfDocuments(t,n,r=P()){const i=Ot();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=Ae();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Ot();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,P()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=Vt();const o=De(),a=function(){return De()}();return n.forEach((u,h)=>{const c=r.get(h.key);i.has(h.key)&&(c===void 0||c.mutation instanceof nr)?s=s.insert(h.key,h):c!==void 0?(o.set(h.key,c.mutation.getFieldMask()),be(c.mutation,h,c.mutation.getFieldMask(),$.now())):o.set(h.key,At.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((h,c)=>o.set(h,c)),n.forEach((h,c)=>{var l;return a.set(h,new $d(c,(l=o.get(h))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const r=De();let i=new x((o,a)=>o-a),s=P();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let c=r.get(u)||At.empty();c=a.applyToLocalView(h,c),r.set(u,c);const l=(i.get(a.batchId)||P()).add(u);i=i.insert(a.batchId,l)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),h=u.key,c=u.value,l=Ha();c.forEach(d=>{if(!s.has(d)){const g=Xa(n.get(d),r.get(d));g!==null&&l.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,h,l))}return f.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(s){return E.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):qa(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):f.resolve(Ot());let a=-1,u=s;return o.next(h=>f.forEach(h,(c,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),s.get(c)?f.resolve():this.remoteDocumentCache.getEntry(t,c).next(d=>{u=u.insert(c,d)}))).next(()=>this.populateOverlays(t,h,s)).next(()=>this.computeViews(t,u,h,P())).next(c=>({batchId:a,changes:ad(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new E(n)).next(r=>{let i=Ae();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const i=n.collectionGroup;let s=Ae();return this.indexManager.getCollectionParents(t,i).next(o=>f.forEach(o,a=>{const u=function(c,l){return new sn(l,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,u,r).next(h=>{h.forEach((c,l)=>{s=s.insert(c,l)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i))).next(s=>{i.forEach((a,u)=>{const h=u.getKey();s.get(h)===null&&(s=s.insert(h,Y.newInvalidDocument(h)))});let o=Ae();return s.forEach((a,u)=>{const h=i.get(a);h!==void 0&&be(h.mutation,u,At.empty(),$.now()),tr(n,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,n){return f.resolve(this.ur.get(n))}saveBundleMetadata(t,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Jt(i.createTime)}}(n)),f.resolve()}getNamedQuery(t,n){return f.resolve(this.cr.get(n))}saveNamedQuery(t,n){return this.cr.set(n.name,function(i){return{name:i.name,query:Ld(i.bundledQuery),readTime:Jt(i.readTime)}}(n)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(){this.overlays=new x(E.comparator),this.lr=new Map}getOverlay(t,n){return f.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Ot();return f.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.Pt(t,n,s)}),f.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),f.resolve()}getOverlaysForCollection(t,n,r){const i=Ot(),s=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return f.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new x((h,c)=>h-c);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let c=s.get(h.largestBatchId);c===null&&(c=Ot(),s=s.insert(h.largestBatchId,c)),c.set(h.getKey(),h)}}const a=Ot(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,c)=>a.set(h,c)),!(a.size()>=i)););return f.resolve(a)}Pt(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ed(n,r));let s=this.lr.get(n);s===void 0&&(s=P(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(){this.hr=new Z(q.Pr),this.Ir=new Z(q.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,n){const r=new q(t,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.dr(new q(t,n))}Ar(t,n){t.forEach(r=>this.removeReference(r,n))}Rr(t){const n=new E(new k([])),r=new q(n,t),i=new q(n,t+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const n=new E(new k([])),r=new q(n,t),i=new q(n,t+1);let s=P();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new q(t,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class q{constructor(t,n){this.key=t,this.gr=n}static Pr(t,n){return E.comparator(t.key,n.key)||V(t.gr,n.gr)}static Tr(t,n){return V(t.gr,n.gr)||E.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Z(q.Pr)}checkEmpty(t){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new yd(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new q(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(t,n){return f.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return f.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new q(n,0),i=new q(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),f.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Z(V);return n.forEach(i=>{const s=new q(i,0),o=new q(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),f.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;E.isDocumentKey(s)||(s=s.child(""));const o=new q(new E(s),0);let a=new Z(V);return this.yr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(a=a.add(u.gr)),!0)},o),f.resolve(this.br(a))}br(t){const n=[];return t.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){B(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return f.forEach(n.mutations,i=>{const s=new q(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,n){const r=new q(n,0),i=this.yr.firstAfterOrEqual(r);return f.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,f.resolve()}Dr(t,n){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const n=this.Sr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(t){this.vr=t,this.docs=function(){return new x(E.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return f.resolve(r?r.document.mutableCopy():Y.newInvalidDocument(n))}getEntries(t,n){let r=Vt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Y.newInvalidDocument(i))}),f.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=Vt();const o=n.path,a=new E(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:h,value:{document:c}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Ul(Ll(c),r)<=0||(i.has(c.key)||tr(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return f.resolve(s)}getAllFromCollectionGroup(t,n,r,i){I()}Cr(t,n){return f.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new Qd(this)}getSize(t){return f.resolve(this.size)}}class Qd extends qd{constructor(t){super(),this._r=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(t,i)):this._r.removeEntry(r)}),f.waitFor(n)}getFromCache(t,n){return this._r.getEntry(t,n)}getAllFromCache(t,n){return this._r.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(t){this.persistence=t,this.Fr=new pe(n=>Mi(n),Oi),this.lastRemoteSnapshotVersion=T.min(),this.highestTargetId=0,this.Mr=0,this.Or=new $i,this.targetCount=0,this.Nr=ae.On()}forEachTarget(t,n){return this.Fr.forEach((r,i)=>n(i)),f.resolve()}getLastRemoteSnapshotVersion(t){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return f.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),f.resolve()}kn(t){this.Fr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Nr=new ae(n),this.highestTargetId=n),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,n){return this.kn(n),this.targetCount+=1,f.resolve()}updateTargetData(t,n){return this.kn(n),f.resolve()}removeTargetData(t,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,f.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),f.waitFor(s).next(()=>i)}getTargetCount(t){return f.resolve(this.targetCount)}getTargetData(t,n){const r=this.Fr.get(n)||null;return f.resolve(r)}addMatchingKeys(t,n,r){return this.Or.Er(n,r),f.resolve()}removeMatchingKeys(t,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),f.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Or.Rr(n),f.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Or.mr(n);return f.resolve(r)}containsKey(t,n){return f.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(t,n){this.Br={},this.overlays={},this.Lr=new Di(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new Wd(this),this.indexManager=new Ud,this.remoteDocumentCache=function(i){return new Kd(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new Fd(n),this.Kr=new zd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Hd,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new Gd(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,n,r){y("MemoryPersistence","Starting transaction:",t);const i=new Xd(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(t,n){return f.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class Xd extends ql{constructor(t){super(),this.currentSequenceNumber=t}}class ji{constructor(t){this.persistence=t,this.Gr=new $i,this.zr=null}static jr(t){return new ji(t)}get Hr(){if(this.zr)return this.zr;throw I()}addReference(t,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),f.resolve()}removeReference(t,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),f.resolve()}markPotentiallyOrphaned(t,n){return this.Hr.add(n.toString()),f.resolve()}removeTarget(t,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}$r(){this.zr=new Set}Ur(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Hr,r=>{const i=E.fromPath(r);return this.Jr(t,i).next(s=>{s||n.removeEntry(i,T.min())})}).next(()=>(this.zr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Jr(t,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(t){return 0}Jr(t,n){return f.or([()=>f.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Wr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.ki=r,this.qi=i}static Qi(t,n){let r=P(),i=P();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new zi(t,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(){this.Ki=!1}initialize(t,n){this.$i=t,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(t,n,r,i){return this.Ui(t,n).next(s=>s||this.Wi(t,n,i,r)).next(s=>s||this.Gi(t,n))}Ui(t,n){if(qs(n))return f.resolve(null);let r=Tt(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Qr(n,null,"F"),r=Tt(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=P(...s);return this.$i.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const h=this.zi(n,a);return this.ji(n,h,o,u.readTime)?this.Ui(t,Qr(n,null,"F")):this.Hi(t,h,n,u)}))})))}Wi(t,n,r,i){return qs(n)||i.isEqual(T.min())?this.Gi(t,n):this.$i.getDocuments(t,r).next(s=>{const o=this.zi(n,s);return this.ji(n,o,r,i)?this.Gi(t,n):(bs()<=S.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Wr(n)),this.Hi(t,o,n,Fl(i,-1)))})}zi(t,n){let r=new Z(ja(t));return n.forEach((i,s)=>{tr(t,s)&&(r=r.add(s))}),r}ji(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(t,n){return bs()<=S.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",Wr(n)),this.$i.getDocumentsMatchingQuery(t,n,Ct.min())}Hi(t,n,r,i){return this.$i.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(t,n,r,i){this.persistence=t,this.Ji=n,this.serializer=i,this.Yi=new x(V),this.Zi=new pe(s=>Mi(s),Oi),this.Xi=new Map,this.es=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.ts(r)}ts(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new jd(this.es,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.es.setIndexManager(this.indexManager),this.Ji.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Yi))}}function tf(e,t,n,r){return new Zd(e,t,n,r)}async function hu(e,t){const n=C(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ts(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=P();for(const h of i){o.push(h.batchId);for(const c of h.mutations)u=u.add(c.key)}for(const h of s){a.push(h.batchId);for(const c of h.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(r,u).next(h=>({ns:h,removedBatchIds:o,addedBatchIds:a}))})})}function cu(e){const t=C(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.qr.getLastRemoteSnapshotVersion(n))}function ef(e,t){const n=C(e),r=t.snapshotVersion;let i=n.Yi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.es.newChangeBuffer({trackRemovals:!0});i=n.Yi;const a=[];t.targetChanges.forEach((c,l)=>{const d=i.get(l);if(!d)return;a.push(n.qr.removeMatchingKeys(s,c.removedDocuments,l).next(()=>n.qr.addMatchingKeys(s,c.addedDocuments,l)));let g=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(l)!==null?g=g.withResumeToken(tt.EMPTY_BYTE_STRING,T.min()).withLastLimboFreeSnapshotVersion(T.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(l,g),function(D,A,O){return D.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(d,g,c)&&a.push(n.qr.updateTargetData(s,g))});let u=Vt(),h=P();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(nf(s,o,t.documentUpdates).next(c=>{u=c.rs,h=c.ss})),!r.isEqual(T.min())){const c=n.qr.getLastRemoteSnapshotVersion(s).next(l=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return f.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.Yi=i,s))}function nf(e,t,n){let r=P(),i=P();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=Vt();return n.forEach((a,u)=>{const h=s.get(a);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(T.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",h.version," Watch version:",u.version)}),{rs:o,ss:i}})}function rf(e,t){const n=C(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,t).next(s=>s?(i=s,f.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new wt(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Yi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Yi=n.Yi.insert(r.targetId,r),n.Zi.set(t,r.targetId)),r})}async function ei(e,t,n){const r=C(e),i=r.Yi.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!nn(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Yi=r.Yi.remove(t),r.Zi.delete(i.target)}function Js(e,t,n){const r=C(e);let i=T.min(),s=P();return r.persistence.runTransaction("Execute query","readonly",o=>function(u,h,c){const l=C(u),d=l.Zi.get(c);return d!==void 0?f.resolve(l.Yi.get(d)):l.qr.getTargetData(h,c)}(r,o,Tt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Ji.getDocumentsMatchingQuery(o,t,n?i:T.min(),n?s:P())).next(a=>(sf(r,id(t),a),{documents:a,os:s})))}function sf(e,t,n){let r=e.Xi.get(t)||T.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.Xi.set(t,r)}class Zs{constructor(){this.activeTargetIds=cd()}Ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}Is(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class of{constructor(){this.Js=new Zs,this.Ys={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Js.Ps(t),this.Ys[t]||"not-current"}updateQueryState(t,n,r){this.Ys[t]=n}removeLocalQueryTarget(t){this.Js.Is(t)}isLocalQueryTarget(t){return this.Js.activeTargetIds.has(t)}clearQueryState(t){delete this.Ys[t]}getAllActiveQueryTargets(){return this.Js.activeTargetIds}isActiveQueryTarget(t){return this.Js.activeTargetIds.has(t)}start(){return this.Js=new Zs,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{Zs(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(){this.Xs=()=>this.eo(),this.no=()=>this.ro(),this.io=[],this.so()}Zs(t){this.io.push(t)}shutdown(){window.removeEventListener("online",this.Xs),window.removeEventListener("offline",this.no)}so(){window.addEventListener("online",this.Xs),window.addEventListener("offline",this.no)}eo(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.io)t(0)}ro(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.io)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yn=null;function Ir(){return yn===null?yn=function(){return 268435456+Math.round(2147483648*Math.random())}():yn++,"0x"+yn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(t){this.oo=t.oo,this._o=t._o}ao(t){this.uo=t}co(t){this.lo=t}onMessage(t){this.ho=t}close(){this._o()}send(t){this.oo(t)}Po(){this.uo()}Io(t){this.lo(t)}To(t){this.ho(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q="WebChannelConnection";class cf extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Eo=r+"://"+n.host,this.Ao=`projects/${i}/databases/${s}`,this.Ro=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Vo(){return!1}mo(n,r,i,s,o){const a=Ir(),u=this.fo(n,r);y("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const h={"google-cloud-resource-prefix":this.Ao,"x-goog-request-params":this.Ro};return this.po(h,s,o),this.yo(n,u,h,i).then(c=>(y("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw re("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",u,"request:",i),c})}wo(n,r,i,s,o,a){return this.mo(n,r,i,s,o)}po(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fe}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}fo(n,r){const i=uf[n];return`${this.Eo}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}yo(t,n,r,i){const s=Ir();return new Promise((o,a)=>{const u=new Rl;u.setWithCredentials(!0),u.listenOnce(Il.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Er.NO_ERROR:const c=u.getResponseJson();y(Q,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(c)),o(c);break;case Er.TIMEOUT:y(Q,`RPC '${t}' ${s} timed out`),a(new _(p.DEADLINE_EXCEEDED,"Request time out"));break;case Er.HTTP_ERROR:const l=u.getStatus();if(y(Q,`RPC '${t}' ${s} failed with status:`,l,"response text:",u.getResponseText()),l>0){let d=u.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const w=function(A){const O=A.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(O)>=0?O:p.UNKNOWN}(g.status);a(new _(w,g.message))}else a(new _(p.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new _(p.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{y(Q,`RPC '${t}' ${s} completed.`)}});const h=JSON.stringify(i);y(Q,`RPC '${t}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}So(t,n,r){const i=Ir(),s=[this.Eo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=vl(),a=Tl(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.xmlHttpFactory=new wl({})),this.po(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const c=s.join("");y(Q,`Creating RPC '${t}' stream ${i}: ${c}`,u);const l=o.createWebChannel(c,u);let d=!1,g=!1;const w=new hf({oo:A=>{g?y(Q,`Not sending because RPC '${t}' stream ${i} is closed:`,A):(d||(y(Q,`Opening RPC '${t}' stream ${i} transport.`),l.open(),d=!0),y(Q,`RPC '${t}' stream ${i} sending:`,A),l.send(A))},_o:()=>l.close()}),D=(A,O,rt)=>{A.listen(O,it=>{try{rt(it)}catch(st){setTimeout(()=>{throw st},0)}})};return D(l,pn.EventType.OPEN,()=>{g||y(Q,`RPC '${t}' stream ${i} transport opened.`)}),D(l,pn.EventType.CLOSE,()=>{g||(g=!0,y(Q,`RPC '${t}' stream ${i} transport closed`),w.Io())}),D(l,pn.EventType.ERROR,A=>{g||(g=!0,re(Q,`RPC '${t}' stream ${i} transport errored:`,A),w.Io(new _(p.UNAVAILABLE,"The operation could not be completed")))}),D(l,pn.EventType.MESSAGE,A=>{var O;if(!g){const rt=A.data[0];B(!!rt);const it=rt,st=it.error||((O=it[0])===null||O===void 0?void 0:O.error);if(st){y(Q,`RPC '${t}' stream ${i} received error:`,st);const _t=st.status;let It=function(me){const os=F[me];if(os!==void 0)return Za(os)}(_t),ct=st.message;It===void 0&&(It=p.INTERNAL,ct="Unknown error status: "+_t+" with message "+st.message),g=!0,w.Io(new _(It,ct)),l.close()}else y(Q,`RPC '${t}' stream ${i} received:`,rt),w.To(rt)}}),D(a,Al.STAT_EVENT,A=>{A.stat===Vs.PROXY?y(Q,`RPC '${t}' stream ${i} detected buffering proxy`):A.stat===Vs.NOPROXY&&y(Q,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{w.Po()},0),w}}function Ar(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(e){return new Cd(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(t,n,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=n,this.bo=r,this.Do=i,this.vo=s,this.Co=0,this.Fo=null,this.Mo=Date.now(),this.reset()}reset(){this.Co=0}xo(){this.Co=this.vo}Oo(t){this.cancel();const n=Math.floor(this.Co+this.No()),r=Math.max(0,Date.now()-this.Mo),i=Math.max(0,n-r);i>0&&y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Co} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Fo=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Mo=Date.now(),t())),this.Co*=this.Do,this.Co<this.bo&&(this.Co=this.bo),this.Co>this.vo&&(this.Co=this.vo)}Bo(){this.Fo!==null&&(this.Fo.skipDelay(),this.Fo=null)}cancel(){this.Fo!==null&&(this.Fo.cancel(),this.Fo=null)}No(){return(Math.random()-.5)*this.Co}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(t,n,r,i,s,o,a,u){this.si=t,this.Lo=r,this.ko=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.qo=0,this.Qo=null,this.Ko=null,this.stream=null,this.$o=new lu(t,n)}Uo(){return this.state===1||this.state===5||this.Wo()}Wo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}zo(){this.state=0,this.$o.reset()}jo(){this.Wo()&&this.Qo===null&&(this.Qo=this.si.enqueueAfterDelay(this.Lo,6e4,()=>this.Ho()))}Jo(t){this.Yo(),this.stream.send(t)}async Ho(){if(this.Wo())return this.close(0)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}async close(t,n){this.Yo(),this.Zo(),this.$o.cancel(),this.qo++,t!==4?this.$o.reset():n&&n.code===p.RESOURCE_EXHAUSTED?(vt(n.toString()),vt("Using maximum backoff delay to prevent overloading the backend."),this.$o.xo()):n&&n.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Xo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.co(n)}Xo(){}auth(){this.state=1;const t=this.e_(this.qo),n=this.qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.qo===n&&this.t_(r,i)},r=>{t(()=>{const i=new _(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.n_(i)})})}t_(t,n){const r=this.e_(this.qo);this.stream=this.r_(t,n),this.stream.ao(()=>{r(()=>(this.state=2,this.Ko=this.si.enqueueAfterDelay(this.ko,1e4,()=>(this.Wo()&&(this.state=3),Promise.resolve())),this.listener.ao()))}),this.stream.co(i=>{r(()=>this.n_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.$o.Oo(async()=>{this.state=0,this.start()})}n_(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}e_(t){return n=>{this.si.enqueueAndForget(()=>this.qo===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class df extends lf{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}r_(t,n){return this.connection.So("Listen",t,n)}onMessage(t){this.$o.reset();const n=Vd(this.serializer,t),r=function(s){if(!("targetChange"in s))return T.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?T.min():o.readTime?Jt(o.readTime):T.min()}(t);return this.listener.i_(n,r)}s_(t){const n={};n.database=Xs(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Gr(u)?{documents:Dd(s,u)}:{query:bd(s,u)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=nu(s,o.resumeToken);const h=Jr(s,o.expectedCount);h!==null&&(a.expectedCount=h)}else if(o.snapshotVersion.compareTo(T.min())>0){a.readTime=Zr(s,o.snapshotVersion.toTimestamp());const h=Jr(s,o.expectedCount);h!==null&&(a.expectedCount=h)}return a}(this.serializer,t);const r=kd(this.serializer,t);r&&(n.labels=r),this.Jo(n)}o_(t){const n={};n.database=Xs(this.serializer),n.removeTarget=t,this.Jo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.P_=!1}I_(){if(this.P_)throw new _(p.FAILED_PRECONDITION,"The client has already been terminated.")}mo(t,n,r){return this.I_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.mo(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new _(p.UNKNOWN,i.toString())})}wo(t,n,r,i){return this.I_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.wo(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new _(p.UNKNOWN,s.toString())})}terminate(){this.P_=!0}}class pf{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.E_=0,this.d_=null,this.A_=!0}R_(){this.E_===0&&(this.V_("Unknown"),this.d_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.d_=null,this.m_("Backend didn't respond within 10 seconds."),this.V_("Offline"),Promise.resolve())))}f_(t){this.state==="Online"?this.V_("Unknown"):(this.E_++,this.E_>=1&&(this.g_(),this.m_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.V_("Offline")))}set(t){this.g_(),this.E_=0,t==="Online"&&(this.A_=!1),this.V_(t)}V_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}m_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.A_?(vt(n),this.A_=!1):y("OnlineStateTracker",n)}g_(){this.d_!==null&&(this.d_.cancel(),this.d_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.p_=[],this.y_=new Map,this.w_=new Set,this.S_=[],this.b_=s,this.b_.Zs(o=>{r.enqueueAndForget(async()=>{un(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=C(u);h.w_.add(4),await an(h),h.D_.set("Unknown"),h.w_.delete(4),await sr(h)}(this))})}),this.D_=new pf(r,i)}}async function sr(e){if(un(e))for(const t of e.S_)await t(!0)}async function an(e){for(const t of e.S_)await t(!1)}function du(e,t){const n=C(e);n.y_.has(t.targetId)||(n.y_.set(t.targetId,t),Ki(n)?Gi(n):ge(n).Wo()&&Hi(n,t))}function fu(e,t){const n=C(e),r=ge(n);n.y_.delete(t),r.Wo()&&pu(n,t),n.y_.size===0&&(r.Wo()?r.jo():un(n)&&n.D_.set("Unknown"))}function Hi(e,t){if(e.v_.Le(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(T.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ge(e).s_(t)}function pu(e,t){e.v_.Le(t),ge(e).o_(t)}function Gi(e){e.v_=new Ad({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ct:t=>e.y_.get(t)||null,it:()=>e.datastore.serializer.databaseId}),ge(e).start(),e.D_.R_()}function Ki(e){return un(e)&&!ge(e).Uo()&&e.y_.size>0}function un(e){return C(e).w_.size===0}function gu(e){e.v_=void 0}async function mf(e){e.y_.forEach((t,n)=>{Hi(e,t)})}async function _f(e,t){gu(e),Ki(e)?(e.D_.f_(t),Gi(e)):e.D_.set("Unknown")}async function yf(e,t,n){if(e.D_.set("Online"),t instanceof eu&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.y_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.y_.delete(a),i.v_.removeTarget(a))}(e,t)}catch(r){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await eo(e,r)}else if(t instanceof vn?e.v_.Ge(t):t instanceof tu?e.v_.Xe(t):e.v_.He(t),!n.isEqual(T.min()))try{const r=await cu(e.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.v_.ot(o);return a.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const c=s.y_.get(h);c&&s.y_.set(h,c.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,h)=>{const c=s.y_.get(u);if(!c)return;s.y_.set(u,c.withResumeToken(tt.EMPTY_BYTE_STRING,c.snapshotVersion)),pu(s,u);const l=new wt(c.target,u,h,c.sequenceNumber);Hi(s,l)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){y("RemoteStore","Failed to raise snapshot:",r),await eo(e,r)}}async function eo(e,t,n){if(!nn(t))throw t;e.w_.add(1),await an(e),e.D_.set("Offline"),n||(n=()=>cu(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e.w_.delete(1),await sr(e)})}async function no(e,t){const n=C(e);n.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const r=un(n);n.w_.add(3),await an(n),r&&n.D_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.w_.delete(3),await sr(n)}async function Ef(e,t){const n=C(e);t?(n.w_.delete(2),await sr(n)):t||(n.w_.add(2),await an(n),n.D_.set("Unknown"))}function ge(e){return e.C_||(e.C_=function(n,r,i){const s=C(n);return s.I_(),new df(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{ao:mf.bind(null,e),co:_f.bind(null,e),i_:yf.bind(null,e)}),e.S_.push(async t=>{t?(e.C_.zo(),Ki(e)?Gi(e):e.D_.set("Unknown")):(await e.C_.stop(),gu(e))})),e.C_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ft,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new Qi(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _(p.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mu(e,t){if(vt("AsyncQueue",`${t}: ${e}`),nn(e))return new _(p.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t){this.comparator=t?(n,r)=>t(n,r)||E.comparator(n.key,r.key):(n,r)=>E.comparator(n.key,r.key),this.keyedMap=Ae(),this.sortedSet=new x(this.comparator)}static emptySet(t){return new Zt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Zt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Zt;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(){this.M_=new x(E.comparator)}track(t){const n=t.doc.key,r=this.M_.get(n);r?t.type!==0&&r.type===3?this.M_=this.M_.insert(n,t):t.type===3&&r.type!==1?this.M_=this.M_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.M_=this.M_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.M_=this.M_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.M_=this.M_.remove(n):t.type===1&&r.type===2?this.M_=this.M_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.M_=this.M_.insert(n,{type:2,doc:t.doc}):I():this.M_=this.M_.insert(n,t)}x_(){const t=[];return this.M_.inorderTraversal((n,r)=>{t.push(r)}),t}}class ue{constructor(t,n,r,i,s,o,a,u,h){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ue(t,n,Zt.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Zn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(){this.O_=void 0,this.listeners=[]}}class Tf{constructor(){this.queries=new pe(t=>$a(t),Zn),this.onlineState="Unknown",this.N_=new Set}}async function _u(e,t){const n=C(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new vf),i)try{s.O_=await n.onListen(r)}catch(o){const a=mu(o,`Initialization of query '${Wr(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.listeners.push(t),t.B_(n.onlineState),s.O_&&t.L_(s.O_)&&Wi(n)}async function yu(e,t){const n=C(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function If(e,t){const n=C(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.L_(i)&&(r=!0);o.O_=i}}r&&Wi(n)}function Af(e,t,n){const r=C(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Wi(e){e.N_.forEach(t=>{t.next()})}class Eu{constructor(t,n,r){this.query=t,this.k_=n,this.q_=!1,this.Q_=null,this.onlineState="Unknown",this.options=r||{}}L_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new ue(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.q_?this.K_(t)&&(this.k_.next(t),n=!0):this.U_(t,this.onlineState)&&(this.W_(t),n=!0),this.Q_=t,n}onError(t){this.k_.error(t)}B_(t){this.onlineState=t;let n=!1;return this.Q_&&!this.q_&&this.U_(this.Q_,t)&&(this.W_(this.Q_),n=!0),n}U_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.G_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}K_(t){if(t.docChanges.length>0)return!0;const n=this.Q_&&this.Q_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}W_(t){t=ue.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.q_=!0,this.k_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(t){this.key=t}}class Tu{constructor(t){this.key=t}}class wf{constructor(t,n){this.query=t,this.ea=n,this.ta=null,this.hasCachedResults=!1,this.current=!1,this.na=P(),this.mutatedKeys=P(),this.ra=ja(t),this.ia=new Zt(this.ra)}get sa(){return this.ea}oa(t,n){const r=n?n._a:new ro,i=n?n.ia:this.ia;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((c,l)=>{const d=i.get(c),g=tr(this.query,l)?l:null,w=!!d&&this.mutatedKeys.has(d.key),D=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let A=!1;d&&g?d.data.isEqual(g.data)?w!==D&&(r.track({type:3,doc:g}),A=!0):this.aa(d,g)||(r.track({type:2,doc:g}),A=!0,(u&&this.ra(g,u)>0||h&&this.ra(g,h)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),A=!0):d&&!g&&(r.track({type:1,doc:d}),A=!0,(u||h)&&(a=!0)),A&&(g?(o=o.add(g),s=D?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ia:o,_a:r,ji:a,mutatedKeys:s}}aa(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const i=this.ia;this.ia=t.ia,this.mutatedKeys=t.mutatedKeys;const s=t._a.x_();s.sort((h,c)=>function(d,g){const w=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return w(d)-w(g)}(h.type,c.type)||this.ra(h.doc,c.doc)),this.ua(r);const o=n?this.ca():[],a=this.na.size===0&&this.current?1:0,u=a!==this.ta;return this.ta=a,s.length!==0||u?{snapshot:new ue(this.query,t.ia,i,s,t.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),la:o}:{la:o}}B_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ia:this.ia,_a:new ro,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{la:[]}}ha(t){return!this.ea.has(t)&&!!this.ia.has(t)&&!this.ia.get(t).hasLocalMutations}ua(t){t&&(t.addedDocuments.forEach(n=>this.ea=this.ea.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ea=this.ea.delete(n)),this.current=t.current)}ca(){if(!this.current)return[];const t=this.na;this.na=P(),this.ia.forEach(r=>{this.ha(r.key)&&(this.na=this.na.add(r.key))});const n=[];return t.forEach(r=>{this.na.has(r)||n.push(new Tu(r))}),this.na.forEach(r=>{t.has(r)||n.push(new vu(r))}),n}Pa(t){this.ea=t.os,this.na=P();const n=this.oa(t.documents);return this.applyChanges(n,!0)}Ia(){return ue.fromInitialDocuments(this.query,this.ia,this.mutatedKeys,this.ta===0,this.hasCachedResults)}}class Rf{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Pf{constructor(t){this.key=t,this.Ta=!1}}class Cf{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ea={},this.da=new pe(a=>$a(a),Zn),this.Aa=new Map,this.Ra=new Set,this.Va=new x(E.comparator),this.ma=new Map,this.fa=new $i,this.ga={},this.pa=new Map,this.ya=ae.Nn(),this.onlineState="Unknown",this.wa=void 0}get isPrimaryClient(){return this.wa===!0}}async function Sf(e,t){const n=Of(e);let r,i;const s=n.da.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Ia();else{const o=await rf(n.localStore,Tt(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Vf(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&du(n.remoteStore,o)}return i}async function Vf(e,t,n,r,i){e.Sa=(l,d,g)=>async function(D,A,O,rt){let it=A.view.oa(O);it.ji&&(it=await Js(D.localStore,A.query,!1).then(({documents:It})=>A.view.oa(It,it)));const st=rt&&rt.targetChanges.get(A.targetId),_t=A.view.applyChanges(it,D.isPrimaryClient,st);return so(D,A.targetId,_t.la),_t.snapshot}(e,l,d,g);const s=await Js(e.localStore,t,!0),o=new wf(t,s.os),a=o.oa(s.documents),u=on.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),h=o.applyChanges(a,e.isPrimaryClient,u);so(e,n,h.la);const c=new Rf(t,n,o);return e.da.set(t,c),e.Aa.has(n)?e.Aa.get(n).push(t):e.Aa.set(n,[t]),h.snapshot}async function Df(e,t){const n=C(e),r=n.da.get(t),i=n.Aa.get(r.targetId);if(i.length>1)return n.Aa.set(r.targetId,i.filter(s=>!Zn(s,t))),void n.da.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ei(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),fu(n.remoteStore,r.targetId),ni(n,r.targetId)}).catch(Vi)):(ni(n,r.targetId),await ei(n.localStore,r.targetId,!0))}async function Iu(e,t){const n=C(e);try{const r=await ef(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.ma.get(s);o&&(B(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ta=!0:i.modifiedDocuments.size>0?B(o.Ta):i.removedDocuments.size>0&&(B(o.Ta),o.Ta=!1))}),await wu(n,r,t)}catch(r){await Vi(r)}}function io(e,t,n){const r=C(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.da.forEach((s,o)=>{const a=o.view.B_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=C(o);u.onlineState=a;let h=!1;u.queries.forEach((c,l)=>{for(const d of l.listeners)d.B_(a)&&(h=!0)}),h&&Wi(u)}(r.eventManager,t),i.length&&r.Ea.i_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function bf(e,t,n){const r=C(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.ma.get(t),s=i&&i.key;if(s){let o=new x(E.comparator);o=o.insert(s,Y.newNoDocument(s,T.min()));const a=P().add(s),u=new rr(T.min(),new Map,new x(V),o,a);await Iu(r,u),r.Va=r.Va.remove(s),r.ma.delete(t),Yi(r)}else await ei(r.localStore,t,!1).then(()=>ni(r,t,n)).catch(Vi)}function ni(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Aa.get(t))e.da.delete(r),n&&e.Ea.ba(r,n);e.Aa.delete(t),e.isPrimaryClient&&e.fa.Rr(t).forEach(r=>{e.fa.containsKey(r)||Au(e,r)})}function Au(e,t){e.Ra.delete(t.path.canonicalString());const n=e.Va.get(t);n!==null&&(fu(e.remoteStore,n),e.Va=e.Va.remove(t),e.ma.delete(n),Yi(e))}function so(e,t,n){for(const r of n)r instanceof vu?(e.fa.addReference(r.key,t),Nf(e,r)):r instanceof Tu?(y("SyncEngine","Document no longer in limbo: "+r.key),e.fa.removeReference(r.key,t),e.fa.containsKey(r.key)||Au(e,r.key)):I()}function Nf(e,t){const n=t.key,r=n.path.canonicalString();e.Va.get(n)||e.Ra.has(r)||(y("SyncEngine","New document in limbo: "+n),e.Ra.add(r),Yi(e))}function Yi(e){for(;e.Ra.size>0&&e.Va.size<e.maxConcurrentLimboResolutions;){const t=e.Ra.values().next().value;e.Ra.delete(t);const n=new E(k.fromString(t)),r=e.ya.next();e.ma.set(r,new Pf(n)),e.Va=e.Va.insert(n,r),du(e.remoteStore,new wt(Tt(xi(n.path)),r,"TargetPurposeLimboResolution",Di.ae))}}async function wu(e,t,n){const r=C(e),i=[],s=[],o=[];r.da.isEmpty()||(r.da.forEach((a,u)=>{o.push(r.Sa(u,t,n).then(h=>{if((h||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,h!=null&&h.fromCache?"not-current":"current"),h){i.push(h);const c=zi.Qi(u.targetId,h);s.push(c)}}))}),await Promise.all(o),r.Ea.i_(i),await async function(u,h){const c=C(u);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>f.forEach(h,d=>f.forEach(d.ki,g=>c.persistence.referenceDelegate.addReference(l,d.targetId,g)).next(()=>f.forEach(d.qi,g=>c.persistence.referenceDelegate.removeReference(l,d.targetId,g)))))}catch(l){if(!nn(l))throw l;y("LocalStore","Failed to update sequence numbers: "+l)}for(const l of h){const d=l.targetId;if(!l.fromCache){const g=c.Yi.get(d),w=g.snapshotVersion,D=g.withLastLimboFreeSnapshotVersion(w);c.Yi=c.Yi.insert(d,D)}}}(r.localStore,s))}async function kf(e,t){const n=C(e);if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const r=await hu(n.localStore,t);n.currentUser=t,function(s,o){s.pa.forEach(a=>{a.forEach(u=>{u.reject(new _(p.CANCELLED,o))})}),s.pa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await wu(n,r.ns)}}function Mf(e,t){const n=C(e),r=n.ma.get(t);if(r&&r.Ta)return P().add(r.key);{let i=P();const s=n.Aa.get(t);if(!s)return i;for(const o of s){const a=n.da.get(o);i=i.unionWith(a.view.sa)}return i}}function Of(e){const t=C(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Iu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Mf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=bf.bind(null,t),t.Ea.i_=If.bind(null,t.eventManager),t.Ea.ba=Af.bind(null,t.eventManager),t}class oo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=ir(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return tf(this.persistence,new Jd,t.initialUser,this.serializer)}createPersistence(t){return new Yd(ji.jr,this.serializer)}createSharedClientState(t){return new of}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class xf{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>io(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=kf.bind(null,this.syncEngine),await Ef(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Tf}()}createDatastore(t){const n=ir(t.databaseInfo.databaseId),r=function(s){return new cf(s)}(t.databaseInfo);return function(s,o,a,u){return new ff(s,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new gf(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>io(this.syncEngine,n,0),function(){return to.v()?new to:new af}())}createSyncEngine(t,n){return function(i,s,o,a,u,h,c){const l=new Cf(i,s,o,a,u,h);return c&&(l.wa=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=C(n);y("RemoteStore","RemoteStore shutting down."),r.w_.add(5),await an(r),r.b_.shutdown(),r.D_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ca(this.observer.next,t)}error(t){this.observer.error?this.Ca(this.observer.error,t):vt("Uncaught Error in snapshot listener:",t.toString())}Fa(){this.muted=!0}Ca(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=W.UNAUTHENTICATED,this.clientId=Ol.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{y("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(y("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ft;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=mu(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function wr(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await hu(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ao(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Uf(e);y("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>no(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>no(t.remoteStore,s)),e._onlineComponents=t}function Lf(e){return e.name==="FirebaseError"?e.code===p.FAILED_PRECONDITION||e.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Uf(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){y("FirestoreClient","Using user provided OfflineComponentProvider");try{await wr(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Lf(n))throw n;re("Error using user provided cache. Falling back to memory cache: "+n),await wr(e,new oo)}}else y("FirestoreClient","Using default OfflineComponentProvider"),await wr(e,new oo);return e._offlineComponents}async function Bf(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(y("FirestoreClient","Using user provided OnlineComponentProvider"),await ao(e,e._uninitializedComponentsProvider._online)):(y("FirestoreClient","Using default OnlineComponentProvider"),await ao(e,new xf))),e._onlineComponents}async function ri(e){const t=await Bf(e),n=t.eventManager;return n.onListen=Sf.bind(null,t.syncEngine),n.onUnlisten=Df.bind(null,t.syncEngine),n}function qf(e,t,n={}){const r=new Ft;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,h){const c=new Ru({next:d=>{o.enqueueAndForget(()=>yu(s,l)),d.fromCache&&u.source==="server"?h.reject(new _(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(d)},error:d=>h.reject(d)}),l=new Eu(a,c,{includeMetadataChanges:!0,G_:!0});return _u(s,l)}(await ri(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(e,t,n){if(!n)throw new _(p.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function jf(e,t,n,r){if(t===!0&&r===!0)throw new _(p.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function ho(e){if(E.isDocumentKey(e))throw new _(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function or(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function te(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new _(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=or(e);throw new _(p.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new _(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new _(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}jf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Pu((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new _(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new _(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new _(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Xi{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new co({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new _(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new co(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Cl;switch(r.type){case"firstParty":return new bl(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new _(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=uo.get(n);r&&(y("ComponentProvider","Removing Datastore"),uo.delete(n),r.terminate())}(this),Promise.resolve()}}function zf(e,t,n,r={}){var i;const s=(e=te(e,Xi))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&re("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=W.MOCK_USER;else{a=ih(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new _(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new W(h)}e._authCredentials=new Sl(new ba(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new zt(this.firestore,t,this._query)}}class mt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ee(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new mt(this.firestore,t,this._key)}}class ee extends zt{constructor(t,n,r){super(t,n,xi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new mt(this.firestore,null,new E(t))}withConverter(t){return new ee(this.firestore,t,this._path)}}function lo(e,t,...n){if(e=Ne(e),$f("collection","path",t),e instanceof Xi){const r=k.fromString(t,...n);return ho(r),new ee(e,null,r)}{if(!(e instanceof mt||e instanceof ee))throw new _(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(k.fromString(t,...n));return ho(r),new ee(e.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(){this.Ga=Promise.resolve(),this.za=[],this.ja=!1,this.Ha=[],this.Ja=null,this.Ya=!1,this.Za=!1,this.Xa=[],this.$o=new lu(this,"async_queue_retry"),this.eu=()=>{const n=Ar();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.$o.Bo()};const t=Ar();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.eu)}get isShuttingDown(){return this.ja}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.tu(),this.nu(t)}enterRestrictedMode(t){if(!this.ja){this.ja=!0,this.Za=t||!1;const n=Ar();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.eu)}}enqueue(t){if(this.tu(),this.ja)return new Promise(()=>{});const n=new Ft;return this.nu(()=>this.ja&&this.Za?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.za.push(t),this.ru()))}async ru(){if(this.za.length!==0){try{await this.za[0](),this.za.shift(),this.$o.reset()}catch(t){if(!nn(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.za.length>0&&this.$o.Oo(()=>this.ru())}}nu(t){const n=this.Ga.then(()=>(this.Ya=!0,t().catch(r=>{this.Ja=r,this.Ya=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw vt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ya=!1,r))));return this.Ga=n,n}enqueueAfterDelay(t,n,r){this.tu(),this.Xa.indexOf(t)>-1&&(n=0);const i=Qi.createAndSchedule(this,t,n,r,s=>this.iu(s));return this.Ha.push(i),i}tu(){this.Ja&&I()}verifyOperationInProgress(){}async su(){let t;do t=this.Ga,await t;while(t!==this.Ga)}ou(t){for(const n of this.Ha)if(n.timerId===t)return!0;return!1}_u(t){return this.su().then(()=>{this.Ha.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Ha)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.su()})}au(t){this.Xa.push(t)}iu(t){const n=this.Ha.indexOf(t);this.Ha.splice(n,1)}}function fo(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(e,["next","error","complete"])}class xn extends Xi{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new Hf}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Su(this),this._firestoreClient.terminate()}}function Gf(e,t){const n=typeof e=="object"?e:uc(),r=typeof e=="string"?e:t||"(default)",i=ic(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=nh("firestore");s&&zf(i,...s)}return i}function Cu(e){return e._firestoreClient||Su(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Su(e){var t,n,r;const i=e._freezeSettings(),s=function(a,u,h,c){return new zl(a,u,h,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Pu(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Ff(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t){this._byteString=t}static fromBase64String(t){try{return new he(tt.fromBase64String(t))}catch(n){throw new _(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new he(tt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new _(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new _(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new _(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return V(this._lat,t._lat)||V(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf=/^__.*__$/;function bu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class Zi{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.uu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get cu(){return this.settings.cu}lu(t){return new Zi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}hu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.lu({path:r,Pu:!1});return i.Iu(t),i}Tu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.lu({path:r,Pu:!1});return i.uu(),i}Eu(t){return this.lu({path:void 0,Pu:!0})}du(t){return ii(t,this.settings.methodName,this.settings.Au||!1,this.path,this.settings.Ru)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}uu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Iu(this.path.get(t))}Iu(t){if(t.length===0)throw this.du("Document fields must not be empty");if(bu(this.cu)&&Kf.test(t))throw this.du('Document fields cannot begin and end with "__"')}}class Qf{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||ir(t)}Vu(t,n,r,i=!1){return new Zi({cu:t,methodName:n,Ru:r,path:et.emptyPath(),Pu:!1,Au:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wf(e){const t=e._freezeSettings(),n=ir(e._databaseId);return new Qf(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Yf(e,t,n,r=!1){return ts(n,e.Vu(r?4:3,t))}function ts(e,t){if(Nu(e=Ne(e)))return Jf("Unsupported field value:",t,e),Xf(e,t);if(e instanceof Du)return function(r,i){if(!bu(i.cu))throw i.du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Pu&&t.cu!==4)throw t.du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=ts(a,i.Eu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=Ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ld(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=$.fromDate(r);return{timestampValue:Zr(i.serializer,s)}}if(r instanceof $){const s=new $(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Zr(i.serializer,s)}}if(r instanceof Ji)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof he)return{bytesValue:nu(i.serializer,r._byteString)};if(r instanceof mt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ru(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.du(`Unsupported field value: ${or(r)}`)}(e,t)}function Xf(e,t){const n={};return Na(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):rn(e,(r,i)=>{const s=ts(i,t.hu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Nu(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof $||e instanceof Ji||e instanceof he||e instanceof mt||e instanceof Du)}function Jf(e,t,n){if(!Nu(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=or(n);throw r==="an object"?t.du(e+" a custom object"):t.du(e+" "+r)}}const Zf=new RegExp("[~\\*/\\[\\]]");function tp(e,t,n){if(t.search(Zf)>=0)throw ii(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Vu(...t.split("."))._internalPath}catch{throw ii(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ii(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new _(p.INVALID_ARGUMENT,a+e+u)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ep(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Mu("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ep extends ku{data(){return super.data()}}function Mu(e,t){return typeof t=="string"?tp(e,t):t instanceof Vu?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new _(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class es{}class np extends es{}function rp(e,t,...n){let r=[];t instanceof es&&r.push(t),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof rs).length,a=s.filter(u=>u instanceof ns).length;if(o>1||o>0&&a>0)throw new _(p.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}class ns extends np{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new ns(t,n,r)}_apply(t){const n=this._parse(t);return xu(t._query,n),new zt(t.firestore,t.converter,Kr(t._query,n))}_parse(t){const n=Wf(t.firestore);return function(s,o,a,u,h,c,l){let d;if(h.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new _(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){go(l,c);const g=[];for(const w of l)g.push(po(u,s,w));d={arrayValue:{values:g}}}else d=po(u,s,l)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||go(l,c),d=Yf(a,o,l,c==="in"||c==="not-in");return U.create(h,c,d)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class rs extends es{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new rs(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ht.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)xu(o,u),o=Kr(o,u)}(t._query,n),new zt(t.firestore,t.converter,Kr(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function po(e,t,n){if(typeof(n=Ne(n))=="string"){if(n==="")throw new _(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!qa(t)&&n.indexOf("/")!==-1)throw new _(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(k.fromString(n));if(!E.isDocumentKey(r))throw new _(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Os(e,new E(r))}if(n instanceof mt)return Os(e,n._key);throw new _(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${or(n)}.`)}function go(e,t){if(!Array.isArray(e)||e.length===0)throw new _(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function xu(e,t){if(t.isInequality()){const r=Fi(e),i=t.field;if(r!==null&&!r.isEqual(i))throw new _(p.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Ba(e);s!==null&&ip(e,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new _(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new _(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function ip(e,t,n){if(!n.isEqual(t))throw new _(p.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class sp{convertValue(t,n="none"){switch($t(t)){case 0:return null;case 1:return t.booleanValue;case 2:return L(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(qt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw I()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return rn(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new Ji(L(t.latitude),L(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Ni(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ze(t));default:return null}}convertTimestamp(t){const n=St(t);return new $(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=k.fromString(t);B(uu(r));const i=new He(r.get(1),r.get(3)),s=new E(r.popFirst(5));return i.isEqual(n)||vt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Fu extends ku{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Tn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Mu("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Tn extends Fu{data(t={}){return super.data(t)}}class Lu{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Re(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Tn(this._firestore,this._userDataWriter,r.key,r,new Re(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new _(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Tn(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Re(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Tn(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Re(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,c=-1;return a.type!==0&&(h=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:op(a.type),doc:u,oldIndex:h,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function op(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}class is extends sp{constructor(t){super(),this.firestore=t}convertBytes(t){return new he(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new mt(this.firestore,null,n)}}function ap(e){e=te(e,zt);const t=te(e.firestore,xn),n=Cu(t),r=new is(t);return Ou(e._query),qf(n,e._query).then(i=>new Lu(t,r,e,i))}function up(e,...t){var n,r,i;e=Ne(e);let s={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||fo(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(fo(t[o])){const l=t[o];t[o]=(n=l.next)===null||n===void 0?void 0:n.bind(l),t[o+1]=(r=l.error)===null||r===void 0?void 0:r.bind(l),t[o+2]=(i=l.complete)===null||i===void 0?void 0:i.bind(l)}let u,h,c;if(e instanceof mt)h=te(e.firestore,xn),c=xi(e._key.path),u={next:l=>{t[o]&&t[o](hp(h,e,l))},error:t[o+1],complete:t[o+2]};else{const l=te(e,zt);h=te(l.firestore,xn),c=l._query;const d=new is(h);u={next:g=>{t[o]&&t[o](new Lu(h,d,l,g))},error:t[o+1],complete:t[o+2]},Ou(e._query)}return function(d,g,w,D){const A=new Ru(D),O=new Eu(g,A,w);return d.asyncQueue.enqueueAndForget(async()=>_u(await ri(d),O)),()=>{A.Fa(),d.asyncQueue.enqueueAndForget(async()=>yu(await ri(d),O))}}(Cu(h),c,a,u)}function hp(e,t,n){const r=n.docs.get(t._key),i=new is(e);return new Fu(e,i,t._key,r,new Re(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(i){fe=i})(ac),wn(new ke("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new xn(new Vl(r.getProvider("auth-internal")),new kl(r.getProvider("app-check-internal")),function(h,c){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new _(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new He(h.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Wt(Ds,"4.1.1",t),Wt(Ds,"4.1.1","esm2017")})();const cp={apiKey:"AIzaSyDRU8ntuFip17ss9h9B8H2AR3SHvpBjcKA",authDomain:"vue-firebase-project-a507d.firebaseapp.com",projectId:"vue-firebase-project-a507d",storageBucket:"vue-firebase-project-a507d.appspot.com",messagingSenderId:"313650505514",appId:"1:313650505514:web:17b8b4f948b88a86422053"},lp=Po(cp),mo=Gf(lp),_o="groups",dp=e=>{ap(lo(mo,_o)),up(rp(lo(mo,_o)),t=>{const n=[];t.forEach(r=>{n.push({id:r.id,...r.data()})}),e.value=n})},_p=Uu({__name:"GroupsIndexView",setup(e){const t=Bu([]);return qu(()=>{dp(t)}),(n,r)=>{const i=_e("v-card-title"),s=_e("v-card-item"),o=_e("v-card-text"),a=_e("v-card-actions"),u=_e("v-card");return as(!0),$u(zu,null,ju(t.value,h=>(as(),Hu(u,{key:h.id,width:"400",class:"mx-auto my-6"},{default:ye(()=>[hn(s,null,{default:ye(()=>[hn(i,null,{default:ye(()=>[ar(Gu(h.name),1)]),_:2},1024)]),_:2},1024),hn(o,null,{default:ye(()=>[ar("Текст")]),_:1}),hn(a,null,{default:ye(()=>[ar("Действия")]),_:1})]),_:2},1024))),128)}}});export{_p as default};
