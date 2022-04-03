;!function (window, undefined) {
    "use strict";

    var ready = {
        config: {
            shade: 0.3,
            title: '&#x4FE1;&#x606F;',
            zIndex: 19891014
        }
    };

    var layer = {
        version: '1.0.0',
        index: (window.layer && window.layer.version) ? 100000 : 0,
        ready: function(callback){
            // var cssname = 'layer'
            //     ,ver = ''
            //     ,path = (isLayui ? 'modules/layer/' : 'theme/') + 'default/layer.css?v='+ layer.vesion + ver;
            //     isLayui ? layui.addcss(path, callback, cssname) : ready.link(path, callback, cssname);

            return this;
        }
    };

    var win = $(window);
    var doms = [
        'layui-layer',
        '.layui-layer-title',
        '.layui-layer-main',
        '.layui-layer-dialog',
        'layui-layer-iframe',
        'layui-layer-content',
        'layui-layer-btn',
        'layui-layer-close'
    ];

    doms.html = $('html');
    doms.body = $('body');
    doms.SHADE = 'layui-layer-shade';
    doms.MOVE = 'layui-layer-move';

    var Class = function (options) {
        var _this = this;
        var creat = function() {
            _this.creat();
        };

        _this.index = ++layer.index;
        _this.config.maxWidth = $(win).width() - 15*2; //初始最大宽度：当前屏幕宽，左右留 15px 边距
        _this.config = $.extend({}, _this.config, ready.config, options);

        document.body ? creat() : setTimeout(function() {
            creat();
        }, 30);
    };

    Class.prototype.config = {

    };

    Class.prototype.vessel = function (type, cb) {
        var _this = this;
        var times = this.index;
        var _config = this.config;
        var zIndex = _config.zIndex + times;

        _config.zIndex = zIndex;

        var titleHTML = _config.title ? '<div class="layui-layer-title">' + _config.title + '</div>' : '';

        var html = [
            // Mask
            _config.shade ? ('<div class="layui-layer-shade" style="'+ ('z-index:'+ (zIndex-1) +'; ') +'"></div>') : '',

            // Main body
            '<div class="layui-layer layui-layer-border" id="layui-layer-shade' + times +'" times="'+ times +'" showtime="'+ _config.time +'" style="z-index: '+ zIndex +'; width:350px;">'
              + titleHTML
              + '<div class="layui-layer-content layui-layer-padding">'
                + (_config.content||'')
              + '</div>'
            + '</div>'
        ];

        var moveEl = $('<div class="'+ doms.MOVE +'" id="'+ doms.MOVE +'"></div>');

        cb(html, titleHTML, moveEl);

        return _this;
    };

    Class.prototype.creat = function () {
        var _this = this;

        _this.vessel(1, function (html, title, moveEl) {
            doms.body.append(html[0]);
            doms.body.append(html[1]);
        });
    };

    layer.ready();
    layer.open = function(options) {
        var o = new Class(options);

        return o.index;
    };

    window.layer = layer;
}(window);
