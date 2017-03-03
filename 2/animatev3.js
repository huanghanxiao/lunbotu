function getStyle(element, attr) {
    //var res = 0;
    //if(element.currentStyle){
    //    res = element.currentStyle[attr];
    //}else {
    //    res =  window.getComputedStyle(element,null)[attr];
    //}
    //return res;
    return element.currentStyle ? element.currentStyle[attr] : window.getComputedStyle(element, null)[attr] || 0;
}

function animatev3(element, json) {
    clearInterval(element.timer);
    element.timer = setInterval(function () {
        for (var key in json) {
            //在这里面对每一个属性进行动画
            //判断传入的属性是什么，如果是opacity或者z-index那就按照他们的逻辑执行
            var target = json[key];
            if (key == "opacity") {
                //获取当前值
                var current = Number(getStyle(element, "opacity"));
                //因为小数运算容易产生误差，要变成整数运算
                var step = (target - current) / 10 * 100;
                //判断方向
                step = target - current > 0 ? Math.ceil(step) : Math.floor(step);
                //累加
                current += step / 100;
                //重新设定
                element.style.opacity = current;
            } else if (key == "zIndex") {
                //z-index的逻辑是最简单的，直接让他变成target就好了
                //element.style["zIndex"] = target;
                element.style.zIndex = target;
                current = target;
            } else {
                /*********从这里往下都是以px为单位的属性的动画逻辑**********/
                //获取属性的当前值
                var current = parseInt(getStyle(element, key)) || 0;
//            缓动第一步：
//                让步长越来越小
                var step = (target - current) / 10;
                //判断方向
//                要注意，步长要进行取整，不然可能会到不了目标位置
//                方向决定要往上还是往下取整
                step = target - current > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                //要根据想修改的属性来设置样式
                element.style[key] = current + "px";//
            }
            //停下来的逻辑
//            因为在这里我们的target和current早晚会相等，就没必要高这么麻烦的判断
            if (target == current) {
                clearInterval(element.timer);
            }
        }
    }, 20);
}


/**
 * v3的问题
 *  当某一个属性达到目标值的时候，就停止动画
 *  解决办法：
 *      全部满足才停止
 *          多个条同时成立 flag
 */
function animatev4(element, json) {
    clearInterval(element.timer);
    //重新记录一下总共传入多少个属性
    element.count = 0;
    for (var key in json) {
        element.count++;
    }
    console.log(element.count);
    element.timer = setInterval(function () {
        //在外面设定一个条件：
        //判断是否所有的都属性都到达目标值了
        var flag = 0;
        for (var key in json) {
            //在这里面对每一个属性进行动画
            //判断传入的属性是什么，如果是opacity或者z-index那就按照他们的逻辑执行
            var target = json[key];
            if (key == "opacity") {
                //获取当前值
                var current = Number(getStyle(element, "opacity"));
                //因为小数运算容易产生误差，要变成整数运算
                var step = (target - current) / 10 * 100;
                //判断方向
                step = target - current > 0 ? Math.ceil(step) : Math.floor(step);
                //累加
                current += step / 100;
                //重新设定
                element.style.opacity = current;
            } else if (key == "zIndex") {
                //z-index的逻辑是最简单的，直接让他变成target就好了
                //element.style["zIndex"] = target;
                element.style.zIndex = target;
                current = target;
            } else {
                /*********从这里往下都是以px为单位的属性的动画逻辑**********/
                //获取属性的当前值
                var current = parseInt(getStyle(element, key)) || 0;
//            缓动第一步：
//                让步长越来越小
                var step = (target - current) / 10;
                //判断方向
//                要注意，步长要进行取整，不然可能会到不了目标位置
//                方向决定要往上还是往下取整
                step = target - current > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                //要根据想修改的属性来设置样式
                element.style[key] = current + "px";//
            }
            //停下来的逻辑
//            因为在这里我们的target和current早晚会相等，就没必要高这么麻烦的判断
            if (target == current) {
                flag += 1;
                //clearInterval(element.timer);
            }
        }
        //判断是否都完成了
        if (flag == element.count) {
            clearInterval(element.timer);
        }
    }, 20);
}


function animatev5(element, json) {
    clearInterval(element.timer);
    //重新记录一下总共传入多少个属性
    element.timer = setInterval(function () {
        //在外面设定一个条件：
        //判断是否所有的都属性都到达目标值了
        var flag = true;
        for (var key in json) {
            //在这里面对每一个属性进行动画
            //判断传入的属性是什么，如果是opacity或者z-index那就按照他们的逻辑执行
            var target = json[key];
            if (key == "opacity") {
                //获取当前值
                var current = Number(getStyle(element, "opacity"));
                //因为小数运算容易产生误差，要变成整数运算
                var step = (target - current) / 10 * 100;
                //判断方向
                step = target - current > 0 ? Math.ceil(step) : Math.floor(step);
                //累加
                current += step / 100;
                //重新设定
                element.style.opacity = current;
            } else if (key == "zIndex") {
                //z-index的逻辑是最简单的，直接让他变成target就好了
                //element.style["zIndex"] = target;
                element.style.zIndex = target;
                current = target;
            } else {
                /*********从这里往下都是以px为单位的属性的动画逻辑**********/
                //获取属性的当前值
                var current = parseInt(getStyle(element, key)) || 0;
//            缓动第一步：
//                让步长越来越小
                var step = (target - current) / 10;
                //判断方向
//                要注意，步长要进行取整，不然可能会到不了目标位置
//                方向决定要往上还是往下取整
                step = target - current > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                //要根据想修改的属性来设置样式
                element.style[key] = current + "px";//
            }
            //停下来的逻辑
//            因为在这里我们的target和current早晚会相等，就没必要高这么麻烦的判断
            if (target != current) {
                flag = false;
                //clearInterval(element.timer);
            }
        }
        //判断是否都完成了
        if (flag) {
            clearInterval(element.timer);
        }
    }, 20);
}


//希望在动画执行完毕之后，可以做一些事情
//做事情 ---  函数
//希望函数在动画完成之后执行
function animatev6(element, json, fn) {
    clearInterval(element.timer);
    //重新记录一下总共传入多少个属性
    element.timer = setInterval(function () {
        //在外面设定一个条件：
        //判断是否所有的都属性都到达目标值了
        var flag = true;
        for (var key in json) {
            //在这里面对每一个属性进行动画
            //判断传入的属性是什么，如果是opacity或者z-index那就按照他们的逻辑执行
            var target = json[key];
            if (key == "opacity") {
                //获取当前值
                var current = Number(getStyle(element, "opacity"));
                //因为小数运算容易产生误差，要变成整数运算
                var step = (target - current) / 10 * 100;
                //判断方向
                step = target - current > 0 ? Math.ceil(step) : Math.floor(step);
                //累加
                current += step / 100;
                //重新设定
                element.style.opacity = current;
            } else if (key == "zIndex") {
                //z-index的逻辑是最简单的，直接让他变成target就好了
                //element.style["zIndex"] = target;
                element.style.zIndex = target;
                current = target;
            } else {
                /*********从这里往下都是以px为单位的属性的动画逻辑**********/
                //获取属性的当前值
                var current = parseInt(getStyle(element, key)) || 0;
//            缓动第一步：
//                让步长越来越小
                var step = (target - current) / 10;
                //判断方向
//                要注意，步长要进行取整，不然可能会到不了目标位置
//                方向决定要往上还是往下取整
                step = target - current > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                //要根据想修改的属性来设置样式
                element.style[key] = current + "px";//
            }
            //停下来的逻辑
//            因为在这里我们的target和current早晚会相等，就没必要高这么麻烦的判断
            if (target != current) {
                flag = false;
                //clearInterval(element.timer);
            }
        }
        //判断是否都完成了
        if (flag) {
            clearInterval(element.timer);
            //if (typeof fn == "function") {
            //    fn();
            //}
            (typeof fn =="function") && fn();
        }
    }, 20);
}
