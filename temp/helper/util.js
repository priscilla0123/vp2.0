import Vue from 'vue';

export default {
    l2camel(str) {
        return str.replace(/-(\w)/g, (all, c, index) => index > 0 ? c.toUpperCase() : c);
    },

    assign(obj) {
        [].slice.call(arguments, 1).forEach((args) => {
            for (var i in args) {
                obj[i] = args[i];
            }
        })

        return obj;
    },

    each(arr, callback) {
        if (arr.length) {
            [].forEach.call(arr, callback);
        } else {
            for (var i in arr) {
                callback(arr[i], i);
            }
        }
    },

    rfa(callback) {
        return (window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function(callback) { window.setTimeout(callback, 1000 / 60); })(callback);
    },

    crfa(id) {
        return id && (
            window.cancelRequestAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.clearTimeout
        )(id);
    },

    makeArray(arr) {
        if (Array.isArray(arr)) {
            return arr;
        }

        return arr == null ? [] : [arr];
    },

    log() {
        var str = JSON.stringify(arguments);
        var container = document.querySelector('#__log__');

        if (!container) {
            container = document.createElement('div');
            container.id = '__log__';
            container.style.cssText = 'position: fixed; bottom: 0px; width: 100%; background: #ccc; z-index: 10000;';
            document.body.appendChild(container);
        }

        container.innerHTML = container.innerHTML + '<br />' + str;
    },

    firstKey(obj) {
        for (var i in obj) {
            return i;
        }

        return false;
    },

    observer(target, config = {}, callback) {
        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
        var observer = new MutationObserver(callback);

        observer.observe(target, config);
        return observer;
    },

    register(obj, directive = false) {
        var Component = obj.Component || obj;

        function install(Vue) {
            if (install._installed) return;

            install._installed = true;

            if (directive) {
                Vue.directive(Component.name, obj);
            } else {
                Vue.component(`vp-${Component.name}`, obj);
            }
        }

        if (window.Vue) {
            install(window.Vue);
        } else {
            obj.install = Component.install = install;
        }

        return obj;
    },

    factory(options, data = {}) {
        var instance = new Vue(options);
        Object.assign(instance, data);
        instance.$mount();
        document.body.appendChild(instance.$el);
        return instance;
    },

    appendInstance(vueComponent, data = {}) {
        var instance = new Vue(vueComponent);
        Object.assign(instance, data);
        instance.$mount();
        document.body.appendChild(instance.$el);
        return instance;
    },

    getInstace(vueComponent) {
        var instance = new Vue(vueComponent);
        instance.$mount();
        return instance;
    },

    initAjax(Vue, $) {
        Vue.prototype.ajax = function() {
            var _url = arguments[0],
                _success = arguments[3],
                _error = arguments[4],
                _processData = arguments[5] == undefined;
            _contentType = arguments[6] == undefined ? 'application/x-www-form-urlencoded' : arguments[6];
            var _type = 'GET';
            var _data = {};
            var _dataType = 'json';
            if (typeof arguments[1] == 'string') {
                _type = arguments[1];
            } else if (typeof arguments[1] == 'object') {
                _data = arguments[1];
            } else if (typeof arguments[1] == 'function') {
                _success = arguments[1];
                _error = arguments[2];
            }
            if (typeof arguments[2] == 'object') {
                _data = arguments[2];
            } else if (typeof arguments[1] != 'function') {
                _success = arguments[2];
                _error = arguments[3];
            }

            $.ajax({
                url: _url,
                dataType: "json",
                type: _type,
                data: _data,
                processData: _processData,
                contentType: _contentType,
                success: function(data) {
                    if (data.success || (data.file && typeof data.file == 'object')) {
                        _success && _success(data);
                    } else {
                        _error && _error(data.error != undefined ? data.error : '未知错误');
                    }
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    if (XMLHttpRequest.status == 401) {
                        location.href = $('#major-layout-login').val();
                    } else {
                        _error && _error(errorThrown);
                    }
                },
                complete: function(XHR, TS) { XHR = null }
            });
        }
    }
}

!Object.assign && (Object.assign = exports.default.assign);
