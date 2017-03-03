
function $id(id) {
    return document.getElementById(id);
};

/**
 *
 * @param element Ҫ�ƶ���Ԫ��
 * @param target Ҫ�ƶ�����λ��
 */
function animate(element,target) {
    //1 �����Ԫ�����Ѿ����ڵļ�ʱ��
    clearInterval(element.timer);
    //����ÿ���ƶ��Ĳ���
    var step = 9;
    //�������ö�ʱ��
    element.timer = setInterval(function(){
        //��ȡ��ǰλ��
        var currentLeft = element.offsetLeft;//offsetLeft��������ȥ��Ԥϰ�Ľ���
        //�жϷ��������ǰ��λ����Ŀ��λ�õ���ߣ����������򣬷�֮�Ǹ�����
        var temp = currentLeft < target ? step : - step;
        //�����µĵ�λ��
        currentLeft += temp;
        //�ж��Ƿ񵽴�Ŀ��λ��
        //��Ŀ��λ��-��ǰλ�õľ���ֵ�Ȳ���ҪС��ʱ��������Ϊ����Ŀ��λ����
        if (  Math.abs(target - currentLeft) < Math.abs(step) ){
            //�����ʱ��
            clearInterval(element.timer);
            element.style.left = target + "px";
        }else {
            element.style.left = currentLeft + "px";
        }
    },20);
}

/**
 * ��ȡԪ�ؼ��������ʽ�ļ���д��
 * @param element   Ŀ��Ԫ��
 * @param attr  ��Ҫ��ȡ������
 * @returns {*} ��Ӧ���Եĵ�ǰֵ
 */
function getStyle(element,attr) {
    return element.currentStyle ? element.currentStyle[attr] : window.getComputedStyle(element,null)[attr];
}