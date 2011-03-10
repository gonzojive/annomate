;
function equal(a, b) {
    return a == b;
};
function eql(a, b) {
    return a === b;
};
function identity(thing) {
    return thing;
};
function toArray(arrayLike) {
    var resultArr = [];
    for (var arg = null, _js_idx672 = 0; _js_idx672 < arrayLike.length; _js_idx672 += 1) {
        arg = arrayLike[_js_idx672];
        resultArr.push(arg);
    };
    return resultArr;
};
function lispyMap(func, arg1) {
    var argumentsArr = toArray(arguments);
    var resultArr = [];
    var ithFromEachArg = function (i) {
        return argumentsArr.slice(1).map(function (arg) {
            return arg[i];
        });
    };
    for (var index = 0; index < arg1.length; index += 1) {
        resultArr.push(func.apply(null, ithFromEachArg(index)));
    };
    return resultArr;
};
function mergeInto(receivingObj) {
    var donatingObjs = [];
    for (var i673 = 0; i673 < arguments.length - 1; i673 += 1) {
        donatingObjs[i673] = arguments[i673 + 1];
    };
    for (var otherObj = null, _js_idx674 = 0; _js_idx674 < donatingObjs.length; _js_idx674 += 1) {
        otherObj = donatingObjs[_js_idx674];
        for (var prop in otherObj) {
            receivingObj[prop] = otherObj[prop];
        };
    };
    return receivingObj;
};
function length(arr) {
    return arr.length;
};
function subseq(arr, start, end) {
    if (end === undefined) {
        end = null;
    };
    return copyArray(arr).splice(start, end || arr.length);
};
function concat(arr1, arr2) {
    return arr1.concat(arr2);
};
function lispyApply(func) {
    var rest = [];
    for (var i675 = 0; i675 < arguments.length - 1; i675 += 1) {
        rest[i675] = arguments[i675 + 1];
    };
    var stdArgs = rest.splice(0, rest.length - 1);
    var last = rest[rest.length - 1];
    return func.apply(this, last ? stdArgs.concat(last) : stdArgs);
};
function collect(fun, arr) {
    var passingMembers = [];
    for (var member = null, _js_idx676 = 0; _js_idx676 < arr.length; _js_idx676 += 1) {
        member = arr[_js_idx676];
        if (fun(member)) {
            passingMembers.push(member);
        };
    };
    return passingMembers;
};
function find(desiredItem, arr) {
    var key = identity;
    var test = equal;
    var _js678 = arguments.length;
    for (var n677 = 2; n677 < _js678; n677 += 2) {
        switch (arguments[n677]) {
        case 'key':
            key = arguments[n677 + 1];
            break;
        case 'test':
            test = arguments[n677 + 1];
        };
    };
    if (key === undefined) {
        key = identity;
    };
    if (test === undefined) {
        test = equal;
    };
    if (arr) {
        for (var item = null, _js_idx679 = 0; _js_idx679 < arr.length; _js_idx679 += 1) {
            item = arr[_js_idx679];
            if (test(desiredItem, key(item))) {
                return item;
            };
        };
    };
    return null;
};
var removeIfNot = collect;
function minListElement(list) {
    var key = identity;
    var _js681 = arguments.length;
    for (var n680 = 1; n680 < _js681; n680 += 2) {
        switch (arguments[n680]) {
        case 'key':
            key = arguments[n680 + 1];
        };
    };
    if (key === undefined) {
        key = identity;
    };
    var m = null;
    for (var x = null, _js_idx682 = 0; _js_idx682 < list.length; _js_idx682 += 1) {
        x = list[_js_idx682];
        var n = key(x);
        if (null == m || n < m) {
            m = n;
        };
    };
    return m;
};
function every(fun) {
    var arrays = [];
    for (var i683 = 0; i683 < arguments.length - 1; i683 += 1) {
        arrays[i683] = arguments[i683 + 1];
    };
    var ithFromEachArg = function (i) {
        return arrays.map(function (arg) {
            return arg[i];
        });
    };
    var minLength = minListElement(arrays, 'key', length);
    for (var i = 0; i < minLength; i += 1) {
        if (!fun.apply(null, ithFromEachArg(i))) {
            return false;
        };
    };
    return true;
};
function some(fn, arr) {
    for (var item = null, _js_idx684 = 0; _js_idx684 < arr.length; _js_idx684 += 1) {
        item = arr[_js_idx684];
        var result = fn(item);
        if (result) {
            return result;
        };
    };
    return false;
};
function identity(i) {
    return i;
};
function find(item, sequence) {
    var key = identity;
    var test = equal;
    var _js686 = arguments.length;
    for (var n685 = 2; n685 < _js686; n685 += 2) {
        switch (arguments[n685]) {
        case 'key':
            key = arguments[n685 + 1];
            break;
        case 'test':
            test = arguments[n685 + 1];
        };
    };
    if (key === undefined) {
        key = identity;
    };
    if (test === undefined) {
        test = equal;
    };
    for (var member = null, _js_idx687 = 0; _js_idx687 < sequence.length; _js_idx687 += 1) {
        member = sequence[_js_idx687];
        if (test(item, key(member))) {
            return member;
        };
    };
    return null;
};
function pushOnEnd(obj, place) {
    return place.push(obj);
};
function remove(item, sequence) {
    var key = identity;
    var test = eql;
    var _js689 = arguments.length;
    for (var n688 = 2; n688 < _js689; n688 += 2) {
        switch (arguments[n688]) {
        case 'key':
            key = arguments[n688 + 1];
            break;
        case 'test':
            test = arguments[n688 + 1];
        };
    };
    if (key === undefined) {
        key = identity;
    };
    if (test === undefined) {
        test = eql;
    };
    var result = [];
    for (var member = null, _js_idx690 = 0; _js_idx690 < sequence.length; _js_idx690 += 1) {
        member = sequence[_js_idx690];
        if (!test(item, key(member))) {
            pushOnEnd(member, result);
        };
    };
    return result;
};
function keyObjectToArray(obj) {
    var result = [];
    if (obj) {
        for (var key in obj) {
            result.push(key);
            result.push(obj[key]);
        };
    };
    return result;
};
function objectValues(obj) {
    var result = [];
    for (var key in obj) {
        result.push(obj[key]);
    };
    return result;
};
function keysArrayFnToKeyObjectFn(fn, numNonKeywordArgs) {
    return function () {
        var args = [];
        for (var i691 = 0; i691 < arguments.length - 0; i691 += 1) {
            args[i691] = arguments[i691 + 0];
        };
        var transformedArgs = subseq(args, 0, numNonKeywordArgs).concat(keyObjectToArray(args[numNonKeywordArgs]));
        return fn.apply(this, transformedArgs);
    };
};
Array.prototype.map = Array.prototype.map !== undefined ? Array.prototype.map : function (fn) {
    var result = [];
    for (var item = null, _js_idx692 = 0; _js_idx692 < this.length; _js_idx692 += 1) {
        item = this[_js_idx692];
        result.push(fn(item));
    };
    return result;
};;
Array.prototype.indexOf = Array.prototype.indexOf !== undefined ? Array.prototype.indexOf : function (sought, fromIndex) {
    if (fromIndex === undefined) {
        fromIndex = 0;
    };
    var index = 0;
    for (var item = null, _js_idx693 = 0; _js_idx693 < this.length; _js_idx693 += 1) {
        item = this[_js_idx693];
        if (index >= fromIndex && item === sought) {
            return index;
        };
        ++index;
    };
    return -1;
};;
Array.prototype.filter = Array.prototype.filter !== undefined ? Array.prototype.filter : function (fun) {
    return collect(fun, this);
};;
Array.prototype.every = Array.prototype.every !== undefined ? Array.prototype.every : function (fun) {
    return every(fun, this);
};;
Array.prototype.some = Array.prototype.some !== undefined ? Array.prototype.some : function (fun) {
    return some(fun, this);
};;
function removeDuplicates(inArr, equalityLambda) {
    if (equalityLambda === undefined) {
        equalityLambda = eql;
    };
    var workingArray = inArr;
    var outArr = [];
    while (true) {
        if (0 == workingArray.length) {
            break;
        } else {
            var latestUniqueItem = workingArray[0];
            outArr.push(latestUniqueItem);
            workingArray = workingArray.filter(function (testItem) {
                return !equalityLambda(testItem, latestUniqueItem);
            });
        };
    };
    return outArr;
};
function roughSetDifference(x, y) {
    var h = {  };
    var result = [];
    for (var e = null, _js_idx694 = 0; _js_idx694 < x.length; _js_idx694 += 1) {
        e = x[_js_idx694];
        h[e] = e;
    };
    for (var e = null, _js_idx695 = 0; _js_idx695 < y.length; _js_idx695 += 1) {
        e = y[_js_idx695];
        delete h[e];
    };
    for (var k in h) {
        pushOnEnd(h[k], result);
    };
    return result;
};
function roughSetUnion(x, y) {
    var h = {  };
    var result = [];
    for (var e = null, _js_idx696 = 0; _js_idx696 < x.length; _js_idx696 += 1) {
        e = x[_js_idx696];
        h[e] = e;
    };
    for (var e = null, _js_idx697 = 0; _js_idx697 < y.length; _js_idx697 += 1) {
        e = y[_js_idx697];
        h[e] = e;
    };
    for (var k in h) {
        pushOnEnd(h[k], result);
    };
    return result;
};
function lexicographicCompare(a, b) {
    var strA = a.toLowerCase();
    var strB = b.toLowerCase();
    var rv = strA < strB ? -1 : (strA > strB ? 1 : 0);
    return rv;
};
function arrayp(obj) {
    return Array === obj.constructor;
};
function querySerializeValue(value) {
    if (typeof value === 'string') {
        return encodeURIComponent(value);
    } else if (arrayp(value)) {
        return lispyMap(querySerializeValue, value).join(',');
    } else {
        return value;
    };
};
function queryDecode(str) {
    var arrayp = null;
    var _js699 = arguments.length;
    for (var n698 = 1; n698 < _js699; n698 += 2) {
        switch (arguments[n698]) {
        case 'arrayp':
            arrayp = arguments[n698 + 1];
        };
    };
    if (arrayp === undefined) {
        arrayp = null;
    };
    if ('?' === str[0]) {
        str = str.substring(1);
    };
    var parts = str.split('&');
    var keyvals = lispyMap(function (x) {
        var split = x.split('=');
        var key = decodeURIComponent(split ? split[0] : x);
        var value = split[1] ? decodeURIComponent(split[1]) : null;
        return [key, value];
    }, parts);
    if (arrayp) {
        return keyvals;
    };
    var o = {  };
    for (var i = 0; i < keyvals.length; i += 1) {
        var key = keyvals[i][0];
        var val = keyvals[i][1];
        o[key] = val;
    };
    return o;
};
function querySerialize(arrOrHash) {
    var arr = arrOrHash;
    if (!arrayp(arrOrHash)) {
        arr = [];
        for (var key in arrOrHash) {
            var value = arrOrHash[key];
            arr.push(key);
            arr.push(value);
        };
    };
    var str = '';
    var i = 0;
    while (i < arr.length) {
        var key = arr[i];
        var value = arr[i + 1];
        str = str + encodeURIComponent(key) + '=' + querySerializeValue(value);
        if (arr.length - 2 !== i) {
            str += '&';
        };
        i += 2;
    };
    return str;
};
function addParametersToUrl(url, parameters) {
    var paramsEncoded = querySerialize(parameters);
    var whatIndex = url.indexOf('?');
    if (-1 === whatIndex) {
        return url + '?' + paramsEncoded;
    } else {
        if (url.length - 1 === whatIndex) {
            return url + paramsEncoded;
        } else {
            return url + '&' + paramsEncoded;
        };
    };
};
function ajaxRequest(url) {
    var onSuccess = null;
    var onFailure = null;
    var onLoading = null;
    var onLoaded = null;
    var onInteractive = null;
    var headers = null;
    var body = null;
    var method = 'get';
    var parameters = null;
    var _js701 = arguments.length;
    for (var n700 = 1; n700 < _js701; n700 += 2) {
        switch (arguments[n700]) {
        case 'on-success':
            onSuccess = arguments[n700 + 1];
            break;
        case 'on-failure':
            onFailure = arguments[n700 + 1];
            break;
        case 'on-loading':
            onLoading = arguments[n700 + 1];
            break;
        case 'on-loaded':
            onLoaded = arguments[n700 + 1];
            break;
        case 'on-interactive':
            onInteractive = arguments[n700 + 1];
            break;
        case 'headers':
            headers = arguments[n700 + 1];
            break;
        case 'body':
            body = arguments[n700 + 1];
            break;
        case 'method':
            method = arguments[n700 + 1];
            break;
        case 'parameters':
            parameters = arguments[n700 + 1];
        };
    };
    if (onSuccess === undefined) {
        onSuccess = null;
    };
    if (onFailure === undefined) {
        onFailure = null;
    };
    if (onLoading === undefined) {
        onLoading = null;
    };
    if (onLoaded === undefined) {
        onLoaded = null;
    };
    if (onInteractive === undefined) {
        onInteractive = null;
    };
    if (headers === undefined) {
        headers = null;
    };
    if (body === undefined) {
        body = null;
    };
    if (method === undefined) {
        method = 'get';
    };
    if (parameters === undefined) {
        parameters = null;
    };
    var readyState = null;
    var transport = window.XMLHttpRequest && new XMLHttpRequest() || window.ActiveXObject && (new ActiveXObject('Msxml2.XMLHTTP') || new ActiveXObject('Microsoft.XMLHTTP'));
    var method702 = method.toUpperCase();
    var onRscFn = function () {
        readyState = transport.readyState;
        if (4 === readyState) {
            return onSuccess(transport.responseText, transport);
        };
    };
    transport.onreadystatechange = onRscFn;
    if (parameters && 'GET' === method702) {
        url = addParametersToUrl(url, parameters);
    };
    if (parameters && !body && 'POST' === method702) {
        body = querySerialize(parameters);
    };
    transport.open(method702, url, true);
    if (headers) {
        for (var headerName in headers) {
            transport.setRequestHeader(headerName, headers[headerName]);
        };
    };
    return transport.send(body || null);
};
function objectToKeyargs(obj) {
    var arr = [];
    for (var key in obj) {
        arr.push(key);
        arr.push(obj[key]);
    };
    return arr;
};
function escapeHtml(str) {
    var div = document.createElement('div');
    var text = document.createTextNode(str);
    div.appendChild(text);
    return div.innerHTML;
};
function elemById(id) {
    var result = null;
    if (document.getElementById) {
        return document.getElementById(id);
    };
};
function removeElem(elem) {
    var parentElem = elem.parentNode;
    return parentElem.removeChild(elem);
};
function removeFromArray(arr, item) {
    var index = arr.indexOf(item);
    if (-1 !== index) {
        return arr.splice(index, 1);
    };
};
function copyArray(arr) {
    var result = [];
    for (var item = null, _js_idx703 = 0; _js_idx703 < arr.length; _js_idx703 += 1) {
        item = arr[_js_idx703];
        result.push(item);
    };
    return result;
};
function elemAddClass(elem, clz) {
    var oldStr = elem.className || '';
    return elem.className = '' === oldStr ? clz : oldStr + ' ' + clz;
};
function elemRemoveClass(elem, clz) {
    var classes = (elem.className || '').split(' ');
    return elem.className = remove(clz, classes).join(' ');
};
function elemVisiblewhat(elem) {
    return 'none' !== elem.style.display;
};
function elemHide(elem) {
    return elem.style.display = 'none';
};
function elemShow(elem, showwhat) {
    if (showwhat === undefined) {
        showwhat = true;
    };
    return elem.style.display = showwhat ? '' : 'none';
};
function elemWrap(elem, wrapper) {
    var parent = elem.parentNode;
    parent.replaceChild(wrapper, elem);
    return wrapper.appendChild(elem);
};
function calculateFramep() {
    try {
        return window.parent.frames[window.name] && parent.document.getElementsByTagName('frameset').length <= 0;
    } catch (e) {
        return true;
    };
};
function toplevelWindow(thisWindow, requirePermission) {
    if (thisWindow === undefined) {
        thisWindow = self;
    };
    if (requirePermission === undefined) {
        requirePermission = true;
    };
    var framep = calculateFramep();
    var topwin = framep ? parent : thisWindow;
    try {
        if (topwin.document.location.href) {
            return topwin;
        };
        return topwin;
    } catch (e) {
        if (requirePermission) {
            return thisWindow;
        } else {
            return topwin;
        };
    };
};
function calculatePageScroll() {
    var toplevel = null;
    var _js705 = arguments.length;
    for (var n704 = 0; n704 < _js705; n704 += 2) {
        switch (arguments[n704]) {
        case 'toplevel':
            toplevel = arguments[n704 + 1];
        };
    };
    if (toplevel === undefined) {
        toplevel = null;
    };
    var framep = calculateFramep();
    var doc = toplevel && framep ? parent.document : document;
    var win = toplevel && framep ? parent : self;
    var docElem = doc.documentElement;
    return [win.pageXOffset || doc.body.scrollLeft || docElem && docElem.scrollLeft || 0, win.pageYOffset || doc.body.scrollTop || docElem && docElem.scrollTop || 0];
};
function calculateMaxPageScroll() {
    var toplevel = null;
    var _js707 = arguments.length;
    for (var n706 = 0; n706 < _js707; n706 += 2) {
        switch (arguments[n706]) {
        case 'toplevel':
            toplevel = arguments[n706 + 1];
        };
    };
    if (toplevel === undefined) {
        toplevel = null;
    };
    var framep = calculateFramep();
    var doc = toplevel && framep ? parent.document : document;
    var win = toplevel && framep ? parent : self;
    var docElem = doc.documentElement;
    if (window.innerHeight && window.scrollMaxY) {
        return [window.scrollMaxX, (framep ? parent.innerHeight : self.innerHeight) + (framep ? parent.scrollMaxY : self.scrollMaxY)];
    } else if (doc.body.scrollHeight > doc.body.offsetHeight) {
        return [doc.body.scrollWidth, doc.body.scrollHeight];
    } else {
        var htmlElem = doc.getElementsByTagName('html').item(0);
        var ow = htmlElem.offsetWidth;
        var oh = htmlElem.offsetHeight;
        var bodyOw = doc.body.offsetWidth;
        var bodyOh = doc.body.offsetWidth;
        return [ow < bodyOw ? bodyOw : ow, oh < bodyOh ? bodyOh : oh];
    };
};
function calculateWindowSize() {
    var framep = calculateFramep();
    var relevantWindow = framep ? parent : self;
    var doc = framep ? parent.document : document;
    if (self.innerHeight) {
        return [relevantWindow.innerWidth, relevantWindow.innerHeight];
    } else if (document.documentElement && document.documentElement.clientHeight) {
        var docElem = doc.documentElement;
        return [doc.clientWidth, doc.clientHeight];
    } else if (document.body) {
        var htmlElem = doc.getElementsByTagName('html').item(0);
        var winWidth = htmlElem.clientWidth;
        var winHeight = htmlElem.clientHeight;
        return [0 === winWidth ? doc.body.clientWidth : winWidth, 0 === winHeight ? doc.body.clientHeight : winHeight];
    };
};
function calculatePageSize() {
    var scroll = calculateMaxPageScroll();
    var xScroll = scroll[0];
    var yScroll = scroll[1];
    var size = calculateWindowSize();
    var windowWidth = size[0];
    var windowHeight = size[1];
    var pageHeight = yScroll < windowHeight ? windowHeight : yScroll;
    var pageWidth = xScroll < windowWidth ? windowWidth : xScroll;
    return [pageWidth, pageHeight, windowWidth, windowHeight, xScroll, yScroll];
};
var TAGTABLE = { 'TABLE' : ['<table>', '</table>', 1], 'TBODY' : ['<table><tbody>', '</tbody></table>', 2], 'TR' : ['<table><tbody><tr>', '</tr></tbody></table>', 3], 'TD' : ['<table><tbody><tr><td>', '</td></tr></tbody></table>', 4], 'SELECT' : ['<select>', '</select>', 1] };
var ATTRIBUTETRANSLATIONS = { 'class' : 'className', 'for' : 'htmlFor' };
var INTERNETEXPLORER = window.attachEvent && !window.operate && true;
function insertionFn(location) {
    var result = null;
    switch (location) {
    case 'before':
        result = function (element, node) {
            return element.parentNode.insertBefore(node, element);
        };
        break;
    case 'after':
        result = function (element, node) {
            return element.parentNode.insertBefore(node, element.nextSibling);
        };
        break;
    case 'top':
        result = function (element, node) {
            return element.insertBefore(node, element.firstChild);
        };
        break;
    case 'bottom':
        result = function (element, node) {
            return element.appendChild(node);
        };
    };
    return result;
};
function writeAttributes(elem, attributes) {
    for (var attr in attributes) {
        var name = ATTRIBUTETRANSLATIONS[attr] || attr;
        var value = attributes[attr];
        if (false === value || null === value) {
            elem.removeAttributes(name);
        } else if (true === value) {
            elem.setAttribute(name, name);
        } else {
            elem.setAttribute(name, value);
        };
    };
    return elem;
};
function createElem(tagName, attributesObj) {
    if (attributesObj === undefined) {
        attributesObj = {  };
    };
    tagName = tagName.toLowerCase();
    if (INTERNETEXPLORER && attributesObj.name) {
        tagName = '<' + tagName + ' name="' + attributesObj.name + '">';
        delete attributesObj.name;
    };
    var elem = document.createElement(tagName);
    writeAttributes(elem, attributesObj);
    return elem;
};
function unescapeHtml(str) {
    var node = createElem('DIV');
    node.innerHTML = str;
    if (node.textContent) {
        return node.textContent;
    } else if (node.innerText) {
        return node.innerText;
    } else {
        return str;
    };
};
function htmlContentToDomNodes(htmlContent, tagName) {
    var div = createElem('div');
    var tag = TAGTABLE[tagName.toUpperCase()];
    if (tag) {
        div.innerHTML = tag[0] + htmlContent + tag[1];
        for (var i = 0; i < tag[2]; i += 1) {
            div = div.firstChild;
        };
    } else {
        div.innerHTML = htmlContent;
    };
    return toArray(div.childNodes);
};
function stringp(thing) {
    return 'string' === typeof thing;
};
function elemInsert(elem, content, location) {
    var insertFn = insertionFn(location);
    var insertElemTagName = ('before' == location || 'after' == location ? elem.parentNode : elem).tagName;
    var contentNodes = typeof content === 'string' ? htmlContentToDomNodes(content, insertElemTagName) : [content];
    if ('top' === location || 'after' === location) {
        contentNodes.reverse();
    };
    return lispyMap(function (contentNode) {
        return insertFn(elem, contentNode);
    }, contentNodes);
};
function reEscape(text) {
    return text.replace(/(\/|\.|\*|\+|\?|\||\(|\)|\[|\]|\{|\}|\\)/g, '\\$1');
};
function join(strings, text) {
    return strings.join(text);
};
function nreverse(arr) {
    return arr.reverse();
};
function reverseInPlace(arr) {
    return arr.reverse();
};
function reverse(arr) {
    return copyArray(arr).reverse();
};
function elemOffset(elem) {
    var x = 0;
    var y = 0;
    while (null != elem) {
        x += elem.offsetLeft;
        y += elem.offsetTop;
        elem = elem.offsetParent;
    };
    return [x, y];
};
function scrollToElem(elem) {
    var pos = elemOffset(elem);
    return window.scrollTo(pos[0], pos[1]);
};

;
var MAINSVG = null;
null;
null;
var widgetobj708 = { 'options' : {  } };
widgetobj708['destroy'] = function () {
    return console.log('destroyed it!');
};
widgetobj708['_image'] = function (src) {
    console.log('drawing image in %o: %o', this.element.data('svg'), src);
    this.element.data('svg').image(0, 0, '100%', '100%', src, { 'preserveAspectRatio' : 'xMinYMin' });
    return console.log('drew image');
};
widgetobj708['_create'] = function () {
    var svg709 = this.element.svg();
    this.element.data('svg', svg709);
    console.log('hello?');
    return this._image('content/example.jpg');
};
$['widget']('ui.svannotate', widgetobj708);;
$(function () {
    return $('#cont').svannotate();
});

