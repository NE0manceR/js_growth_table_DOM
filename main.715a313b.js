parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector("table"),t=document.querySelector(".append-row "),r=document.querySelector(".remove-column"),l=document.querySelector(".remove-row"),d=document.querySelector(".append-column");t.addEventListener("click",function(){var r=e.rows[0].cloneNode(!0);l.removeAttribute("disabled"),e.rows.length<9?e.append(r):(e.append(r),t.setAttribute("disabled",!0))}),l.addEventListener("click",function(){e.rows.length>3?(e.querySelector("tr:last-child").remove(),t.removeAttribute("disabled")):(e.querySelector("tr:last-child").remove(),l.setAttribute("disabled",!0))}),d.addEventListener("click",function(){for(var e=document.querySelectorAll("tr"),t=0;t<e.length;t++){var l=document.createElement("td");9===e[t].cells.length?(e[t].append(l),d.setAttribute("disabled",!0)):(r.removeAttribute("disabled"),e[t].append(l))}}),r.addEventListener("click",function(){for(var t=document.querySelectorAll("tr"),l=0;l<e.rows.length;l++)t[l].cells.length>3?(t[l].querySelector("td:last-child").remove(),d.removeAttribute("disabled")):(t[l].querySelector("td:last-child").remove(),r.setAttribute("disabled",!0))});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.715a313b.js.map