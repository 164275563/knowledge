// 跨浏览器的事件对象、属性、方法,P354+360
let EventUtil = {
  addHandler: (ele, type, handler) => { //操作的元素，事件名称，处理函数
    if(ele.addEventListener) ele.addEventListener(type, handler, false); //DOM2级，false表在冒泡阶段处理
    else if(ele.attachEvent) ele.attachEvent("on" + type, handler);//IE
    else ele[on + 'type'] = handler;//DOM0级
  },
  removeHandler: (ele, type, handler) => { 
    if(ele.removeEventListener) ele.removeEventListener(type, handler, false);
    else if(ele.detachEvent) ele.detachEvent("on" + type, handler);
    else ele[on + 'type'] = null;
  },
  getEvent: (event) => event || window.event,
  getTarget: (event) => event.target || event.srcElement,
  preventDefault: (event) => {
    if(event.preventDefault) event.preventDefault();
    else event.returnValue = false;
  },
  stopPropagation: (event) => {
    if(event.stopPropagation) event.stopPropagation;
    else event.calcelBubble = true;
  }
}

// 表单元素的焦点获取，失去，元素值的改变事件,P419
let 