(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){

var NativeCustomEvent = global.CustomEvent;

function useNative () {
  try {
    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
    return  'cat' === p.type && 'bar' === p.detail.foo;
  } catch (e) {
  }
  return false;
}

/**
 * Cross-browser `CustomEvent` constructor.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
 *
 * @public
 */

module.exports = useNative() ? NativeCustomEvent :

// IE >= 9
'function' === typeof document.createEvent ? function CustomEvent (type, params) {
  var e = document.createEvent('CustomEvent');
  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, void 0);
  }
  return e;
} :

// IE <= 8
function CustomEvent (type, params) {
  var e = document.createEventObject();
  e.type = type;
  if (params) {
    e.bubbles = Boolean(params.bubbles);
    e.cancelable = Boolean(params.cancelable);
    e.detail = params.detail;
  } else {
    e.bubbles = false;
    e.cancelable = false;
    e.detail = void 0;
  }
  return e;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
(function (global){
'use strict';

var customEvent = require('custom-event');
var eventmap = require('./eventmap');
var doc = global.document;
var addEvent = addEventEasy;
var removeEvent = removeEventEasy;
var hardCache = [];

if (!global.addEventListener) {
  addEvent = addEventHard;
  removeEvent = removeEventHard;
}

module.exports = {
  add: addEvent,
  remove: removeEvent,
  fabricate: fabricateEvent
};

function addEventEasy (el, type, fn, capturing) {
  return el.addEventListener(type, fn, capturing);
}

function addEventHard (el, type, fn) {
  return el.attachEvent('on' + type, wrap(el, type, fn));
}

function removeEventEasy (el, type, fn, capturing) {
  return el.removeEventListener(type, fn, capturing);
}

function removeEventHard (el, type, fn) {
  var listener = unwrap(el, type, fn);
  if (listener) {
    return el.detachEvent('on' + type, listener);
  }
}

function fabricateEvent (el, type, model) {
  var e = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();
  if (el.dispatchEvent) {
    el.dispatchEvent(e);
  } else {
    el.fireEvent('on' + type, e);
  }
  function makeClassicEvent () {
    var e;
    if (doc.createEvent) {
      e = doc.createEvent('Event');
      e.initEvent(type, true, true);
    } else if (doc.createEventObject) {
      e = doc.createEventObject();
    }
    return e;
  }
  function makeCustomEvent () {
    return new customEvent(type, { detail: model });
  }
}

function wrapperFactory (el, type, fn) {
  return function wrapper (originalEvent) {
    var e = originalEvent || global.event;
    e.target = e.target || e.srcElement;
    e.preventDefault = e.preventDefault || function preventDefault () { e.returnValue = false; };
    e.stopPropagation = e.stopPropagation || function stopPropagation () { e.cancelBubble = true; };
    e.which = e.which || e.keyCode;
    fn.call(el, e);
  };
}

function wrap (el, type, fn) {
  var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
  hardCache.push({
    wrapper: wrapper,
    element: el,
    type: type,
    fn: fn
  });
  return wrapper;
}

function unwrap (el, type, fn) {
  var i = find(el, type, fn);
  if (i) {
    var wrapper = hardCache[i].wrapper;
    hardCache.splice(i, 1); // free up a tad of memory
    return wrapper;
  }
}

function find (el, type, fn) {
  var i, item;
  for (i = 0; i < hardCache.length; i++) {
    item = hardCache[i];
    if (item.element === el && item.type === type && item.fn === fn) {
      return i;
    }
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./eventmap":3,"custom-event":1}],3:[function(require,module,exports){
(function (global){
'use strict';

var eventmap = [];
var eventname = '';
var ron = /^on/;

for (eventname in global) {
  if (ron.test(eventname)) {
    eventmap.push(eventname.slice(2));
  }
}

module.exports = eventmap;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(require,module,exports){
var poser = require('./src/node');

module.exports = poser;

['Array', 'Function', 'Object', 'Date', 'String'].forEach(pose);

function pose (type) {
  poser[type] = function poseComputedType () { return poser(type); };
}

},{"./src/node":5}],5:[function(require,module,exports){
(function (global){
'use strict';

var d = global.document;

function poser (type) {
  var iframe = d.createElement('iframe');

  iframe.style.display = 'none';
  d.body.appendChild(iframe);

  return map(type, iframe.contentWindow);
}

function map (type, source) { // forward polyfills to the stolen reference!
  var original = window[type].prototype;
  var value = source[type];
  var prop;

  for (prop in original) {
    value.prototype[prop] = original[prop];
  }

  return value;
}

module.exports = poser;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],6:[function(require,module,exports){
(function (global){
'use strict';

var expando = 'sektor-' + Date.now();
var rsiblings = /[+~]/;
var document = global.document;
var del = document.documentElement || {};
var match = (
  del.matches ||
  del.webkitMatchesSelector ||
  del.mozMatchesSelector ||
  del.oMatchesSelector ||
  del.msMatchesSelector ||
  never
);

module.exports = sektor;

sektor.matches = matches;
sektor.matchesSelector = matchesSelector;

function qsa (selector, context) {
  var existed, id, prefix, prefixed, adapter, hack = context !== document;
  if (hack) { // id hack for context-rooted queries
    existed = context.getAttribute('id');
    id = existed || expando;
    prefix = '#' + id + ' ';
    prefixed = prefix + selector.replace(/,/g, ',' + prefix);
    adapter = rsiblings.test(selector) && context.parentNode;
    if (!existed) { context.setAttribute('id', id); }
  }
  try {
    return (adapter || context).querySelectorAll(prefixed || selector);
  } catch (e) {
    return [];
  } finally {
    if (existed === null) { context.removeAttribute('id'); }
  }
}

function sektor (selector, ctx, collection, seed) {
  var element;
  var context = ctx || document;
  var results = collection || [];
  var i = 0;
  if (typeof selector !== 'string') {
    return results;
  }
  if (context.nodeType !== 1 && context.nodeType !== 9) {
    return []; // bail if context is not an element or document
  }
  if (seed) {
    while ((element = seed[i++])) {
      if (matchesSelector(element, selector)) {
        results.push(element);
      }
    }
  } else {
    results.push.apply(results, qsa(selector, context));
  }
  return results;
}

function matches (selector, elements) {
  return sektor(selector, null, null, elements);
}

function matchesSelector (element, selector) {
  return match.call(element, selector);
}

function never () { return false; }

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],7:[function(require,module,exports){
'use strict';

var poser = require('poser');
var Dominus = poser.Array();

module.exports = Dominus;

},{"poser":4}],8:[function(require,module,exports){
'use strict';

var $ = require('./public');
var flatten = require('./flatten');
var dom = require('./dom');
var custom = require('./custom');
var classes = require('./classes');
var Dominus = require('./Dominus.ctor');

function equals (selector) {
  return function equals (elem) {
    return dom.matches(elem, selector);
  };
}

function straight (prop, one) {
  return function domMapping (selector) {
    var result = this.map(function (elem) {
      return dom[prop](elem, selector);
    });
    var results = flatten(result);
    return one ? results[0] : results;
  };
}

Dominus.prototype.prev = straight('prev');
Dominus.prototype.next = straight('next');
Dominus.prototype.parent = straight('parent');
Dominus.prototype.parents = straight('parents');
Dominus.prototype.children = straight('children');
Dominus.prototype.find = straight('qsa');
Dominus.prototype.findOne = straight('qs', true);

Dominus.prototype.where = function (selector) {
  return this.filter(equals(selector));
};

Dominus.prototype.is = function (selector) {
  return this.some(equals(selector));
};

Dominus.prototype.i = function (index) {
  return this[index] ? new Dominus(this[index]) : new Dominus();
};

function compareFactory (fn) {
  return function compare () {
    $.apply(null, arguments).forEach(fn, this);
    return this;
  };
}

Dominus.prototype.and = compareFactory(function addOne (elem) {
  if (this.indexOf(elem) === -1) {
    this.push(elem);
  }
  return this;
});

Dominus.prototype.but = compareFactory(function addOne (elem) {
  var index = this.indexOf(elem);
  if (index !== -1) {
    this.splice(index, 1);
  }
  return this;
});

Dominus.prototype.css = function (name, value) {
  var props;
  var many = name && typeof name === 'object';
  var getter = !many && !value;
  if (getter) {
    return this.length ? dom.getCss(this[0], name) : null;
  }
  if (many) {
    props = name;
  } else {
    props = {};
    props[name] = value;
  }
  this.forEach(dom.setCss(props));
  return this;
};

function eventer (method) {
  return function (types, filter, fn) {
    var typelist = types.split(' ');
    if (typeof fn !== 'function') {
      fn = filter;
      filter = null;
    }
    this.forEach(function (elem) {
      typelist.forEach(function (type) {
        var handler = custom.handlers[type];
        if (handler) {
          dom[method](elem, handler.event, filter, handler.wrap(fn));
        } else {
          dom[method](elem, type, filter, fn);
        }
      });
    });
    return this;
  };
}

Dominus.prototype.once = eventer('once');
Dominus.prototype.on = eventer('on');
Dominus.prototype.off = eventer('off');
Dominus.prototype.emit = eventer('emit');

[
  ['addClass', classes.add],
  ['removeClass', classes.remove],
  ['setClass', classes.set],
  ['removeClass', classes.remove],
  ['remove', dom.remove]
].forEach(mapMethods);

function mapMethods (data) {
  Dominus.prototype[data[0]] = function (value) {
    this.forEach(function (elem) {
      data[1](elem, value);
    });
    return this;
  };
}

[
  'append',
  'appendTo',
  'prepend',
  'prependTo',
  'before',
  'beforeOf',
  'after',
  'afterOf'
].forEach(mapManipulation);

function mapManipulation (method) {
  Dominus.prototype[method] = function (value) {
    dom[method](this, value);
    return this;
  };
}

Dominus.prototype.hasClass = function (value) {
  return this.some(function (elem) {
    return classes.contains(elem, value);
  });
};

Dominus.prototype.attr = function (name, value) {
  var hash = name && typeof name === 'object';
  var set = hash ? setMany : setSingle;
  var setter = hash || arguments.length > 1;
  if (setter) {
    this.forEach(set);
    return this;
  } else {
    return this.length ? dom.getAttr(this[0], name) : null;
  }
  function setMany (elem) {
    dom.manyAttr(elem, name);
  }
  function setSingle (elem) {
    dom.attr(elem, name, value);
  }
};

function keyValue (key, value) {
  var getter = arguments.length < 2;
  if (getter) {
    return this.length ? dom[key](this[0]) : '';
  }
  this.forEach(function (elem) {
    dom[key](elem, value);
  });
  return this;
}

function keyValueProperty (prop) {
  Dominus.prototype[prop] = function accessor (value) {
    var getter = arguments.length < 1;
    if (getter) {
      return keyValue.call(this, prop);
    }
    return keyValue.call(this, prop, value);
  };
}

['html', 'text', 'value'].forEach(keyValueProperty);

Dominus.prototype.clone = function () {
  return this.map(function (elem) {
    return dom.clone(elem);
  });
};

Dominus.prototype.focus = function () {
  if (this.length) {
    this[0].focus();
  }
  return this;
};

module.exports = require('./public');

},{"./Dominus.ctor":7,"./classes":11,"./custom":12,"./dom":13,"./flatten":15,"./public":16}],9:[function(require,module,exports){
'use strict';

var Dominus = require('./Dominus.ctor');
var proto = Dominus.prototype;

function Applied (args) {
  return Dominus.apply(this, args);
}

Applied.prototype = proto;

function apply (a) {
  return new Applied(a);
}

['map', 'filter', 'concat', 'slice'].forEach(ensure);

function ensure (key) {
  var original = proto[key];
  proto[key] = function applied () {
    return apply(original.apply(this, arguments));
  };
}

module.exports = apply;

},{"./Dominus.ctor":7}],10:[function(require,module,exports){
(function (global){
'use strict';

var test = require('./test');
var apply = require('./apply');
var Dominus = require('./Dominus.ctor');

function cast (a) {
  if (a === global) {
    return new Dominus(a);
  }
  if (a instanceof Dominus) {
    return a;
  }
  if (!a) {
    return new Dominus();
  }
  if (test.isElement(a)) {
    return new Dominus(a);
  }
  if (!test.isArray(a)) {
    return new Dominus();
  }
  return apply(a).filter(function (i) {
    return test.isElement(i);
  });
}

module.exports = cast;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Dominus.ctor":7,"./apply":9,"./test":17}],11:[function(require,module,exports){
'use strict';

var trim = /^\s+|\s+$/g;
var whitespace = /\s+/g;
var test = require('./test');

function interpret (input) {
  return typeof input === 'string' ? input.replace(trim, '').split(whitespace) : input;
}

function classes (el) {
  if (test.isElement(el)) {
    return el.className.replace(trim, '').split(whitespace);
  }
  return [];
}

function set (el, input) {
  if (test.isElement(el)) {
    el.className = interpret(input).join(' ');
  }
}

function add (el, input) {
  var current = remove(el, input);
  var values = interpret(input);
  current.push.apply(current, values);
  set(el, current);
  return current;
}

function remove (el, input) {
  var current = classes(el);
  var values = interpret(input);
  values.forEach(function (value) {
    var i = current.indexOf(value);
    if (i !== -1) {
      current.splice(i, 1);
    }
  });
  set(el, current);
  return current;
}

function contains (el, input) {
  var current = classes(el);
  var values = interpret(input);

  return values.every(function (value) {
    return current.indexOf(value) !== -1;
  });
}

module.exports = {
  add: add,
  remove: remove,
  contains: contains,
  set: set,
  get: classes
};

},{"./test":17}],12:[function(require,module,exports){
'use strict';

var handlers = {};

function register (name, type, filter) {
  handlers[name] = {
    event: type,
    filter: filter,
    wrap: wrap
  };

  function wrap (fn) {
    return wrapper(name, fn);
  }
}

function wrapper (name, fn) {
  if (!fn) {
    return fn;
  }
  var key = '__dce_' + name;
  if (fn[key]) {
    return fn[key];
  }
  fn[key] = function customEvent (e) {
    var match = handlers[name].filter(e);
    if (match) {
      return fn.apply(this, arguments);
    }
  };
  return fn[key];
}

register('left-click', 'click', function (e) {
  return e.which === 1 && !e.metaKey && !e.ctrlKey;
});

module.exports = {
  register: register,
  wrapper: wrapper,
  handlers: handlers
};

},{}],13:[function(require,module,exports){
(function (global){
'use strict';

var sektor = require('sektor');
var crossvent = require('crossvent');
var Dominus = require('./Dominus.ctor');
var cast = require('./cast');
var apply = require('./apply');
var text = require('./text');
var test = require('./test');
var api = module.exports = {};
var delegates = {};

function castContext (context) {
  if (typeof context === 'string') {
    return api.qs(null, context);
  }
  if (test.isElement(context)) {
    return context;
  }
  if (context instanceof Dominus) {
    return context[0];
  }
  return null;
}

api.qsa = function (el, selector) {
  var results = new Dominus();
  return sektor(selector, castContext(el), results);
};

api.qs = function (el, selector) {
  return api.qsa(el, selector)[0];
};

api.matches = function (el, selector) {
  return test.isElement(el) && sektor.matchesSelector(el, selector);
};

function relatedFactory (prop) {
  return function related (el, selector) {
    var relative = el[prop];
    if (relative) {
      if (!selector || api.matches(relative, selector)) {
        return cast(relative);
      }
    }
    return new Dominus();
  };
}

api.prev = relatedFactory('previousElementSibling');
api.next = relatedFactory('nextElementSibling');
api.parent = relatedFactory('parentElement');

function matches (el, value) {
  if (!value) {
    return true;
  }
  if (value instanceof Dominus) {
    return value.indexOf(el) !== -1;
  }
  if (test.isElement(value)) {
    return el === value;
  }
  return api.matches(el, value);
}

api.parents = function (el, value) {
  var elements = [];
  var current = el;
  while (current.parentElement) {
    if (matches(current.parentElement, value)) {
      elements.push(current.parentElement);
    }
    current = current.parentElement;
  }
  return apply(elements);
};

api.children = function (el, value) {
  var elements = [];
  var children = el.children;
  var child;
  var i;
  for (i = 0; children && i < children.length; i++) {
    child = children[i];
    if (matches(child, value)) {
      elements.push(child);
    }
  }
  return apply(elements);
};

// this method caches delegates so that .off() works seamlessly
function delegate (root, filter, fn) {
  if (delegates[fn._dd]) {
    return delegates[fn._dd];
  }
  fn._dd = Date.now();
  delegates[fn._dd] = delegator;
  function delegator (e) {
    var el = e.target;
    while (el && el !== root) {
      if (api.matches(el, filter)) {
        fn.apply(this, arguments); return;
      }
      el = el.parentElement;
    }
  }
  return delegator;
}

function evented (method, el, type, filter, fn) {
  if (filter === null) {
    crossvent[method](el, type, fn);
  } else {
    crossvent[method](el, type, delegate(el, filter, fn));
  }
}

function once (el, type, filter, fn) {
  var things = [el, type, filter, disposable];
  api.on.apply(api, things);
  function disposable () {
    api.off.apply(api, things);
    return fn.apply(this, arguments);
  }
}

api.once = once;
api.on = evented.bind(null, 'add');
api.off = evented.bind(null, 'remove');
api.emit = evented.bind(null, 'fabricate');

api.html = function (elem, html) {
  var getter = arguments.length < 2;
  if (getter) {
    return elem.innerHTML;
  } else {
    elem.innerHTML = html;
  }
};

api.text = function (elem, text) {
  var checkable = test.isCheckable(elem);
  var getter = arguments.length < 2;
  if (getter) {
    return checkable ? elem.value : elem.innerText || elem.textContent;
  } else if (checkable) {
    elem.value = text;
  } else {
    elem.innerText = elem.textContent = text;
  }
};

api.value = function (el, value) {
  var checkable = test.isCheckable(el);
  var getter = arguments.length < 2;
  if (getter) {
    return checkable ? el.checked : el.value;
  } else if (checkable) {
    el.checked = value;
  } else {
    el.value = value;
  }
};

api.attr = function (el, name, value) {
  if (!test.isElement(el)) {
    return;
  }
  if (value === null || value === void 0) {
    el.removeAttribute(name); return;
  }
  var camel = text.hyphenToCamel(name);
  if (camel in el) {
    el[camel] = value;
  } else {
    el.setAttribute(name, value);
  }
};

api.getAttr = function (el, name) {
  var camel = text.hyphenToCamel(name);
  if (camel in el) {
    return el[camel];
  } else if (el.getAttribute) {
    return el.getAttribute(name);
  }
  return null;
};

api.manyAttr = function (elem, attrs) {
  Object.keys(attrs).forEach(function (attr) {
    api.attr(elem, attr, attrs[attr]);
  });
};

api.make = function (type) {
  return new Dominus(document.createElement(type));
};

api.clone = function (el) {
  if (el.cloneNode) {
    return el.cloneNode(true);
  }
  return el;
};

api.remove = function (el) {
  if (el.parentElement) {
    el.parentElement.removeChild(el);
  }
};

api.append = function (el, target) {
  if (manipulationGuard(el, target, api.append)) {
    return;
  }
  if (el.appendChild) {
    el.appendChild(target);
  }
};

api.prepend = function (el, target) {
  if (manipulationGuard(el, target, api.prepend)) {
    return;
  }
  if (el.insertBefore) {
    el.insertBefore(target, el.firstChild);
  }
};

api.before = function (el, target) {
  if (manipulationGuard(el, target, api.before)) {
    return;
  }
  if (el.parentElement) {
    el.parentElement.insertBefore(target, el);
  }
};

api.after = function (el, target) {
  if (manipulationGuard(el, target, api.after)) {
    return;
  }
  if (el.parentElement) {
    el.parentElement.insertBefore(target, el.nextSibling);
  }
};

function manipulationGuard (el, target, fn) {
  var right = target instanceof Dominus;
  var left = el instanceof Dominus;
  if (left) {
    el.forEach(manipulateMany);
  } else if (right) {
    manipulate(el, true);
  }
  return !el || !target || left || right;

  function manipulate (el, precondition) {
    if (right) {
      target.forEach(function (target, j) {
        fn(el, cloneUnless(target, precondition && j === 0));
      });
    } else {
      fn(el, cloneUnless(target, precondition));
    }
  }

  function manipulateMany (el, i) {
    manipulate(el, i === 0);
  }
}

function cloneUnless (target, condition) {
  return condition ? target : api.clone(target);
}

['appendTo', 'prependTo', 'beforeOf', 'afterOf'].forEach(flip);

function flip (key) {
  var original = key.split(/[A-Z]/)[0];
  api[key] = function (el, target) {
    api[original](target, el);
  };
}

var numericCssProperties = {
  'column-count': true,
  'fill-opacity': true,
  'flex-grow': true,
  'flex-shrink': true,
  'font-weight': true,
  'line-height': true,
  'opacity': true,
  'order': true,
  'orphans': true,
  'widows': true,
  'z-index': true,
  'zoom': true
};
var numeric = /^\d+$/;
var canFloat = 'float' in document.body.style;

api.getCss = function (el, prop) {
  if (!test.isElement(el)) {
    return null;
  }
  var hprop = text.hyphenate(prop);
  var fprop = !canFloat && hprop === 'float' ? 'cssFloat' : hprop;
  var result = global.getComputedStyle(el)[hprop];
  if (prop === 'opacity' && result === '') {
    return 1;
  }
  if (result.substr(-2) === 'px' || numeric.test(result)) {
    return parseFloat(result, 10);
  }
  return result;
};

api.setCss = function (props) {
  var mapped = Object.keys(props).filter(bad).map(expand);
  function bad (prop) {
    var value = props[prop];
    return value !== null && value === value;
  }
  function expand (prop) {
    var hprop = text.hyphenate(prop);
    var value = props[prop];
    if (typeof value === 'number' && !numericCssProperties[hprop]) {
      value += 'px';
    }
    return {
      name: hprop, value: value
    };
  }
  return function (el) {
    if (!test.isElement(el)) {
      return;
    }
    mapped.forEach(function (prop) {
      el.style[prop.name] = prop.value;
    });
  };
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Dominus.ctor":7,"./apply":9,"./cast":10,"./test":17,"./text":18,"crossvent":2,"sektor":6}],14:[function(require,module,exports){
'use strict';

module.exports = require('./Dominus.prototype');

},{"./Dominus.prototype":8}],15:[function(require,module,exports){
'use strict';

var Dominus = require('./Dominus.ctor');

function flatten (a, cache) {
  return a.reduce(function (current, item) {
    if (Dominus.isArray(item)) {
      return flatten(item, current);
    } else if (current.indexOf(item) === -1) {
      return current.concat(item);
    }
    return current;
  }, cache || new Dominus());
}

module.exports = flatten;

},{"./Dominus.ctor":7}],16:[function(require,module,exports){
'use strict';

var dom = require('./dom');
var cast = require('./cast');
var custom = require('./custom');
var Dominus = require('./Dominus.ctor');
var tag = /^\s*<([a-z]+(?:-[a-z]+)?)\s*\/?>\s*$/i;

function api (selector, context) {
  var notText = typeof selector !== 'string';
  if (notText && arguments.length < 2) {
    return cast(selector);
  }
  if (notText) {
    return new Dominus();
  }
  var matches = selector.match(tag);
  if (matches) {
    return dom.make(matches[1]);
  }
  return api.find(selector, context);
}

api.find = function (selector, context) {
  return dom.qsa(context, selector);
};

api.findOne = function (selector, context) {
  return dom.qs(context, selector);
};

api.custom = custom.register;

module.exports = api;

},{"./Dominus.ctor":7,"./cast":10,"./custom":12,"./dom":13}],17:[function(require,module,exports){
'use strict';

var elementObjects = typeof HTMLElement === 'object';

function isElement (o) {
  return elementObjects ? o instanceof HTMLElement : isElementObject(o);
}

function isElementObject (o) {
  return o &&
    typeof o === 'object' &&
    typeof o.nodeName === 'string' &&
    o.nodeType === 1;
}

function isArray (a) {
  return Object.prototype.toString.call(a) === '[object Array]';
}

function isCheckable (elem) {
  return 'checked' in elem && elem.type === 'radio' || elem.type === 'checkbox';
}

module.exports = {
  isElement: isElement,
  isArray: isArray,
  isCheckable: isCheckable
};

},{}],18:[function(require,module,exports){
'use strict';

function hyphenToCamel (hyphens) {
  var part = /-([a-z])/g;
  return hyphens.replace(part, function (g, m) {
    return m.toUpperCase();
  });
}

function hyphenate (text) {
  var camel = /([a-z])([A-Z])/g;
  return text.replace(camel, '$1-$2').toLowerCase();
}

module.exports = {
  hyphenToCamel: hyphenToCamel,
  hyphenate: hyphenate
};

},{}],19:[function(require,module,exports){
$(function(){

  $('.members a').popover({
    trigger: 'hover',
    placement: function (tip, element) {
      var offset = $(element).offset()
        , width = $(document).outerWidth()
        , horiz = 0.5 * width - offset.left
        , horizPlacement = horiz > 0 ? 'right' : 'left'
      return horizPlacement;
    }
  });


  $('#subForm').submit(function (e) {
    e.preventDefault();
    $.getJSON(
    this.action + "?callback=?",
    $(this).serialize(),
    function (data) {
      if (data.Status === 400) {
          alert("Error: " + data.Message);
      } else { // 200

        $('#myModal').html('<h3 class="thanks-message">Gracias por sumarte, pronto recibiras noticias de nosotros!</h3>').delay(2000);

        setTimeout(function(){ $('#myModal').modal('hide'); }, 4000);
      }
    });
  });

  $(".toggle-content").click(function(){
    $(this).fadeOut();
    $(this).parent().find("p:not(.first)").fadeToggle();
    return false;
  });
  $('.videos-section .modal').bind('hide', function () {
    var iframe = $(this).children('div.modal-body').find('iframe');
    var src = iframe.attr('src').replace("?rel=0&autoplay=1", '');
    // alert($(this).children('div.modal-body').html());
    iframe.attr('src', '');
    iframe.attr('src', src);
  });

  $('.videos-section .modal').bind('show', function () {
    var iframe = $(this).children('div.modal-body').find('iframe');
    var src = iframe.attr('src');
    // alert($(this).children('div.modal-body').html());
    iframe.attr('src', '');
    iframe.attr('src', src + '?rel=0&autoplay=1');
  });


  // $('.splash .').css('top', );

  $('a[href*="#"]').click(function(event){
    //prevent the default action for the click event
    event.preventDefault();
 
    //get the full url - like mysitecom/index.htm#home
    var full_url = this.href;
 
    //split the url by # and get the anchor target name - home in mysitecom/index.htm#home
    var parts = full_url.split("#");
    var trgt = parts[1];
 
    //get the top offset of the target anchor
    var target_offset = $("#"+trgt).offset();
    var target_top = target_offset.top;

    $('.navbar li').removeClass('active');

    $(this).addClass('active').parent().addClass('active');
 
    //goto that anchor by setting the body scroll top to anchor top
    $('html, body').animate({scrollTop:target_top}, 500);
  });


  $('section.section.splash .section-content').animate({opacity: 1}, 3000);

  var new_height = $(window).height();

  $('section.section.splash').css({height: new_height}, 1000, function(){
    $('.navbar').scrollspy();
  });

  $(window).resize(function() {

    var new_height = $(window).height();

    $('section.section.splash').css({height: new_height}, 10);
  });

  $('.dot').popover({trigger: 'hover'})

  $('.dot').hover(function(){
    $(this).children('.mapMarkGlow').hide();
  });


  // $('.members a').popover({trigger: 'hover'})

  //  $('.popover-ajax').each(function(index){

  //     var el=$(this);

  //     $.get(el.attr('data-load'),function(d){
  //         el.popover({content: d});       
  //     });     

  // });

});

require('./sections/projects')

},{"./sections/projects":20}],20:[function(require,module,exports){
var dom = require('dominus')

function reset () {
  dom('.project-card').removeClass('expanded')
}

var cards = dom('.project-card .expand')
cards.on('click', function () {
  var card = dom(this).parents('.project-card')
  if (card.hasClass('expanded')) {
    reset()
  } else {
    reset()
    card.addClass('expanded')
  }
})

var closeButtons = dom('.description-overlay button.close')
closeButtons.on('click', function () {
  reset()
})

},{"dominus":14}]},{},[19]);
