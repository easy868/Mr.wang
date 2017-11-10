/*
* @Author: jinlong.wei
* @Date:   2015-08-21 16:32:18
* @Last Modified by:   jinlong.wei
* @Last Modified time: 2015-09-11 16:51:42

	var tDom = {
        elem: $('#J-carttime'),
        startTime: res.data.clear_time,
        unitFormat:{
            "min": true,
            "sec": true
        },
        timeStamp: {
            "min": ':',
            "sec": ''
        },
        action: 'defined',
        callback: true,
        lastTime : 300, //剩余5分钟时调用lastTimeCallBack
        lastTimeCallBack : function(){}, //剩余lastTime时该方法会被调用，且仅调用一次
        callbackFunction: function(){
        	This.setState({
        		cart : {}
        	});
        }
    };
    new countdown(tDom);

*/

'use strict';

function countdown(digit, opt) {
    var settings = {
            startTime: 0,
            endTime: 0,
            nowTime: 0,
            milliSec: false,
            interval: 1000,
            container: null,
            zeroDigit: true,
            display: true,
            unitFormat: {
                "day": false,
                "hour": false,
                "min": true,
                "sec": true
            },
            unitClass: {
                "day": '',
                "hour": '',
                "min": '',
                "sec": ''
            },
            timeStamp: {
                "day": '天',
                "hour": '时',
                "min": '分',
                "sec": '秒'
            },
            timeFormat: true,
            message: '',
            startTips: '',
            endTips: '',
            stopTips: '',
            /*ignore start*/
            block: $('<span></span>'),
            /*ignore end*/
            action: '',
            callback: false,
            callbackFunction: null,
            lastTime: 300,
            //剩下多少秒时进行提示
            lastTimeCallBack: null //剩余lastTime后，将调用该函数一次
        }
        ,
        time = this
        ,
        timer = null
        ,
        options = {};
    (typeof arguments[0] == 'object' || typeof arguments[1] == 'object') && (options = $.extend(options, (typeof arguments[0] == 'object' ? arguments[0] : arguments[1])));
    var opts = $.extend(true, {}, settings, options)
        ,
        daySec = 24 * 60 * 60
        ,
        hourSec = 60 * 60
        ,
        minSec = 60;
    time.model = opts.elem;
    time.init = function () {
        var diffSecs = this.setCountDown();
        opts.container != null ? time.container = time.model.find(opts.container) : time.container = time.model;
        (diffSecs.startTime && diffSecs.startTime > 0) && (function doCountDown() {
            var word, sec, times = {};

            sec = diffSecs.nowTime < diffSecs.startTime ? diffSecs.startTime - (diffSecs.nowTime = (diffSecs.nowTime === Math.round(new Date().getTime() / 1000)) ? diffSecs.nowTime : Math.round(new Date().getTime() / 1000)) : diffSecs.endTime - diffSecs.nowTime;
            time.container.html('');
            for (var i in opts.unitFormat) {
                (i == 'day' && opts.unitFormat[i]) && (times.day = opts.display && getDays(sec));
                (i == 'hour' && opts.unitFormat[i]) && (times.hour = opts.display && getHours(sec));
                (i == 'min' && opts.unitFormat[i]) && (times.min = getMinutes(sec));
                (i == 'sec' && opts.unitFormat[i]) && (times.sec = getSeconds(sec));
                (opts.milliSec) && (i == 'msec' && opts.unitFormat[i]) && (times.msec = getMillisecond(sec));
            }
            ;
            if (diffSecs.nowTime < diffSecs.startTime) {
                (opts.startTips) && (word = opts.startTips);
            } else {
                if (diffSecs.endTime >= diffSecs.nowTime) {
                    (opts.endTips) && (word = opts.endTips);
                } else {
                    if (opts.stopTips) {
                        word = opts.stopTips;
                        time.container.html(word);
                    } else {
                        switch (opts.action) {
                            case "defined":
                                (opts.callback && typeof opts.callbackFunction == 'function') && opts.callbackFunction.call(time.container);
                                break;
                            default:
                                for (var i in times) {
                                    times[i] = '00';
                                    opts.block.clone().addClass(opts.unitClass[i]).html(times[i]).appendTo(time.container);
                                    opts.timeStamp && opts.block.clone().text(opts.timeStamp[i]).appendTo(time.container);
                                }
                        }
                    }
                    ;
                    clearTimeout(timer);
                    return false;
                }
            }
            ;
            time.container.html(word);
            if (opts.timeFormat) {
                for (var i in times) {
                    if ((i == 'day' && times[i] == '00') ||
                        (i == 'hour' && times[i] == '00' && times.day == '00')) {
                        continue;
                    }
                    if (opts.doubleBlock) {
                        if (i == 'msec') {
                            opts.block.clone().addClass(opts.unitClass[i]).html(times[i]).appendTo(time.container);
                        } else {
                            times[i] += '';
                            opts.block.clone().addClass(opts.unitClass[i]).html(times[i].charAt(0)).appendTo(time.container);
                            opts.block.clone().addClass(opts.unitClass[i]).html(times[i].charAt(1)).appendTo(time.container);
                        }
                    } else {
                        opts.block.clone().addClass(opts.unitClass[i]).html(times[i]).appendTo(time.container);
                    }
                    (opts.timeStamp) && opts.block.clone().text(opts.timeStamp[i]).appendTo(time.container);
                }
            } else {
                //处理js的精度问题，当不是整数时，保留一位小数
                if (parseInt(sec) != sec && opts.interval < 1000) {
                    sec = sec.toFixed(1);
                } else {
                    sec = Math.floor(sec);
                }

                opts.block.clone().addClass(opts.unitClass['sec']).html(sec).appendTo(time.container);
                (opts.timeStamp) && opts.block.clone().text(opts.timeStamp['sec']).appendTo(time.container);
                (opts.message != '') && opts.block.clone().text(opts.message).appendTo(time.container);
            }
            ;

            //剩余最后lastTime时调用回调
            opts.lastTimeCallBack && (Math.floor(sec) === opts.lastTime) && opts.lastTimeCallBack();

            diffSecs.nowTime = new Date().getTime() / 1000;
            timer = setTimeout(doCountDown, opts.interval);
        })();
    }
    ;
    time.setCountDown = function () {
        var diffSecs = {};
        diffSecs.startTime = isNaN(opts.startTime) ? Date.parse(opts.startTime.replace(/-/g, '/')) / 1000 : Math.round(opts.startTime);
        diffSecs.endTime = isNaN(opts.endTime) ? Date.parse(opts.endTime.replace(/-/g, '/')) / 1000 : Math.round(opts.endTime);
        diffSecs.nowTime = opts.nowTime === 0 ? Math.round(new Date().getTime() / 1000) : Math.round(opts.nowTime);
        diffSecs.startTime && !opts.endTime && !opts.nowTime && (diffSecs.endTime = diffSecs.startTime + diffSecs.nowTime);
        return diffSecs;
    }
    ;

    time.clearCountdown = function () {
        clearTimeout(timer || 0);
    }
    ;

    var addZero = function (isAdd, time) {
            if (!isAdd)
                return time;
            else
                return time < 10 ? time = '0' + time : time;
        }
        ,
        getDays = function (sec) {
            var days = sec / daySec;
            return addZero(opts.zeroDigit, Math.floor(days));
        }
        ,
        getHours = function (sec) {
            var hours = sec / hourSec;
            hours %= 24;
            return addZero(opts.zeroDigit, Math.floor(hours));
        }
        ,
        getMinutes = function (sec) {
            var minutes = sec / minSec % 60;
            return addZero(opts.zeroDigit, Math.floor(minutes));
        }
        ,
        getSeconds = function (sec) {
            var seconds = sec % 60;
            return addZero(opts.zeroDigit, Math.floor(seconds));
        }
        ,
        getMillisecond = function (sec) {
            var milseconds = (sec * 1000 / 100) % 10;
            return Math.floor(milseconds);
        }
    ;
    return time.init();
};


module.exports = countdown;


// WEBPACK FOOTER //
// ./src/component/global/countdown/js/countdown.js
