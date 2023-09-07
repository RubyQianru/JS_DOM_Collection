function move(box, attr, target, speed, callback){
    clearInterval(box.timer);
    
    //判断speed正负值
    //如果从0向800移动，speed为正
    var current = parseInt(getComputedStyle(box, null)[attr]); //parseInt把合法数字取出来
    if(current>target){
        speed = -speed;
    }
    //向执行动画的对象中添加一个timer属性，用来保存它自己的定时器标识
    box.timer = setInterval(function(){
        //获取box1原来的值
        var oldValue = parseInt(getComputedStyle(box, null)[attr]); //parseInt把合法数字取出来
        var newValue = oldValue + speed;
        box.style[attr] = newValue + "px";
        if(speed<0 && newValue<target || speed>0 && newValue>target){
            newValue = target;
        }
        if(newValue == target){
            clearInterval(box.timer);
            //动画执行我完毕，自行回调函数
            callback && callback();//如果传了回调函数则执行，如果没有则不执行
        }
    }, 30);
};