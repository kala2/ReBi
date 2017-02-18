"use strict";
namespace App.Shared {
    interface IBootstrapDialog {
        deleteDialog(itemName: string);
        confirmationDialog(title: string, msg: string, okText?: string, cancelText?: string);
    }

    interface IModalOptions {
        title: string;
        message: string;
        okText: string;
        cancelText: string;
    }

    interface IModalScope extends ng.IScope {
        title: string;
        message: string;
        okText: string;
        cancelText: string;
        ok: () => void;
        cancel: () => void;
    }

    class BootstrapDialog implements IBootstrapDialog {
        public static serviceId: string = "bootstrap.dialog";

        private $modal: any;
        private $templateCache: ng.ITemplateCacheService;

        constructor($modal: any, $templateCache: ng.ITemplateCacheService) {
            this.$modal = $modal;
            this.$templateCache = $templateCache;
        }

        public deleteDialog(itemName: string) {
            let title = "Confirm Delete";
            itemName = itemName || "item";
            let msg = "Delete " + itemName + "?";

            return this.confirmationDialog(title, msg);
        }

        public confirmationDialog(title: string, msg: string, okText?: string, cancelText?: string) {
            let modalOptions = {
                templateUrl: "modalDialog.tpl.html",
                controller: [
                    "$scope", "$modalInstance", "options",
                    ($s, $mI, o) => new ModalCtrl($s, $mI, o)],

                keyboard: true,
                resolve: {
                    options: () => {
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
        }
    }

    class ModalCtrl {
        constructor($scope: IModalScope, $modalInstance: any, options: IModalOptions) {
            $scope.title = options.title || "Title";
            $scope.message = options.message || "";
            $scope.okText = options.okText || "OK";
            $scope.cancelText = options.cancelText || "Cancel";
            $scope.ok = () => { $modalInstance.close("ok"); };
            $scope.cancel = () => { $modalInstance.dismiss("cancel"); };
        }
    }

    // Register bootstrap.dialog service
    commonBootstrapModule.factory(BootstrapDialog.serviceId, ["$modal", "$templateCache", (m, tc) => new BootstrapDialog(m, tc)]);
}
