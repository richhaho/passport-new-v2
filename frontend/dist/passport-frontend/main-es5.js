function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <nav class=\"admin-header navbar navbar-default col-lg-12 col-12 p-0 fixed-top d-flex flex-row\">\r\n        <div class=\"text-left navbar-brand-wrapper\">\r\n            <a class=\"navbar-brand brand-logo\" href=\"/\" *ngIf=\"!auth.isUserLoggedIn()\">\r\n                {{ systemName}}\r\n            </a>\r\n        </div>\r\n        <ul class=\"nav navbar-nav mr-auto\">\r\n            <li class=\"nav-item\">\r\n                <a id=\"button-toggle\" class=\"button-toggle-nav inline-block ml-20 pull-left\" href=\"javascript:void(0);\"><i class=\"zmdi zmdi-menu ti-align-right\"></i></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <div class=\"search\">\r\n                <a class=\"search-btn not_click\" href=\"javascript:void(0);\"></a>\r\n                <div class=\"search-box not-click\">\r\n                  <input type=\"text\" class=\"not-click form-control\" placeholder=\"Search\" value=\"\" name=\"search\">\r\n                  <button class=\"search-button\" type=\"submit\"> <i class=\"fa fa-search not-click\"></i></button>\r\n                </div>\r\n              </div>\r\n            </li>\r\n        </ul>\r\n        <div class=\"nav-item \">\r\n            <a class=\"button gray icon\" href=\"#\"> ADD NEW ENQUIRY </a>\r\n        </div>\r\n        <!-- top bar right -->\r\n        <ul class=\"nav navbar-nav ml-auto\" *ngIf=\"!auth.isUserLoggedIn()\">\r\n\r\n            <li class=\"nav-item dropdown \">\r\n                <a class=\"nav-link top-nav\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\"\r\n                   aria-expanded=\"false\">\r\n                    <i class=\"ti-bell\"></i>\r\n                    <span class=\"badge badge-danger notification-status\" *ngIf=\"unreadNotifications > 0\">&nbsp;</span>\r\n                </a>\r\n                <div class=\"dropdown-menu dropdown-menu-right dropdown-big dropdown-notifications\">\r\n                    <div class=\"dropdown-header notifications\">\r\n                        <strong>Notifications</strong>\r\n                        <span class=\"badge badge-pill badge-warning\">{{ unreadNotifications }}</span>\r\n                    </div>\r\n                    <div class=\"dropdown-divider\"></div>\r\n                    <div *ngIf=\"notifications.length > 0\" style=\"max-height: 300px; overflow:auto;\">\r\n                      <div class=\"dropdown-item notification-item\" *ngFor=\"let notif of notifications\">\r\n                        {{ notif.title }}<br/>\r\n                          <small [innerHTML]=\"notif.content\"></small>\r\n                          <a *ngIf=\"!notif.read\" href=\"javascript:void(0)\" class=\"text-success d-block\" title=\"Mark As Read\" (click)=\"markNotificationRead(notif)\"><i class=\"fa fa-check\"></i></a>\r\n                        <small class=\"float-right text-muted time\">{{ notif.dateTime| date: 'dd/MM/yyyy HH:mm' }}</small>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"p-10\">\r\n                        <div class=\"alert alert-info p-10\" *ngIf=\"notifications.length == 0\">\r\n                            You Have No Notifications\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"nav-item dropdown \">\r\n                <a class=\"nav-link top-nav\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\"\r\n                   aria-expanded=\"true\">\r\n                    <i class=\" ti-view-grid\"></i>\r\n                </a>\r\n                <div class=\"dropdown-menu dropdown-menu-right dropdown-big\" id=\"topNav\">\r\n                    <div class=\"dropdown-header\">\r\n                        <strong>Quick Links</strong>\r\n                    </div>\r\n                    <div class=\"dropdown-divider\"></div>\r\n                    <div class=\"nav-grid\">\r\n\r\n\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"nav-item dropdown mr-30\">\r\n                <a class=\"nav-link nav-pill user-avatar\" data-toggle=\"dropdown\" href=\"#\" role=\"button\"\r\n                   aria-haspopup=\"true\"\r\n                   aria-expanded=\"false\">\r\n                    <img src=\"assets/images/person-male.jpg\" alt=\"\">\r\n                </a>\r\n                <div class=\"dropdown-menu dropdown-menu-right\">\r\n                    <div class=\"dropdown-header\">\r\n                        <div class=\"media\">\r\n                            <div class=\"media-body\">\r\n                                <!-- <h5 class=\"mt-0 mb-0\">{{ auth.getLoggedInUser().displayName }}</h5>\r\n                                <span>{{ auth.getLoggedInUser().email }}</span> -->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"dropdown-divider\"></div>\r\n\r\n                    <a class=\"dropdown-item\" href=\"/profile\">\r\n                        <i class=\"text-warning ti-user\"></i>\r\n                        Edit Profile\r\n                    </a>\r\n                    <div class=\"dropdown-divider\"></div>\r\n\r\n                    <a class=\"dropdown-item\" (click)=\"auth.logOut()\">\r\n                        <i class=\"text-danger ti-unlock\"></i>\r\n                        Logout\r\n                    </a>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </nav>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"side-menu-fixed\" *ngIf=\"!auth.isUserLoggedIn()\">\r\n                <div class=\"scrollbar side-menu-bg\">\r\n                    <ul class=\"nav navbar-nav side-menu\" id=\"sidebarnav\">\r\n                        <!-- menu item Dashboard-->\r\n                        <li>\r\n                            <a routerLink=\"\">\r\n                                <div class=\"pull-left\">\r\n                                    <i class=\"ti-home\"></i>\r\n                                    <span class=\"right-nav-text\">Dashboard</span>\r\n                                </div>\r\n                                <div class=\"clearfix\"></div>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a routerLink=\"contacts\">\r\n                                <div class=\"pull-left\">\r\n                                    <i class=\"ti-file\"></i>\r\n                                    <span class=\"right-nav-text\">Contacts</span>\r\n                                </div>\r\n                                <div class=\"clearfix\"></div>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a routerLink=\"enquiries\">\r\n                                <div class=\"pull-left\">\r\n                                    <i class=\"ti-light-bulb\"></i>\r\n                                    <span class=\"right-nav-text\">Enquiries</span>\r\n                                </div>\r\n                                <div class=\"clearfix\"></div>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a routerLink=\"bookings\">\r\n                                <div class=\"pull-left\">\r\n                                    <i class=\"fa fa-folder\"></i>\r\n                                    <span class=\"right-nav-text\">Bookings</span>\r\n                                </div>\r\n                                <div class=\"clearfix\"></div>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a routerLink=\"/groups\">\r\n                                <div class=\"pull-left\">\r\n                                    <i class=\"ti-files\"></i>\r\n                                    <span class=\"right-nav-text\">Groups</span>\r\n                                </div>\r\n                                <div class=\"clearfix\"></div>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a routerLink=\"/suppliers\">\r\n                                <div class=\"pull-left\">\r\n                                    <i class=\"fa fa-truck\"></i>\r\n                                    <span class=\"right-nav-text\">Suppliers</span>\r\n                                </div>\r\n                                <div class=\"clearfix\"></div>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a routerLink=\"/settings\">\r\n                                <div class=\"pull-left\">\r\n                                    <i class=\"fa fa-cog\"></i>\r\n                                    <span class=\"right-nav-text\">Settings</span>\r\n                                </div>\r\n                                <div class=\"clearfix\"></div>\r\n                            </a>\r\n                        </li>\r\n\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"content-wrapper\">\r\n                <ng2-slim-loading-bar color=\"blue\"></ng2-slim-loading-bar>\r\n                <router-outlet></router-outlet>\r\n                <footer class=\"p-4 m-1\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-6\">\r\n                        <div class=\"text-center text-md-left\">\r\n                            <p class=\"mb-0\"> &copy; Copyright <span id=\"copyright\">{{currentDate}}</span>. <a href=\"#\"> Webmin </a> All Rights Reserved. </p>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-6\">\r\n                        <ul class=\"text-center text-md-right\">\r\n                          <li class=\"list-inline-item\"><a href=\"#\">Terms & Conditions </a> </li>\r\n                          <li class=\"list-inline-item\"><a href=\"#\">API Use Policy </a> </li>\r\n                          <li class=\"list-inline-item\"><a href=\"#\">Privacy Policy </a> </li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                </footer>\r\n            </div>        \r\n        </div>\r\n    </div>\r\n</div>\r\n<ngx-ui-loader [fgsColor]=\"spinnerColor\"></ngx-ui-loader>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-title\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            <h4 class=\"mb-0\"> Dashboard</h4>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <ol class=\"breadcrumb pt-0 pr-0 float-left float-sm-right\">\r\n                <li class=\"breadcrumb-item\"><a href=\"index.html\" class=\"default-color\">Home</a></li>\r\n                <li class=\"breadcrumb-item active\">Dashboard</li>\r\n            </ol>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- widgets -->\r\n<div class=\"row\">\r\n    <div class=\"col-xl-3 col-lg-6 col-md-6 mb-30\">\r\n        <div class=\"card card-statistics h-100\">\r\n            <div class=\"card-body\">\r\n                <div class=\"clearfix\">\r\n                    <div class=\"float-left\">\r\n                        <span class=\"text-danger\">\r\n                            <i class=\"fa fa-pie-chart highlight-icon\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"float-right text-right\">\r\n                        <div class=\"dash-analys-item\">\r\n                            <h4>TARGET:</h4>\r\n                            <h6><i class=\"fa fa-gbp\" aria-hidden=\"true\"></i>12,000</h6>\r\n                        </div>\r\n                        <div class=\"dash-analys-item\">\r\n                            <h4>ACTUAL:</h4>\r\n                            <h6 style=\"color:red;\"><i class=\"fa fa-gbp\" aria-hidden=\"true\"></i>6,5000</h6>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <p class=\"text-muted pt-3 mb-0 mt-2 border-top dash-analys-title\">\r\n                    <i class=\"fa fa-exclamation-circle mr-1\" aria-hidden=\"true\"></i> TEAM SALES\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-lg-6 col-md-6 mb-30\">\r\n        <div class=\"card card-statistics h-100\">\r\n            <div class=\"card-body\">\r\n                <div class=\"clearfix\">\r\n                    <div class=\"float-left\">\r\n                        <span class=\"text-success\">\r\n                            <i class=\"fa fa-shopping-cart highlight-icon\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"float-right text-right\">\r\n                        <div class=\"dash-analys-item2\">\r\n                            <h3>30</h3>\r\n                            <h6>ENQUIRIES</h6>\r\n                        </div>\r\n                        <div class=\"dash-analys-item2\">\r\n                            <h3>3</h3>\r\n                            <h6>ENQUIRIES</h6>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <p class=\"text-muted pt-3 mb-0 mt-2 border-top dash-analys-title\">\r\n                    <i class=\"fa fa-bookmark-o mr-1\" aria-hidden=\"true\"></i> CONVERSION RATE\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-lg-6 col-md-6 mb-30\">\r\n        <div class=\"card card-statistics h-100\">\r\n            <div class=\"card-body\">\r\n                <div class=\"clearfix\">\r\n                    <div class=\"float-left\">\r\n                        <span class=\"text-success\">\r\n                            <i class=\"fa fa-dollar highlight-icon\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"float-right text-right\">\r\n                        <p class=\"card-text text-dark\">Revenue</p>\r\n                        <h4>$65656</h4>\r\n                    </div>\r\n                </div>\r\n                <p class=\"text-muted pt-3 mb-0 mt-2 border-top dash-analys-title\">\r\n                    <i class=\"fa fa-calendar mr-1\" aria-hidden=\"true\"></i> BOX DATA TBC\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-lg-6 col-md-6 mb-30\">\r\n        <div class=\"card card-statistics h-100\">\r\n            <div class=\"card-body\">\r\n                <div class=\"social-card\">\r\n                    <div class=\"social-card-grid\">\r\n                        <div>\r\n                            <span class=\"text-primary\">\r\n                                <i class=\"fa fa-twitter highlight-icon\" aria-hidden=\"true\"></i>\r\n                            </span>\r\n                        </div>\r\n                        <div style=\"margin-left:10px;\">\r\n                            <p class=\"socicard-in-ptag1\">23630</p>\r\n                            <p class=\"socicard-in-ptag2\">(+4)</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"social-card-grid\">\r\n                        <div>\r\n                            <span style=\"color: #0000CD\">\r\n                                <i class=\"fa fa-facebook-official highlight-icon\" aria-hidden=\"true\"></i>\r\n                            </span>\r\n                        </div>\r\n                        <div style=\"margin-left:10px;\">\r\n                            <p class=\"socicard-in-ptag1\">25330</p>\r\n                            <p class=\"socicard-in-ptag2\">(+2)</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"social-card\">\r\n                    <div class=\"social-card-grid\">\r\n                        <div>\r\n                            <span style=\"color: #FF00FF;\">\r\n                                <i class=\"fa  fa-instagram highlight-icon\" aria-hidden=\"true\"></i>\r\n                            </span>\r\n                        </div>\r\n                        <div style=\"margin-left:10px;\">\r\n                            <p class=\"socicard-in-ptag1\">7630</p>\r\n                            <p class=\"socicard-in-ptag2\">(+7)</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"social-card-grid\">\r\n                        <div>\r\n                            <span style=\"color: #C71585\">\r\n                                <i class=\"fa fa-youtube highlight-icon\" aria-hidden=\"true\"></i>\r\n                            </span>\r\n                        </div>\r\n                        <div style=\"margin-left:10px;\">\r\n                            <p class=\"socicard-in-ptag1\">3330</p>\r\n                            <p class=\"socicard-in-ptag2\">(+8)</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Orders Status widgets-->\r\n<div class=\"row\">\r\n    <div class=\"col-xl-6\">\r\n        <div class=\"row card card-statistics h-33 mb-30\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title pb-0 border-0\">BOOKINGS </h5>\r\n                <!-- action group -->\r\n                <div class=\"btn-group info-drop\">\r\n                    <button type=\"button\" class=\"dropdown-toggle-split text-muted\" data-toggle=\"dropdown\"\r\n                        aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"ti-more\"></i></button>\r\n                    <div class=\"dropdown-menu\">\r\n                        <a class=\"dropdown-item\" href=\"#\"><i class=\"text-success ti-files\"></i> Me</a>\r\n                        <a class=\"dropdown-item\" href=\"#\"><i class=\"text-warning ti-pencil-alt\"></i> Team</a>\r\n                        <a class=\"dropdown-item\" href=\"#\"><i class=\"text-danger ti-user\"></i> All</a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table center-aligned-table mb-0\">\r\n                        <thead>\r\n                            <tr class=\"text-dark\">\r\n                                <th>BOOKING DATE</th>\r\n                                <th>REF</th>\r\n                                <th>NAME</th>\r\n                                <th>PAX</th>\r\n                                <th>NEXT PAYM DUE</th>\r\n                                <th>MARGIN</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>3rd Feb 2019</td>\r\n                                <td>EST 0249</td>\r\n                                <td>Louise Cooke</td>\r\n                                <td>2</td>\r\n                                <td>20/06/2020</td>\r\n                                <td>$3549.33</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>3rd Feb 2019</td>\r\n                                <td>EST 0249</td>\r\n                                <td>Louise Cooke</td>\r\n                                <td>2</td>\r\n                                <td>20/06/2020</td>\r\n                                <td>$3549.33</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>3rd Feb 2019</td>\r\n                                <td>EST 0249</td>\r\n                                <td>Louise Cooke</td>\r\n                                <td>2</td>\r\n                                <td>20/06/2020</td>\r\n                                <td>$3549.33</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row card card-statistics h-33 mb-30\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title pb-0 border-0\">LIVE ENQUIRIES </h5>\r\n                <!-- action group -->\r\n                <div class=\"btn-group info-drop\">\r\n                    <button type=\"button\" class=\"dropdown-toggle-split text-muted\" data-toggle=\"dropdown\"\r\n                        aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"ti-more\"></i></button>\r\n                    <div class=\"dropdown-menu\">\r\n                        <a class=\"dropdown-item\" href=\"#\"><i class=\"text-success ti-files\"></i> Me</a>\r\n                        <a class=\"dropdown-item\" href=\"#\"><i class=\"text-warning ti-pencil-alt\"></i> Team</a>\r\n                        <a class=\"dropdown-item\" href=\"#\"><i class=\"text-danger ti-user\"></i> All</a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table center-aligned-table mb-0\">\r\n                        <thead>\r\n                            <tr class=\"text-dark\">\r\n                                <th>REF</th>\r\n                                <th>Name</th>\r\n                                <th>GROUP</th>\r\n                                <th>%</th>\r\n                                <th>ASSIGNED TO</th>\r\n                                <th>LAST UPDATED</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>ENQ000036</td>\r\n                                <td>Paul Twinn</td>\r\n                                <td>super Bowl Lv</td>\r\n                                <td>10%</td>\r\n                                <td>John MeLellan</td>\r\n                                <td>20th Feb 2020</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>ENQ000036</td>\r\n                                <td>Paul Twinn</td>\r\n                                <td>super Bowl Lv</td>\r\n                                <td>10%</td>\r\n                                <td>John MeLellan</td>\r\n                                <td>20th Feb 2020</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row card card-statistics h-33 mb-30\">       \r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title pb-0 border-0\">MY TASKS</h5>\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table center-aligned-table mb-0\">\r\n                        <thead>\r\n                            <tr class=\"text-dark\">\r\n                                <th>WHAT</th>\r\n                                <th>RELATED TO</th>\r\n                                <th>ASSIGNED TO</th>\r\n                                <th>BY WHEN</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td class=\"remember-checkbox\">\r\n                                    <input type=\"checkbox\" class=\"form-control\" name=\"one\" id=\"one\">\r\n                                    <label for=\"one\">Chase Africa & Beyond Refund</label>\r\n                                </td>\r\n                                <td>South Africa 2020</td>\r\n                                <td>Ben Welch </td>\r\n                                <td>2 days over</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"remember-checkbox\">\r\n                                    <input type=\"checkbox\" class=\"form-control\" name=\"two\" id=\"two\">\r\n                                    <label for=\"two\">Chase Africa & Beyond Refund</label>\r\n                                </td>\r\n                                <td>South Africa 2020</td>\r\n                                <td>Ben Welch </td>\r\n                                <td>2 days over</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"remember-checkbox\">\r\n                                    <input type=\"checkbox\" class=\"form-control\" name=\"three\" id=\"three\">\r\n                                    <label for=\"three\">Chase Africa & Beyond Refund</label>\r\n                                </td>\r\n                                <td>South Africa 2020</td>\r\n                                <td>Ben Welch </td>\r\n                                <td>2 days over</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xl-6 mb-30\">\r\n        <div class=\"card h-100\">\r\n            <div class=\"card-body\">\r\n                <div class=\"d-block d-md-flexx justify-content-between\">\r\n                    <div class=\"d-block\">\r\n                        <h5 class=\"card-title\">SALES TARGETS</h5>\r\n                    </div>\r\n                    <div class=\"d-flex\">\r\n                        <div class=\"clearfix mr-30\">\r\n                            <h6 class=\"text-success\">Income</h6>\r\n                            <p>+584</p>\r\n                        </div>\r\n                        <div class=\"clearfix  mr-50\">\r\n                            <h6 class=\"text-danger\"> Outcome</h6>\r\n                            <p>-255</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div id=\"morris-area\" style=\"height: 320px; margin-bottom: 50px;\"></div>\r\n            \r\n                <div class=\"btn-group info-drop\">\r\n                    <button type=\"button\" class=\"dropdown-toggle-split text-muted\" data-toggle=\"dropdown\"\r\n                        aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"ti-more\"></i></button>\r\n                    <div class=\"dropdown-menu\">\r\n                        <a class=\"dropdown-item\" href=\"#\"><i class=\"text-success ti-files\"></i> Approved</a>\r\n                        <a class=\"dropdown-item\" href=\"#\"><i class=\"text-warning ti-pencil-alt\"></i> Pending</a>\r\n                        <a class=\"dropdown-item\" href=\"#\"><i class=\"text-danger ti-user\"></i> Rejected</a>\r\n                        <a class=\"dropdown-item\" href=\"#\"><i class=\"text-secondary ti-reload\"></i> Refresh</a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table center-aligned-table mb-0\">\r\n                        <thead>\r\n                            <tr class=\"text-dark first-th-sets\">\r\n                                <th>MONTH</th>\r\n                                <th colspan=\"2\">MY FIGURES</th>\r\n                                <th colspan=\"2\">TEAM</th>\r\n                                <th colspan=\"2\">COMPANY</th>\r\n                            </tr>\r\n                            <tr class=\"text-dark\">\r\n                                <th></th>\r\n                                <th>TARGET</th>\r\n                                <th>ACTUAL</th>\r\n                                <th>TARGET</th>\r\n                                <th>ACTUAL</th>\r\n                                <th>TARGET</th>\r\n                                <th>ACTUAL</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>Apr 2019</td>\r\n                                <td>$0.00</td>\r\n                                <td>$0.00</td>\r\n                                <td>$13000.00</td>\r\n                                <td>$12000.00</td>\r\n                                <td>$17000.00</td>\r\n                                <td>$16000.00</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Apr 2019</td>\r\n                                <td>$0.00</td>\r\n                                <td>$0.00</td>\r\n                                <td>$13000.00</td>\r\n                                <td>$12000.00</td>\r\n                                <td>$17000.00</td>\r\n                                <td>$16000.00</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Apr 2019</td>\r\n                                <td>$0.00</td>\r\n                                <td>$0.00</td>\r\n                                <td>$13000.00</td>\r\n                                <td>$12000.00</td>\r\n                                <td>$17000.00</td>\r\n                                <td>$16000.00</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Apr 2019</td>\r\n                                <td>$0.00</td>\r\n                                <td>$0.00</td>\r\n                                <td>$13000.00</td>\r\n                                <td>$12000.00</td>\r\n                                <td>$17000.00</td>\r\n                                <td>$16000.00</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Apr 2019</td>\r\n                                <td>$0.00</td>\r\n                                <td>$0.00</td>\r\n                                <td>$13000.00</td>\r\n                                <td>$12000.00</td>\r\n                                <td>$17000.00</td>\r\n                                <td>$16000.00</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Apr 2019</td>\r\n                                <td>$0.00</td>\r\n                                <td>$0.00</td>\r\n                                <td>$13000.00</td>\r\n                                <td>$12000.00</td>\r\n                                <td>$17000.00</td>\r\n                                <td>$16000.00</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Apr 2019</td>\r\n                                <td>$0.00</td>\r\n                                <td>$0.00</td>\r\n                                <td>$13000.00</td>\r\n                                <td>$12000.00</td>\r\n                                <td>$17000.00</td>\r\n                                <td>$16000.00</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-md-4 mx-auto\">\r\n    <div class=\"card mb-30\">\r\n      <div class=\"card-body\">\r\n\r\n        <form [formGroup]=\"loginForm\" (submit)=\"submitLogin()\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Username\"  class=\"form-control {{ username.invalid && (username.dirty || username.touched) ? 'is-invalid' : '' }}\" formControlName=\"username\"/>\r\n            <div class=\"invalid-feedback\" *ngIf=\"username.invalid && (username.dirty || username.touched)\">\r\n              A Valid Username Is Required.\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"password\" placeholder=\"Password\" class=\"form-control {{ password.invalid && (password.dirty || password.touched) ? 'is-invalid' : '' }}\" formControlName=\"password\"/>\r\n            <div class=\"invalid-feedback\" *ngIf=\"password.invalid && (password.dirty || password.touched)\">\r\n              Password Is Required.\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" [disabled]=\"!loginForm.valid\">Log In</button>\r\n          </div>\r\n        </form>\r\n        <div class=\"text-center\">\r\n          <p class=\"text-secondary\"><a href=\"/forgotpassword\">Forgot Password?</a></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng2-slim-loading-bar */
    "./node_modules/ng2-slim-loading-bar/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/dashboard/dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");

    var routes = [{
      path: '',
      component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
    }, {
      path: 'contacts',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-contacts-contacts-module */
        "pages-contacts-contacts-module").then(__webpack_require__.bind(null,
        /*! ./pages/contacts/contacts.module */
        "./src/app/pages/contacts/contacts.module.ts")).then(function (mod) {
          return mod.ContactsModule;
        });
      }
    }, {
      path: 'bookings',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-bookings-bookings-module */
        "pages-bookings-bookings-module").then(__webpack_require__.bind(null,
        /*! ./pages/bookings/bookings.module */
        "./src/app/pages/bookings/bookings.module.ts")).then(function (mod) {
          return mod.BookingsModule;
        });
      }
    }];

    var AppRoutingModule =
    /*#__PURE__*/
    function () {
      function AppRoutingModule(loadingBar, router) {
        var _this = this;

        _classCallCheck(this, AppRoutingModule);

        this.loadingBar = loadingBar;
        this.router = router;
        this.router.events.subscribe(function (event) {
          _this.navigationInterceptor(event);
        });
      }

      _createClass(AppRoutingModule, [{
        key: "navigationInterceptor",
        value: function navigationInterceptor(event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
            this.loadingBar.start();
          }

          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
            this.loadingBar.complete();
          }

          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationCancel"]) {
            this.loadingBar.stop();
          }

          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"]) {
            this.loadingBar.stop();
          }
        }
      }]);

      return AppRoutingModule;
    }();

    AppRoutingModule.ctorParameters = function () {
      return [{
        type: ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_2__["SlimLoadingBarService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
        onSameUrlNavigation: 'reload'
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
      providers: []
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content-wrapper.full-width {\n  margin-left: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRzpcXHBhc3Nwb3J0LW5ldy12MlxcZnJvbnRlbmQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UseUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LXdyYXBwZXIge1xyXG4gICYuZnVsbC13aWR0aCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufSIsIi5jb250ZW50LXdyYXBwZXIuZnVsbC13aWR0aCB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(toast, api, modalService, auth) {
        _classCallCheck(this, AppComponent);

        this.toast = toast;
        this.api = api;
        this.modalService = modalService;
        this.auth = auth;
        this.title = 'Passport';
        this.currentDate = 0;
        this.contentWrapClass = 'content-wrapper';
        this.spinnerColor = '#dc006b';
        this.fetchingNotifications = false;
        this.systemName = 'Passport';
        this.unreadNotifications = 0;
        this.notifications = [];
        /** @todo Make notificatons interface and workings */
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.nowYear();
        }
        /**
         * @todo Make this work
         * @param notif
         */

      }, {
        key: "markNotificationRead",
        value: function markNotificationRead(notif) {}
      }, {
        key: "nowYear",
        value: function nowYear() {
          var date = new Date();
          return this.currentDate = date.getFullYear();
          ;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/login/login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony import */


    var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/dashboard/dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/index.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _services_http_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/http.interceptor */
    "./src/app/services/http.interceptor.ts");
    /* harmony import */


    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-ui-loader */
    "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var angular_calendar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! angular-calendar */
    "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
    /* harmony import */


    var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! angular-calendar/date-adapters/date-fns */
    "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
    /* harmony import */


    var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_17___default =
    /*#__PURE__*/
    __webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_17__);
    /* harmony import */


    var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! angularx-flatpickr */
    "./node_modules/angularx-flatpickr/fesm2015/angularx-flatpickr.js");
    /* harmony import */


    var _demo_modules_demo_utils_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../demo-modules/demo-utils/module */
    "./src/demo-modules/demo-utils/module.ts");
    /* harmony import */


    var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ngx-bootstrap/timepicker */
    "./node_modules/ngx-bootstrap/timepicker/fesm2015/ngx-bootstrap-timepicker.js");
    /* harmony import */


    var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ngx-bootstrap/pagination */
    "./node_modules/ngx-bootstrap/pagination/fesm2015/ngx-bootstrap-pagination.js");
    /* harmony import */


    var ngx_color_picker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ngx-color-picker */
    "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
    /* harmony import */


    var ngx_sortablejs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ngx-sortablejs */
    "./node_modules/ngx-sortablejs/fesm2015/ngx-sortablejs.js");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ngx-google-places-autocomplete */
    "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_24___default =
    /*#__PURE__*/
    __webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_24__);
    /* harmony import */


    var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ngx-bootstrap/accordion */
    "./node_modules/ngx-bootstrap/accordion/fesm2015/ngx-bootstrap-accordion.js");
    /* harmony import */


    var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @kolkov/angular-editor */
    "./node_modules/@kolkov/angular-editor/fesm2015/kolkov-angular-editor.js");
    /* harmony import */


    var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ng2-slim-loading-bar */
    "./node_modules/ng2-slim-loading-bar/index.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      entryComponents: [],
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTablesModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_13__["NgxUiLoaderModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerModule"].forRoot(), ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(), angular_calendar__WEBPACK_IMPORTED_MODULE_16__["CalendarModule"].forRoot({
        provide: angular_calendar__WEBPACK_IMPORTED_MODULE_16__["DateAdapter"],
        useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_17__["adapterFactory"]
      }), angularx_flatpickr__WEBPACK_IMPORTED_MODULE_18__["FlatpickrModule"], _demo_modules_demo_utils_module__WEBPACK_IMPORTED_MODULE_19__["DemoUtilsModule"], ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_20__["TimepickerModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_21__["PaginationModule"].forRoot(), ngx_sortablejs__WEBPACK_IMPORTED_MODULE_23__["SortablejsModule"].forRoot({
        animation: 150
      }), ngx_color_picker__WEBPACK_IMPORTED_MODULE_22__["ColorPickerModule"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_24__["GooglePlaceModule"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_24__["GooglePlaceModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_26__["AngularEditorModule"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_25__["AccordionModule"].forRoot(), ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_27__["SlimLoadingBarModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
        useClass: _services_http_interceptor__WEBPACK_IMPORTED_MODULE_12__["CustomInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-area {\n  margin-left: 0px !important;\n}\n\n.dash-analys-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  min-width: 170px;\n}\n\n.dash-analys-item2 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  min-width: 120px;\n}\n\n.dash-analys-item2 h3 {\n  text-align: center;\n}\n\n.dash-analys-title {\n  text-align: center;\n  font-size: 1.7rem;\n}\n\n.social-card {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.social-card .social-card-grid {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n          justify-content: start;\n  color: black;\n}\n\n.social-card .social-card-grid .socicard-in-ptag1 {\n  font-size: 1.5rem;\n  padding-top: 10px;\n}\n\n.social-card .social-card-grid .socicard-in-ptag2 {\n  font-size: 1rem;\n}\n\n.first-th-sets th {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL0c6XFxwYXNzcG9ydC1uZXctdjJcXGZyb250ZW5kL3NyY1xcYXBwXFxwYWdlc1xcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtBQ0NKOztBRENBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxnQkFBQTtBQ0dKOztBREZJO0VBQ0ksa0JBQUE7QUNJUjs7QUREQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNJSjs7QURGQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDS0o7O0FESkk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtFQUNBLFlBQUE7QUNNUjs7QURMUTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUNPWjs7QURMUTtFQUNJLGVBQUE7QUNPWjs7QURIQTtFQUNJLGtCQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tYXJlYXtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG4uZGFzaC1hbmFseXMtaXRlbXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWluLXdpZHRoOiAxNzBweDtcclxufVxyXG4uZGFzaC1hbmFseXMtaXRlbTJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICBoM3tcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuLmRhc2gtYW5hbHlzLXRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjdyZW07XHJcbn1cclxuLnNvY2lhbC1jYXJke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAuc29jaWFsLWNhcmQtZ3JpZHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICAgICAgICBjb2xvcjpibGFjaztcclxuICAgICAgICAuc29jaWNhcmQtaW4tcHRhZzF7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNvY2ljYXJkLWluLXB0YWcye1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5maXJzdC10aC1zZXRzIHRoe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59IiwiLm1haW4tYXJlYSB7XG4gIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLmRhc2gtYW5hbHlzLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1pbi13aWR0aDogMTcwcHg7XG59XG5cbi5kYXNoLWFuYWx5cy1pdGVtMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWluLXdpZHRoOiAxMjBweDtcbn1cbi5kYXNoLWFuYWx5cy1pdGVtMiBoMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRhc2gtYW5hbHlzLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuN3JlbTtcbn1cblxuLnNvY2lhbC1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnNvY2lhbC1jYXJkIC5zb2NpYWwtY2FyZC1ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLnNvY2lhbC1jYXJkIC5zb2NpYWwtY2FyZC1ncmlkIC5zb2NpY2FyZC1pbi1wdGFnMSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5zb2NpYWwtY2FyZCAuc29jaWFsLWNhcmQtZ3JpZCAuc29jaWNhcmQtaW4tcHRhZzIge1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5maXJzdC10aC1zZXRzIHRoIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
    \********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppPagesDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
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
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(toast, api, auth) {
        _classCallCheck(this, DashboardComponent);

        this.toast = toast;
        this.api = api;
        this.auth = auth;
        this.title = 'Passport';
        this.currentDate = 0;
        this.contentWrapClass = 'content-wrapper';
        this.spinnerColor = '#dc006b';
        this.fetchingNotifications = false;
        this.systemName = 'Passport';
        this.unreadNotifications = 0;
        this.notifications = [];
        /** @todo Make notificatons interface and workings */
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * @todo Make this work
         * @param notif
         */

      }, {
        key: "markNotificationRead",
        value: function markNotificationRead(notif) {}
      }, {
        key: "nowYear",
        value: function nowYear() {
          var date = new Date();
          return this.currentDate = date.getFullYear();
          ;
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/pages/dashboard/dashboard.component.scss")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/pages/login/login.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/pages/login/login.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPagesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, toast, api, auth) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.toast = toast;
        this.api = api;
        this.auth = auth;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required //Validators.email
          ]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.auth.isUserLoggedIn()) {
            this.router.navigateByUrl('/dashboard');
          }
        }
      }, {
        key: "submitLogin",
        value: function submitLogin() {
          var _this2 = this;

          if (this.loginForm.valid) {
            var userData = this.loginForm.getRawValue();
            userData['skipXAuth'] = true;
            this.api.post('user/login', userData).subscribe(function (response) {
              console.log('API RESPONSE...');
              console.log(response);

              if (response.valid) {
                _this2.auth.setLoggedIn(JSON.stringify(response.data.user));

                _this2.router.navigateByUrl('/dashboard');
              } else {
                console.log(response);

                _this2.toast.error(response.message);
              }
            });
          } else {
            this.toast.error('Please Check For Errors');
          }
        }
      }, {
        key: "username",
        get: function get() {
          return this.loginForm.get('username');
        }
      }, {
        key: "password",
        get: function get() {
          return this.loginForm.get('password');
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/pages/login/login.component.scss")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/services/api.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/api.service.ts ***!
    \*****************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var ApiService =
    /*#__PURE__*/
    function () {
      /**
       *
       * @param httpClient
       */
      function ApiService(httpClient) {
        _classCallCheck(this, ApiService);

        this.httpClient = httpClient;
        /**
         * @var string
         */

        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl; //'http://api.webuyanyhouse.local:8080/';
      }
      /**
       *
       * @param endpoint
       * @param headers
       * @return Observable<any>
       */


      _createClass(ApiService, [{
        key: "get",
        value: function get(endpoint) {
          var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          //const basicHeaders: object = {
          //'Authorization' : 'Basic ' + this.apiKey
          //};
          //const httpHeaders = new HttpHeaders({...basicHeaders, ...headers});
          //const call = this.httpClient.get<ApiResponseInterface>(this.url + endpoint, {headers: httpHeaders});
          var call = this.httpClient.get(this.url + endpoint, {});
          return call;
        }
        /**
         *
         * @param endpoint
         * @param data
         * @param headers
         */

      }, {
        key: "post",
        value: function post(endpoint) {
          var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

          /*const basicHeaders: object = {
            'Authorization' : 'Basic ' + this.apiKey,
            'Accept' : 'application/json',
            'Content-Type':  'application/json'
          };
                const httpHeaders = new HttpHeaders({...basicHeaders, ...headers});*/
          var call = this.httpClient.post(this.url + endpoint, data, {});
          return call;
        }
        /**
         *
         */

      }, {
        key: "getBaseUrl",
        value: function getBaseUrl() {
          return this.url;
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ApiService);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
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


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      /**
       *
       * @param api
       * @param router
       * @param http
       */
      function AuthService(api, router, http) {
        _classCallCheck(this, AuthService);

        this.api = api;
        this.router = router;
        this.http = http;
        this.authKey = '1000040C097563627DKKJH34A9CACB61';
        this.loggedInUser = null;
        this.getLoggedInUserFromStorage(); //console.log(this.loggedInUser);
      }

      _createClass(AuthService, [{
        key: "getLoggedInUserFromStorage",
        value: function getLoggedInUserFromStorage() {
          this.loggedInUser = JSON.parse(localStorage.getItem(this.authKey + 'loggedInUser'));
        }
        /**
         *
         */

      }, {
        key: "getLoggedInUser",
        value: function getLoggedInUser() {
          return this.loggedInUser;
        }
      }, {
        key: "getToken",
        value: function getToken() {
          this.getLoggedInUserFromStorage();
          return this.loggedInUser.csfrToken;
        }
        /**
         *
         * @param user
         * @param updateActiveSession
         */

      }, {
        key: "setUserToStorage",
        value: function setUserToStorage(user) {
          var updateActiveSession = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          localStorage.setItem(this.authKey + 'loggedInUser', JSON.stringify(user));

          if (updateActiveSession) {
            this.getLoggedInUserFromStorage();
          }
        }
        /**
         *
         */

      }, {
        key: "isUserLoggedIn",
        value: function isUserLoggedIn() {
          this.getLoggedInUserFromStorage();

          if (this.loggedInUser) {
            return true;
          }

          return false;
        }
        /**
         *
         * @param email
         */

      }, {
        key: "setLoggedIn",
        value: function setLoggedIn(email) {
          localStorage.setItem(this.authKey + 'loggedInUser', email);
          this.getLoggedInUserFromStorage();
        }
      }, {
        key: "logOut",
        value: function logOut() {
          localStorage.removeItem(this.authKey + 'loggedInUser');
          this.loggedInUser = null;
          this.router.navigateByUrl('/login');
        }
      }, {
        key: "hasRole",
        value: function hasRole(role) {
          var userData = this.getLoggedInUser();
          return userData.roles.indexOf(role) !== -1;
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/http.interceptor.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/http.interceptor.ts ***!
    \**********************************************/

  /*! exports provided: CustomInterceptor */

  /***/
  function srcAppServicesHttpInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomInterceptor", function () {
      return CustomInterceptor;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-ui-loader */
    "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");

    var CustomInterceptor =
    /*#__PURE__*/
    function () {
      function CustomInterceptor(loader, router, toast, auth) {
        _classCallCheck(this, CustomInterceptor);

        this.loader = loader;
        this.router = router;
        this.toast = toast;
        this.auth = auth;
      }

      _createClass(CustomInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this3 = this;

          // check if we are skipping x auth
          var skipXAuth = false;
          var contentType = 'application/json';
          var hideLoader = false;

          if (typeof req.body !== 'undefined' && req.body !== null) {
            // if form data, then we will be uploading here
            if (req.body instanceof FormData) {
              contentType = undefined;
            } else {
              if (typeof req.body.skipXAuth !== 'undefined' && req.body.skipXAuth !== null && (req.body.skipXAuth === true || req.body.skipXAuth === 'true')) {
                skipXAuth = true;
              }

              if (typeof req.body.hideLoader !== 'undefined' && req.body.hideLoader !== null && (req.body.hideLoader === true || req.body.hideLoader === 'true')) {
                hideLoader = true;
              }
            }
          }

          if (!hideLoader) this.loader.start();
          if (!hideLoader) this.loader.start();
          var httpHeaders = {
            'Authorization': 'Basic',
            'Accept': 'application/json'
          };

          if (typeof contentType !== "undefined") {
            httpHeaders['Content-Type'] = contentType;
          }

          if (!skipXAuth) {
            httpHeaders['X-AUTH-TOKEN'] = this.auth.getToken();
          } else {
            httpHeaders['X-AUTH-TOKEN'] = 'LOGIN';
          } //console.log("NEW HEADERS", httpHeaders);

          /*const cloneReq = req.clone({
              headers: new HttpHeaders(httpHeaders)
          });*/


          var cloneReq = req.clone({
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](httpHeaders)
          }); // console.log('INTERCEPT HTTP CALL', cloneReq);

          return next.handle(cloneReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (event) {
            // console.log("EVENT IS...");
            // console.log(event);
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {// console.log(event);
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            // console.log('ERROR IS...');
            // console.log(error);
            var self = _this3;

            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
              // console.log(error);
              if (typeof error.error.message !== 'undefined' && error.error.message !== null) {
                _this3.toast.error(error.error.message);
              } else {
                if (typeof error.error.error !== 'undefined' && error.error.error !== null) {
                  _this3.toast.error(error.error.error);
                } else {
                  _this3.toast.error(error.statusText);
                }
              }

              if (error.status === 403) {
                // access is forbidden, meaning invalid api key
                self.auth.logOut(); // go to login

                setTimeout(function () {
                  self.router.navigateByUrl('/login');
                }, 1000);
              }
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(error);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            if (!hideLoader) _this3.loader.stop();
          }));
        }
      }]);

      return CustomInterceptor;
    }();

    CustomInterceptor.ctorParameters = function () {
      return [{
        type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_8__["NgxUiLoaderService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }];
    };

    CustomInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], CustomInterceptor);
    /***/
  },

  /***/
  "./src/demo-modules/demo-utils/calendar-header.component.ts":
  /*!******************************************************************!*\
    !*** ./src/demo-modules/demo-utils/calendar-header.component.ts ***!
    \******************************************************************/

  /*! exports provided: CalendarHeaderComponent */

  /***/
  function srcDemoModulesDemoUtilsCalendarHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarHeaderComponent", function () {
      return CalendarHeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CalendarHeaderComponent = function CalendarHeaderComponent() {
      _classCallCheck(this, CalendarHeaderComponent);

      this.locale = 'en';
      this.viewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CalendarHeaderComponent.prototype, "view", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CalendarHeaderComponent.prototype, "viewDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CalendarHeaderComponent.prototype, "locale", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CalendarHeaderComponent.prototype, "viewChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CalendarHeaderComponent.prototype, "viewDateChange", void 0);
    CalendarHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'mwl-demo-utils-calendar-header',
      template: "\n    <div class=\"row text-center\">\n      <div class=\"col-md-4\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarPreviousView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\"\n          >\n            Previous\n          </div>\n          <div\n            class=\"btn btn-outline-secondary\"\n            mwlCalendarToday\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\"\n          >\n            Today\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarNextView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\"\n          >\n            Next\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <h3>{{ viewDate | calendarDate: view + 'ViewTitle':locale }}</h3>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('month')\"\n            [class.active]=\"view === 'month'\"\n          >\n            Month\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('week')\"\n            [class.active]=\"view === 'week'\"\n          >\n            Week\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('day')\"\n            [class.active]=\"view === 'day'\"\n          >\n            Day\n          </div>\n        </div>\n      </div>\n    </div>\n    <br />\n  "
    })], CalendarHeaderComponent);
    /***/
  },

  /***/
  "./src/demo-modules/demo-utils/module.ts":
  /*!***********************************************!*\
    !*** ./src/demo-modules/demo-utils/module.ts ***!
    \***********************************************/

  /*! exports provided: DemoUtilsModule */

  /***/
  function srcDemoModulesDemoUtilsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DemoUtilsModule", function () {
      return DemoUtilsModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var angular_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular-calendar */
    "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
    /* harmony import */


    var _calendar_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./calendar-header.component */
    "./src/demo-modules/demo-utils/calendar-header.component.ts");

    var DemoUtilsModule = function DemoUtilsModule() {
      _classCallCheck(this, DemoUtilsModule);
    };

    DemoUtilsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarModule"]],
      declarations: [_calendar_header_component__WEBPACK_IMPORTED_MODULE_5__["CalendarHeaderComponent"]],
      exports: [_calendar_header_component__WEBPACK_IMPORTED_MODULE_5__["CalendarHeaderComponent"]]
    })], DemoUtilsModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'http://api.passport.local:8080/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! G:\passport-new-v2\frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map