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
            //���������ÿһ�����Խ��ж���
            //�жϴ����������ʲô�������opacity����z-index�ǾͰ������ǵ��߼�ִ��
            var target = json[key];
            if (key == "opacity") {
                //��ȡ��ǰֵ
                var current = Number(getStyle(element, "opacity"));
                //��ΪС���������ײ�����Ҫ�����������
                var step = (target - current) / 10 * 100;
                //�жϷ���
                step = target - current > 0 ? Math.ceil(step) : Math.floor(step);
                //�ۼ�
                current += step / 100;
                //�����趨
                element.style.opacity = current;
            } else if (key == "zIndex") {
                //z-index���߼�����򵥵ģ�ֱ���������target�ͺ���
                //element.style["zIndex"] = target;
                element.style.zIndex = target;
                current = target;
            } else {
                /*********���������¶�����pxΪ��λ�����ԵĶ����߼�**********/
                //��ȡ���Եĵ�ǰֵ
                var current = parseInt(getStyle(element, key)) || 0;
//            ������һ����
//                �ò���Խ��ԽС
                var step = (target - current) / 10;
                //�жϷ���
//                Ҫע�⣬����Ҫ����ȡ������Ȼ���ܻᵽ����Ŀ��λ��
//                �������Ҫ���ϻ�������ȡ��
                step = target - current > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                //Ҫ�������޸ĵ�������������ʽ
                element.style[key] = current + "px";//
            }
            //ͣ�������߼�
//            ��Ϊ���������ǵ�target��current�������ȣ���û��Ҫ����ô�鷳���ж�
            if (target == current) {
                clearInterval(element.timer);
            }
        }
    }, 20);
}


/**
 * v3������
 *  ��ĳһ�����ԴﵽĿ��ֵ��ʱ�򣬾�ֹͣ����
 *  ����취��
 *      ȫ�������ֹͣ
 *          �����ͬʱ���� flag
 */
function animatev4(element, json) {
    clearInterval(element.timer);
    //���¼�¼һ���ܹ�������ٸ�����
    element.count = 0;
    for (var key in json) {
        element.count++;
    }
    console.log(element.count);
    element.timer = setInterval(function () {
        //�������趨һ��������
        //�ж��Ƿ����еĶ����Զ�����Ŀ��ֵ��
        var flag = 0;
        for (var key in json) {
            //���������ÿһ�����Խ��ж���
            //�жϴ����������ʲô�������opacity����z-index�ǾͰ������ǵ��߼�ִ��
            var target = json[key];
            if (key == "opacity") {
                //��ȡ��ǰֵ
                var current = Number(getStyle(element, "opacity"));
                //��ΪС���������ײ�����Ҫ�����������
                var step = (target - current) / 10 * 100;
                //�жϷ���
                step = target - current > 0 ? Math.ceil(step) : Math.floor(step);
                //�ۼ�
                current += step / 100;
                //�����趨
                element.style.opacity = current;
            } else if (key == "zIndex") {
                //z-index���߼�����򵥵ģ�ֱ���������target�ͺ���
                //element.style["zIndex"] = target;
                element.style.zIndex = target;
                current = target;
            } else {
                /*********���������¶�����pxΪ��λ�����ԵĶ����߼�**********/
                //��ȡ���Եĵ�ǰֵ
                var current = parseInt(getStyle(element, key)) || 0;
//            ������һ����
//                �ò���Խ��ԽС
                var step = (target - current) / 10;
                //�жϷ���
//                Ҫע�⣬����Ҫ����ȡ������Ȼ���ܻᵽ����Ŀ��λ��
//                �������Ҫ���ϻ�������ȡ��
                step = target - current > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                //Ҫ�������޸ĵ�������������ʽ
                element.style[key] = current + "px";//
            }
            //ͣ�������߼�
//            ��Ϊ���������ǵ�target��current�������ȣ���û��Ҫ����ô�鷳���ж�
            if (target == current) {
                flag += 1;
                //clearInterval(element.timer);
            }
        }
        //�ж��Ƿ������
        if (flag == element.count) {
            clearInterval(element.timer);
        }
    }, 20);
}


function animatev5(element, json) {
    clearInterval(element.timer);
    //���¼�¼һ���ܹ�������ٸ�����
    element.timer = setInterval(function () {
        //�������趨һ��������
        //�ж��Ƿ����еĶ����Զ�����Ŀ��ֵ��
        var flag = true;
        for (var key in json) {
            //���������ÿһ�����Խ��ж���
            //�жϴ����������ʲô�������opacity����z-index�ǾͰ������ǵ��߼�ִ��
            var target = json[key];
            if (key == "opacity") {
                //��ȡ��ǰֵ
                var current = Number(getStyle(element, "opacity"));
                //��ΪС���������ײ�����Ҫ�����������
                var step = (target - current) / 10 * 100;
                //�жϷ���
                step = target - current > 0 ? Math.ceil(step) : Math.floor(step);
                //�ۼ�
                current += step / 100;
                //�����趨
                element.style.opacity = current;
            } else if (key == "zIndex") {
                //z-index���߼�����򵥵ģ�ֱ���������target�ͺ���
                //element.style["zIndex"] = target;
                element.style.zIndex = target;
                current = target;
            } else {
                /*********���������¶�����pxΪ��λ�����ԵĶ����߼�**********/
                //��ȡ���Եĵ�ǰֵ
                var current = parseInt(getStyle(element, key)) || 0;
//            ������һ����
//                �ò���Խ��ԽС
                var step = (target - current) / 10;
                //�жϷ���
//                Ҫע�⣬����Ҫ����ȡ������Ȼ���ܻᵽ����Ŀ��λ��
//                �������Ҫ���ϻ�������ȡ��
                step = target - current > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                //Ҫ�������޸ĵ�������������ʽ
                element.style[key] = current + "px";//
            }
            //ͣ�������߼�
//            ��Ϊ���������ǵ�target��current�������ȣ���û��Ҫ����ô�鷳���ж�
            if (target != current) {
                flag = false;
                //clearInterval(element.timer);
            }
        }
        //�ж��Ƿ������
        if (flag) {
            clearInterval(element.timer);
        }
    }, 20);
}


//ϣ���ڶ���ִ�����֮�󣬿�����һЩ����
//������ ---  ����
//ϣ�������ڶ������֮��ִ��
function animatev6(element, json, fn) {
    clearInterval(element.timer);
    //���¼�¼һ���ܹ�������ٸ�����
    element.timer = setInterval(function () {
        //�������趨һ��������
        //�ж��Ƿ����еĶ����Զ�����Ŀ��ֵ��
        var flag = true;
        for (var key in json) {
            //���������ÿһ�����Խ��ж���
            //�жϴ����������ʲô�������opacity����z-index�ǾͰ������ǵ��߼�ִ��
            var target = json[key];
            if (key == "opacity") {
                //��ȡ��ǰֵ
                var current = Number(getStyle(element, "opacity"));
                //��ΪС���������ײ�����Ҫ�����������
                var step = (target - current) / 10 * 100;
                //�жϷ���
                step = target - current > 0 ? Math.ceil(step) : Math.floor(step);
                //�ۼ�
                current += step / 100;
                //�����趨
                element.style.opacity = current;
            } else if (key == "zIndex") {
                //z-index���߼�����򵥵ģ�ֱ���������target�ͺ���
                //element.style["zIndex"] = target;
                element.style.zIndex = target;
                current = target;
            } else {
                /*********���������¶�����pxΪ��λ�����ԵĶ����߼�**********/
                //��ȡ���Եĵ�ǰֵ
                var current = parseInt(getStyle(element, key)) || 0;
//            ������һ����
//                �ò���Խ��ԽС
                var step = (target - current) / 10;
                //�жϷ���
//                Ҫע�⣬����Ҫ����ȡ������Ȼ���ܻᵽ����Ŀ��λ��
//                �������Ҫ���ϻ�������ȡ��
                step = target - current > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                //Ҫ�������޸ĵ�������������ʽ
                element.style[key] = current + "px";//
            }
            //ͣ�������߼�
//            ��Ϊ���������ǵ�target��current�������ȣ���û��Ҫ����ô�鷳���ж�
            if (target != current) {
                flag = false;
                //clearInterval(element.timer);
            }
        }
        //�ж��Ƿ������
        if (flag) {
            clearInterval(element.timer);
            //if (typeof fn == "function") {
            //    fn();
            //}
            (typeof fn =="function") && fn();
        }
    }, 20);
}
