(()=>{"use strict";var e,n,t,_,l,o,r={},i=[],u=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(e,n){for(var t in n)e[t]=n[t];return e}function c(e){var n=e.parentNode;n&&n.removeChild(e)}function f(n,t,_){var l,o,r,i={};for(r in t)"key"==r?l=t[r]:"ref"==r?o=t[r]:i[r]=t[r];if(arguments.length>2&&(i.children=arguments.length>3?e.call(arguments,2):_),"function"==typeof n&&null!=n.defaultProps)for(r in n.defaultProps)void 0===i[r]&&(i[r]=n.defaultProps[r]);return p(n,i,l,o,null)}function p(e,_,l,o,r){var i={type:e,props:_,key:l,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++t:r};return null==r&&null!=n.vnode&&n.vnode(i),i}function a(e){return e.children}function d(e,n){this.props=e,this.context=n}function h(e,n){if(null==n)return e.__?h(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?h(e):null}function v(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return v(e)}}function y(e){(!e.__d&&(e.__d=!0)&&_.push(e)&&!m.__r++||o!==n.debounceRendering)&&((o=n.debounceRendering)||l)(m)}function m(){for(var e;m.__r=_.length;)e=_.sort((function(e,n){return e.__v.__b-n.__v.__b})),_=[],e.some((function(e){var n,t,_,l,o,r;e.__d&&(o=(l=(n=e).__v).__e,(r=n.__P)&&(t=[],(_=s({},l)).__v=l.__v+1,C(r,l,_,n.__n,void 0!==r.ownerSVGElement,null!=l.__h?[o]:null,t,null==o?h(l):o,l.__h),D(t,l),l.__e!=o&&v(l)))}))}function k(e,n,t,_,l,o,u,s,c,f){var d,v,y,m,k,S,x,P=_&&_.__k||i,w=P.length;for(t.__k=[],d=0;d<n.length;d++)if(null!=(m=t.__k[d]=null==(m=n[d])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?p(null,m,null,null,m):Array.isArray(m)?p(a,{children:m},null,null,null):m.__b>0?p(m.type,m.props,m.key,null,m.__v):m)){if(m.__=t,m.__b=t.__b+1,null===(y=P[d])||y&&m.key==y.key&&m.type===y.type)P[d]=void 0;else for(v=0;v<w;v++){if((y=P[v])&&m.key==y.key&&m.type===y.type){P[v]=void 0;break}y=null}C(e,m,y=y||r,l,o,u,s,c,f),k=m.__e,(v=m.ref)&&y.ref!=v&&(x||(x=[]),y.ref&&x.push(y.ref,null,m),x.push(v,m.__c||k,m)),null!=k?(null==S&&(S=k),"function"==typeof m.type&&m.__k===y.__k?m.__d=c=g(m,c,e):c=b(e,m,y,P,k,c),"function"==typeof t.type&&(t.__d=c)):c&&y.__e==c&&c.parentNode!=e&&(c=h(y))}for(t.__e=S,d=w;d--;)null!=P[d]&&("function"==typeof t.type&&null!=P[d].__e&&P[d].__e==t.__d&&(t.__d=h(_,d+1)),T(P[d],P[d]));if(x)for(d=0;d<x.length;d++)N(x[d],x[++d],x[++d])}function g(e,n,t){for(var _,l=e.__k,o=0;l&&o<l.length;o++)(_=l[o])&&(_.__=e,n="function"==typeof _.type?g(_,n,t):b(t,_,_,l,_.__e,n));return n}function b(e,n,t,_,l,o){var r,i,u;if(void 0!==n.__d)r=n.__d,n.__d=void 0;else if(null==t||l!=o||null==l.parentNode)e:if(null==o||o.parentNode!==e)e.appendChild(l),r=null;else{for(i=o,u=0;(i=i.nextSibling)&&u<_.length;u+=2)if(i==l)break e;e.insertBefore(l,o),r=o}return void 0!==r?r:l.nextSibling}function S(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]=null==t?"":"number"!=typeof t||u.test(n)?t:t+"px"}function x(e,n,t,_,l){var o;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(n in _)t&&n in t||S(e.style,n,"");if(t)for(n in t)_&&t[n]===_[n]||S(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])o=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+o]=t,t?_||e.addEventListener(n,o?w:P,o):e.removeEventListener(n,o?w:P,o);else if("dangerouslySetInnerHTML"!==n){if(l)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null!=t&&(!1!==t||"a"===n[0]&&"r"===n[1])?e.setAttribute(n,t):e.removeAttribute(n))}}function P(e){this.l[e.type+!1](n.event?n.event(e):e)}function w(e){this.l[e.type+!0](n.event?n.event(e):e)}function C(e,t,_,l,o,r,i,u,c){var f,p,h,v,y,m,g,b,S,x,P,w=t.type;if(void 0!==t.constructor)return null;null!=_.__h&&(c=_.__h,u=t.__e=_.__e,t.__h=null,r=[u]),(f=n.__b)&&f(t);try{e:if("function"==typeof w){if(b=t.props,S=(f=w.contextType)&&l[f.__c],x=f?S?S.props.value:f.__:l,_.__c?g=(p=t.__c=_.__c).__=p.__E:("prototype"in w&&w.prototype.render?t.__c=p=new w(b,x):(t.__c=p=new d(b,x),p.constructor=w,p.render=U),S&&S.sub(p),p.props=b,p.state||(p.state={}),p.context=x,p.__n=l,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=w.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=s({},p.__s)),s(p.__s,w.getDerivedStateFromProps(b,p.__s))),v=p.props,y=p.state,h)null==w.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==w.getDerivedStateFromProps&&b!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,x),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,x)||t.__v===_.__v){p.props=b,p.state=p.__s,t.__v!==_.__v&&(p.__d=!1),p.__v=t,t.__e=_.__e,t.__k=_.__k,t.__k.forEach((function(e){e&&(e.__=t)})),p.__h.length&&i.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,x),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,y,m)}))}p.context=x,p.props=b,p.state=p.__s,(f=n.__r)&&f(t),p.__d=!1,p.__v=t,p.__P=e,f=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(l=s(s({},l),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(v,y)),P=null!=f&&f.type===a&&null==f.key?f.props.children:f,k(e,Array.isArray(P)?P:[P],t,_,l,o,r,i,u,c),p.base=t.__e,t.__h=null,p.__h.length&&i.push(p),g&&(p.__E=p.__=null),p.__e=!1}else null==r&&t.__v===_.__v?(t.__k=_.__k,t.__e=_.__e):t.__e=E(_.__e,t,_,l,o,r,i,c);(f=n.diffed)&&f(t)}catch(e){t.__v=null,(c||null!=r)&&(t.__e=u,t.__h=!!c,r[r.indexOf(u)]=null),n.__e(e,t,_)}}function D(e,t){n.__c&&n.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){n.__e(e,t.__v)}}))}function E(n,t,_,l,o,i,u,s){var f,p,a,d=_.props,v=t.props,y=t.type,m=0;if("svg"===y&&(o=!0),null!=i)for(;m<i.length;m++)if((f=i[m])&&"setAttribute"in f==!!y&&(y?f.localName===y:3===f.nodeType)){n=f,i[m]=null;break}if(null==n){if(null===y)return document.createTextNode(v);n=o?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,v.is&&v),i=null,s=!1}if(null===y)d===v||s&&n.data===v||(n.data=v);else{if(i=i&&e.call(n.childNodes),p=(d=_.props||r).dangerouslySetInnerHTML,a=v.dangerouslySetInnerHTML,!s){if(null!=i)for(d={},m=0;m<n.attributes.length;m++)d[n.attributes[m].name]=n.attributes[m].value;(a||p)&&(a&&(p&&a.__html==p.__html||a.__html===n.innerHTML)||(n.innerHTML=a&&a.__html||""))}if(function(e,n,t,_,l){var o;for(o in t)"children"===o||"key"===o||o in n||x(e,o,null,t[o],_);for(o in n)l&&"function"!=typeof n[o]||"children"===o||"key"===o||"value"===o||"checked"===o||t[o]===n[o]||x(e,o,n[o],t[o],_)}(n,v,d,o,s),a)t.__k=[];else if(m=t.props.children,k(n,Array.isArray(m)?m:[m],t,_,l,o&&"foreignObject"!==y,i,u,i?i[0]:_.__k&&h(_,0),s),null!=i)for(m=i.length;m--;)null!=i[m]&&c(i[m]);s||("value"in v&&void 0!==(m=v.value)&&(m!==n.value||"progress"===y&&!m||"option"===y&&m!==d.value)&&x(n,"value",m,d.value,!1),"checked"in v&&void 0!==(m=v.checked)&&m!==n.checked&&x(n,"checked",m,d.checked,!1))}return n}function N(e,t,_){try{"function"==typeof e?e(t):e.current=t}catch(e){n.__e(e,_)}}function T(e,t,_){var l,o;if(n.unmount&&n.unmount(e),(l=e.ref)&&(l.current&&l.current!==e.__e||N(l,null,t)),null!=(l=e.__c)){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(e){n.__e(e,t)}l.base=l.__P=null}if(l=e.__k)for(o=0;o<l.length;o++)l[o]&&T(l[o],t,"function"!=typeof e.type);_||null==e.__e||c(e.__e),e.__e=e.__d=void 0}function U(e,n,t){return this.constructor(e,t)}e=i.slice,n={__e:function(e,n,t,_){for(var l,o,r;n=n.__;)if((l=n.__c)&&!l.__)try{if((o=l.constructor)&&null!=o.getDerivedStateFromError&&(l.setState(o.getDerivedStateFromError(e)),r=l.__d),null!=l.componentDidCatch&&(l.componentDidCatch(e,_||{}),r=l.__d),r)return l.__E=l}catch(n){e=n}throw e}},t=0,d.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof e&&(e=e(s({},t),this.props)),e&&s(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),y(this))},d.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),y(this))},d.prototype.render=a,_=[],l="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,m.__r=0;!function(t,_,l){var o,i,u;n.__&&n.__(t,_),i=(o="function"==typeof l)?null:l&&l.__k||_.__k,u=[],C(_,t=(!o&&l||_).__k=f(a,null,[t]),i||r,r,void 0!==_.ownerSVGElement,!o&&l?[l]:i?null:_.firstChild?e.call(_.childNodes):null,u,!o&&l?l:i?i.__e:_.firstChild,o),D(u,t)}(f((function(){return f("div",{className:"hi"},f("h1",null,"Hello PReact ",(new Date).toString()))}),null),document.querySelector("#root"))})();