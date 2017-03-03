
function $id(id) {
    return document.getElementById(id);
};

/**
 * ��������
 * @param element Ҫ�ƶ���Ԫ��
 * @param target    Ŀ��λ��
 */
function animate(element,target) {
    clearInterval(element.timer);
    var step = 10;
    element.timer = setInterval(function () {
        var currentLeft = element.offsetLeft;
        var temp= currentLeft < target ? step : -step;
        currentLeft += temp;
        if (Math.abs(target - currentLeft) < Math.abs(step)) {
            clearInterval(element.timer);
            element.style.left = target + "px";
            //return;
        }
        element.style.left = currentLeft + "px";
    }, 20);
}