webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar-modal></app-navbar-modal>\r\n<app-map-modal></app-map-modal>\r\n<app-data-modal></app-data-modal>\r\n<app-footer-modal></app-footer-modal>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_data_modal_data_modal_component__ = __webpack_require__("../../../../../src/app/component/data-modal/data-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_map_modal_map_modal_component__ = __webpack_require__("../../../../../src/app/component/map-modal/map-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_navbar_modal_navbar_modal_component__ = __webpack_require__("../../../../../src/app/component/navbar-modal/navbar-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_footer_modal_footer_modal_component__ = __webpack_require__("../../../../../src/app/component/footer-modal/footer-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_nouislider__ = __webpack_require__("../../../../ng2-nouislider/src/nouislider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_color_picker__ = __webpack_require__("../../../../ngx-color-picker/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_color_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ngx_color_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__directions_agm_directions_directive__ = __webpack_require__("../../../../../src/app/directions/agm-directions.directive.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/**
 * Component
 */




/**
 * Plugin
 */






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__component_data_modal_data_modal_component__["a" /* DataModalComponent */],
            __WEBPACK_IMPORTED_MODULE_6__component_map_modal_map_modal_component__["a" /* MapModalComponent */],
            __WEBPACK_IMPORTED_MODULE_7__component_navbar_modal_navbar_modal_component__["a" /* NavbarModalComponent */],
            __WEBPACK_IMPORTED_MODULE_8__component_footer_modal_footer_modal_component__["a" /* FooterModalComponent */],
            __WEBPACK_IMPORTED_MODULE_14__directions_agm_directions_directive__["a" /* AgmDirectionsDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_9__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyDT7xIZ1hGuhosRMMHp7euLSjKmJUgRip8',
                language: 'zh-TW'
            }),
            __WEBPACK_IMPORTED_MODULE_10_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_11_ng2_nouislider__["NouisliderModule"],
            __WEBPACK_IMPORTED_MODULE_12_angular_tree_component__["a" /* TreeModule */],
            __WEBPACK_IMPORTED_MODULE_13_ngx_color_picker__["ColorPickerModule"]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/class/a1.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return A1; });
/**
 * A1 交通事故
 */
var A1 = (function () {
    function A1() {
        this.group = 'a1';
    }
    return A1;
}());

//# sourceMappingURL=a1.js.map

/***/ }),

/***/ "../../../../../src/app/class/aedplace.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AEDPlace; });
/**
 * 新竹市AED心臟電擊器設置地點
 */
var AEDPlace = (function () {
    function AEDPlace(data) {
        this.group = 'aedplace';
        var name = data[0], addr = data[1], type = data[2], place = data[3], manager = data[4], tel = data[5], setdate = data[6], warrantydate = data[7], lat = data[8], lng = data[9];
        this.name = name;
        this.addr = addr;
        this.type = type;
        this.place = place;
        this.manager = manager;
        this.tel = tel;
        this.setdate = setdate;
        this.warrantydate = warrantydate;
        this.lat = lat;
        this.lng = lng;
    }
    return AEDPlace;
}());

//# sourceMappingURL=aedplace.js.map

/***/ }),

/***/ "../../../../../src/app/class/anihospi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AniHospi; });
/**
 * 新竹市動物醫院
 */
var AniHospi = (function () {
    function AniHospi(data) {
        this.group = 'anihospi';
        var name = data[0], doctor = data[1], tel = data[2], addr = data[3], lat = data[4], lng = data[5];
        this.name = name;
        this.doctor = doctor;
        this.tel = tel;
        this.addr = addr;
        this.lat = lat;
        this.lng = lng;
    }
    return AniHospi;
}());

//# sourceMappingURL=anihospi.js.map

/***/ }),

/***/ "../../../../../src/app/class/childrenrehabilitation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildrenRehabilitation; });
/**
 * 桃竹苗區健保特約兒童復健療育單位
 */
var ChildrenRehabilitation = (function () {
    function ChildrenRehabilitation(name, addr, tel, lat, lng) {
        this.group = 'childrenRehabilitation';
        this.name = name;
        this.addr = addr;
        this.tel = tel;
        this.lat = lat;
        this.lng = lng;
    }
    return ChildrenRehabilitation;
}());

//# sourceMappingURL=childrenrehabilitation.js.map

/***/ }),

/***/ "../../../../../src/app/class/direction.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Direction; });
/**
 * 路徑AB兩點
 */
var Direction = (function () {
    function Direction(origin, destination) {
        this.origin = origin;
        this.destination = destination;
    }
    return Direction;
}());

//# sourceMappingURL=direction.js.map

/***/ }),

/***/ "../../../../../src/app/class/firedepartment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FireDepartment; });
/**
 * 消防局
 */
var FireDepartment = (function () {
    function FireDepartment(name, lat, lng) {
        this.group = 'firedepartment';
        this.name = name;
        this.lat = lat;
        this.lng = lng;
    }
    return FireDepartment;
}());

//# sourceMappingURL=firedepartment.js.map

/***/ }),

/***/ "../../../../../src/app/class/freeWifi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FreeWifi; });
/**
 * 免費WIFI
 */
var FreeWifi = (function () {
    function FreeWifi(name, addr, lat, lng) {
        this.group = 'freewifi';
        this.name = name;
        this.addr = addr;
        this.lat = lat;
        this.lng = lng;
    }
    return FreeWifi;
}());

//# sourceMappingURL=freeWifi.js.map

/***/ }),

/***/ "../../../../../src/app/class/gas.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Gas; });
var Gas = (function () {
    function Gas(data) {
        this.group = 'gas';
        var name = data[0], manager = data[1], addr = data[2], date = data[3], lat = data[4], lng = data[5];
        this.name = name;
        this.manager = manager;
        this.addr = addr;
        this.date = date;
        this.lat = lat;
        this.lng = lng;
    }
    return Gas;
}());

//# sourceMappingURL=gas.js.map

/***/ }),

/***/ "../../../../../src/app/class/geo-json.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Features; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Geometry; });
/**
 * GeoJson 接口
 */
var GeoJson = (function () {
    function GeoJson() {
        this.type = 'FeatureCollection';
        this.features = [];
    }
    return GeoJson;
}());

/**
 * Features - 單筆資料之集合
 */
var Features = (function () {
    function Features(properties, geometry) {
        this.type = 'Feature';
        this.properties = properties;
        this.geometry = geometry;
    }
    return Features;
}());

/**
 * Geometry - 點位的座標屬性
 */
var Geometry = (function () {
    function Geometry(type, coordinates) {
        this.type = type;
        this.coordinates = coordinates;
    }
    return Geometry;
}());

//# sourceMappingURL=geo-json.js.map

/***/ }),

/***/ "../../../../../src/app/class/kindergarten.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KinderGarten; });
/**
* 幼兒園名錄
*/
var KinderGarten = (function () {
    function KinderGarten(data) {
        this.group = 'kindergarten';
        if (data) {
            var type = data[0], name = data[1], found = data[2], id = data[3], director = data[4], tel = data[5], addr = data[6], total = data[7], lat = data[8], lng = data[9];
            this.type = type;
            this.name = name;
            this.found = found;
            this.id = id;
            this.director = director;
            this.tel = tel;
            this.addr = addr;
            this.total = total;
            this.lat = lat;
            this.lng = lng;
        }
    }
    return KinderGarten;
}());

//# sourceMappingURL=kindergarten.js.map

/***/ }),

/***/ "../../../../../src/app/class/marker.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Marker; });
/**
 * 座標屬性
 */
var Marker = (function () {
    function Marker() {
        this.lat = 0;
        this.lng = 0;
    }
    return Marker;
}());

//# sourceMappingURL=marker.js.map

/***/ }),

/***/ "../../../../../src/app/class/motocharge.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotoCharge; });
/**
 * 電動東機車充電區
 */
var MotoCharge = (function () {
    function MotoCharge(data) {
        this.group = 'motocharge';
        var name = data[0], addr = data[1], count = data[2], lat = data[3], lng = data[4];
        this.name = name;
        this.addr = addr;
        this.count = count;
        this.lat = lat;
        this.lng = lng;
    }
    return MotoCharge;
}());

//# sourceMappingURL=motocharge.js.map

/***/ }),

/***/ "../../../../../src/app/class/obstacle.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Obstacle; });
var Obstacle = (function () {
    function Obstacle(data) {
        this.group = 'obstacle';
        var name = data[0], principal = data[1], telname = data[2], tel = data[3], addr = data[4], lat = data[5], lng = data[6];
        this.name = name;
        this.principal = principal;
        this.telname = telname;
        this.tel = tel;
        this.addr = addr;
        this.lat = lat;
        this.lng = lng;
    }
    return Obstacle;
}());

//# sourceMappingURL=obstacle.js.map

/***/ }),

/***/ "../../../../../src/app/class/oldagency.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OldAgency; });
/**
 * 新竹市老人福利機構一覽表
 */
var OldAgency = (function () {
    function OldAgency(data) {
        this.group = 'oldagency';
        var name = data[0], postcode = data[1], addr = data[2], tel = data[3], lat = data[4], lng = data[5];
        this.name = name;
        this.postcode = postcode;
        this.addr = addr;
        this.tel = tel;
        this.lat = lat;
        this.lng = lng;
    }
    return OldAgency;
}());

//# sourceMappingURL=oldagency.js.map

/***/ }),

/***/ "../../../../../src/app/class/parenting.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Parenting; });
/**
 * 托嬰中心
 */
var Parenting = (function () {
    function Parenting(data) {
        this.group = 'parenting';
        var name = data[0], president = data[1], addr = data[2], tel = data[3], lat = data[4], lng = data[5];
        this.name = name;
        this.president = president;
        this.addr = addr;
        this.tel = tel;
        this.lat = lat;
        this.lng = lng;
    }
    return Parenting;
}());

//# sourceMappingURL=parenting.js.map

/***/ }),

/***/ "../../../../../src/app/class/park.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Park; });
/**
 * 新竹市公有停車場相關資訊
 */
var Park = (function () {
    function Park(data) {
        this.group = 'park';
        var name = data[0], carCount = data[1], motoCount = data[2], addr = data[3], serviceTime = data[4], payWeek = data[5], payWeekend = data[6], payMode = data[7], other = data[8], monthMode = data[9], memo = data[10], lat = data[11], lng = data[12];
        this.name = name;
        this.carCount = carCount;
        this.motoCount = motoCount;
        this.addr = addr;
        this.serviceTime = serviceTime;
        this.payWeek = payWeek;
        this.payWeekend = payWeekend;
        this.payMode = payMode;
        this.other = other;
        this.monthMode = monthMode;
        this.memo = memo;
        this.lat = lat;
        this.lng = lng;
    }
    return Park;
}());

//# sourceMappingURL=park.js.map

/***/ }),

/***/ "../../../../../src/app/class/policedepartment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PliceDepartment; });
/**
 * 警察局
 */
var PliceDepartment = (function () {
    function PliceDepartment() {
        this.group = 'plice';
    }
    return PliceDepartment;
}());

//# sourceMappingURL=policedepartment.js.map

/***/ }),

/***/ "../../../../../src/app/class/population.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Population; });
/**
 * 人口數量變動
 */
var Population = (function () {
    function Population() {
        this.FxChiayi = [
            {
                a: 553948.1425,
                b: -581.785489,
                c: -10.297091
            }, {
                a: 0.278969,
                b: -0.073024,
                c: 0.000845
            }, {
                a: -1.50288,
                b: 0.141537,
                c: -0.003555
            }
        ];
        this.FxYunlin = [
            {
                a: 728300.0431,
                b: -540.313088,
                c: -7.064001
            }, {
                a: 0.075185,
                b: -0.030418,
                c: 0.000209
            }, {
                a: -1.428443,
                b: 0.173646,
                c: -0.004368
            }
        ];
    }
    return Population;
}());

//# sourceMappingURL=population.js.map

/***/ }),

/***/ "../../../../../src/app/class/school.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return School; });
/**
 * 新竹市立國高中通訊資料
 */
var School = (function () {
    function School(name, addr, lat, lng) {
        this.group = 'school';
        this.name = name;
        this.addr = addr;
        this.lat = lat;
        this.lng = lng;
    }
    return School;
}());

//# sourceMappingURL=school.js.map

/***/ }),

/***/ "../../../../../src/app/class/speedmonitor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeedMonitor; });
/**
 * 新竹市違規自動照相固定桿設置地點
 */
var SpeedMonitor = (function () {
    function SpeedMonitor() {
        this.group = 'speedmonitor';
    }
    return SpeedMonitor;
}());

//# sourceMappingURL=speedmonitor.js.map

/***/ }),

/***/ "../../../../../src/app/class/vaccinehospi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VaccineHospi; });
/**
 * 新竹市預防接種合約院所名冊
 */
var VaccineHospi = (function () {
    function VaccineHospi(data) {
        this.group = 'vaccinehospi';
        var name = data[0], code = data[1], tel = data[2], addr = data[3], lat = data[4], lng = data[5];
        this.name == name;
        this.code = code;
        this.tel = tel;
        this.addr = addr;
        this.lat = lat;
        this.lng = lng;
    }
    return VaccineHospi;
}());

//# sourceMappingURL=vaccinehospi.js.map

/***/ }),

/***/ "../../../../../src/app/class/warningplace.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WarningPlace; });
/**
 * 婦幼安全警示地點
 */
var WarningPlace = (function () {
    function WarningPlace(data) {
        this.group = 'warningplace';
        var name = data[0], place = data[1], branch = data[2], lat = data[3], lng = data[4], lat2 = data[5], lng2 = data[6];
        this.name = name;
        this.place = place;
        this.branch = branch;
        this.lat = lat;
        this.lng = lng;
        this.lat2 = lat2;
        this.lng2 = lng2;
    }
    return WarningPlace;
}());

//# sourceMappingURL=warningplace.js.map

/***/ }),

/***/ "../../../../../src/app/class/yearstructure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Yearstructure; });
/**
 * 年齡結構指標
 */
var Yearstructure = (function () {
    function Yearstructure() {
        this.FxChiayi = [
            {
                a: 18.112324,
                b: -0.057336,
                c: -0.000037
            }, {
                a: 66.130632,
                b: 0.036181,
                c: -0.000201
            }, {
                a: 15.757043,
                b: 0.021155,
                c: 0.000238
            }
        ];
        this.FxYunlin = [
            {
                a: 19.770272,
                b: -0.048179,
                c: -0.000027
            }, {
                a: 64.945902,
                b: 0.036008,
                c: -0.000258
            }, {
                a: 15.283826,
                b: 0.012171,
                c: 0.000285
            }
        ];
    }
    return Yearstructure;
}());

//# sourceMappingURL=yearstructure.js.map

/***/ }),

/***/ "../../../../../src/app/class/youbike.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YouBike; });
/**
 * 新竹市公共自行車租賃系統(YouBike)
 */
var YouBike = (function () {
    function YouBike() {
        this.group = 'youbike';
    }
    return YouBike;
}());

//# sourceMappingURL=youbike.js.map

/***/ }),

/***/ "../../../../../src/app/component/data-modal/data-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-lg {\r\n  max-width: 90%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/data-modal/data-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"ysDataTable\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\">年齡結構指標</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"table-responsive\">\r\n            <table id=\"YearTable\" class=\"table table-striped table-bordered\" width=\"100%\" cellspacing=\"0\">\r\n              <thead>\r\n                <tr>\r\n                  <th>No.</th>\r\n                  <th>year</th>\r\n                  <th>month</th>\r\n                  <th>yearmonth</th>\r\n                  <th>city</th>\r\n                  <th>zero_twelve</th>\r\n                  <th>twelve_seventeen</th>\r\n                  <th>twenty</th>\r\n                  <th>sixty_five</th>\r\n                  <th>twnty_sixty</th>\r\n                  <th>seventeen_twenty</th>\r\n                  <th>zero_twenty</th>\r\n                  <th>zero_seventeen</th>\r\n                  <th>seventeen_sixty</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let data of yearData\">\r\n                  <td>{{data.no}}</td>\r\n                  <td>{{data.year}}</td>\r\n                  <td>{{data.month}}</td>\r\n                  <td>{{data.yearmonth}}</td>\r\n                  <td>{{data.city}}</td>\r\n                  <td>{{data.zero_twelve}}</td>\r\n                  <td>{{data.twelve_seventeen}}</td>\r\n                  <td>{{data.twenty}}</td>\r\n                  <td>{{data.sixty_five}}</td>\r\n                  <td>{{data.twnty_sixty}}</td>\r\n                  <td>{{data.seventeen_twenty}}</td>\r\n                  <td>{{data.zero_twenty}}</td>\r\n                  <td>{{data.zero_seventeen}}</td>\r\n                  <td>{{data.seventeen_sixty}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"popuDataTable\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\">人口數量變動</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"table-responsive\">\r\n            <table id=\"PopuTable\" class=\"table table-striped table-bordered\" width=\"100%\" cellspacing=\"0\">\r\n              <thead>\r\n                <tr>\r\n                  <th>No.</th>\r\n                  <th>year</th>\r\n                  <th>season</th>\r\n                  <th>year_season</th>\r\n                  <th>city</th>\r\n                  <th>total_population</th>\r\n                  <th>total_population_increase</th>\r\n                  <th>births</th>\r\n                  <th>deaths</th>\r\n                  <th>immigrants</th>\r\n                  <th>emigrants</th>\r\n                  <th>natural_increase_rate</th>\r\n                  <th>social_increase_rate</th>\r\n                  <th>total_increase_rate</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let data of popuData\">\r\n                  <td>{{data.no}}</td>\r\n                  <td>{{data.year}}</td>\r\n                  <td>{{data.season}}</td>\r\n                  <td>{{data.year_season}}</td>\r\n                  <td>{{data.city}}</td>\r\n                  <td>{{data.total_population}}</td>\r\n                  <td>{{data.total_population_increase}}</td>\r\n                  <td>{{data.births}}</td>\r\n                  <td>{{data.deaths}}</td>\r\n                  <td>{{data.immigrants}}</td>\r\n                  <td>{{data.emigrants}}</td>\r\n                  <td>{{data.natural_increase_rate}}</td>\r\n                  <td>{{data.social_increase_rate}}</td>\r\n                  <td>{{data.total_increase_rate}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/data-modal/data-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_population_structure_service__ = __webpack_require__("../../../../../src/app/service/population-structure.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_year_structure_service__ = __webpack_require__("../../../../../src/app/service/year-structure.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var DataModalComponent = (function () {
    function DataModalComponent(popuService, yearService) {
        this.popuService = popuService;
        this.yearService = yearService;
        this.popuData = [];
        this.yearData = [];
    }
    DataModalComponent.prototype.ngOnInit = function () {
        this.getPopuCSV();
        this.getYearCSV();
    };
    // 人口數量變動
    DataModalComponent.prototype.getPopuCSV = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popuService.readCsv('Population_Chiayi')
                            .subscribe(function (result) {
                            _this.popuData = result;
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.popuService.readCsv('Population_Yunlin')
                                .subscribe(function (result) {
                                _this.popuData = _this.popuData.concat(result);
                                setTimeout(function () { $('#PopuTable').DataTable({ "order": [[4, "asc"]] }); }, 500);
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // 年齡結構指標
    DataModalComponent.prototype.getYearCSV = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.yearService.readCsv('YearStructure_Chiayi')
                            .subscribe(function (result) {
                            _this.yearData = result;
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.yearService.readCsv('YearStructure_Yunlin')
                                .subscribe(function (result) {
                                _this.yearData = _this.yearData.concat(result);
                                setTimeout(function () { $('#YearTable').DataTable({ "order": [[4, "asc"]] }); }, 500);
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return DataModalComponent;
}());
DataModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-data-modal',
        template: __webpack_require__("../../../../../src/app/component/data-modal/data-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/data-modal/data-modal.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__service_population_structure_service__["a" /* PopulationStructureService */], __WEBPACK_IMPORTED_MODULE_2__service_year_structure_service__["a" /* YearStructureService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_population_structure_service__["a" /* PopulationStructureService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_population_structure_service__["a" /* PopulationStructureService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_year_structure_service__["a" /* YearStructureService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_year_structure_service__["a" /* YearStructureService */]) === "function" && _b || Object])
], DataModalComponent);

var _a, _b;
//# sourceMappingURL=data-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/footer-modal/footer-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\r\n    padding: 2rem 0;\r\n    background: #2E3542;\r\n}\r\n\r\n.footer-source {\r\n    padding-bottom: 4rem;\r\n}\r\n\r\n.footer-source h5 {\r\n    padding: 15px 0;\r\n    color: #C7C7C7;\r\n    border-bottom: 1px solid #29303C;\r\n}\r\n\r\n.footer-source ul {\r\n    padding: 0;\r\n    list-style-type: none;\r\n}\r\n\r\n.footer-source ul li a {\r\n    color: #888;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.footer-bottom ul {\r\n    margin: 6px 0;\r\n}\r\n\r\n.footer-bottom ul li a {\r\n    margin: 0 4px;\r\n    color: #707070;\r\n    font-weight: normal;\r\n}\r\n\r\n.footer-bottom ul li+li::before {\r\n    content: '\\FF5C';\r\n    color: #666;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/footer-modal/footer-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n  <div class=\"container\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 text-center\">\r\n        <h2 class=\"title\">資料來源</h2>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"footer-source row\">\r\n      <div class=\"col-lg-3\">\r\n        <h5>居住</h5>\r\n        <ul>\r\n          <li>\r\n            <a href=\"http://opendata.hccg.gov.tw/dataset/administration-20150411-140738-8116\" target=\"_blank\">新竹市政府免費無線上網熱點地點資訊</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"http://opendata.hccg.gov.tw/dataset/hccepb-20150121-095102-5357\" target=\"_blank\">新竹市垃圾清運路線總表</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"http://opendata.hccg.gov.tw/dataset/society-20161206-180829-7002/resource/acaf1c94-9fab-4643-9006-9fc08b0186eb\"\r\n              target=\"_blank\">早安飽貝餐券兌換商店</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"http://opendata.hccg.gov.tw/dataset/tourism-20150127-131542-4802\" target=\"_blank\">新竹市公廁地點資訊</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-lg-3\">\r\n        <h5>交通</h5>\r\n        <ul>\r\n          <li>\r\n            <a href=\"http://opendata.hccg.gov.tw/dataset/traffic-20160624-172329-4384\" target=\"_blank\">新竹市公共自行車租賃系統(YouBike)</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"http://opendata.hccg.gov.tw/dataset/traffic-20150128-103132-7393\" target=\"_blank\">新竹市公有停車場相關資訊</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"http://opendata.hccg.gov.tw/dataset/construction-20151222-143922-8572\" target=\"_blank\">新竹市加油(氣)站</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"http://opendata.hccg.gov.tw/dataset/hccepb-20150129-105059-8793\" target=\"_blank\">新竹市電動機車充電站</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"http://opendata.hccg.gov.tw/dataset/hccp-20150122-143422-6575\" target=\"_blank\">新竹市違規自動照相固定桿設置地點</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-lg-3\">\r\n        <h5>教育</h5>\r\n        <ul>\r\n          <li>\r\n            <a href=\"http://opendata.hccg.gov.tw/dataset/hc-20150122-150339-0985\" target=\"_blank\">新竹市幼兒園名錄</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"http://opendata.hccg.gov.tw/dataset/hc-20151124-170057-6374\" target=\"_blank\">新竹市立國中小通訊資料</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"http://opendata.hccg.gov.tw/dataset/society-20150122-091947-9019/resource/c85e5d91-c6a6-447b-988d-7bdb38d675c1\"\r\n              target=\"_blank\">新竹市私立托嬰中心名冊</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-lg-3\">\r\n        <h5>醫療</h5>\r\n        <ul>\r\n          <li>\r\n            <a href=\"http://opendata.hccg.gov.tw/dataset/puppy1-20160505-232759-0862\" target=\"_blank\">新竹市動物醫院</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"http://opendata.hccg.gov.tw/dataset/hcchb-20150303-131226-1934\" target=\"_blank\">新竹市預防接種合約院所名冊</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"http://opendata.hccg.gov.tw/dataset/society-20151013-135026-8826\" target=\"_blank\">桃竹苗區健保特約兒童復健療育單位</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"http://opendata.hccg.gov.tw/dataset/hcchb-20150127-115419-3508\" target=\"_blank\">新竹市AED心臟電擊器設置地點</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"footer-source row\">\r\n      <div class=\"col-lg-3\">\r\n        <h5>犯罪</h5>\r\n        <ul>\r\n          <li>\r\n            <a href=\"https://data.gov.tw/dataset/6247\" target=\"_blank\">婦幼安全警示地點</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"http://opendata.hccg.gov.tw/dataset/hccp-20150122-143102-7978\" target=\"_blank\">新竹市錄影監視系統設置地點</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-lg-3\">\r\n        <h5>交通\r\n        </h5>\r\n        <ul>\r\n          <li>\r\n            <a href=\"http://opendata.hccg.gov.tw/dataset/traffic-20150305-174331-5727\" target=\"_blank\">新竹市載運砂石大貨(拖)車進入市區開放行駛路線</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-lg-3\">\r\n        <h5>警消</h5>\r\n        <ul>\r\n          <li>\r\n            <a href=\"http://opendata.hccg.gov.tw/dataset/hcfd-20150126-153841-5660\" target=\"_blank\">新竹市消防局消防分隊駐地位置座標</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"http://opendata.hccg.gov.tw/dataset/hccp-20150122-142946-6414\" target=\"_blank\">新竹市警察機關資料</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-lg-3\">\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <!-- <hr>\r\n\r\n    <div class=\"footer-bottom row\">\r\n      <div class=\"col-lg-4\">\r\n        <span class=\"text-muted\">Create By 李董與他的四位快樂好夥伴ver2</span>\r\n      </div>\r\n      <div class=\"col-lg-8\">\r\n        <div class=\"row\">\r\n          <span class=\"text-muted\">Thanks for：</span>\r\n        </div>\r\n        <div class=\"row\">\r\n          <ul class=\"nav\">\r\n            <li><a href=\"https://www.facebook.com/songlin.lee.3?fref=ts\" target=\"_blank\">李董</a></li>\r\n            <li><a href=\"https://www.facebook.com/profile.php?id=100001759966645\" target=\"_blank\">阿成</a></li>\r\n            <li><a href=\"https://zh-tw.facebook.com/people/%E8%95%AD%E7%9B%9F%E8%88%88/100002536325759\" target=\"_blank\">Monshin</a></li>\r\n            <li><a href=\"https://zh-tw.facebook.com/people/Jessie-Wang/100001554500247\" target=\"_blank\">Smile Angle Jessie</a></li>\r\n            <li><a href=\"https://robby570.tw\" target=\"_blank\">Robby</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/component/footer-modal/footer-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterModalComponent = (function () {
    function FooterModalComponent() {
    }
    return FooterModalComponent;
}());
FooterModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer-modal',
        template: __webpack_require__("../../../../../src/app/component/footer-modal/footer-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/footer-modal/footer-modal.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterModalComponent);

//# sourceMappingURL=footer-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/map-modal/map-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard {\r\n    margin: 60px auto 90px;\r\n}\r\n\r\n#currentGroup {\r\n    background: #3A4354 !important;\r\n    padding: 2rem 0 5rem !important;\r\n}\r\n\r\n#futureGroup {\r\n    background: #343C4B !important;\r\n    padding: 2rem 0 !important;\r\n}\r\n\r\n.gmap {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.gmap .gmap-menu {\r\n    z-index: 999;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    padding: 1rem;\r\n    width: 300px;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, .7);\r\n    color: #fff;\r\n}\r\n\r\n.gmap .result-box {\r\n    position: absolute;\r\n    z-index: 99999;\r\n    top: 0;\r\n    right: 0;\r\n    width: 140px;\r\n    color: #fff;\r\n    background: rgba(0, 0, 0, .3);\r\n    border-bottom-left-radius: 8px;\r\n}\r\n\r\n.gmap .result-box p {\r\n    padding: 0;\r\n    margin: 8px 12px;\r\n}\r\n\r\n\r\n/* \r\n  設計巧思 by Rplus \r\n  https://codepen.io/Rplus/full/awMVjy/\r\n*/\r\n\r\n.gmap-mask {\r\n    visibility: hidden;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    color: rgba(255, 255, 255, .6);\r\n    text-transform: uppercase;\r\n    font-size: 4vmin;\r\n    font-weight: 900;\r\n    font-family: sans-serif;\r\n    background-color: rgba(0, 0, 0, .2);\r\n}\r\n\r\n.gmap-mask:active,\r\n.agm-map-container-inner:hover+.gmap-mask {\r\n    visibility: hidden;\r\n}\r\n\r\n.gmap-loading {\r\n    display: none;\r\n    position: absolute;\r\n    top: 25%;\r\n    left: 0;\r\n    right: 0;\r\n    width: 150px;\r\n    height: 150px;\r\n}\r\n\r\n.gmap-loading .sk-circle::before {\r\n    background-color: #3A4354;\r\n}\r\n\r\nagm-map {\r\n    height: 600px;\r\n    width: 100%;\r\n}\r\n\r\n#charGroup {\r\n    margin: 30px auto;\r\n}\r\n\r\n#charGroup .card-inverse {\r\n    color: #f1f1f1;\r\n    background: #444;\r\n}\r\n\r\n#carePercent {\r\n    padding-top: 15%;\r\n}\r\n\r\n#carePercent .card-title {\r\n    padding: 10px 5px;\r\n    margin: 15px auto 10px;\r\n    font-size: 4rem;\r\n    color: #fff;\r\n    background: #86C7F3;\r\n    border-radius: 6px;\r\n}\r\n\r\n#carePercent .fa-blind {\r\n    color: #888;\r\n}\r\n\r\n#carePercent .fa-male {\r\n    color: #444;\r\n}\r\n\r\n.fix-col {\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.fix-col .col-sm-3 {\r\n    padding-right: 0px;\r\n    max-width: 20%;\r\n}\r\n\r\n.fix-col .col-sm-9 {\r\n    padding-left: 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/map-modal/map-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Breadcrumbs -->\r\n<div class=\"container dashboard\">\r\n  <header>\r\n    <h1>生活便利</h1>\r\n  </header>\r\n  <!-- Icon Cards -->\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-3 col-sm-6 mb-3\">\r\n      <div class=\"card card-inverse card-primary o-hidden h-100\">\r\n        <div class=\"card-block\">\r\n          <i class=\"fa fa-3x fa-home\"></i>\r\n          <h1 class=\"text-center\">\r\n            {{ pointer_life.live }}\r\n          </h1>\r\n        </div>\r\n        <div class=\"card-footer small\">\r\n          <h5>居住指數</h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-sm-6 mb-3\">\r\n      <div class=\"card card-inverse card-danger o-hidden h-100\">\r\n        <div class=\"card-block\">\r\n          <i class=\"fa fa-3x fa-bus\"></i>\r\n          <h1 class=\"text-center\">\r\n            {{ pointer_life.traffic }}\r\n          </h1>\r\n        </div>\r\n        <div class=\"card-footer small\">\r\n          <h5>交通便利指數</h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-sm-6 mb-3\">\r\n      <div class=\"card card-inverse card-success o-hidden h-100\">\r\n        <div class=\"card-block\">\r\n          <i class=\"fa fa-3x fa-graduation-cap\"></i>\r\n          <h1 class=\"text-center\">\r\n            {{ pointer_life.edu }}\r\n          </h1>\r\n        </div>\r\n        <div class=\"card-footer small\">\r\n          <h5>教育指數</h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-sm-6 mb-3\">\r\n      <div class=\"card card-inverse card-warning o-hidden h-100\">\r\n        <div class=\"card-block\">\r\n          <i class=\"fa fa-3x fa-heartbeat\"></i>\r\n          <h1 class=\"text-center\">\r\n            {{ pointer_life.hospital }}\r\n          </h1>\r\n        </div>\r\n        <div class=\"card-footer small\">\r\n          <h5>醫療指數</h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<!-- Breadcrumbs -->\r\n<div class=\"container dashboard\">\r\n  <header>\r\n    <h1>婦幼安全</h1>\r\n  </header>\r\n  <!-- Icon Cards -->\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-4 col-sm-6 mb-4\">\r\n      <div class=\"card card-inverse card-primary o-hidden h-100\">\r\n        <div class=\"card-block\">\r\n          <i class=\"fa fa-3x fa-reddit-alien\"></i>\r\n          <h1 class=\"text-center\">\r\n            {{ pointer_women_child.crime }}\r\n          </h1>\r\n        </div>\r\n        <div class=\"card-footer small\">\r\n          <h5>犯罪指數</h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-sm-6 mb-4\">\r\n      <div class=\"card card-inverse card-danger o-hidden h-100\">\r\n        <div class=\"card-block\">\r\n          <i class=\"fa fa-3x fa-warning\"></i>\r\n          <h1 class=\"text-center\">\r\n            {{ pointer_women_child.traffic }}</h1>\r\n        </div>\r\n        <div class=\"card-footer small\">\r\n          <h5>交通安全指數</h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-sm-6 mb-4\">\r\n      <div class=\"card card-inverse card-success o-hidden h-100\">\r\n        <div class=\"card-block\">\r\n          <i class=\"fa fa-3x fa-shield\"></i>\r\n          <h1 class=\"text-center\">\r\n            {{ pointer_women_child.police }}</h1>\r\n        </div>\r\n        <div class=\"card-footer small\">\r\n          <h5>警消指數</h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div id=\"currentGroup\">\r\n\r\n\r\n  <div class=\"container\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 text-center\">\r\n        <h2 class=\"title\">環域與路徑分析</h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"container\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"row form-group\">\r\n          <label for=\"example-text-input\" class=\"col-form-label co-custom\">起點：</label>\r\n          <div class=\"col-md-6\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addr\" placeholder=\"placeholderText\" />\r\n          </div>\r\n          <div class=\"col-md-1\">\r\n            <button type=\"button\" class=\"btn btn-success btn-search co-custom form-control\" (click)=\"setCircle(null,null)\">定位</button>\r\n          </div>\r\n          <div class=\"col-md-1\">\r\n            <button type=\"button\" class=\"btn btn-success btn-search co-custom form-control\" (click)=\"chkCon()\">檢測</button>\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            <button type=\"button\" class=\"btn btn-success btn-search co-custom form-control\" (click)=\"analyticsArea()\">環域分析</button>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row form-group\">\r\n          <label for=\"example-text-input\" class=\"col-form-label co-custom\">終點：</label>\r\n          <div class=\"col-md-6\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addr2\" placeholder=\"placeholderText\" />\r\n          </div>\r\n          <!-- <div class=\"col-md-2 form-group\">\r\n            <select class=\"form-control custom-select\" name=\"selGroup\" [(ngModel)]=\"travelModeSelect\">\r\n              <option *ngFor=\"let t of travelode\" [ngValue]=\"t.mode\">{{ t.name }}</option>\r\n            </select>\r\n          </div> -->\r\n          <div class=\"col-md-2\">\r\n            <button type=\"button\" class=\"btn btn-success btn-search co-custom form-control\" (click)=\"analyticsDirections()\">路徑建議</button>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row form-group\">\r\n          <label class=\"col-form-label co-custom\">經度：</label>\r\n          <div class=\"col-md-2\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lat\" readonly />\r\n          </div>\r\n          <label class=\"col-form-label co-custom\">緯度：</label>\r\n          <div class=\"col-md-2\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lng\" readonly />\r\n          </div>\r\n          <label class=\"col-form-label co-custom\">半徑：</label>\r\n          <div class=\"col-2\">\r\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"radius\" />\r\n          </div>\r\n          <label class=\"col-form-label co-custom\">顏色：</label>\r\n          <div class=\"col-2\">\r\n            <input class=\"form-control\" [(colorPicker)]=\"color\" [style.background]=\"color\" [value]=\"color\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"container-fluid\">\r\n    <!-- <div class=\"col-3\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header card-inverse card-success co-custom\">\r\n                圖層控制\r\n              </div>\r\n              <div class=\"card-block\">\r\n                <blockquote class=\"card-blockquote\">\r\n                  <tree-root #tree [nodes]=\"nodes\" [options]=\"treeOptions\">\r\n                    <template #treeNodeTemplate let-node=\"node\" let-index=\"index\">\r\n                      <input (change)=\"check(node, $event)\" type=\"checkbox\" [indeterminate]=\"node.data.indeterminate\" [checked]=\"node.data.checked\"> {{ node.data.name }}\r\n                    </template>\r\n                  </tree-root>\r\n                </blockquote>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n    <div class=\"gmap\">\r\n      <div class=\"gmap-menu\">\r\n        <tree-root #tree [nodes]=\"nodes\" [options]=\"treeOptions\">\r\n          <template #treeNodeTemplate let-node=\"node\" let-index=\"index\">\r\n            <input (change)=\"check(node, $event)\" type=\"checkbox\" [indeterminate]=\"node.data.indeterminate\" [checked]=\"node.data.checked\"> {{ node.data.name }}\r\n          </template>\r\n        </tree-root>\r\n      </div>\r\n      <!-- <div class=\"result-box\">\r\n                <p>監視器材：{{countSecure}}</p>\r\n              </div> -->\r\n      <agm-map #map class=\"gmap-box\" [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [disableDefaultUI]=\"false\" [fitBounds]=\"bounds\">\r\n        <agm-directions *ngIf=\"direction\" [origin]=\"direction.origin\" [destination]=\"direction.destination\" [waypoints]=\"waypoints\"></agm-directions>\r\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n        <agm-circle [latitude]=\"lat\" [longitude]=\"lng\" [radius]=\"radius\" [fillColor]=\"color\" [fillOpacity]=\"0.6\"></agm-circle>\r\n        <!-- 圖層資料 -->\r\n        <div *ngFor=\"let g of layerData\">\r\n          <agm-data-layer *ngIf=\"g.show && g.parent_id < 4\" [geoJson]=\"g.geojson\" (layerClick)=\"infoWindow.open();geoLayerClick($event)\"\r\n            [style]=\"styleLayer\"></agm-data-layer>\r\n        </div>\r\n        <div *ngFor=\"let lines of layerData\">\r\n          <div *ngIf=\"lines.parent_id == 4\">\r\n            <agm-polyline *ngFor=\"let geo of lines.geojson ; let idx = index\" [strokeColor]=\"color\">\r\n              <div>\r\n                <agm-polyline-point *ngFor=\"let p of geo.path\" [latitude]=\"p.lat\" [longitude]=\"p.lng\"></agm-polyline-point>\r\n              </div>\r\n            </agm-polyline>\r\n          </div>\r\n        </div>\r\n        <agm-info-window #infoWindow [isOpen]=\"infowinIsOpen\" [latitude]=\"infowinLat\" [longitude]=\"infowinLng\">\r\n          <strong>{{infowinMsg[0]}}</strong>\r\n          <p>{{infowinMsg[1]}}</p>\r\n          <p>{{infowinMsg[2]}}</p>\r\n        </agm-info-window>\r\n      </agm-map>\r\n      <!-- <div class=\"gmap-mask\">click to unlock</div> -->\r\n      <div class=\"sk-fading-circle gmap-loading\">\r\n        <div class=\"sk-circle1 sk-circle\"></div>\r\n        <div class=\"sk-circle2 sk-circle\"></div>\r\n        <div class=\"sk-circle3 sk-circle\"></div>\r\n        <div class=\"sk-circle4 sk-circle\"></div>\r\n        <div class=\"sk-circle5 sk-circle\"></div>\r\n        <div class=\"sk-circle6 sk-circle\"></div>\r\n        <div class=\"sk-circle7 sk-circle\"></div>\r\n        <div class=\"sk-circle8 sk-circle\"></div>\r\n        <div class=\"sk-circle9 sk-circle\"></div>\r\n        <div class=\"sk-circle10 sk-circle\"></div>\r\n        <div class=\"sk-circle11 sk-circle\"></div>\r\n        <div class=\"sk-circle12 sk-circle\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n<!-- <div id=\"futureGroup\" class=\"\">\r\n\r\n  <div class=\"container\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 text-center\">\r\n        <h3 class=\"title\">高齡化社會發展趨勢之預測評估</h3>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-custom\">\r\n            <i class=\"fa fa-table\" aria-hidden=\"true\"></i>&nbsp;年齡結構指標（ 2012-01 ）\r\n          </div>\r\n          <div class=\"card-block\">\r\n            <blockquote class=\"card-blockquote\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                  <h5>\r\n                    <span class=\"badge badge-custom\">\r\n                      <var>y</var> =\r\n                      <var>a</var> +\r\n                      <var>b</var> *\r\n                      <var>x</var> +\r\n                      <var>c</var> *\r\n                      <var>x²</var>\r\n                    </span>\r\n                  </h5>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-2\">\r\n                  <label class=\"col-form-label\">縣市：</label>\r\n                </div>\r\n                <div class=\"col-sm-10\">\r\n                  <select id=\"optionCity\" class=\"form-control\" [(ngModel)]=\"cityYearSelect\" (ngModelChange)=\"optionYearChange($event)\">\r\n                    <option disabled [ngValue]=\"-1\">請選擇縣市</option>\r\n                    <option *ngFor=\"let option of cityYearGroup; let itemIndex=i ndex\" [ngValue]=\"option.enName\">{{option.chName }}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-2\">\r\n                  <label class=\"col-form-label\">指標：</label>\r\n                </div>\r\n                <div class=\"col-sm-10\">\r\n                  <nouislider class=\"nouislider\" [min]=\"1\" [max]=\"250\" [step]=\"1\" [(ngModel)]=\"yearValueSlider\r\n           \" (ngModelChange)=\"onYearSliderChange($event)\" [disabled]=\"yearActiveSlider\"></nouislider>\r\n                </div>\r\n              </div>\r\n              <div class=\"row fix-col\">\r\n                <div class=\"col-sm-3\">\r\n                  <label class=\"col-form-label\">估計年月：</label>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                  <label class=\"col-form-label\">{{yearDateSlider}}</label>\r\n                </div>\r\n              </div>\r\n              <table class=\"table table-bordered table-inverse table-custom\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>0~17</th>\r\n                    <th>17~65</th>\r\n                    <th>65歲以上</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td>{{ yearDataPercent[0] }}%</td>\r\n                    <td>{{ yearDataPercent[1] }}%</td>\r\n                    <td>{{ yearDataPercent[2] }}%</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </blockquote>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-custom\">\r\n            <i class=\"fa fa-table\" aria-hidden=\"true\"></i>&nbsp;人口數量預估（ 2007-01 ）\r\n          </div>\r\n          <div class=\"card-block\">\r\n            <blockquote class=\"card-blockquote\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                  <h5>\r\n                    <span class=\"badge badge-custom\">\r\n                      <var>y</var> =\r\n                      <var>a</var> +\r\n                      <var>b</var> *\r\n                      <var>x</var> +\r\n                      <var>c</var> *\r\n                      <var>x²</var>\r\n                    </span>\r\n                  </h5>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-2\">\r\n                  <label class=\"col-form-label\">縣市：</label>\r\n                </div>\r\n                <div class=\"col-sm-10\">\r\n                  <select id=\"optionCity\" class=\"form-control\" [(ngModel)]=\"cityPopuSelect\" (ngModelChange)=\"optionPopuChange($event)\">\r\n                    <option disabled [ngValue]=\"-1\">請選擇縣市</option>\r\n                    <option *ngFor=\"let option of cityPopuGroup; let itemIndex=i ndex\" [ngValue]=\"option.enName\">{{option.chName }}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-2\">\r\n                  <label class=\"col-form-label\">指標：</label>\r\n                </div>\r\n                <div class=\"col-sm-10\">\r\n                  <nouislider class=\"nouislider\" [min]=\"1\" [max]=\"180\" [step]=\"1\" [(ngModel)]=\"popuValueSlider\r\n           \" (ngModelChange)=\"onPopuSliderChange($event)\" [disabled]=\"popuActiveSlider\"></nouislider>\r\n                </div>\r\n              </div>\r\n              <div class=\"row fix-col\">\r\n                <div class=\"col-sm-3\">\r\n                  <label class=\"col-form-label\">估計年月：</label>\r\n                </div>\r\n                <div class=\"col-sm-9 text-left\">\r\n                  <label class=\"col-form-label\">{{popuDateSlider}}</label>\r\n                </div>\r\n              </div>\r\n              <table class=\"table table-bordered table-inverse table-custom\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>總人口數</th>\r\n                    <th>自然成長係數</th>\r\n                    <th>社會成長係數</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td>{{ popuDataPercent[0] }}人</td>\r\n                    <td>{{ popuDataPercent[1] }}%</td>\r\n                    <td>{{ popuDataPercent[2] }}%</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </blockquote>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div id=\"charGroup\" class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-4 col-sm-6 mb-4\">\r\n        <div class=\"card h-100\">\r\n          <div class=\"card-header card-inverse\">\r\n            <i class=\"fa fa-pie-chart\"></i> 年齡結構分析\r\n          </div>\r\n          <div class=\"card-block\">\r\n            <canvas baseChart [data]=\"yearDataPercent\" [labels]=\"doughnutChartLabels\" [chartType]=\"doughnutChartType\"></canvas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-xl-4 col-sm-6 mb-4\">\r\n        <div class=\"card h-100\">\r\n          <div class=\"card-header card-inverse\">\r\n            <i class=\"fa fa-area-chart\"></i> 扶養比\r\n          </div>\r\n          <div id=\"carePercent\" class=\"card-block\">\r\n            <div class=\"row text-center\">\r\n              <div class=\"col-12\">\r\n                <i class=\"fa fa-blind fa-3x\" aria-hidden=\"true\" *ngFor=\"let i of yearCountOldMan\"></i>\r\n              </div>\r\n            </div>\r\n            <div class=\"row text-center\">\r\n              <div class=\"col-12\">\r\n                <h1 class=\"text-center card-title\">{{ yearCountPercent }}%</h1>\r\n              </div>\r\n            </div>\r\n            <div class=\"row text-center\">\r\n              <div class=\"col-12\">\r\n                <i class=\"fa fa-male fa-3x\" aria-hidden=\"true\" *ngFor=\"let i of yearCountMale\"></i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-xl-4 col-sm-6 mb-4\">\r\n        <div class=\"card h-100\">\r\n          <div class=\"card-header card-inverse\">\r\n            <i class=\"fa fa-bar-chart\"></i> 人口數量預測\r\n          </div>\r\n          <div class=\"card-block\">\r\n            <canvas baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\r\n           \" [legend]=\"barChartLegend\" [chartType]=\"barChartType\"></canvas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/component/map-modal/map-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_gmaps_service__ = __webpack_require__("../../../../../src/app/service/gmaps.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_layer_service__ = __webpack_require__("../../../../../src/app/service/layer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_year_structure_service__ = __webpack_require__("../../../../../src/app/service/year-structure.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_population_structure_service__ = __webpack_require__("../../../../../src/app/service/population-structure.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__class_direction__ = __webpack_require__("../../../../../src/app/class/direction.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__class_marker__ = __webpack_require__("../../../../../src/app/class/marker.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__map_layer_control__ = __webpack_require__("../../../../../src/app/map/layer-control.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__map_layer_data__ = __webpack_require__("../../../../../src/app/map/layer-data.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var MapModalComponent = (function () {
    function MapModalComponent(popuService, yearService, gmapService, layerService, mapsAPILoader, zone, marker) {
        this.popuService = popuService;
        this.yearService = yearService;
        this.gmapService = gmapService;
        this.layerService = layerService;
        this.mapsAPILoader = mapsAPILoader;
        this.zone = zone;
        this.marker = marker;
        // 初始資料
        this.lat = 24.799448;
        this.lng = 120.979021;
        // 路徑規劃(起點終點)
        this.direction = null;
        // public travelModeSelect = 'BICYCLING';
        // public travelode = TravelMode;
        this.pointer_life_arr = []; //樣本數
        this.pointer_life = {
            live: 0,
            traffic: 0,
            edu: 0,
            hospital: 0
        };
        this.pointer_women_child = {
            crime: 0,
            traffic: 0,
            police: 0
        };
        this.zoom = 15;
        this.radius = 500; // 半徑(公尺)
        this.color = '#aa93d6';
        this.addr = "新竹市新都旅社";
        this.addr2 = "新竹市鳳仙清粥小菜";
        // bug
        // addr: string = "德記青草茶老店本舖";
        // addr2: string = "新竹中央市場";
        // 分析統計
        this.countPark = 17;
        // 圖層清單
        this.layerData = __WEBPACK_IMPORTED_MODULE_9__map_layer_data__["a" /* LayerData */];
        // 圖層控制
        this.nodes = __WEBPACK_IMPORTED_MODULE_8__map_layer_control__["a" /* LayerControl */];
        // 點位訊息小窗
        this.infowinLat = 23.458987;
        this.infowinLng = 120.29294219999997;
        this.infowinMsg = ['', '', '', '', '', '', '', '', '', '', '', ''];
        this.infowinIsOpen = false;
        // 年齡結構 - 卷軸
        this.yearActiveSlider = null;
        this.yearValueSlider = 1;
        this.yearDateSlider = new Date().getFullYear().toString() + "\u5E74 - " + new Date().getMonth().toString() + "\u6708";
        // 人口結構 - 卷軸
        this.popuActiveSlider = null;
        this.popuValueSlider = 41;
        this.popuDateSlider = new Date().getFullYear().toString() + "\u5E74 - \u7B2C" + new Date().getMonth().toString() + "\u5B63";
        // 年齡結構 - 圖表
        //yearData: any[] = [];
        // yearDataFilter: any[] = []; // 儲存卷軸對應的No.資料
        this.yearDataPercent = [50, 50, 50]; // 年齡結構百分比[A群,B群,C群]
        this.yearCountOldMan = [1, 2, 3, 4];
        this.yearCountMale = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.yearCountPercent = 51.13;
        // 人口結構 - 圖表
        this.popuData = [];
        this.popuDataFilter = [];
        this.popuDataPercent = [50, 50, 50];
        // 圖表 - 年齡結構分析
        this.doughnutChartLabels = ['~17', '18~65', '65~',];
        this.doughnutChartData = [650, 210, 140];
        this.doughnutChartType = 'doughnut'; // 改讀取 yearDataPercent
        // 圖表 - 區域社福評估
        this.radarChartLabels = ['監視', '醫院', '照護', '宗教', '竊盜'];
        this.radarChartData = [
            { data: [17, 7, 3, 2, 1], label: '新竹市' }
        ];
        this.radarChartType = 'radar';
        this.radarChartOptions = [{
                borderColor: 'rgba(54,162,235,.8)',
                backgroundColor: 'rgba(54,162,235,.3)',
                pointBackgroundColor: '#36A2EB',
                pointBorderColor: '#fff'
                // [colors]="colors" 
            }];
        // 圖表 - 人口數量預測
        this.barChartOptions = {
            scaleOverride: true,
            scaleShowVerticalLines: false,
            maintainAspectRatio: false,
            responsive: true,
            scales: {
                yAxes: [{
                        ticks: {
                            min: 0,
                            max: 800000
                        }
                    }]
            }
        };
        this.barChartLabels = ['2014', '2015', '2016', '2017', '自訂年(季)'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [524787, 519659, 514201, 508414, 505412], label: '新竹市' }
        ];
    }
    MapModalComponent.prototype.ngOnInit = function () {
        // 載入圖層資料
        this.LoadAllLayer();
        // 載入圖表資料
        // this.optionPopuChange('Chiayi');
        // this.optionYearChange('Chiayi');
    };
    // /生成樣本
    MapModalComponent.prototype.chkCon = function () {
        var newPoint = this.gmapService.generatePoint(this.layerData[0].geojson.features[11].geometry.coordinates[0]);
        this.analyticsArea();
    };
    /**
     * 載入所有圖層
     */
    MapModalComponent.prototype.LoadAllLayer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.layerService.getGeoJsonLayer('county')
                            .subscribe(function (result) { return _this.layerData[0].geojson = result; })];
                    case 1:
                        _a.sent();
                        this.layerData.forEach(function (obj) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(obj.parent_id < 4)) return [3 /*break*/, 3];
                                        if (!(obj.id != 101)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.layerService.getPointerLayer(obj.file, obj.class)
                                                .subscribe(function (result) { return obj.geojson = result; })];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2: return [3 /*break*/, 5];
                                    case 3:
                                        if (!(obj.parent_id == 4)) return [3 /*break*/, 5];
                                        // 線圖
                                        return [4 /*yield*/, this.layerService.getLineLayer(obj.file, obj.class)
                                                .subscribe(function (result) {
                                                obj.geojson = result;
                                            })];
                                    case 4:
                                        // 線圖
                                        _a.sent();
                                        _a.label = 5;
                                    case 5: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 座標點選 EVENT
     * @param e
     */
    MapModalComponent.prototype.geoLayerClick = function (e) {
        var feature = e.feature.f;
        this.infowinLat = Number(feature.lat) + 0.00008;
        this.infowinLng = Number(feature.lng);
        if (feature.name) {
            this.infowinMsg[0] = feature.name;
        }
        if (feature.addr) {
            this.infowinMsg[1] = feature.addr;
        }
        if (feature.tel) {
            this.infowinMsg[2] = "Tel: " + feature.tel;
        }
        this.infowinIsOpen = true;
    };
    /**
     * 婦幼安全路線分析
     */
    MapModalComponent.prototype.analyticsDirections = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var origin, destination;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        origin = new __WEBPACK_IMPORTED_MODULE_6__class_marker__["a" /* Marker */]();
                        destination = new __WEBPACK_IMPORTED_MODULE_6__class_marker__["a" /* Marker */]();
                        // reset data
                        // this.direction = null;
                        this.waypoints = [];
                        return [4 /*yield*/, this.gmapService.getLatLan(this.addr)
                                .subscribe(function (result1) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.gmapService.getLatLan(this.addr2)
                                                .subscribe(function (result) { return __awaiter(_this, void 0, void 0, function () {
                                                var _this = this;
                                                var clat, clng;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            origin.lat = result1.lat();
                                                            origin.lng = result1.lng();
                                                            destination.lat = result.lat();
                                                            destination.lng = result.lng();
                                                            clat = (result1.lat() + result.lat()) / 2;
                                                            clng = (result1.lng() + result.lng()) / 2;
                                                            this.lat = clat;
                                                            this.lng = clng;
                                                            return [4 /*yield*/, this.setCircle(clat, clng)];
                                                        case 1:
                                                            _a.sent();
                                                            return [4 /*yield*/, this.gmapService.getDistance([origin.lat, origin.lng], [clat, clng])
                                                                    .subscribe(function (result) {
                                                                    _this.radius = result;
                                                                })];
                                                        case 2:
                                                            _a.sent();
                                                            // 確認有無危險地點
                                                            return [4 /*yield*/, this.analyticsDangerous()];
                                                        case 3:
                                                            // 確認有無危險地點
                                                            _a.sent();
                                                            // console.log(this.waypoints);
                                                            if (!this.direction) {
                                                                this.direction = new __WEBPACK_IMPORTED_MODULE_5__class_direction__["a" /* Direction */](origin, destination);
                                                            }
                                                            else {
                                                                // this.direction.destination = destination;
                                                                // this.direction.origin = origin;
                                                                this.direction = new __WEBPACK_IMPORTED_MODULE_5__class_direction__["a" /* Direction */](origin, destination);
                                                            }
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 危險路徑替代點位
     */
    MapModalComponent.prototype.analyticsDangerous = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.countPark = 0;
                this.layerData.forEach(function (obj) {
                    var minDis = 0;
                    var minPoint;
                    if (obj.description == '婦幼安全警示地點') {
                        obj.geojson['features'].forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            var lat, lng, p2;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        lat = Number(element.geometry.coordinates[1]);
                                        lng = Number(element.geometry.coordinates[0]);
                                        p2 = [lat, lng];
                                        return [4 /*yield*/, this.gmapService.getDistance([this.lat, this.lng], p2)
                                                .subscribe(function (result) {
                                                _this.zone.run(function () {
                                                    // 如果在半徑內  
                                                    if (result <= _this.radius) {
                                                        if (minDis == 0) {
                                                            minDis = result;
                                                            minPoint = p2;
                                                        }
                                                        else if (result < minDis) {
                                                            minDis = result;
                                                            minPoint = p2;
                                                        }
                                                        _this.waypoints.push({
                                                            location: { lat: Number(element.properties.lat2), lng: Number(element.properties.lng2) },
                                                            stopover: true // 標記AB上去,否則會出現白點
                                                        });
                                                    }
                                                });
                                            })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * 環域分析-指數計算
     */
    MapModalComponent.prototype.analyticsArea = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var count, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // loop 跑樣本數
                        // min = 所有集合對於該指數最小的
                        // 
                        // Reset Pointer
                        this.pointer_life = {
                            live: 0,
                            traffic: 0,
                            edu: 0,
                            hospital: 0
                        };
                        this.pointer_women_child = {
                            crime: 0,
                            traffic: 0,
                            police: 0
                        };
                        return [4 /*yield*/, this.setCircle(null, null)];
                    case 1:
                        _a.sent();
                        i = 0;
                        this.layerData.forEach(function (obj) {
                            // parent_id = 1 新竹邊界圖
                            if (obj.parent_id > 1) {
                                obj.geojson['features'].forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                                    var _this = this;
                                    var lat, lng, p2;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                lat = Number(element.geometry.coordinates[1]);
                                                lng = Number(element.geometry.coordinates[0]);
                                                p2 = [lat, lng];
                                                return [4 /*yield*/, this.gmapService.getDistance([this.lat, this.lng], p2)
                                                        .subscribe(function (result) {
                                                        _this.zone.run(function () {
                                                            // 如果在半徑內  
                                                            if (result <= _this.radius) {
                                                                // 類別( 生活便利 & 婦幼安全 )
                                                                if (obj.parent_id == 2) {
                                                                    switch (obj.group) {
                                                                        case 'live':
                                                                            _this.pointer_life.live++;
                                                                            break;
                                                                        case 'traffic':
                                                                            _this.pointer_life.traffic++;
                                                                            break;
                                                                        case 'edu':
                                                                            _this.pointer_life.edu++;
                                                                            break;
                                                                        case 'hospital':
                                                                            _this.pointer_life.hospital++;
                                                                            break;
                                                                    }
                                                                    count = _this.pointer_life;
                                                                }
                                                                else {
                                                                    switch (obj.group) {
                                                                        case 'crime':
                                                                            _this.pointer_women_child.crime++;
                                                                            break;
                                                                        case 'traffic':
                                                                            _this.pointer_women_child.traffic++;
                                                                            break;
                                                                        case 'police':
                                                                            _this.pointer_women_child.police++;
                                                                            break;
                                                                    }
                                                                }
                                                                // 只處理 生活便利
                                                                // if (index == this.layerData.length - 1) {
                                                                //   // this.pointer_life_arr.push(count);
                                                                //   // console.log(this.pointer_life_arr);
                                                                //   console.log('end');
                                                                // }
                                                                i++;
                                                                if (i == _this.layerData.length - 1) {
                                                                    // 當最後一筆的時候
                                                                    count = _this.pointer_life;
                                                                    console.log(count);
                                                                }
                                                            }
                                                        });
                                                    })];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 繪製圓形區域 EVENT
     */
    MapModalComponent.prototype.setCircle = function (lat, lng) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.gmapService.getLatLan(this.addr)
                            .subscribe(function (result) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: 
                                    //必須使用zone 觀察整個 view 否則會導致延遲
                                    return [4 /*yield*/, this.zone.run(function () {
                                            _this.mapsAPILoader.load().then(function () {
                                                _this.lat = lat || result.lat();
                                                _this.lng = lng || result.lng();
                                                _this.saveMarker(result.lat(), result.lng());
                                                _this.bounds = new window['google'].maps.LatLngBounds(new window['google'].maps.LatLng(_this.lat, _this.lng));
                                            });
                                        })];
                                    case 1:
                                        //必須使用zone 觀察整個 view 否則會導致延遲
                                        _a.sent();
                                        this.zoom = 15;
                                        return [2 /*return*/];
                                }
                            });
                        }); }, function (error) { return console.log(error); }, function () { return console.log('Geocoding completed!'); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 當前座標
     * @param lat
     * @param lng
     */
    MapModalComponent.prototype.saveMarker = function (lat, lng) {
        this.marker.lat = lat;
        this.marker.lng = lng;
    };
    /**
     * 圖層樣式
     * @param feature
     */
    MapModalComponent.prototype.styleLayer = function (feature) {
        if ($('.gmap-loading').css('display') != 'none') {
            setTimeout(function () {
                $('.gmap-loading').hide();
            }, 1000);
        }
        var icon, visible = true, color = 'green';
        // console.log(feature);
        if (feature.getProperty('COUNTYENG') != '') {
            console.log('load 縣市');
            if (feature.getProperty('COUNTYENG') == 'Hsinchu City') {
                color = 'red';
                visible = true;
            }
            else {
                visible = false;
            }
        }
        if (feature.getProperty('group') != undefined) {
            visible = true;
        }
        switch (feature.getProperty('group')) {
            case 'park':
                icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|F2545B';
                break;
            case 'monitor':
                icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|A93F55';
                break;
            case 'anihospi':
                icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|8C5E58';
                break;
            case 'kindergarten':
                icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|F7DBA7';
                break;
            case 'warningplace':
                icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|EEC643';
                break;
            case 'parenting':
                icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|01BAEF';
                break;
            case 'motocharge':
                icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|001427';
                break;
            case 'obstacle':
                icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FFD700';
                break;
            case 'vaccinehospi':
                icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|BF211E';
                break;
            case 'aedplace':
                icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|0978E8';
                break;
            case 'oldagency':
                icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|43C17E';
                break;
            case 'gas':
                icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|B28A74';
                break;
            case 'firedepartment':
                icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|9D59BA';
                break;
            case 'plice':
                icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|E56300';
                break;
            case 'childrenRehabilitation':
                icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|7AC1BD';
                break;
            case 'speedmonitor':
                icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|4F3620';
                break;
            case 'youbike':
                icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|EF476F';
                break;
            case 'freewifi':
                icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|06D6A0';
                break;
            case 'school':
                icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FFFB46';
                break;
            case 'a1':
                icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|26547C';
                break;
        }
        return {
            icon: icon,
            visible: visible,
            fillColor: color,
            fillOpacity: 0.2,
            strokeColor: color,
            strokeWeight: 1,
            strokeOpacity: 0.8,
        };
    };
    /**
   * 圖層控制
   * @param node
   * @param event
   */
    MapModalComponent.prototype.check = function (node, $event) {
        if (!node.data.checked)
            $('.gmap-loading').show();
        this.updateChildNodesCheckBox(node, $event.target.checked);
        this.updateParentNodesCheckBox(node.parent);
        // 圖層勾選清單
        this.layerData.forEach(function (obj) {
            if (obj.id == node.id) {
                obj.show = node.data.checked;
            }
            else if (obj.parent_id == node.id) {
                obj.show = node.data.checked;
            }
        });
    };
    // /**
    //  * 下拉式選單 - 年齡結構
    //  * @param city 
    //  */
    // public optionYearChange(city: any) {
    //   this.yearDataPercent = this.yearService.getStructurePercent(city, this.yearValueSlider);
    //   this.yearActiveSlider = ''; // 選擇縣市後才可以滑動 Slider
    //   // 扶養比
    //   this.yearCountPercent = Number(Number((Number(this.yearDataPercent[0]) + Number(this.yearDataPercent[2])) / this.yearDataPercent[1] * 100).toFixed(2));
    //   var old = Number(this.yearCountPercent / 10);
    //   this.yearCountOldMan = [];
    //   for (let i = 1; i <= old; i++) {
    //     this.yearCountOldMan.push(i);
    //   }
    //   var man = 10;
    //   this.yearCountMale = [];
    //   for (let j = 1; j <= man; j++) {
    //     this.yearCountMale.push(j);
    //   }
    // }
    // /**
    //  * 卷軸 - 年齡結構
    //  * @param no 
    //  */
    // public onYearSliderChange(no: number) {
    //   this.yearDataPercent = this.yearService.getStructurePercent(this.cityYearSelect, no);
    //   let _mon = no % 12 == 0 ? 12 : no % 12;
    //   let _year = no / 12 == 0 ? 2012 : Math.floor(no / 12) + 2012;
    //   this.yearDateSlider = `${_year}年 - ${_mon}月`;
    //   // 扶養比
    //   this.yearCountPercent = Number(Number((Number(this.yearDataPercent[0]) + Number(this.yearDataPercent[2])) / this.yearDataPercent[1] * 100).toFixed(2));
    //   var old = Number(this.yearCountPercent / 10);
    //   this.yearCountOldMan = [];
    //   for (let i = 1; i <= old; i++) {
    //     this.yearCountOldMan.push(i);
    //   }
    //   var man = 10;
    //   this.yearCountMale = [];
    //   for (let j = 1; j <= man; j++) {
    //     this.yearCountMale.push(j);
    //   }
    // }
    // /**
    //  * 下拉式選單 - 人口結構
    //  * @param city 
    //  */
    // public optionPopuChange(city: any) {
    //   this.popuDataPercent = this.popuService.getPopulationPercent(city, this.yearValueSlider)[0];
    //   this.popuActiveSlider = ''; // 選擇縣市後才可以滑動 Slider
    //   this.onPopuSliderChange(41);
    // }
    // /**
    //  * 卷軸 - 年齡結構
    //  * @param no 
    //  */
    // public onPopuSliderChange(no: number) {
    //   this.popuDataPercent = this.popuService.getPopulationPercent(this.cityPopuSelect, no);
    //   let _mon = no % 4 == 0 ? 4 : no % 4;
    //   let _year = no / 4 == 0 ? 2007 : Math.floor(no / 4) + 2007;
    //   this.popuDateSlider = `${_year}年 - 第${_mon}季`;
    //   let popuNow = Number(this.popuService.getPopulationPercent(this.cityPopuSelect, no)[0]);
    //   let popu1 = Number(this.popuService.getPopulationPercent(this.cityPopuSelect, no + 4)[0]);
    //   let popu2 = Number(this.popuService.getPopulationPercent(this.cityPopuSelect, no + 8)[0]);
    //   let popu3 = Number(this.popuService.getPopulationPercent(this.cityPopuSelect, no + 12)[0]);
    //   let popu4 = Number(this.popuService.getPopulationPercent(this.cityPopuSelect, no + 16)[0]);
    //   this.barChartData = [{ data: [popuNow, popu1, popu2, popu3, popu4], label: this.cityPopuSelect }];
    //   let bartmpLabels = [
    //     `${_year}-${_mon}(季)`,
    //     `${_year + 1}`,
    //     `${_year + 2}`,
    //     `${_year + 3}`,
    //     `${_year + 4}`,
    //   ];
    //   this.barChartLabels.length = 0;
    //   for (let i = 0; i < bartmpLabels.length; i++) {
    //     this.barChartLabels.push(bartmpLabels[i]);
    //   }
    // }
    /**
     * check 連動
     * @param node
     * @param checked
     */
    MapModalComponent.prototype.updateChildNodesCheckBox = function (node, checked) {
        var _this = this;
        node.data.checked = checked;
        if (node.children) {
            node.children.forEach(function (child) { return _this.updateChildNodesCheckBox(child, checked); });
        }
    };
    /**
     * check 連動
     * @param node
     */
    MapModalComponent.prototype.updateParentNodesCheckBox = function (node) {
        if (node && node.level > 0 && node.children) {
            var allChildChecked = true;
            var noChildChecked = true;
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (!child.data.checked) {
                    allChildChecked = false;
                }
                else if (child.data.checked) {
                    noChildChecked = false;
                }
            }
            if (allChildChecked) {
                node.data.checked = true;
                node.data.indeterminate = false;
            }
            else if (noChildChecked) {
                node.data.checked = false;
                node.data.indeterminate = false;
            }
            else {
                node.data.checked = true;
                node.data.indeterminate = true;
            }
            this.updateParentNodesCheckBox(node.parent);
        }
    };
    return MapModalComponent;
}());
MapModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-map-modal',
        template: __webpack_require__("../../../../../src/app/component/map-modal/map-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/map-modal/map-modal.component.css")],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__service_gmaps_service__["a" /* GMapsService */],
            __WEBPACK_IMPORTED_MODULE_2__service_layer_service__["a" /* LayerService */],
            __WEBPACK_IMPORTED_MODULE_3__service_year_structure_service__["a" /* YearStructureService */],
            __WEBPACK_IMPORTED_MODULE_6__class_marker__["a" /* Marker */],
            __WEBPACK_IMPORTED_MODULE_4__service_population_structure_service__["a" /* PopulationStructureService */],
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__service_population_structure_service__["a" /* PopulationStructureService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_population_structure_service__["a" /* PopulationStructureService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_year_structure_service__["a" /* YearStructureService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_year_structure_service__["a" /* YearStructureService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__service_gmaps_service__["a" /* GMapsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_gmaps_service__["a" /* GMapsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__service_layer_service__["a" /* LayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_layer_service__["a" /* LayerService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__agm_core__["c" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__agm_core__["c" /* MapsAPILoader */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__class_marker__["a" /* Marker */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__class_marker__["a" /* Marker */]) === "function" && _g || Object])
], MapModalComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=map-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/navbar-modal/navbar-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .navbar {\r\n      height: 60px;\r\n  }\r\n\r\n  .navbar.bg-custom {\r\n      background-size: 100%;\r\n      background-image: linear-gradient(90deg, #8B7BA8, #424386);\r\n  }\r\n\r\n  .navbar-brand {\r\n      padding: 0 15px;\r\n      height: 60px;\r\n      line-height: 60px;\r\n      font-size: 1.6em;\r\n  }\r\n\r\n  .navbar-toggle {\r\n      /* (80px - button height 34px) / 2 = 23px */\r\n      margin-top: 23px;\r\n      padding: 9px 10px !important;\r\n  }\r\n\r\n  @media (min-width: 768px) {\r\n      .navbar-nav>li>a {\r\n          /* (80px - line-height of 27px) / 2 = 26.5px */\r\n          padding-top: 26.5px;\r\n          padding-bottom: 26.5px;\r\n          line-height: 27px;\r\n          font-size: 1.2em;\r\n      }\r\n  }\r\n\r\n  #navbar-toggler {\r\n      margin-top: 20px;\r\n  }\r\n\r\n  .navbar-collapse .navbar-text {\r\n      line-height: 60px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/navbar-modal/navbar-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-custom bg-info fixed-top py-0 py-md-0\">\r\n  <div class=\"container\">\r\n    <button id=\"navbar-toggler\" class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\"\r\n      aria-controls=\"navbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <a class=\"navbar-brand\" href=\"./\">新竹黑客松</a>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbar\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" href=\"./\">首頁\r\n            <span class=\"sr-only\">(current)</span>\r\n          </a>\r\n        </li>\r\n        <!-- <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\" data-toggle=\"modal\" data-target=\"#popuDataTable\">人口數量變動 </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\" data-toggle=\"modal\" data-target=\"#ysDataTable\">年齡結構指標</a>\r\n        </li> -->\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" target=\"_blank\" href=\"https://github.com/explooosion/HsinchuHackathon\">Github</a>\r\n        </li>\r\n      </ul>\r\n      <span class=\"navbar-text\">Hackathon</span>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/component/navbar-modal/navbar-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarModalComponent = (function () {
    function NavbarModalComponent() {
    }
    return NavbarModalComponent;
}());
NavbarModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar-modal',
        template: __webpack_require__("../../../../../src/app/component/navbar-modal/navbar-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/navbar-modal/navbar-modal.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarModalComponent);

//# sourceMappingURL=navbar-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/directions/agm-directions.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_marker__ = __webpack_require__("../../../../../src/app/class/marker.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmDirectionsDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AgmDirectionsDirective = (function () {
    function AgmDirectionsDirective(gmapsApi) {
        this.gmapsApi = gmapsApi;
        this.directionsService = new google.maps.DirectionsService;
    }
    AgmDirectionsDirective.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.waypoints);
        this.gmapsApi.getNativeMap().then(function (map) {
            _this.directionsService = new google.maps.DirectionsService;
            var directionsDisplay = new google.maps.DirectionsRenderer;
            // var directionsDisplay = new google.maps.DirectionsRenderer;
            directionsDisplay.setMap(map);
            _this.directionsService.route({
                origin: { lat: _this.origin.lat, lng: _this.origin.lng },
                destination: { lat: _this.destination.lat, lng: _this.destination.lng },
                waypoints: _this.waypoints
                // || [
                //   {
                //     location: { lat: 24.795448, lng: this.origin.lng },
                //     stopover: true // 標記AB上去,否則會出現白點
                //   },
                //   {
                //     location: { lat: 24.795114, lng: 120.979221 },
                //     stopover: true // 標記AB上去,否則會出現白點
                //   }
                // ]
                ,
                optimizeWaypoints: true,
                travelMode: _this.travelMode || 'DRIVING'
            }, function (response, status) {
                if (status === 'OK') {
                    directionsDisplay.setDirections(response);
                    this.directionsDisplay = directionsDisplay;
                }
                else {
                    // window.alert('Directions request failed due to ' + status);
                }
            });
        });
    };
    AgmDirectionsDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.origin.firstChange == false) {
            this.origin = changes.origin.currentValue;
            this.destination = changes.destination.currentValue;
            this.gmapsApi.getNativeMap().then(function (map) {
                var directionsDisplay = new google.maps.DirectionsRenderer;
                directionsDisplay.setMap(map);
                _this.directionsService.route({
                    origin: { lat: _this.origin.lat, lng: _this.origin.lng },
                    destination: { lat: _this.destination.lat, lng: _this.destination.lng },
                    waypoints: _this.waypoints || []
                    // || [
                    //   {
                    //     location: { lat: 24.795448, lng: this.origin.lng },
                    //     stopover: true // 標記AB上去,否則會出現白點
                    //   },
                    //   {
                    //     location: { lat: 24.795114, lng: 120.979221 },
                    //     stopover: true // 標記AB上去,否則會出現白點
                    //   }
                    // ]
                    ,
                    optimizeWaypoints: true,
                    travelMode: _this.travelMode || 'DRIVING'
                }, function (response, status) {
                    if (status === 'OK') {
                        directionsDisplay.setDirections(response);
                    }
                    else {
                        // window.alert('Directions request failed due to ' + status);
                    }
                });
            });
        }
    };
    return AgmDirectionsDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__class_marker__["a" /* Marker */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__class_marker__["a" /* Marker */]) === "function" && _a || Object)
], AgmDirectionsDirective.prototype, "origin", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__class_marker__["a" /* Marker */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__class_marker__["a" /* Marker */]) === "function" && _b || Object)
], AgmDirectionsDirective.prototype, "destination", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AgmDirectionsDirective.prototype, "waypoints", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AgmDirectionsDirective.prototype, "travelMode", void 0);
AgmDirectionsDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'agm-directions'
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* GoogleMapsAPIWrapper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* GoogleMapsAPIWrapper */]) === "function" && _c || Object])
], AgmDirectionsDirective);

var _a, _b, _c;
//# sourceMappingURL=agm-directions.directive.js.map

/***/ }),

/***/ "../../../../../src/app/map/layer-control.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayerControl; });
/**
 * 左側圖層控制
 */
/**
 * 左側圖層控制
 */ var LayerControl = [
    {
        id: 1,
        name: '地區圖層',
        isExpanded: true,
        children: [
            { id: 101, name: '新竹市' },
        ]
    },
    {
        id: 2,
        name: '便利',
        isExpanded: false,
        children: [
            { id: 201, name: '公有停車場' },
            { id: 202, name: '動物醫院' },
            { id: 203, name: '幼兒園' },
            { id: 204, name: '托嬰中心' },
            { id: 205, name: '電動機車充電區' },
            { id: 206, name: '身心障礙福利機構' },
            { id: 207, name: '預防接種合約院所' },
            { id: 208, name: 'AED設置地點' },
            { id: 209, name: '老人福利機構' },
            { id: 210, name: '加油站' },
            { id: 211, name: '健保特約兒童復健' },
            { id: 212, name: '違規照相設置地點' },
            { id: 213, name: 'YouBike' },
            { id: 214, name: 'FreeWifi' },
            { id: 215, name: '市立國中高中' },
        ]
    },
    {
        id: 3,
        name: '安全',
        isExpanded: true,
        children: [
            // { id: 301, name: '監視器' },
            { id: 302, name: '婦幼安全警示地點' },
            { id: 303, name: '消防局' },
            { id: 304, name: '警察局' },
            { id: 305, name: 'A1交通事故' },
        ]
    },
];
//# sourceMappingURL=layer-control.js.map

/***/ }),

/***/ "../../../../../src/app/map/layer-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class_park__ = __webpack_require__("../../../../../src/app/class/park.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_anihospi__ = __webpack_require__("../../../../../src/app/class/anihospi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_kindergarten__ = __webpack_require__("../../../../../src/app/class/kindergarten.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_warningplace__ = __webpack_require__("../../../../../src/app/class/warningplace.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__class_parenting__ = __webpack_require__("../../../../../src/app/class/parenting.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__class_motocharge__ = __webpack_require__("../../../../../src/app/class/motocharge.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__class_obstacle__ = __webpack_require__("../../../../../src/app/class/obstacle.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__class_vaccinehospi__ = __webpack_require__("../../../../../src/app/class/vaccinehospi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__class_aedplace__ = __webpack_require__("../../../../../src/app/class/aedplace.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__class_oldagency__ = __webpack_require__("../../../../../src/app/class/oldagency.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__class_gas__ = __webpack_require__("../../../../../src/app/class/gas.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__class_firedepartment__ = __webpack_require__("../../../../../src/app/class/firedepartment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__class_policedepartment__ = __webpack_require__("../../../../../src/app/class/policedepartment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__class_childrenrehabilitation__ = __webpack_require__("../../../../../src/app/class/childrenrehabilitation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__class_speedmonitor__ = __webpack_require__("../../../../../src/app/class/speedmonitor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__class_youbike__ = __webpack_require__("../../../../../src/app/class/youbike.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__class_freeWifi__ = __webpack_require__("../../../../../src/app/class/freeWifi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__class_school__ = __webpack_require__("../../../../../src/app/class/school.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__class_a1__ = __webpack_require__("../../../../../src/app/class/a1.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayerData; });
/**
 * 圖層清單
 */



















var LayerData = [
    {
        parent_id: 1,
        id: 101,
        name: 'County',
        class: null,
        description: '新竹市',
        show: false,
        geojson: null,
        file: 'county',
        icon: null,
        group: 'geo'
    },
    {
        parent_id: 2,
        id: 201,
        name: 'Park',
        class: __WEBPACK_IMPORTED_MODULE_0__class_park__["a" /* Park */],
        description: '公有停車場',
        show: false,
        geojson: null,
        file: '新竹市公有停車場相關資訊.csv',
        icon: 'c.png',
        group: 'traffic'
    },
    {
        parent_id: 2,
        id: 202,
        name: 'AniHospi',
        class: __WEBPACK_IMPORTED_MODULE_1__class_anihospi__["a" /* AniHospi */],
        description: '動物醫院',
        show: false,
        geojson: null,
        file: '新竹市動物醫院.csv',
        icon: 'hospi.png',
        group: 'hospital'
    },
    {
        parent_id: 2,
        id: 203,
        name: 'KinderGarten',
        class: __WEBPACK_IMPORTED_MODULE_2__class_kindergarten__["a" /* KinderGarten */],
        description: '幼兒園',
        show: false,
        geojson: null,
        file: '新竹市幼兒園名錄.csv',
        icon: 'temple.png',
        group: 'edu'
    },
    {
        parent_id: 2,
        id: 204,
        name: 'Parenting',
        class: __WEBPACK_IMPORTED_MODULE_4__class_parenting__["a" /* Parenting */],
        description: '托嬰中心',
        show: false,
        geojson: null,
        file: '新竹市私立托嬰中心名冊.csv',
        icon: 'school.png',
        group: 'edu'
    },
    {
        parent_id: 2,
        id: 205,
        name: 'MotoCharge',
        class: __WEBPACK_IMPORTED_MODULE_5__class_motocharge__["a" /* MotoCharge */],
        description: '電動機車充電區',
        show: false,
        geojson: null,
        file: '新竹市電動機車充電站.csv',
        icon: 'a.png',
        group: 'traffic'
    },
    {
        parent_id: 2,
        id: 206,
        name: 'Obstacle',
        class: __WEBPACK_IMPORTED_MODULE_6__class_obstacle__["a" /* Obstacle */],
        description: '身心障礙福利機構名冊',
        show: false,
        geojson: null,
        file: '新竹市身心障礙福利機構名冊.csv',
        icon: 'a.png',
        group: 'hospital'
    },
    {
        parent_id: 2,
        id: 207,
        name: 'VaccineHospi',
        class: __WEBPACK_IMPORTED_MODULE_7__class_vaccinehospi__["a" /* VaccineHospi */],
        description: '預防接種合約院所名冊',
        show: false,
        geojson: null,
        file: '新竹市預防接種合約院所名冊.csv',
        icon: 'a.png',
        group: 'hospital'
    }, {
        parent_id: 2,
        id: 208,
        name: 'AEDPlace',
        class: __WEBPACK_IMPORTED_MODULE_8__class_aedplace__["a" /* AEDPlace */],
        description: 'AED心臟電擊器設置地點',
        show: false,
        geojson: null,
        file: '新竹市AED心臟電擊器設置地點.csv',
        icon: 'a.png',
        group: 'hospital'
    },
    {
        parent_id: 2,
        id: 209,
        name: 'OldAgency',
        class: __WEBPACK_IMPORTED_MODULE_9__class_oldagency__["a" /* OldAgency */],
        description: '新竹市老人福利機構一覽表',
        show: false,
        geojson: null,
        file: '新竹市老人福利機構一覽表.json',
        icon: 'a.png',
        group: 'hospital'
    },
    {
        parent_id: 2,
        id: 210,
        name: 'Gas',
        class: __WEBPACK_IMPORTED_MODULE_10__class_gas__["a" /* Gas */],
        description: '新竹市加油(氣)站',
        show: false,
        geojson: null,
        file: '新竹市加油(氣)站.csv',
        icon: 'c.png',
        group: 'traffic'
    },
    {
        parent_id: 2,
        id: 211,
        name: 'ChildrenRehabilitation',
        class: __WEBPACK_IMPORTED_MODULE_13__class_childrenrehabilitation__["a" /* ChildrenRehabilitation */],
        description: '桃竹苗區健保特約兒童復健療育單位',
        show: false,
        geojson: null,
        file: '桃竹苗區健保特約兒童復健療育單位.json',
        icon: 'c.png',
        group: 'hospital'
    },
    {
        parent_id: 2,
        id: 212,
        name: 'SpeedMonitor',
        class: __WEBPACK_IMPORTED_MODULE_14__class_speedmonitor__["a" /* SpeedMonitor */],
        description: '測速照相',
        show: false,
        geojson: null,
        file: '測速照相.json',
        icon: 'c.png',
        group: 'traffic'
    },
    {
        parent_id: 2,
        id: 213,
        name: 'YouBike',
        class: __WEBPACK_IMPORTED_MODULE_15__class_youbike__["a" /* YouBike */],
        description: 'YouBike',
        show: false,
        geojson: null,
        file: 'YouBike.json',
        icon: 'c.png',
        group: 'traffic'
    },
    {
        parent_id: 2,
        id: 214,
        name: 'FreeWifi',
        class: __WEBPACK_IMPORTED_MODULE_16__class_freeWifi__["a" /* FreeWifi */],
        description: 'FreeWifi',
        show: false,
        geojson: null,
        file: '免費WIFI.json',
        icon: 'c.png',
        group: 'live'
    },
    {
        parent_id: 2,
        id: 215,
        name: 'School',
        class: __WEBPACK_IMPORTED_MODULE_17__class_school__["a" /* School */],
        description: 'FrschooleeWifi',
        show: false,
        geojson: null,
        file: '國高中學校.json',
        icon: 'c.png',
        group: 'edu'
    },
    // {
    //     parent_id: 3,
    //     id: 301,
    //     name: 'Monitor',
    //     class: Monitor,
    //     description: '監視器',
    //     show: false,
    //     geojson: null,
    //     file: '監視器.csv',
    //     icon: 'secure.png'
    // },
    {
        parent_id: 3,
        id: 302,
        name: 'WarningPlace',
        class: __WEBPACK_IMPORTED_MODULE_3__class_warningplace__["a" /* WarningPlace */],
        description: '婦幼安全警示地點',
        show: false,
        geojson: null,
        file: '婦幼安全警示地點.csv',
        icon: 'burglary.png',
        group: 'crime'
    },
    {
        parent_id: 3,
        id: 303,
        name: 'FireDepartment',
        class: __WEBPACK_IMPORTED_MODULE_11__class_firedepartment__["a" /* FireDepartment */],
        description: '消防局',
        show: false,
        geojson: null,
        file: '消防局.json',
        icon: 'burglary.png',
        group: 'police'
    },
    {
        parent_id: 3,
        id: 304,
        name: 'PliceDepartment',
        class: __WEBPACK_IMPORTED_MODULE_12__class_policedepartment__["a" /* PliceDepartment */],
        description: '警察局',
        show: false,
        geojson: null,
        file: '警察局.json',
        icon: 'burglary.png',
        group: 'police'
    },
    {
        parent_id: 3,
        id: 305,
        name: 'A1',
        class: __WEBPACK_IMPORTED_MODULE_18__class_a1__["a" /* A1 */],
        description: 'A1交通事故',
        show: false,
        geojson: null,
        file: 'A1.json',
        icon: 'a.png',
        group: 'traffic'
    },
];
//# sourceMappingURL=layer-data.js.map

/***/ }),

/***/ "../../../../../src/app/service/gmaps.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GMapsService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GMapsService = (function (_super) {
    __extends(GMapsService, _super);
    function GMapsService(__loader, __zone) {
        var _this = _super.call(this, __loader, __zone) || this;
        _this.__loader = __loader;
        _this.__zone = __zone;
        return _this;
    }
    /**
     * 地址轉換經緯度
     * @param address
     */
    GMapsService.prototype.getLatLan = function (address) {
        console.log('Getting Address - ', address);
        var geocoder = new google.maps.Geocoder();
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    observer.next(results[0].geometry.location);
                    observer.complete();
                }
                else {
                    console.log('Error - ', results, ' & Status - ', status);
                    observer.next({});
                    observer.complete();
                }
            });
        });
    };
    /**
     * 兩點座標距離(公尺)
     * @param point1
     * @param point2
     */
    GMapsService.prototype.getDistance = function (point1, point2) {
        var p1 = new google.maps.LatLng(point1[0], point1[1]);
        var p2 = new google.maps.LatLng(point2[0], point2[1]);
        var dis = null;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            dis = (google.maps.geometry.spherical.computeDistanceBetween(p1, p2));
            if (typeof (dis) != null) {
                observer.next(dis);
                observer.complete();
            }
            else {
                console.log('Error - can not get distance');
                observer.next({});
                observer.complete();
            }
        });
    };
    /**
     * 隨機生成點(基於新竹市)
     */
    GMapsService.prototype.generatePoint = function (polygon) {
        // 新竹市南寮舊漁港
        // 24.8498061 最高緯度
        // 120.92900280000003
        // 新竹崎頂隧道文化公園
        // 24.7295481  最低緯度
        // 120.87860639999997 最小精度
        // 新竹柯子湖路雅池
        // 24.7588673
        // 121.03188699999998 最大精度
        // 歸納範圍
        // [24.7295481~24.8498061]
        // [120.87860639999997~121.03188699999998]
        var glat = (Math.random() * (24.8498061 - 24.7295481) + 24.7295481).toFixed(7);
        var glng = (Math.random() * (121.03188699999998 - 120.87860639999997) + 120.87860639999997).toFixed(14);
        var isIn = false;
        var limitCrash = 3000;
        while (isIn == false || limitCrash < 0) {
            limitCrash--;
            isIn = this.getContainsLocation({ lat: glat, lng: glng }, polygon);
        }
        console.log({ lat: glat, lng: glng });
        return { lat: glat, lng: glng };
    };
    /**
     * 判斷點位是否在指定地域
     */
    GMapsService.prototype.getContainsLocation = function (point, polygon) {
        var poly = [];
        polygon.forEach(function (p) {
            poly.push({
                lat: p[1],
                lng: p[0]
            });
        });
        var res = google.maps.geometry.poly.containsLocation(new google.maps.LatLng(point.lat, point.lng), new google.maps.Polygon({ paths: poly }));
        console.log(res);
        return res;
    };
    /**
     * 繪製旅途建議路線
     * @param point1 起點
     * @param point2 終點
     */
    GMapsService.prototype.getDirections = function (point1, point2) {
        var p1 = new google.maps.LatLng(point1[0], point1[1]);
        var p2 = new google.maps.LatLng(point2[0], point2[1]);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            new google.maps.DirectionsService().route({
                origin: p1,
                destination: p2,
                travelMode: google.maps.TravelMode['DRIVING']
            }, function (response, status) {
                if (status == 'OK') {
                    if (typeof (response) != null) {
                        new google.maps.DirectionsRenderer().setDirections(response);
                        observer.next(response);
                        observer.complete();
                    }
                    else {
                        observer.next({});
                        observer.complete();
                    }
                }
            });
        });
    };
    return GMapsService;
}(__WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* GoogleMapsAPIWrapper */]));
GMapsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__agm_core__["c" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__agm_core__["c" /* MapsAPILoader */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _b || Object])
], GMapsService);

var _a, _b;
//# sourceMappingURL=gmaps.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/layer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__class_geo_json__ = __webpack_require__("../../../../../src/app/class/geo-json.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LayerService = (function () {
    // SHP > GEO
    // npm install mapshaper -g
    // mapshaper TOWN_MOI_1060525.shp -o encoding=big5 format=geojson TOWN_MOI_1060525.json
    function LayerService(http) {
        this.http = http;
        this.fileUrl = 'assets/layer/';
        this.fileExtend = ['.csv', '.json'];
        this.countyUrl = 'assets/layer/map/county.json';
        this.townUrl = 'assets/layer/map/town.json';
    }
    /**
     * 讀取地區 County JSON（GeoJson）
     */
    LayerService.prototype.getGeoJsonLayer = function (type) {
        return this.http.get(this.fileUrl + 'map/' + type + this.fileExtend[1])
            .map(function (res) {
            return res.json() || {};
        });
    };
    /**
     * 讀取圖層
     * @param category
     * @param city
     */
    LayerService.prototype.getPointerLayer = function (filename, csx) {
        var _this = this;
        return this.http.get(this.fileUrl + '/' + filename)
            .map(function (res) { return _this.FeaturesCreate(_this.XmlParser(res, csx)); });
    };
    /**
     * 讀取線段
     * @param category
     * @param city
     */
    LayerService.prototype.getLineLayer = function (filename, csx) {
        var _this = this;
        return this.http.get(this.fileUrl + '/' + filename)
            .map(function (res) { return _this.XmlParser(res, csx); });
    };
    /**
     * XMl to Feature
     * @param res Response
     * @param clz lass
     */
    LayerService.prototype.XmlParser = function (res, clz) {
        var filetype = res.url.toString().indexOf('json') > 0 ? 'json' : 'csv';
        var ResData = res['_body'] || '';
        var feature = [];
        if (filetype == 'json') {
            var json = JSON.parse(ResData);
            for (var i = 1; i < json.length; i++) {
                var _group = new (clz.bind.apply(clz, [void 0].concat(json)))().group;
                json[i]['group'] = _group;
                feature.push(json[i]);
            }
        }
        else if (filetype == 'csv') {
            var allTextLines = ResData.split(/\r\n|\n/);
            var headers = allTextLines[0].split(',');
            for (var i = 1; i < allTextLines.length; i++) {
                var data = allTextLines[i].split(',');
                if (data.length == headers.length) {
                    feature.push(new clz(data));
                }
            }
        }
        return feature;
    };
    /**
     * 建立 Feature
     * @param arr 資料陣列
     * @param cs  資料類別
     */
    LayerService.prototype.FeaturesCreate = function (arr) {
        var geo = new __WEBPACK_IMPORTED_MODULE_4__class_geo_json__["a" /* GeoJson */]();
        arr.forEach(function (element) {
            geo.features.push(new __WEBPACK_IMPORTED_MODULE_4__class_geo_json__["b" /* Features */](element, new __WEBPACK_IMPORTED_MODULE_4__class_geo_json__["c" /* Geometry */]('Point', [Number(element.lng), Number(element.lat)])));
        });
        return JSON.parse(JSON.stringify(geo));
    };
    return LayerService;
}());
LayerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], LayerService);

var _a;
//# sourceMappingURL=layer.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/population-structure.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_population__ = __webpack_require__("../../../../../src/app/class/population.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopulationStructureService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PopulationStructureService = (function () {
    function PopulationStructureService(http) {
        this.http = http;
        this.fileUrl = 'assets/data/';
        this.fileExtend = '.csv';
    }
    /**
     * 讀取人口數量CSV（地區）
     * @param fn
     */
    PopulationStructureService.prototype.readCsv = function (fn) {
        return this.http.get(this.fileUrl + fn + this.fileExtend)
            .map(this.extractData);
    };
    PopulationStructureService.prototype.extractData = function (res) {
        var csvData = res['_body'] || '';
        var allTextLines = csvData.split(/\r\n|\n/);
        var headers = allTextLines[0].split(',');
        var lines = [];
        for (var i = 1; i < allTextLines.length; i++) {
            var data = allTextLines[i].split(',');
            if (data.length == headers.length) {
                this.popu = new __WEBPACK_IMPORTED_MODULE_3__class_population__["a" /* Population */]();
                this.popu.no = data[0];
                this.popu.year = data[1];
                this.popu.season = data[2];
                this.popu.year_season = data[3];
                this.popu.city = data[4];
                this.popu.total_population = data[5];
                this.popu.total_population_increase = data[6];
                this.popu.births = data[7];
                this.popu.deaths = data[8];
                this.popu.immigrants = data[9];
                this.popu.emigrants = data[10];
                this.popu.natural_increase_rate = data[11];
                this.popu.social_increase_rate = data[12];
                this.popu.total_increase_rate = data[13];
                lines.push(this.popu);
            }
            this.popuArr = lines;
        } // for
        return this.popuArr;
    };
    /**
     * 人口數量百分比（地區，編號）
     * @param city
     * @param no
     */
    PopulationStructureService.prototype.getPopulationPercent = function (city, no) {
        // f(x) = B3+(C3*A3)+(D3*(A3*A3))
        var res = [];
        var fx = null;
        switch (city) {
            case 'Chiayi':
                fx = new __WEBPACK_IMPORTED_MODULE_3__class_population__["a" /* Population */]().FxChiayi;
                break;
            case 'Yunlin':
                fx = new __WEBPACK_IMPORTED_MODULE_3__class_population__["a" /* Population */]().FxYunlin;
                break;
        }
        for (var i = 0; i < 3; i++) {
            var v = fx[i].a + (fx[i].b * no) + (fx[i].c * (no * no));
            if (i == 0) {
                res.push(Number(v).toFixed(0));
            }
            else {
                res.push(Number(v).toFixed(4));
            }
            //console.log(`${res} = ${fx[i].a} + ${fx[i].b} * ${no} + ${fx[i].c} * ${no} * ${no}`);
        }
        return res;
    };
    return PopulationStructureService;
}());
PopulationStructureService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], PopulationStructureService);

var _a;
//# sourceMappingURL=population-structure.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/year-structure.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_yearstructure__ = __webpack_require__("../../../../../src/app/class/yearstructure.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YearStructureService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var YearStructureService = (function () {
    function YearStructureService(http) {
        this.http = http;
        this.fileUrl = 'assets/data/';
        this.fileExtend = '.csv';
    }
    /**
     * 讀取年齡結構CSV（地區）
     * @param fn
     */
    YearStructureService.prototype.readCsv = function (fn) {
        return this.http.get(this.fileUrl + fn + this.fileExtend)
            .map(this.extractData);
    };
    YearStructureService.prototype.extractData = function (res) {
        var csvData = res['_body'] || '';
        var allTextLines = csvData.split(/\r\n|\n/);
        var headers = allTextLines[0].split(',');
        var lines = [];
        for (var i = 1; i < allTextLines.length; i++) {
            var data = allTextLines[i].split(',');
            if (data.length == headers.length) {
                this.ys = new __WEBPACK_IMPORTED_MODULE_3__class_yearstructure__["a" /* Yearstructure */]();
                this.ys.no = data[0];
                this.ys.year = data[1];
                this.ys.month = data[2];
                this.ys.yearmonth = data[3];
                this.ys.city = data[4];
                this.ys.zero_twelve = data[5];
                this.ys.twelve_seventeen = data[6];
                this.ys.twenty = data[7];
                this.ys.sixty_five = data[8];
                this.ys.twnty_sixty = data[9];
                this.ys.seventeen_twenty = data[10];
                this.ys.zero_twenty = data[11];
                this.ys.zero_seventeen = data[12];
                this.ys.seventeen_sixty = data[13];
                lines.push(this.ys);
            }
            this.ysArr = lines;
        } // for
        return this.ysArr;
    };
    /**
     * 人口結構百分比（地區，編號）
     * @param city
     * @param no
     */
    YearStructureService.prototype.getStructurePercent = function (city, no) {
        // f(x) = A+B*no+c*no*no
        var res = [];
        var fx = null;
        switch (city) {
            case 'Chiayi':
                fx = new __WEBPACK_IMPORTED_MODULE_3__class_yearstructure__["a" /* Yearstructure */]().FxChiayi;
                break;
            case 'Yunlin':
                fx = new __WEBPACK_IMPORTED_MODULE_3__class_yearstructure__["a" /* Yearstructure */]().FxYunlin;
                break;
        }
        for (var i = 0; i < 3; i++) {
            var v = fx[i].a + fx[i].b * no + fx[i].c * no * no;
            res.push(Number(v).toFixed(6));
            //console.log(`${res} = ${fx[i].a} + ${fx[i].b} * ${no} + ${fx[i].c} * ${no} * ${no}`);
        }
        return res;
    };
    return YearStructureService;
}());
YearStructureService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], YearStructureService);

var _a;
//# sourceMappingURL=year-structure.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map