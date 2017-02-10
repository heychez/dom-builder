/*!
 * dom-builder.js - DOMBuilder JS v1.0.0
 * ---------------------------------------------------------
 * NPM:    npmjs.com/package/dom-builder
 * GitHub: github.com/heychez/dom-builder
 * ---------------------------------------------------------
 * Author: Roberto C. Cuadros Loayza
 * Email:  roberto.cclo@gmail.com
 * Www:    blup.space
 * GitHub: github.com/heychez
 * ---------------------------------------------------------
 * 19 JUL 2016
 */


var DOMBuilder = function () {
	this.SELF_CLOSING_TAGS = ['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']
	
	this.body = '';
	this.tags = [];
};

DOMBuilder.prototype.toString = function () {
	return this.body;
};

DOMBuilder.prototype.parse = function (document) {
	var wrapper = document.createElement('div');
	wrapper.innerHTML = this.body;

	return wrapper.firstChild;
};

DOMBuilder.prototype.ele = function (tag, arg2, arg3) {
	this.body = this.body.concat('<'+tag);

	if (typeof arg2 == 'object') {
		for (let attr in arg2) {
            if(attr === 'data'){
                for(let dataAttr of Object.keys(arg2.data)){
                    this.body = this.body.concat(' data-'+dataAttr+'='+'"'+arg2.data[dataAttr]+'"');
                }
            }
            else {
                this.body = this.body.concat(' '+attr+'='+'"'+arg2[attr]+'"');
            }
        }
	}

	if (this.SELF_CLOSING_TAGS.indexOf(tag) == -1) {
		this.body = this.body.concat('>');

		if (typeof arg2 == 'string') {
			this.body = this.body.concat(arg2).concat('</'+tag+'>');
		} else if (typeof arg3 == 'string') {
			this.body = this.body.concat(arg3).concat('</'+tag+'>');
		} else {
			this.tags.push(tag);
		}

	} else {
		this.body = this.body.concat('/>');
	}
	
	return this;
};

DOMBuilder.prototype.val = function (text) {
	this.body = this.body.concat(text);
	return this;
};

DOMBuilder.prototype.cl = function () {
	this.body = this.body.concat('</'+this.tags.pop()+'>');
	return this;
};

if ( typeof module === "object" && typeof module.exports === "object" ) {
	module.exports = DOMBuilder;
}