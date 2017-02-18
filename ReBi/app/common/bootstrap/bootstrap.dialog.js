"use strict";
var App;
(function (App) {
    var Shared;
    (function (Shared) {
        var BootstrapDialog = (function () {
            function BootstrapDialog($modal, $templateCache) {
                this.$modal = $modal;
                this.$templateCache = $templateCache;
            }
            BootstrapDialog.prototype.deleteDialog = function (itemName) {
                var title = "Confirm Delete";
                itemName = itemName || "item";
                var msg = "Delete " + itemName + "?";
                return this.confirmationDialog(title, msg);
            };
            BootstrapDialog.prototype.confirmationDialog = function (title, msg, okText, cancelText) {
                var modalOptions = {
                    templateUrl: "modalDialog.tpl.html",
                    controller: [
                        "$scope", "$modalInstance", "options",
                        function ($s, $mI, o) { return new ModalCtrl($s, $mI, o); }],
                    keyboard: true,
                    resolve: {
                        options: function () {
                            return {
                                title: title,
                                message: msg,
                                okText: okText,
                                cancelText: cancelText
                            };
                        }
                    }
                };
                return this.$modal.open(modalOptions).result;
            };
            BootstrapDialog.serviceId = "bootstrap.dialog";
            return BootstrapDialog;
        }());
        var ModalCtrl = (function () {
            function ModalCtrl($scope, $modalInstance, options) {
                $scope.title = options.title || "Title";
                $scope.message = options.message || "";
                $scope.okText = options.okText || "OK";
                $scope.cancelText = options.cancelText || "Cancel";
                $scope.ok = function () { $modalInstance.close("ok"); };
                $scope.cancel = function () { $modalInstance.dismiss("cancel"); };
            }
            return ModalCtrl;
        }());
        // Register bootstrap.dialog service
        Shared.commonBootstrapModule.factory(BootstrapDialog.serviceId, ["$modal", "$templateCache", function (m, tc) { return new BootstrapDialog(m, tc); }]);
    })(Shared = App.Shared || (App.Shared = {}));
})(App || (App = {}));
//# sourceMappingURL=bootstrap.dialog.js.map