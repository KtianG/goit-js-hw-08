!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var l=r("1WSnx"),n=document.querySelector("form.feedback-form"),u=document.querySelector('input[name="email"]'),i=document.querySelector('textarea[name="message"]'),f=document.querySelector('button[type="submit"]'),c=localStorage.getItem("feedback-form-state")?JSON.parse(localStorage.getItem("feedback-form-state")):"";c.email&&(u.value=c.email),c.message&&(i.value=c.message),n.addEventListener("input",e(l).throttle((function(){var e={email:u.value,message:i.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),f.addEventListener("click",(function(e){e.preventDefault();var t={email:u.value,message:i.value};console.log(t),u.value="",i.value="",localStorage.removeItem("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.b71b2540.js.map