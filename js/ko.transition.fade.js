ko.bindingHandlers.fadeTransition = {
    init: function (element, valueAccessor) {
        var data = ko.utils.unwrapObservable(valueAccessor());
        var visible = data;

        if (typeof data === 'object')
            visible = ko.utils.unwrapObservable(data.visible);

        $(element).toggle(visible);
    },
    update: function (element, valueAccessor) {
        var data = ko.utils.unwrapObservable(valueAccessor());

        var visible = data;
        var options;
        var clearQueue = true;
        var jumpToEnd = false;

        if (typeof data === 'object') {
            visible = ko.utils.unwrapObservable(data.visible);
            
            if (data.hasOwnProperty('options'))
                options = data.options;

            if (data.hasOwnProperty('clearQueue'))
                clearQueue = data.clearQueue;
            
            if (data.hasOwnProperty('jumpToEnd'))
                jumpToEnd = data.jumpToEnd;
        }

        if (visible) {
            $(element).stop(clearQueue, jumpToEnd).fadeIn(options);
        } else {
            $(element).stop(clearQueue, jumpToEnd).fadeOut(options);
        }
    }
};