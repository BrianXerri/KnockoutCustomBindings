ko.bindingHandlers.dateFormatter = {
    update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        var value = valueAccessor();
        var date = ko.utils.unwrapObservable(value);
        $(element).text(date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear());
    }
};