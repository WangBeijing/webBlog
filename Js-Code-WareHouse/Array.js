/**
 * @desc 判断两个数组是否相等
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @return {Boolean}
 */
function arrayEqual(arr1,arr2){
    if( arr1 === arr2) return true;
    if( arr1.length != arr2.length) return false;
    for(var i = 0; i < arr1.length ; i++){
        if( arr1[i] !== arr2[i] ) return false;
    }
    return false;
}

Class
1.addClass
/**
 * 
 * @desc 为元素添加class
 * @param {HTMLElement ele}
 * @param {String} cls
 */
var hasClass = require('./hasClass');
function addClass (ele,cls) {
    if(!hasClass (ele, cls) ){
        ele.className += ''+cls;
    }
}
2.hasClass
/**
 * @desc 判断元素是否有某个class
 * @param {HTMLElement} ele
 * @param {String} cls
 * @return {Boolean}
 */
function hasClass (ele,cls){
    return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(ele.className);
}


3.removeClass
/**
 * @desc 为元素移除class
 * @param {HTMLElement} els
 * @param {String} cls
 */
var hasClass = require('./hasClass');
function removeClass (ele,cls){
    if(hasClass(ele,cls)){
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg,'');
    }
}