var bt = {
    version: '1.0.0',
    open: function(config) {
        config.closeBtn = 2;
        var loadT = layer.open(config);
        var load = {
            form: loadT,
            close: function() {
                layer.close(load.form);
            }
        }
        return load;
    }
};

bt.soft = {
    install: function(name,that) {
        var _this = this;

        var loadOpen = bt.open({
            type: 1,
            title: name + 'SSSS',
            area: '350px',
            content: "<div class='bt-form pd20 pb70 c6'>\
                <div class='version line'>Hello</div>\
                <div class='bt-form-submit-btn'>\
                    <button type='button' class='btn btn-danger btn-sm btn-title' onclick='layer.closeAll()'>Close</button>\
                    <button type='button' id='bi-btn' class='btn btn-success btn-sm btn-title bi-btn'>Submit</button>\
                </div>\
            </div>"
        });
    }
};
