function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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


    __webpack_exports__["default"] = "<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\">\r\n    <mat-toolbar color=\"primary\" class=\"toolbar\">\r\n        <mat-icon (click)=\"snav.toggle()\">menu</mat-icon>\r\n        <h1 class=\"example-app-name\">München</h1>\r\n    </mat-toolbar>\r\n\r\n    <mat-sidenav-container class=\"example-sidenav-container\" [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\r\n        <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\" [fixedInViewport]=\"mobileQuery.matches\"\r\n            fixedTopGap=\"56\">\r\n            <mat-nav-list>\r\n                <a mat-list-item routerLink=\".\">\r\n                    <mat-icon class=\"marginRight\">map</mat-icon> Karte\r\n                </a>\r\n                <a mat-list-item routerLink=\".\">\r\n                    <mat-icon class=\"marginRight\">favorite</mat-icon> Favoriten\r\n                </a>\r\n                <mat-accordion>\r\n                    <mat-expansion-panel>\r\n                        <mat-expansion-panel-header>\r\n                            <mat-panel-title>\r\n                                Filter\r\n                            </mat-panel-title>\r\n                            <mat-panel-description>\r\n                                <mat-icon class=\"marginRight\">filter_list</mat-icon>\r\n                            </mat-panel-description>\r\n                        </mat-expansion-panel-header>\r\n\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Umkreis\">\r\n                        </mat-form-field>\r\n\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Produkt\">\r\n                        </mat-form-field>\r\n\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Kategorie\">\r\n                        </mat-form-field>\r\n                    </mat-expansion-panel>\r\n                </mat-accordion>\r\n                <a mat-list-item routerLink=\".\">\r\n                    <mat-icon class=\"marginRight\">account_circle</mat-icon> Eigenes Profil\r\n                </a>\r\n                <a mat-list-item routerLink=\".\">\r\n                    <mat-icon class=\"marginRight\">contact_support</mat-icon> Über uns\r\n                </a>\r\n                <a mat-list-item routerLink=\".\">\r\n                    <mat-icon class=\"marginRight\">edit</mat-icon> Bewertung schreiben\r\n                </a>\r\n            </mat-nav-list>\r\n        </mat-sidenav>\r\n\r\n        <mat-sidenav-content>\r\n            <router-outlet></router-outlet>\r\n        </mat-sidenav-content>\r\n    </mat-sidenav-container>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-entry/add-entry.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-entry/add-entry.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAddEntryAddEntryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card class=\"form float\">\n    <mat-card-title class=\"headline\">\n        Erstellen\n    </mat-card-title>\n\n    <mat-card-content>\n        <form id=\"login-form\">\n            <button mat-button mat-raised-button color=\"primary\">\n                <mat-icon>photo_camera</mat-icon>\n            </button>\n\n            <mat-form-field>\n                <input matInput placeholder=\"Name\" required>\n            </mat-form-field>\n            <mat-form-field>\n                <input matInput placeholder=\"Kategorie\" required>\n            </mat-form-field>\n            <mat-form-field>\n                <input matInput placeholder=\"Produkt\" required>\n            </mat-form-field>\n\n            <mat-form-field style=\"width: 49%; display: inline-block\">\n                <input matInput placeholder=\"Anzahl\" required>\n            </mat-form-field>\n            <mat-form-field style=\"width: 49%; display: inline-block; float: right\">\n                <mat-label>Menge</mat-label>\n                <mat-select>\n                    <mat-option>\n                        Stück\n                    </mat-option>\n                    <mat-option>\n                        Gramm\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n\n            \n            <mat-form-field>\n                <textarea matInput placeholder=\"Beschreibung\"></textarea>\n            </mat-form-field>\n\n            <button mat-button mat-raised-button>\n                Speichern\n                <mat-icon>check_circle</mat-icon>\n            </button>\n        </form>\n    </mat-card-content>\n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-page/main-page.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-page/main-page.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMainPageMainPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<link rel=\"stylesheet\" href=\"https://unpkg.com/leaflet@1.6.0/dist/leaflet.css\"\nintegrity=\"sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==\"\ncrossorigin=\"\"/>\n\n<div class=\"map-container\">\n    <div class=\"map-frame\" >\n        <div id=\"map\"></div>\n    </div>\n\n    <div class=\"floating-buttons\">\n        <mat-icon class=\"floating-button small\">\n            person_outline\n        </mat-icon>\n        <mat-icon routerLink=\"/add\" class=\"floating-button main\">\n            add\n        </mat-icon>\n    </div>\n</div>";
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/main-page/main-page.component */
    "./src/app/components/main-page/main-page.component.ts");
    /* harmony import */


    var _components_add_entry_add_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/add-entry/add-entry.component */
    "./src/app/components/add-entry/add-entry.component.ts");

    var routes = [{
      path: '',
      pathMatch: 'full',
      component: _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"]
    }, {
      path: 'dashboard',
      component: _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"]
    }, {
      path: 'add',
      component: _components_add_entry_add_entry_component__WEBPACK_IMPORTED_MODULE_4__["AddEntryComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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


    __webpack_exports__["default"] = ".toolbar {\n  background-color: #3dacff;\n  color: white;\n  font-weight: lighter;\n}\n.toolbar mat-icon {\n  color: white;\n  font-size: 40px;\n  height: 40px;\n  width: 40px;\n  line-height: 40px;\n  margin-right: 20px;\n  cursor: pointer;\n}\nmat-sidenav {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#3dacff), to(white));\n  background-image: linear-gradient(to bottom, #3dacff, white);\n  width: 70%;\n  max-width: 400px;\n}\n.example-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.example-is-mobile .example-toolbar {\n  position: fixed;\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n  z-index: 2;\n}\nh1.example-app-name {\n  margin-left: 8px;\n}\n.example-sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  -webkit-box-flex: 1;\n          flex: 1;\n  margin-top: 0px !important;\n}\n.example-is-mobile .example-sidenav-container {\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\n     `<body>` to be our scrolling element for mobile layouts. */\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFx4Y2cyODg2XFxEb2N1bWVudHNcXGhhY2thdGhvblxcaGFja2F0aG9uL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDTko7QURTSTtFQUNJLFlBQUE7RUFiSixlQWMwQjtFQWIxQixZQWEwQjtFQVoxQixXQVkwQjtFQVgxQixpQkFXMEI7RUFDdEIsa0JBQUE7RUFDQSxlQUFBO0FDSlI7QURRQTtFQUNJLDJGQUFBO0VBQUEsNERBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNMSjtBRFFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDTEo7QURRRTtFQUNFLGVBQUE7RUFDQSw4RUFBQTtFQUNBLFVBQUE7QUNMSjtBRFFFO0VBQ0UsZ0JBQUE7QUNMSjtBRFFFO0VBQ0U7MEZBQUE7RUFFQSxtQkFBQTtVQUFBLE9BQUE7RUFDQSwwQkFBQTtBQ0xKO0FEUUU7RUFDRTsrREFBQTtFQUVBLG1CQUFBO1VBQUEsY0FBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIG1kLWljb24tc2l6ZSgkc2l6ZTogMjRweCkge1xyXG4gICAgZm9udC1zaXplOiAkc2l6ZTtcclxuICAgIGhlaWdodDogJHNpemU7XHJcbiAgICB3aWR0aDogJHNpemU7XHJcbiAgICBsaW5lLWhlaWdodDogJHNpemU7XHJcbiAgfVxyXG5cclxuLnRvb2xiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYxLCAxNzIsIDI1NSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIFxyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgQGluY2x1ZGUgbWQtaWNvbi1zaXplKDQwcHgpO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYig2MSwgMTcyLCAyNTUpLCB3aGl0ZSk7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtdG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAvKiBNYWtlIHN1cmUgdGhlIHRvb2xiYXIgd2lsbCBzdGF5IG9uIHRvcCBvZiB0aGUgY29udGVudCBhcyBpdCBzY3JvbGxzIHBhc3QuICovXHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuICBcclxuICBoMS5leGFtcGxlLWFwcC1uYW1lIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgbm90IGZpeGVkLCBzdHJldGNoIHRoZSBzaWRlbmF2IGNvbnRhaW5lciB0byBmaWxsIHRoZSBhdmFpbGFibGUgc3BhY2UuIFRoaXNcclxuICAgICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIGZpeGVkLCBkb24ndCBjb25zdHJhaW4gdGhlIGhlaWdodCBvZiB0aGUgc2lkZW5hdiBjb250YWluZXIuIFRoaXMgYWxsb3dzIHRoZVxyXG4gICAgICAgYDxib2R5PmAgdG8gYmUgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBtb2JpbGUgbGF5b3V0cy4gKi9cclxuICAgIGZsZXg6IDEgMCBhdXRvO1xyXG4gIH1cclxuICAiLCIudG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZGFjZmY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG4udG9vbGJhciBtYXQtaWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbm1hdC1zaWRlbmF2IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzNkYWNmZiwgd2hpdGUpO1xuICB3aWR0aDogNzAlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXRvb2xiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIC8qIE1ha2Ugc3VyZSB0aGUgdG9vbGJhciB3aWxsIHN0YXkgb24gdG9wIG9mIHRoZSBjb250ZW50IGFzIGl0IHNjcm9sbHMgcGFzdC4gKi9cbiAgei1pbmRleDogMjtcbn1cblxuaDEuZXhhbXBsZS1hcHAtbmFtZSB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcbiAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBub3QgZml4ZWQsIHN0cmV0Y2ggdGhlIHNpZGVuYXYgY29udGFpbmVyIHRvIGZpbGwgdGhlIGF2YWlsYWJsZSBzcGFjZS4gVGhpc1xuICAgICBjYXVzZXMgYDxtYXQtc2lkZW5hdi1jb250ZW50PmAgdG8gYWN0IGFzIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgZGVza3RvcCBsYXlvdXRzLiAqL1xuICBmbGV4OiAxO1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcbiAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBmaXhlZCwgZG9uJ3QgY29uc3RyYWluIHRoZSBoZWlnaHQgb2YgdGhlIHNpZGVuYXYgY29udGFpbmVyLiBUaGlzIGFsbG93cyB0aGVcbiAgICAgYDxib2R5PmAgdG8gYmUgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBtb2JpbGUgbGF5b3V0cy4gKi9cbiAgZmxleDogMSAwIGF1dG87XG59Il19 */";
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


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(changeDetectorRef, media) {
        _classCallCheck(this, AppComponent);

        this.fillerNav = Array.from({
          length: 50
        }, function (_, i) {
          return "Nav Item ".concat(i + 1);
        });
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) {
          return h.test(window.location.host);
        });
        this.mobileQuery = media.matchMedia('(max-width: 600px)');

        this._mobileQueryListener = function () {
          return changeDetectorRef.detectChanges();
        };

        this.mobileQuery.addListener(this._mobileQueryListener);
      }

      _createClass(AppComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.mobileQuery.removeListener(this._mobileQueryListener);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"]
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


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/main-page/main-page.component */
    "./src/app/components/main-page/main-page.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _components_add_entry_add_entry_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/add-entry/add-entry.component */
    "./src/app/components/add-entry/add-entry.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__["MainPageComponent"], _components_add_entry_add_entry_component__WEBPACK_IMPORTED_MODULE_8__["AddEntryComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/add-entry/add-entry.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/add-entry/add-entry.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAddEntryAddEntryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field {\n  display: block;\n}\nmat-form-field span {\n  width: 30%;\n}\nmat-form-field input {\n  width: 60%;\n}\nmat-card {\n  margin: 50px auto;\n  border-radius: 10px;\n  width: 80%;\n}\nbutton {\n  display: block;\n  margin: 10px auto;\n}\nbutton mat-icon {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtZW50cnkvQzpcXFVzZXJzXFx4Y2cyODg2XFxEb2N1bWVudHNcXGhhY2thdGhvblxcaGFja2F0aG9uL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhZGQtZW50cnlcXGFkZC1lbnRyeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hZGQtZW50cnkvYWRkLWVudHJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKO0FEQ0k7RUFDSSxVQUFBO0FDQ1I7QURFSTtFQUNJLFVBQUE7QUNBUjtBRElBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNESjtBRElBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDREo7QURFSTtFQUNJLHNCQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZC1lbnRyeS9hZGQtZW50cnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogODAlXHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbn0iLCJtYXQtZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxubWF0LWZvcm0tZmllbGQgc3BhbiB7XG4gIHdpZHRoOiAzMCU7XG59XG5tYXQtZm9ybS1maWVsZCBpbnB1dCB7XG4gIHdpZHRoOiA2MCU7XG59XG5cbm1hdC1jYXJkIHtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiA4MCU7XG59XG5cbmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDEwcHggYXV0bztcbn1cbmJ1dHRvbiBtYXQtaWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/add-entry/add-entry.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/add-entry/add-entry.component.ts ***!
    \*************************************************************/

  /*! exports provided: AddEntryComponent */

  /***/
  function srcAppComponentsAddEntryAddEntryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddEntryComponent", function () {
      return AddEntryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AddEntryComponent =
    /*#__PURE__*/
    function () {
      function AddEntryComponent() {
        _classCallCheck(this, AddEntryComponent);
      }

      _createClass(AddEntryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddEntryComponent;
    }();

    AddEntryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-entry',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-entry.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-entry/add-entry.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-entry.component.scss */
      "./src/app/components/add-entry/add-entry.component.scss")).default]
    })], AddEntryComponent);
    /***/
  },

  /***/
  "./src/app/components/main-page/main-page.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/main-page/main-page.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMainPageMainPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Montserrat:600?&display=swap\");\n.map-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n}\n.map-container .title {\n  position: absolute;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 5px 5px 5px 25px;\n  font-weight: 600;\n  z-index: 999;\n  font-size: 1.5em;\n  margin: 0 auto;\n  background-color: whitesmoke;\n  display: block;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  box-shadow: 0px 3px 5px gray;\n  font-family: \"Montserrat\";\n  right: 0px;\n}\n.map-container .menu {\n  margin-right: 10px;\n  vertical-align: top;\n  font-size: 30px;\n  height: 30px;\n  width: 30px;\n  line-height: 30px;\n}\n.map-container .map-frame {\n  box-shadow: 0px 0px 10px gray;\n  height: 100%;\n}\n.map-container #map {\n  height: 100%;\n}\n.map-container .floating-buttons .floating-button {\n  bottom: 20px;\n  right: 5px;\n  position: fixed;\n  padding: 7px;\n  border-radius: 50%;\n  z-index: 999;\n  outline: none;\n  background-color: #fafafa;\n  box-shadow: inset 0px 0px 10px grey;\n  border: 1px solid lightgray;\n}\n.map-container .floating-buttons .floating-button.small {\n  height: 25px;\n  width: 25px;\n  margin-bottom: 60px;\n  font-size: 25px;\n  height: 25px;\n  width: 25px;\n  line-height: 25px;\n}\n.map-container .floating-buttons .floating-button.main {\n  height: 40px;\n  width: 40px;\n  font-size: 40px;\n  height: 40px;\n  width: 40px;\n  line-height: 40px;\n}\n.leaflet-popup-content-wrapper .leaflet-popup-content {\n  background-color: blue;\n}\n.leaflet-popup-tip-container {\n  background-color: forestgreen;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXBhZ2UvQzpcXFVzZXJzXFx4Y2cyODg2XFxEb2N1bWVudHNcXGhhY2thdGhvblxcaGFja2F0aG9uL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtYWluLXBhZ2VcXG1haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG1GQUFBO0FBU1I7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FDUEo7QURTSTtFQUNJLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUNQUjtBRFVJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQW5DSixlQW9DMEI7RUFuQzFCLFlBbUMwQjtFQWxDMUIsV0FrQzBCO0VBakMxQixpQkFpQzBCO0FDTDlCO0FEUUU7RUFDRSw2QkFBQTtFQUNBLFlBQUE7QUNOSjtBRFNFO0VBQ0UsWUFBQTtBQ1BKO0FEV007RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtBQ1RSO0FEWVU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBakVSLGVBa0U4QjtFQWpFOUIsWUFpRThCO0VBaEU5QixXQWdFOEI7RUEvRDlCLGlCQStEOEI7QUNQbEM7QURVVTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBdkVSLGVBd0U4QjtFQXZFOUIsWUF1RThCO0VBdEU5QixXQXNFOEI7RUFyRTlCLGlCQXFFOEI7QUNMbEM7QURXQTtFQUNJLHNCQUFBO0FDUko7QURXQTtFQUNJLDZCQUFBO0FDUkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NjAwPyZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbkBtaXhpbiBtZC1pY29uLXNpemUoJHNpemU6IDI0cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogJHNpemU7XHJcbiAgICBoZWlnaHQ6ICRzaXplO1xyXG4gICAgd2lkdGg6ICRzaXplO1xyXG4gICAgbGluZS1oZWlnaHQ6ICRzaXplO1xyXG4gIH1cclxuXHJcbi5tYXAtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICBcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xyXG4gICAgICAgIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xyXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggNXB4IDVweCAyNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0NSwgMjQ1LCAxKTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDVweCBncmF5O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW51IHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICBAaW5jbHVkZSBtZC1pY29uLXNpemUoMzBweCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAubWFwLWZyYW1lIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCBncmF5O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAjbWFwIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5mbG9hdGluZy1idXR0b25ze1xyXG4gICAgICAuZmxvYXRpbmctYnV0dG9uIHtcclxuICAgICAgICBib3R0b206IDIwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDEpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTBweCBncmV5O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuXHJcblxyXG4gICAgICAgICAgJi5zbWFsbCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIG1kLWljb24tc2l6ZSgyNXB4KTtcclxuICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgJi5tYWluIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgQGluY2x1ZGUgbWQtaWNvbi1zaXplKDQwcHgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubGVhZmxldC1wb3B1cC1jb250ZW50LXdyYXBwZXIgLmxlYWZsZXQtcG9wdXAtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59XHJcblxyXG4ubGVhZmxldC1wb3B1cC10aXAtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGZvcmVzdGdyZWVuO1xyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo2MDA/JmRpc3BsYXk9c3dhcFwiKTtcbi5tYXAtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5tYXAtY29udGFpbmVyIC50aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHotaW5kZXg6IDk5OTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IGdyYXk7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgcmlnaHQ6IDBweDtcbn1cbi5tYXAtY29udGFpbmVyIC5tZW51IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuLm1hcC1jb250YWluZXIgLm1hcC1mcmFtZSB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCBncmF5O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWFwLWNvbnRhaW5lciAjbWFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm1hcC1jb250YWluZXIgLmZsb2F0aW5nLWJ1dHRvbnMgLmZsb2F0aW5nLWJ1dHRvbiB7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDVweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBwYWRkaW5nOiA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogOTk5O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDEwcHggZ3JleTtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuLm1hcC1jb250YWluZXIgLmZsb2F0aW5nLWJ1dHRvbnMgLmZsb2F0aW5nLWJ1dHRvbi5zbWFsbCB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG4ubWFwLWNvbnRhaW5lciAuZmxvYXRpbmctYnV0dG9ucyAuZmxvYXRpbmctYnV0dG9uLm1haW4ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xufVxuXG4ubGVhZmxldC1wb3B1cC1jb250ZW50LXdyYXBwZXIgLmxlYWZsZXQtcG9wdXAtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbi5sZWFmbGV0LXBvcHVwLXRpcC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBmb3Jlc3RncmVlbjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/main-page/main-page.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/main-page/main-page.component.ts ***!
    \*************************************************************/

  /*! exports provided: MainPageComponent */

  /***/
  function srcAppComponentsMainPageMainPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainPageComponent", function () {
      return MainPageComponent;
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


    var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! leaflet */
    "./node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);

    var MainPageComponent =
    /*#__PURE__*/
    function () {
      function MainPageComponent() {
        _classCallCheck(this, MainPageComponent);
      }

      _createClass(MainPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var person = leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"]({
            iconUrl: 'https://cdn.icon-icons.com/icons2/1863/PNG/512/person-pin-circle_118813.png',
            shadowUrl: 'leaf-shadow.png',
            iconSize: [25, 40],
            shadowSize: [50, 64],
            iconAnchor: [22, 22],
            shadowAnchor: [4, 62],
            popupAnchor: [-0, -30] // point from which the popup should open relative to the iconAnchor

          });
          var location = leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"]({
            iconUrl: 'https://png2.kisspng.com/sh/9b5d56e0fcc6bf2d254546785b369b3c/L0KzQYm3V8I2N6hBkJH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TfFtaaRweZ9qc4Dsgra5TflvfJZ3htN9aXBxcb20iP9ubV5yeeR0ZYKwRbO8WMczP2U4TasDYkixRIK8UcE0Pmg2TaU7NUK2QYO7UsE6PV91htk=/kisspng-computer-icons-alaska-aspire2-international-home-marker-5b5872743598b8.4151136715325231242195.png',
            shadowUrl: 'leaf-shadow.png',
            iconSize: [40, 40],
            shadowSize: [50, 64],
            iconAnchor: [22, 22],
            shadowAnchor: [4, 62],
            popupAnchor: [-0, -30] // point from which the popup should open relative to the iconAnchor

          });
          var location_green = leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"]({
            iconUrl: 'https://www.pinclipart.com/picdir/big/174-1747068_vector-graphics-google-map-marker-green-clipart.png',
            shadowUrl: 'leaf-shadow.png',
            iconSize: [25, 40],
            shadowSize: [50, 64],
            iconAnchor: [22, 22],
            shadowAnchor: [4, 62],
            popupAnchor: [-5, -30] // point from which the popup should open relative to the iconAnchor

          });
          var stuff = [{
            name: "Pommes mit Mayo",
            kategorie: "vegan",
            produkt: "Yoa, Pommes mit mayo halt",
            location: [48.13743, 11.57549],
            id: 1
          }, {
            name: "Auch Pommes mit Mayo",
            kategorie: "Ebenso Vegan",
            produkt: "Yoa, Pommes ... nichts besonderes",
            location: [48.14, 11.58],
            id: 1
          }, {
            name: "Lange Kartoffeln",
            kategorie: "Vegetarisch zu 90%",
            produkt: "Längliche Kartoffelstreifen",
            location: [48.15, 11.578],
            id: 2
          }];
          var map = leaflet__WEBPACK_IMPORTED_MODULE_2__["map"]('map').setView([48.13743, 11.57549], 13);
          leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"]('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map);
          leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"]([48.16, 11.57549], {
            icon: person
          }).addTo(map);
          stuff.forEach(function (val) {
            var profile = {
              icon: location_green
            };

            if (val.id === 1) {
              profile = {
                icon: location
              };
            }

            var url = "img/pommes.jpg";
            leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"]([val.location[0], val.location[1]], profile).addTo(map).bindPopup('<div class="popup">' + '<img scr="' + url + '" alt`="pommes" height="150px" width="150px"/>' + '<span>Name</span><span>' + val.name + '</span>' + '<span>Kategorie</span><span>' + val.kategorie + '</span>' + '<span>Produkt</span><span>' + val.produkt + '</span>' + '</div>');
          });
        }
      }, {
        key: "onMapReady",
        value: function onMapReady(map) {
          setTimeout(function () {
            map.invalidateSize();
          }, 0);
        }
      }]);

      return MainPageComponent;
    }();

    MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-page/main-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main-page.component.scss */
      "./src/app/components/main-page/main-page.component.scss")).default]
    })], MainPageComponent);
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
      production: false
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
    /*! C:\Users\xcg2886\Documents\hackathon\hackathon\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map