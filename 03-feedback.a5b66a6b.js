function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var l={id:e,exports:{}};return o[e]=l,t.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequired7c6=l);var r=l("kEUo3");const n=document.querySelector("form.feedback-form"),s=document.querySelector('input[name="email"]'),u=document.querySelector('textarea[name="message"]'),c=document.querySelector('button[type="submit"]'),d=localStorage.getItem("feedback-form-state")?JSON.parse(localStorage.getItem("feedback-form-state")):"";d.email&&(s.value=d.email),d.message&&(u.value=d.message),n.addEventListener("input",e(r).throttle((()=>{const e={email:s.value,message:u.value};localStorage.setItem("feedback-form-state",JSON.stringify(e)),console.log(localStorage.getItem("feedback-form-state"))}),500)),c.addEventListener("click",(e=>{e.preventDefault();const t={email:s.value,message:u.value};console.log(t),s.value="",u.value="",localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.a5b66a6b.js.map
