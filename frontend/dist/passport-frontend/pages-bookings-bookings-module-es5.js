function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bookings-bookings-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookings/bookingDetail/bookingDetail.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookings/bookingDetail/bookingDetail.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesBookingsBookingDetailBookingDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-title\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            <h4 class=\"mb-0\"> Bookings</h4>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <ol class=\"breadcrumb pt-0 pr-0 float-left float-sm-right\">\r\n                <li class=\"breadcrumb-item\"><a href=\"/\" class=\"default-color\">Home</a></li>\r\n                <li class=\"breadcrumb-item active\">Bookings</li>\r\n            </ol>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookings/bookingList/bookingList.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookings/bookingList/bookingList.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesBookingsBookingListBookingListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-title\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            <h4 class=\"mb-0\"> Bookings</h4>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <ol class=\"breadcrumb pt-0 pr-0 float-left float-sm-right\">\r\n                <li class=\"breadcrumb-item\"><a href=\"/\" class=\"default-color\">Home</a></li>\r\n                <li class=\"breadcrumb-item active\">Bookings</li>\r\n            </ol>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-xl-12 col-lg-12 col-md-12 mb-30\">\r\n        <div class=\"card card-statistics h-100\">\r\n            <div class=\"card-body\">\r\n                <div class=\"clearfix\">\r\n                    <form action=\"\" method =\"post\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xl-6  col-lg-12 col-md-12 buttonset-in-enquires\">\r\n                                <div>\r\n                                    <a class=\"button button-border black icon \" href=\"#\"> LAST 7 DAYS </a>\r\n                                </div>\r\n                                <div>\r\n                                    <a class=\"button button-border black icon \" href=\"#\">MONTH TO DATE </a>\r\n                                </div>\r\n                                <div>\r\n                                    <a class=\"button button-border black icon \" href=\"#\">LAST MONTH</a>\r\n                                </div>\r\n                                <div>\r\n                                    <a class=\"button button-border black icon \" href=\"#\">YEAR TO DATE</a>\r\n                                </div>\r\n                                <div>\r\n                                    <a class=\"button button-border black icon \" href=\"#\">LAST YEAR</a>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"datepicker-form col-xl-5 col-lg-12 col-md-12\">\r\n                                <div class=\"input-group\" data-date=\"23/11/2018\" data-date-format=\"mm/dd/yyyy\">\r\n                                    <span class=\"input-group-addon\">From</span>\r\n                                    <input type=\"text\" class=\"form-control range-to\" name=\"from\" id=\"fromDate\" value=\"\">\r\n                                    <span class=\"input-group-addon\">To</span>\r\n                                    <input class=\"form-control range-to\" type=\"text\" name=\"to\" id=\"toDate\" value=\"\">\r\n                                    <input type=\"submit\" class=\"button button-border small\" value=\"Filter\" style=\"margin-left:5px; margin-bottom: 5px;\">\r\n                                    <a class=\"button black small\" href=\"#\">RESET FILTER</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>  \r\n                    </form>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xl-8 h-100\">\r\n                            <div id=\"morris-bar\" style=\"height: 320px;\"></div>\r\n                            <div class=\"text-center\">\r\n                                <ul class=\"list-inline card-detail-list m-b-0\">\r\n                                    <li class=\"list-inline-item\">\r\n                                        <i class=\"fa fa-circle mr-2\"></i>Series A\r\n                                    </li>\r\n                                    <li class=\"list-inline-item\">\r\n                                        <i class=\"fa fa-circle mr-2\"></i>Series B\r\n                                    </li>\r\n                                    <li class=\"list-inline-item\">\r\n                                        <i class=\"fa fa-circle mr-2\"></i>Series C\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-4 mt-20 h-100 p-4\" style=\"background-color:#E6E6FA; min-height:330px;\">\r\n                            <div class=\"form-group row\">\r\n                                <h3 class=\"pl-2\">FILTERS</h3>\r\n                            </div>\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"inputEmail3\" class=\"col-sm-3 col-form-label font-weight-bold\">GROUP</label>\r\n                                <div class=\"col-sm-9\">\r\n                                    <select class=\"custom-select mr-sm-2\" id=\"inlineFormCustomSelect\">\r\n                                        <option selected>Me</option>\r\n                                        <option value=\"1\">All</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"inputEmail3\" class=\"col-sm-3 col-form-label font-weight-bold\">TEAM</label>\r\n                                <div class=\"col-sm-9\">\r\n                                    <select class=\"custom-select mr-sm-2\" id=\"inlineFormCustomSelect\">\r\n                                        <option selected>Me</option>\r\n                                        <option value=\"1\">All</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"inputEmail3\" class=\"col-sm-3 col-form-label font-weight-bold\">STAFF</label>\r\n                                <div class=\"col-sm-9\">\r\n                                    <select class=\"custom-select mr-sm-2\" id=\"inlineFormCustomSelect\">\r\n                                        <option selected>Me</option>\r\n                                        <option value=\"1\">All</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"inputEmail3\" class=\"col-sm-3 col-form-label font-weight-bold\" >TYPE</label>\r\n                                <div class=\"col-sm-9\">\r\n                                    <select class=\"custom-select mr-sm-2\" id=\"inlineFormCustomSelect\">\r\n                                        <option selected>Me</option>\r\n                                        <option value=\"1\">All</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-xl-12 mb-10\">\r\n        <div class=\"card card-statistics h-100\">\r\n            <div class=\"card-body\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table center-aligned-table mb-0\">\r\n                        <thead>\r\n                            <tr class=\"text-dark\">\r\n                                <th>BOOKING DATE</th>\r\n                                <th>REF</th>\r\n                                <th>LEAD NAME</th>\r\n                                <th>TEAN</th>\r\n                                <th>GROUP</th>\r\n                                <th>PAX</th>\r\n                                <th>ATOL</th>\r\n                                <th>CAST PAID</th>\r\n                                <th>SUPPLIERS</th>\r\n                                <th>FEES</th>\r\n                                <th>EST MARGIN</th>\r\n                                <th>ACT MARGIN</th>\r\n                                <th>TO CLAIM</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>17/08/2019</td>\r\n                                <td><a routerLink=\"/bookings/{{id}}\">EST 0247</a></td>\r\n                                <td><a routerLink=\"/bookings/{{id}}\">Joe Bloggs</a></td>\r\n                                <td>Elite Sports Tray</td>\r\n                                <td>Super Bow LIV</td>\r\n                                <td>2</td>\r\n                                <td>2</td>\r\n                                <td>$292,088.00</td>\r\n                                <td>$257,099.00</td>\r\n                                <td>$100.00</td>\r\n                                <td></td>\r\n                                <td>$2,400.00</td>\r\n                                <td>$1,400.00</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>17/08/2019</td>\r\n                                <td><a routerLink=\"/bookings/{{id}}\">EST 0247</a></td>\r\n                                <td><a routerLink=\"/bookings/{{id}}\">Joe Bloggs</a></td>\r\n                                <td>Elite Sports Tray</td>\r\n                                <td>Super Bow LIV</td>\r\n                                <td>2</td>\r\n                                <td>2</td>\r\n                                <td>$292,088.00</td>\r\n                                <td>$257,099.00</td>\r\n                                <td>$100.00</td>\r\n                                <td></td>\r\n                                <td>$2,400.00</td>\r\n                                <td>$1,400.00</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>17/08/2019</td>\r\n                                <td><a routerLink=\"/bookings/{{id}}\">EST 0247</a></td>\r\n                                <td><a routerLink=\"/bookings/{{id}}\">Joe Bloggs</a></td>\r\n                                <td>Elite Sports Tray</td>\r\n                                <td>Super Bow LIV</td>\r\n                                <td>2</td>\r\n                                <td>2</td>\r\n                                <td>$292,088.00</td>\r\n                                <td>$257,099.00</td>\r\n                                <td>$100.00</td>\r\n                                <td></td>\r\n                                <td>$2,400.00</td>\r\n                                <td>$1,400.00</td>\r\n                            </tr>\r\n                        </tbody>\r\n                        <tfoot>\r\n                            <tr>\r\n                                <th colspan=\"5\">TOTAL BOOKINGS: 3</th>\r\n                                <th>6</th>\r\n                                <th>6</th>\r\n                                <th>$876,264.00</th>\r\n                                <th>$771,297.00</th>\r\n                                <th>$300.00</th>\r\n                                <th>0</th>\r\n                                <th>$7,200.00</th>\r\n                                <th>$4,200.00</th>\r\n                            </tr>\r\n                        </tfoot>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-xl-7 mb-30\">\r\n    </div>\r\n    <div class=\"col-xl-5 mb-30\">\r\n        <div class=\"card card-statistics h-100\">\r\n            <div class=\"card-body\" style=\"background-color:#E6E6FA\">\r\n                COMBINED EST AND ACTUAL MARGIN FOR PERIOD :&nbsp;&nbsp; $785,0.00\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-xl-12 float-right text-right mb-30\">\r\n        <a class=\"button button-border black icon large\" href=\"#\">DOWNLOAD RESULT .XLSX</a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookings/bookings.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookings/bookings.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesBookingsBookingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./src/app/pages/bookings/bookingDetail/bookingDetail.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/bookings/bookingDetail/bookingDetail.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesBookingsBookingDetailBookingDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".buttonset-in-enquires {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYm9va2luZ3MvYm9va2luZ0RldGFpbC9HOlxccGFzc3BvcnQtbmV3LXYyXFxmcm9udGVuZC9zcmNcXGFwcFxccGFnZXNcXGJvb2tpbmdzXFxib29raW5nRGV0YWlsXFxib29raW5nRGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ib29raW5ncy9ib29raW5nRGV0YWlsL2Jvb2tpbmdEZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsNkJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jvb2tpbmdzL2Jvb2tpbmdEZXRhaWwvYm9va2luZ0RldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b25zZXQtaW4tZW5xdWlyZXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59IiwiLmJ1dHRvbnNldC1pbi1lbnF1aXJlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/bookings/bookingDetail/bookingDetail.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/bookings/bookingDetail/bookingDetail.component.ts ***!
    \*************************************************************************/

  /*! exports provided: BookingDetailComponent */

  /***/
  function srcAppPagesBookingsBookingDetailBookingDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingDetailComponent", function () {
      return BookingDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BookingDetailComponent =
    /*#__PURE__*/
    function () {
      function BookingDetailComponent() {
        _classCallCheck(this, BookingDetailComponent);
      }

      _createClass(BookingDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BookingDetailComponent;
    }();

    BookingDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bookingDetail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bookingDetail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookings/bookingDetail/bookingDetail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bookingDetail.component.scss */
      "./src/app/pages/bookings/bookingDetail/bookingDetail.component.scss")).default]
    })], BookingDetailComponent);
    /***/
  },

  /***/
  "./src/app/pages/bookings/bookingList/bookingList.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/bookings/bookingList/bookingList.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesBookingsBookingListBookingListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".buttonset-in-enquires {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYm9va2luZ3MvYm9va2luZ0xpc3QvRzpcXHBhc3Nwb3J0LW5ldy12MlxcZnJvbnRlbmQvc3JjXFxhcHBcXHBhZ2VzXFxib29raW5nc1xcYm9va2luZ0xpc3RcXGJvb2tpbmdMaXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ib29raW5ncy9ib29raW5nTGlzdC9ib29raW5nTGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw2QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYm9va2luZ3MvYm9va2luZ0xpc3QvYm9va2luZ0xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uc2V0LWluLWVucXVpcmVze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufSIsIi5idXR0b25zZXQtaW4tZW5xdWlyZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/bookings/bookingList/bookingList.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/bookings/bookingList/bookingList.component.ts ***!
    \*********************************************************************/

  /*! exports provided: BookingListComponent */

  /***/
  function srcAppPagesBookingsBookingListBookingListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingListComponent", function () {
      return BookingListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BookingListComponent =
    /*#__PURE__*/
    function () {
      function BookingListComponent() {
        _classCallCheck(this, BookingListComponent);

        this.id = 1;
      }

      _createClass(BookingListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BookingListComponent;
    }();

    BookingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bookingList',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bookingList.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookings/bookingList/bookingList.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bookingList.component.scss */
      "./src/app/pages/bookings/bookingList/bookingList.component.scss")).default]
    })], BookingListComponent);
    /***/
  },

  /***/
  "./src/app/pages/bookings/bookings-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/bookings/bookings-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: BookingsRoutingModule */

  /***/
  function srcAppPagesBookingsBookingsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingsRoutingModule", function () {
      return BookingsRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _bookings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bookings.component */
    "./src/app/pages/bookings/bookings.component.ts");
    /* harmony import */


    var _bookingList_bookingList_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./bookingList/bookingList.component */
    "./src/app/pages/bookings/bookingList/bookingList.component.ts");
    /* harmony import */


    var _bookingDetail_bookingDetail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bookingDetail/bookingDetail.component */
    "./src/app/pages/bookings/bookingDetail/bookingDetail.component.ts");

    var routes = [{
      path: '',
      component: _bookings_component__WEBPACK_IMPORTED_MODULE_3__["BookingsComponent"],
      children: [{
        path: '',
        component: _bookingList_bookingList_component__WEBPACK_IMPORTED_MODULE_4__["BookingListComponent"]
      }, {
        path: ':id',
        component: _bookingDetail_bookingDetail_component__WEBPACK_IMPORTED_MODULE_5__["BookingDetailComponent"]
      }]
    }];

    var BookingsRoutingModule = function BookingsRoutingModule() {
      _classCallCheck(this, BookingsRoutingModule);
    };

    BookingsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BookingsRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/bookings/bookings.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/pages/bookings/bookings.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesBookingsBookingsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jvb2tpbmdzL2Jvb2tpbmdzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/bookings/bookings.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/bookings/bookings.component.ts ***!
    \******************************************************/

  /*! exports provided: BookingsComponent */

  /***/
  function srcAppPagesBookingsBookingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingsComponent", function () {
      return BookingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var BookingsComponent =
    /*#__PURE__*/
    function () {
      function BookingsComponent(toast) {
        _classCallCheck(this, BookingsComponent);

        this.toast = toast;
      }

      _createClass(BookingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BookingsComponent;
    }();

    BookingsComponent.ctorParameters = function () {
      return [{
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
      }];
    };

    BookingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bookings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bookings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookings/bookings.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bookings.component.scss */
      "./src/app/pages/bookings/bookings.component.scss")).default]
    })], BookingsComponent);
    /***/
  },

  /***/
  "./src/app/pages/bookings/bookings.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/bookings/bookings.module.ts ***!
    \***************************************************/

  /*! exports provided: BookingsModule */

  /***/
  function srcAppPagesBookingsBookingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingsModule", function () {
      return BookingsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _bookings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bookings.component */
    "./src/app/pages/bookings/bookings.component.ts");
    /* harmony import */


    var _bookingList_bookingList_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./bookingList/bookingList.component */
    "./src/app/pages/bookings/bookingList/bookingList.component.ts");
    /* harmony import */


    var _bookingDetail_bookingDetail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bookingDetail/bookingDetail.component */
    "./src/app/pages/bookings/bookingDetail/bookingDetail.component.ts");
    /* harmony import */


    var _bookings_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bookings-routing.module */
    "./src/app/pages/bookings/bookings-routing.module.ts");

    var BookingsModule = function BookingsModule() {
      _classCallCheck(this, BookingsModule);
    };

    BookingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _bookings_routing_module__WEBPACK_IMPORTED_MODULE_6__["BookingsRoutingModule"]],
      declarations: [_bookings_component__WEBPACK_IMPORTED_MODULE_3__["BookingsComponent"], _bookingList_bookingList_component__WEBPACK_IMPORTED_MODULE_4__["BookingListComponent"], _bookingDetail_bookingDetail_component__WEBPACK_IMPORTED_MODULE_5__["BookingDetailComponent"]],
      providers: []
    })], BookingsModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-bookings-bookings-module-es5.js.map