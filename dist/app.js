!function(i){function e(e){for(var t,a,n=e[0],r=e[1],o=e[2],l=0,c=[];l<n.length;l++)a=n[l],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&c.push(u[a][0]),u[a]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(i[t]=r[t]);for(p&&p(e);c.length;)c.shift()();return m.push.apply(m,o||[]),s()}function s(){for(var e,t=0;t<m.length;t++){for(var a=m[t],n=!0,r=1;r<a.length;r++){var o=a[r];0!==u[o]&&(n=!1)}n&&(m.splice(t--,1),e=l(l.s=a[0]))}return e}var a={},u={0:0},m=[];function l(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=i,l.c=a,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var r=0;r<t.length;r++)e(t[r]);var p=n;m.push([33,1]),s()}({33:function(e,t,a){a(34),e.exports=a(73)},34:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var l=a(0),c=a.n(l),n=a(13),r=a(32),o=a(3),i=a(15),s=a.n(i);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"logo"},"RUNMAP"),c.a.createElement("div",{className:"footer-copyright"}," ©2019 - Project RunMap "))}var v=function(){function o(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return b(f(t=function(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?f(e):t}(this,(e=p(o)).call.apply(e,[this].concat(n)))),"state",{inputSearch:" valeur initial"}),b(f(t),"changeValue",function(e){t.setState({inputSearch:e})}),b(f(t),"validateSearch",function(){var e=t.state.inputSearch;console.log("valeur soumise : ",e),s.a.post("http://julien-pillet.vpnuser.lan/public/register",{form:{firstName:"Fred",lastName:"Flintstone"}}).then(function(e){console.log("réponse de mr API : ",e)}).catch(function(e){console.log("Apparement ça marche pas")}).finally(function(){})}),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(o,c.a.Component),function(e,t,a){t&&m(e.prototype,t),a&&m(e,a)}(o,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null)}}]),o}(),h=a(1),g=a.n(h);d.propTypes={};function y(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:"list-nav"},c.a.createElement("li",null," ",c.a.createElement(o.b,{to:"/contact",exact:!0},"Fonctionnalités")," "),c.a.createElement("li",null," ",c.a.createElement(o.b,{to:"/contact",exact:!0},"À propos")," "),c.a.createElement("li",null," ",c.a.createElement(o.b,{to:"/contact",exact:!0},"Professionnel")," "),c.a.createElement("li",null," ",c.a.createElement(o.b,{to:"/contact",exact:!0},"Conditons")," ")))}var F=d;y.propTypes={};function O(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:"list-nav"},c.a.createElement("li",null," ",c.a.createElement(o.b,{to:"/contact",exact:!0},"Facebook")," "),c.a.createElement("li",null," ",c.a.createElement(o.b,{to:"/contact",exact:!0},"#RunMapFr")," "),c.a.createElement("li",null," ",c.a.createElement(o.b,{to:"/contact",exact:!0},"Twitter")," "),c.a.createElement("li",null," ",c.a.createElement(o.b,{to:"/contact",exact:!0},"YouTube")," ")))}var w=y;O.propTypes={};function j(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:"list-nav"},c.a.createElement("li",null," ",c.a.createElement(o.b,{to:"/contact",exact:!0},"S'inscrire")," "),c.a.createElement("li",null," ",c.a.createElement(o.b,{to:"/contact",exact:!0},"Se connecter")," "),c.a.createElement("li",null," ",c.a.createElement(o.b,{to:"/contact",exact:!0},"Ajouter une ville")," "),c.a.createElement("li",null," ",c.a.createElement(o.b,{to:"/contact",exact:!0},"Ajouter un lieu")," ")))}var D=O;j.propTypes={};var N=j;function P(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"footer"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-3"},c.a.createElement(F,null)),c.a.createElement("div",{className:"col-sm-3 nav-group"},c.a.createElement("h5",null,"Menu"),c.a.createElement(w,null)),c.a.createElement("div",{className:"col-sm-3 nav-group"},c.a.createElement("h5",null,"Nous suivre"),c.a.createElement(D,null)),c.a.createElement("div",{className:"col-sm-3 nav-group"},c.a.createElement("h5",null,"Runmap family"),c.a.createElement(N,null))))))}a(61);P.propTypes={};function S(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},c.a.createElement("a",{className:"navbar-brand text-uppercase",href:"#"},"Run",c.a.createElement("b",{className:"text-warning"},"map")),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},c.a.createElement("form",{className:"form-inline my-2 my-lg-0 ml-auto"},c.a.createElement("button",{className:"btn btn-warning my-2 my-sm-0",type:"submit",href:"#"},"Connexion")))))}function x(e){return e.inscriptionFormData,e.setInscriptionFormData,c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"signup-form-group"},c.a.createElement("div",{className:"sign-up-form"},c.a.createElement("div",{className:"sign-up-form"},c.a.createElement("button",{type:"button",className:"signup-button-fb facebook-signup-button",href:"/register"},"S'inscrire avec Facebook"),c.a.createElement("div",{className:"hr"},c.a.createElement("div",{className:"hr-text"},"OU")),c.a.createElement("button",{type:"button",className:"signup-button email-signup-button",href:"/register"},"Avec mon adresse Mail"),c.a.createElement("div",{className:"disclaimer-text"},c.a.createElement("p",null,"En vous inscrivant sur ",c.a.createElement("span",null,"RunMap")," vous acceptez les ",c.a.createElement("a",{href:"#"},"conditions d'utilisation"),". Pour plus d'information ",c.a.createElement("a",{href:"#"},"contactez-nous")," ."),c.a.createElement("p",null,"Vous este déjà membre ? ",c.a.createElement("a",{href:"#"},"Connectez-vous")))))))}var R=P,T=a(10);a(62);x.propTypes={inscriptionFormData:g.a.object.isRequired,setInscriptionFormData:g.a.func.isRequired};function I(){return c.a.createElement("img",{alt:"#",src:"./src/components/PreInscriptionFormSection/Logo/RUNMAP.png"})}function _(){return c.a.createElement("img",{className:"arrow-icon",src:"#",alt:"Je suis l'invitation au scroll vertical"})}function q(e){var t=e.inscriptionFormData,a=e.setInscriptionFormData;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"main container"},c.a.createElement("h2",{className:"text-slogant"},"Localise ton futur terrain de jeu !"),c.a.createElement("div",{className:"main-content row"},c.a.createElement("div",{className:"col-md-5"},c.a.createElement(I,null)),c.a.createElement("div",{className:"col-md-5"},c.a.createElement(C,{inscriptionFormData:t,setInscriptionFormData:a})),c.a.createElement(_,null))))}var C=x;a(63);q.propTypes={inscriptionFormData:g.a.object.isRequired,setInscriptionFormData:g.a.func.isRequired};var M=q;a(64);function A(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)}return a}function k(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function J(e){var t=e.searchFormData,a=e.setSearchFormData;return c.a.createElement("div",{className:"form-search"},c.a.createElement("select",{className:"custom-select",onChange:function(e){return a(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?A(a,!0).forEach(function(e){k(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):A(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}({},t,{sport:e.target.value}))},name:"sport",id:"sport-select"},c.a.createElement("option",{value:"choisis ton sport"},"Choix du sport"),c.a.createElement("option",{value:"athlétisme"},"athlétisme"),c.a.createElement("option",{value:"boxe"},"boxe")),c.a.createElement("button",{type:"button",className:"search-button"},c.a.createElement(o.b,{to:"/search",exact:!0},"Rechercher")))}J.propTypes={searchFormData:g.a.object.isRequired,setSearchFormData:g.a.func.isRequired};function L(){return c.a.createElement("img",{className:"arrow-icon",src:"#",alt:"Je suis l'autre invitation au scroll vertical"})}function V(e){var t=e.searchFormData,a=e.setSearchFormData;return c.a.createElement("div",{className:"search-main"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"title-search"},c.a.createElement("h2",null,"C'est aussi simple que ça ...")),c.a.createElement(z,{searchFormData:t,setSearchFormData:a}),c.a.createElement(L,null)))}var z=J;a(65);V.propTypes={searchFormData:g.a.object.isRequired,setSearchFormData:g.a.func.isRequired};function U(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement("h2",null,"je cherche"),c.a.createElement("h3",null,"stade-parcours")),c.a.createElement("div",null,c.a.createElement("h2",null,"je trouve"),c.a.createElement("h3",null,"Lille-paris-lyon")),c.a.createElement("div",null,c.a.createElement("h2",null,"je pratique"),c.a.createElement("h3",null,"athlétisme-vélo-football")))}function B(){return c.a.createElement("div",null,c.a.createElement("h2",null,"phrase courte"),c.a.createElement("button",{type:"button"},"J'arrive"))}function H(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Promotion"),c.a.createElement(U,null),c.a.createElement(B,null))}function X(e){var t=e.inscriptionFormData,a=e.setInscriptionFormData,n=e.searchFormData,r=e.setSearchFormData;return c.a.createElement(c.a.Fragment,null,c.a.createElement(S,null),c.a.createElement(M,{inscriptionFormData:t,setInscriptionFormData:a}),c.a.createElement(G,{searchFormData:n,setSearchFormData:r}),c.a.createElement(H,null))}var G=V;a(66);X.propTypes={inscriptionFormData:g.a.object.isRequired,setInscriptionFormData:g.a.func.isRequired,searchFormData:g.a.object.isRequired,setSearchFormData:g.a.func.isRequired};function Y(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"User Page"))}function K(e){var t=e.searchFormData;return e.setSearchFormData,console.log("data de recherche envoyé à la page search : ",t),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Search Page"),c.a.createElement(o.b,{to:"/",exact:!0},"retour à l'accueil"))}var Q=X;a(67),a(68),a(69);function W(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)}return a}function Z(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?W(a,!0).forEach(function(e){$(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):W(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function $(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function ee(e){var t=e.inscriptionFormData,a=e.setInscriptionFormData;return c.a.createElement("div",{className:"inscription-page"},c.a.createElement("h1",null,"Je suis la page d'inscription"),c.a.createElement(o.b,{to:"/",exact:!0},"retour à la page d'accueil"),c.a.createElement("form",{className:"form-inscription",onSubmit:function(e){e.preventDefault(),t.password===t.confirmationPassword?(console.log("les mots de passe correspondent. Execution de la fonction formSubmit"),a(Z({},t,{displayPasswordErrorMessage:!1})),console.log("je soumets en POST ce contenu à l'api symfony : ",t),s.a.post("https://3.82.197.202/RunBack/public/register",{inscriptionFormData:t}).then(function(e){console.log("réponse de mr API : ",e)}).catch(function(e){console.log("Apparement ça marche pas")}).finally(function(){})):(console.log("Le mot de passe ne correspond pas. Veuillez corriger !"),a(Z({},t,{displayPasswordErrorMessage:!0})))}},c.a.createElement("label",{className:"form-inscription-label avatar-label",htmlFor:"avatar"},"Choisis une photo de profil",c.a.createElement("input",{className:"form-inscription-input avatar-input",type:"file",id:"avatar",name:"avatar",accept:"image/png, image/jpeg"})),c.a.createElement("label",{className:"form-inscription-label firstname-label",htmlFor:"firstname"},"Prénom",c.a.createElement("input",{className:"form-inscription-input firstname-input",type:"text",id:"firstname",name:"firstname",placeholder:"prénom",value:t.firstname,onChange:function(e){return a(Z({},t,{firstname:e.target.value}))}})),c.a.createElement("label",{className:"form-inscription-label lastname-label",htmlFor:"lastname"},"Nom de famille",c.a.createElement("input",{className:"form-inscription-input lastname-input",type:"text",id:"lastname",name:"lastname",placeholder:"nom de famille",onChange:function(e){return a(Z({},t,{lastname:e.target.value}))}})),c.a.createElement("label",{className:"form-inscription-label age-label",htmlFor:"age"},"Age",c.a.createElement("select",{type:"text",className:"form-inscription-input age-input",id:"age",name:"age",onChange:function(e){return a(Z({},t,{age:e.target.value}))}},c.a.createElement("option",{value:""}),c.a.createElement("option",{value:"18"},"18 ans"),c.a.createElement("option",{value:"33"},"33 ans"))),c.a.createElement("label",{className:"form-inscription-label gender-label",htmlFor:"gender"},"Sexe",c.a.createElement("select",{className:"form-inscription-input gender-input",type:"text",id:"gender",name:"gender",placeholder:"sexe",onChange:function(e){return a(Z({},t,{gender:e.target.value}))}},c.a.createElement("option",{value:""}),c.a.createElement("option",{value:"homme"},"homme"),c.a.createElement("option",{value:"femme"},"femme"))),c.a.createElement("label",{className:"form-inscription-label email-label",htmlFor:"email"},"Adresse e-mail",c.a.createElement("input",{className:"form-inscription-input email-input",type:"email",id:"email",name:"email",placeholder:"adresse e-mail",value:t.email,onChange:function(e){return a(Z({},t,{email:e.target.value}))}})),c.a.createElement("label",{className:"form-inscription-label city-label",htmlFor:"city"},"Ville",c.a.createElement("select",{className:"form-inscription-input city-input",type:"text",id:"city",name:"city",placeholder:"ville",onChange:function(e){return a(Z({},t,{city:e.target.value}))}},c.a.createElement("option",{value:""}),c.a.createElement("option",{value:"ville 1"},"ville 1"),c.a.createElement("option",{value:"ville 2"},"ville 2"))),c.a.createElement("label",{className:"form-inscription-label password-label",htmlFor:"password"},"Mot de passe",c.a.createElement("input",{className:"form-inscription-input password-input",type:"password",id:"password",name:"password",value:t.password,placeholder:"mot de passe",onChange:function(e){return a(Z({},t,{password:e.target.value}))}})),c.a.createElement("label",{className:"form-inscription-label confirmation-password-label",htmlFor:"confirmation-password"},"Confirmation mot de passe",c.a.createElement("input",{className:"form-inscription-input confirmation-password-input",type:"password",id:"confirmation-password",name:"password",placeholder:"confirmation du mot de passe",onChange:function(e){return a(Z({},t,{confirmationPassword:e.target.value}))}})),c.a.createElement("button",{type:"submit",className:"form-inscription-button-submit"},"bienvenue!"),t.displayPasswordErrorMessage&&c.a.createElement("div",{className:"form-inscription-ErrorMessage"},"Le mot de passe ne correspond pas. Veuillez corriger!")))}ee.propTypes={inscriptionFormData:g.a.object.isRequired,setInscriptionFormData:g.a.func.isRequired};function te(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null," Page de contact"),c.a.createElement(o.b,{to:"/",exact:!0},"retour à l'accueil"))}function ae(e){var t=e.inscriptionFormData,a=e.setInscriptionFormData,n=e.searchFormData,r=e.setSearchFormData;return c.a.createElement(c.a.Fragment,null,c.a.createElement(T.c,null,c.a.createElement(T.a,{path:"/",exact:!0},c.a.createElement(Q,{inscriptionFormData:t,setInscriptionFormData:a,searchFormData:n,setSearchFormData:r})),c.a.createElement(T.a,{path:"/inscription",exact:!0},c.a.createElement(ne,{inscriptionFormData:t,setInscriptionFormData:a})),c.a.createElement(T.a,{path:"/search",exact:!0},c.a.createElement(K,{searchFormData:n,setSearchFormData:r})),c.a.createElement(T.a,{path:"/user",exact:!0},c.a.createElement(Y,null)),c.a.createElement(T.a,{path:"/contact",exact:!0},c.a.createElement(te,null))))}var ne=ee;a(70);ae.propTypes={inscriptionFormData:g.a.object.isRequired,setInscriptionFormData:g.a.func.isRequired,searchFormData:g.a.object.isRequired,setSearchFormData:g.a.func.isRequired};var re=ae;a(71);function oe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function le(){var e=oe(Object(l.useState)({firstname:"",lastname:"",age:"",gender:"",email:"",city:"",password:"",confirmationPassword:"",displayPasswordErrorMessage:!1}),2),t=e[0],a=e[1],n=oe(Object(l.useState)({sport:"",place:""}),2),r=n[0],o=n[1];return c.a.createElement("div",{id:"app"},c.a.createElement(v,null),c.a.createElement(re,{inscriptionFormData:t,setInscriptionFormData:a,searchFormData:r,setSearchFormData:o}),c.a.createElement(R,null))}var ce=a(11);function ie(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)}return a}function se(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function ue(e,t){var a=0<arguments.length&&void 0!==e?e:pe,n=1<arguments.length&&void 0!==t?t:{};switch(n.type){case fe:return function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?ie(a,!0).forEach(function(e){se(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):ie(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}({},a,{message:n.message});default:return a}}function me(e){return function(t){return function(e){console.log("Je suis le middleware, et je laisse passer cette action: ",e),t(e)}}}var pe={message:"Hello"},fe="DO_SOMETHING",Ee=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ce.c)(Object(ce.a)(me)),be=Object(ce.d)(ue,Ee),de=(a(72),c.a.createElement(r.a,{store:be},c.a.createElement(o.a,null,c.a.createElement(le,null))));Object(n.render)(de,document.getElementById("root"))}});