(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lu\Desktop\NTUST MAP\web\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map/map.component */ "cNoH");



class AppComponent {
    constructor() {
        this.title = 'web';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-map");
    } }, directives: [_map_map_component__WEBPACK_IMPORTED_MODULE_1__["MapComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map/map.component */ "cNoH");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "PDjf");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _map_map_component__WEBPACK_IMPORTED_MODULE_4__["MapComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _map_map_component__WEBPACK_IMPORTED_MODULE_4__["MapComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cNoH":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "4R65");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var leaflet_markercluster_dist_MarkerCluster_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet.markercluster/dist/MarkerCluster.css */ "gkNi");
/* harmony import */ var leaflet_markercluster_dist_MarkerCluster_Default_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet.markercluster/dist/MarkerCluster.Default.css */ "OsGc");
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet.markercluster */ "JXP8");
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet_markercluster__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var leaflet_geosearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet-geosearch */ "rAAj");
/* harmony import */ var node_modules_leaflet_geosearch_dist_geosearch_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! node_modules/leaflet-geosearch/dist/geosearch.css */ "FhU0");
/* harmony import */ var leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ "4rkx");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);










class MapComponent {
    constructor() { }
    ngOnInit() {
        (function ($) {
            $(document).ready(function () {
                var map = leaflet__WEBPACK_IMPORTED_MODULE_1__["map"]('map', { center: [23.657733, 120.402603], zoom: 16 });
                const OSM = leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 18,
                }).addTo(map);
                //其他地圖底圖
                const OSM2 = leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                    maxZoom: 18,
                    attribution: '<a>TEST2</a>'
                });
                const OSM3 = leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
                    maxZoom: 18,
                });
                // 建立一個新圖層，為了開啟關閉特效
                const markers = new leaflet__WEBPACK_IMPORTED_MODULE_1__["MarkerClusterGroup"]().addTo(map);
                const markers2 = leaflet__WEBPACK_IMPORTED_MODULE_1__["layerGroup"]().addTo(map);
                const markers3 = leaflet__WEBPACK_IMPORTED_MODULE_1__["layerGroup"]().addTo(map);
                const markers4 = new leaflet__WEBPACK_IMPORTED_MODULE_1__["MarkerClusterGroup"]().addTo(map);
                const markers5 = leaflet__WEBPACK_IMPORTED_MODULE_1__["layerGroup"]().addTo(map);
                const markers6 = leaflet__WEBPACK_IMPORTED_MODULE_1__["layerGroup"]().addTo(map);
                const markers7 = leaflet__WEBPACK_IMPORTED_MODULE_1__["layerGroup"]().addTo(map);
                const markers8 = leaflet__WEBPACK_IMPORTED_MODULE_1__["layerGroup"]().addTo(map);
                const markers9 = leaflet__WEBPACK_IMPORTED_MODULE_1__["layerGroup"]().addTo(map);
                const markers10 = leaflet__WEBPACK_IMPORTED_MODULE_1__["layerGroup"]().addTo(map);
                const markers11 = leaflet__WEBPACK_IMPORTED_MODULE_1__["layerGroup"]().addTo(map);
                // ICON配色資料，要新增要看配色盤
                const greenIcon = new leaflet__WEBPACK_IMPORTED_MODULE_1__["Icon"]({
                    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
                    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    shadowSize: [41, 41]
                });
                const redIcon = new leaflet__WEBPACK_IMPORTED_MODULE_1__["Icon"]({
                    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
                    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    shadowSize: [41, 41]
                });
                const yellowIcon = new leaflet__WEBPACK_IMPORTED_MODULE_1__["Icon"]({
                    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
                    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    shadowSize: [41, 41]
                });
                //藍色ICON
                const buleIcon = leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"]({
                    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
                    iconSize: [1, 1],
                    iconAnchor: [16, 16],
                });
                //房子Icon
                const publicIcon = leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"]({
                    iconUrl: 'https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/home-512.png',
                    iconSize: [20, 20],
                    iconAnchor: [16, 16],
                });
                //尺
                const publicblueIcon = leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"]({
                    iconUrl: 'http://www.shejiye.com/uploadfile/icon/2017/0203/shejiyeicon3oyiifm3u3b.png',
                    iconSize: [40, 40],
                    iconAnchor: [16, 16],
                });
                //橘色Icon
                const orangeIcon = leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"]({
                    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    shadowSize: [41, 41]
                });
                //閃電Icon
                const lightning = leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"]({
                    iconUrl: 'http://www.shejiye.com/uploadfile/icon/2017/0203/shejiyeiconc3yuwefvmir.png',
                    iconSize: [25, 25],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    shadowSize: [41, 41]
                });
                //水Icon
                const water = leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"]({
                    iconUrl: 'https://png.pngtree.com/element_our/20190529/ourmid/pngtree-flat-water-drop-icon-download-image_1196947.jpg',
                    iconSize: [25, 25],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    shadowSize: [41, 41]
                });
                //電信Icon
                const tele = leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"]({
                    iconUrl: 'https://image.flaticon.com/icons/png/512/101/101769.png',
                    iconSize: [25, 25],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    shadowSize: [41, 41]
                });
                //板手Icon
                const twrench = leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"]({
                    iconUrl: 'http://www.shejiye.com/uploadfile/icon/2017/0203/shejiyeicon32dhpkmhiuk.png',
                    iconSize: [20, 20],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    shadowSize: [41, 41]
                });
                //鑽頭icon
                const drill = leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"]({
                    iconUrl: 'https://png.pngtree.com/png-vector/20191028/ourlarge/pngtree-drill-icon-for-your-project-png-image_1904963.jpg',
                    iconSize: [20, 20],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    shadowSize: [41, 41]
                });
                //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                const provider = new leaflet_geosearch__WEBPACK_IMPORTED_MODULE_5__["OpenStreetMapProvider"]();
                const searchControl = new leaflet_geosearch__WEBPACK_IMPORTED_MODULE_5__["GeoSearchControl"]({
                    provider: provider
                });
                map.addControl(searchControl);
                // 測試學校座標
                var data = [
                    { name: '台師大', lat: 25.009313789255614, lng: 121.53596483148128, pl: 16 },
                    { name: 'NTU', lat: 25.017560449410382, lng: 121.53717811800294, pl: 0 },
                    { name: 'NTUST', lat: 25.01297632890122, lng: 121.54056089768035, pl: 2 },
                    { name: '公館', lat: 25.01342504318944, lng: 121.5344778907865, pl: 13,
                    }
                ];
                for (let i = 0; data.length > i; i++) {
                    let liquefaction;
                    // 因不同PL值 顯示不同低中高
                    if (data[i].pl < 5) {
                        liquefaction = '低';
                    }
                    else if (data[i].pl >= 15) {
                        liquefaction = '高';
                    }
                    else {
                        liquefaction = '中';
                    }
                    // 因PL值顯示不同顏色icon
                    let liquefactionicon;
                    if (data[i].pl < 5) {
                        liquefactionicon = greenIcon;
                    }
                    else if (data[i].pl > 15) {
                        liquefactionicon = redIcon;
                    }
                    else {
                        liquefactionicon = yellowIcon;
                    }
                    var picURL = 'https://i.ibb.co/xqPcNPc/20200704002959.jpg';
                    var school = markers.addLayer(leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"]([data[i].lat, data[i].lng], { icon: liquefactionicon })
                        .bindPopup('<h1>' + data[i].name + '</h1>' + '<p>' + liquefaction + "\r\n" + '<p>' + "<img src='" + picURL + "'" + " class=popupImage " + "/>" + '<object data="https://www.youtube.com/embed/8KU5Bp0QSE4" width="315" height="315"></object>', {
                        maxWidth: 560
                    }));
                }
                const xhr = new XMLHttpRequest();
                xhr.open('get', 'http://www.json-generator.com/api/json/get/cfvwGUHyJK?indent=2');
                xhr.send();
                xhr.onload = function () {
                    var data1 = JSON.parse(xhr.responseText).features;
                    console.log(data1);
                    for (let i = 0; data1.length > i; i++) {
                        // 因PL值顯示不同顏色icon
                        let pipeicon;
                        if (data1[i].properties.管線 == "台電") {
                            pipeicon = lightning;
                        }
                        else if (data1[i].properties.管線 == "台水") {
                            pipeicon = water;
                        }
                        else {
                            pipeicon = tele;
                        }
                        var pipe = markers2.addLayer(leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"]([data1[i].geometry.coordinates[1], data1[i].geometry.coordinates[0]], { icon: pipeicon })
                            .bindPopup('<h1>' + data1[i].properties.編號 + '</h1>' + '<font size="5">層數 : ' + data1[i].properties.層數 + '<p>' + '</font>' + '<font size="5">屋齡 : ' + data1[i].properties.屋齡 + '<p>'
                            + '<font size="5">型態 : ' + data1[i].properties.型態 + '<p>' + '<font size="5">管線 : ' + data1[i].properties.管線 + '<p>'));
                    }
                    map.addLayer(markers2);
                    //房屋6 個點
                    const xhr2 = new XMLHttpRequest();
                    xhr2.open('get', 'http://www.json-generator.com/api/json/get/cpmOhyyfTm?indent=2');
                    xhr2.send();
                    xhr2.onload = function () {
                        var data2 = JSON.parse(xhr2.responseText).features;
                        console.log(data2);
                        for (let j = 0; data2.length > j; j++) {
                            let liquefactionicon;
                            if (data2[j].properties.GF <= 1, data2[j].properties.TF = 0) {
                                liquefactionicon = greenIcon;
                            }
                            else if (data2[j].properties.GF == 3, data2[j].properties.TF == 3) {
                                liquefactionicon = redIcon;
                            }
                            else if (data2[j].properties.TF == 1, data2[j].properties.GF < 3) {
                                liquefactionicon = yellowIcon;
                            }
                            else {
                                liquefactionicon = orangeIcon;
                            }
                            if (data2[j].properties.img == null) {
                                data2[j].properties.img = '';
                            }
                            var set = markers3.addLayer(leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"]([data2[j].geometry.coordinates[1], data2[j].geometry.coordinates[0]], { icon: liquefactionicon })
                                .bindPopup('<h1>' + data2[j].properties.field_19 + '</h1>' + '<font size="5">GF : ' + data2[j].properties.GF + '<p></p>' + '</font>'
                                + '<font size="5">TF : ' + data2[j].properties.TF + '<p></p>' + '</font>' + '<font size="5">房屋健康等級 : ' + data2[j].properties.field_22 + '<p></p>' + '</font>' + '<font size="5"> 傾角 : ' + data2[j].properties.min_degree + '<p></p>' + '</font>'
                                + "\r\n" + '<p>' + '<font size="5" >沉陷量 : (m) ' + data2[j].properties.SET_m + '<p></p>' + '</font>' + "\r\n" + "<img src='" + data2[j].properties.img + "'" + " class=popupImage " + "/>"
                                + '<object data="" width="350" height="20"></object>', { maxWidth: 560 }));
                        }
                        map.addLayer(markers3);
                        const xhr3 = new XMLHttpRequest();
                        // 房屋
                        xhr3.open('get', 'http://www.json-generator.com/api/json/get/cgyQvJHfIi?indent=2');
                        xhr3.send();
                        xhr3.onload = function () {
                            var data2 = JSON.parse(xhr3.responseText).features;
                            console.log(data2);
                            for (let j = 0; data2.length > j; j++) {
                                if (data2[j].properties.img == null) {
                                    data2[j].properties.img = '';
                                }
                                markers10.addLayer(leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"]([data2[j].geometry.coordinates[1], data2[j].geometry.coordinates[0]], { icon: twrench })
                                    .bindPopup('<h1>' + data2[j].properties.case + '</h1>' + '<font size="5">GF : ' + data2[j].properties.GF + '<p></p>' + '</font>'
                                    + '<font size="5">TF : ' + data2[j].properties.TF + '<p></p>' + '</font>' + '<font size="5">房屋健康等級 : ' + data2[j].properties.field_11 + '<p></p>' + '</font>' + '<font size="5"> 傾角 : ' + data2[j].properties.angle + '<p></p>' + '</font>'
                                    + "\r\n" + '<p>' + '<font size="5" >沉陷量 : (m) ' + data2[j].properties.SET_m + '<p></p>' + '</font>' + "\r\n" + "<img src='" + data2[j].properties.img + "'" + " class=popupImage " + "/>"
                                    + '<object data="" width="350" height="20"></object>', { maxWidth: 560 }));
                            }
                            map.addLayer(markers10);
                            var setall = markers10;
                            // 鑽孔
                            xhr3.open('get', 'http://www.json-generator.com/api/json/get/cfVzNQhPuG?indent=2');
                            xhr3.send();
                            xhr3.onload = function () {
                                var data2 = JSON.parse(xhr3.responseText).features;
                                console.log(data2);
                                for (let j = 0; data2.length > j; j++) {
                                    if (data2[j].properties.img == null) {
                                        data2[j].properties.img = '';
                                    }
                                    if (data2[j].properties.img2 == null) {
                                        data2[j].properties.img2 = '';
                                    }
                                    markers11.addLayer(leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"]([data2[j].geometry.coordinates[1], data2[j].geometry.coordinates[0]], { icon: drill })
                                        .bindPopup('<h1>' + data2[j].properties.No + '</h1>' + '<font size="5">NCEER : ' + data2[j].properties.NCEER + '<p></p>' + '</font>'
                                        + '<font size="5">NJRA : ' + data2[j].properties.NJRA + '<p></p>' + '</font>' + '<font size="5">TY : ' + data2[j].properties.TY + '<p></p>' + '</font>' + '<font size="5"> AIJ : ' + data2[j].properties.AIJ + '<p></p>' + '</font>'
                                        + "\r\n" + '<p>' + '<font size="5" >HBF ' + data2[j].properties.HBF + '<p></p>' + '</font>' + "\r\n" + '<font size="5" >HBF2 ' + data2[j].properties.HBF2 + '<p></p>' + '</font>'
                                        + '<font size="5" >AvgSet ' + data2[j].properties.avgset + '<p></p>' + '</font>' + "\r\n" + "\r\n" + "<img src='" + data2[j].properties.img + "'" + " class=popupImage " + "/>" + "<img src='" + data2[j].properties.img2 + "'" + " class=popupImage " + "/>"
                                        + '<object data="" width="350" height="20"></object>', { maxWidth: 560 }));
                                }
                                map.addLayer(markers11);
                                var twrenchpoint = markers11;
                                //滑鼠點擊跑出當前座標
                                var popup = leaflet__WEBPACK_IMPORTED_MODULE_1__["popup"]();
                                function onMapClick(e) {
                                    popup
                                        .setLatLng(e.latlng)
                                        .setContent("點擊的座標是 " + e.latlng.toString())
                                        .openOn(map);
                                }
                                map.on('click', onMapClick);
                                //圓圈測試
                                var circle = leaflet__WEBPACK_IMPORTED_MODULE_1__["circle"]([25.01342504318944, 121.5344778907865], {
                                    color: 'red',
                                    fillColor: '#f03',
                                    fillOpacity: 0.5,
                                    radius: 50
                                });
                                //多邊形測試
                                var polygon = leaflet__WEBPACK_IMPORTED_MODULE_1__["polygon"]([
                                    [25.017560449410382, 121.53717811800294],
                                    [25.01297632890122, 121.54056089768035],
                                    [25.009313789255614, 121.53596483148128],
                                    [25.01342504318944, 121.5344778907865]
                                ], {
                                    color: 'red',
                                    fillColor: '#f03',
                                    fillOpacity: 0.5,
                                });
                                //上傳液化地區圖 向量
                                var loadData = function () {
                                    $.ajax("https://www.geologycloud.tw/api/v1/zh-tw/liquefaction?area=%E9%9B%B2%E6%9E%97&classify=%E9%AB%98%E6%BD%9B%E5%8B%A2&all=true", { dataType: "json",
                                        success: function (geojsonFeature) {
                                            geojsonFeature = geojsonFeature;
                                            var geojsonOptions = {
                                                radius: 1,
                                                fillColor: "red",
                                                color: "green",
                                                weight: 1,
                                                opacity: 0.1,
                                                fillOpacity: 0.1,
                                            };
                                            markers9.addLayer(leaflet__WEBPACK_IMPORTED_MODULE_1__["geoJSON"](geojsonFeature, { style: geojsonOptions }).addTo(map));
                                        } });
                                };
                                loadData();
                                var high = markers9;
                                var loadData = function () {
                                    $.ajax("https://www.geologycloud.tw/api/v1/zh-tw/liquefaction?area=%E9%9B%B2%E6%9E%97&classify=%E4%B8%AD%E6%BD%9B%E5%8B%A2&all=true", { dataType: "json",
                                        success: function (geojsonFeature) {
                                            geojsonFeature = geojsonFeature;
                                            var geojsonOptions = {
                                                radius: 1,
                                                fillColor: "yellow",
                                                color: "green",
                                                weight: 1,
                                                opacity: 0.1,
                                                fillOpacity: 0.1,
                                            };
                                            markers8.addLayer(leaflet__WEBPACK_IMPORTED_MODULE_1__["geoJSON"](geojsonFeature, { style: geojsonOptions }).addTo(map));
                                        } });
                                };
                                loadData();
                                var mid = markers8;
                                var loadData = function () {
                                    $.ajax("https://www.geologycloud.tw/api/v1/zh-tw/liquefaction?area=%E9%9B%B2%E6%9E%97&classify=%E4%BD%8E%E6%BD%9B%E5%8B%A2&all=true", { dataType: "json",
                                        success: function (geojsonFeature) {
                                            geojsonFeature = geojsonFeature;
                                            var geojsonOptions = {
                                                radius: 1,
                                                fillColor: "green",
                                                color: "green",
                                                weight: 1,
                                                opacity: 0.1,
                                                fillOpacity: 0.1,
                                            };
                                            markers7.addLayer(leaflet__WEBPACK_IMPORTED_MODULE_1__["geoJSON"](geojsonFeature, { style: geojsonOptions }).addTo(map));
                                        } });
                                };
                                loadData();
                                var low = markers7;
                                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                // AIJ 邊界
                                var loadData = function () {
                                    $.ajax("http://www.json-generator.com/api/json/get/cfaMqIxQVu?indent=2", { dataType: "json",
                                        success: function (geojsonFeature) {
                                            var geojsonOptions = {
                                                radius: 1,
                                                fillColor: "green",
                                                color: "red",
                                                weight: 1,
                                                opacity: 1,
                                                fillOpacity: 0,
                                            };
                                            markers6.addLayer(leaflet__WEBPACK_IMPORTED_MODULE_1__["geoJSON"](geojsonFeature, { style: geojsonOptions }).addTo(map));
                                        } });
                                    var aij = markers6;
                                    // 土庫鎮邊界
                                    $.ajax("http://www.json-generator.com/api/json/get/cehtFCgRlu?indent=2", { dataType: "json",
                                        success: function (geojsonFeature) {
                                            var geojsonOptions = {
                                                radius: 1,
                                                fillColor: "green",
                                                color: "black",
                                                weight: 1,
                                                opacity: 1,
                                                fillOpacity: 0,
                                            };
                                            markers4.addLayer(leaflet__WEBPACK_IMPORTED_MODULE_1__["geoJSON"](geojsonFeature, { style: geojsonOptions })).addTo(map);
                                        } });
                                    var toku = markers4;
                                    // img定位
                                    var imageUrl = 'https://i.ibb.co/wz9ZPzF/7.png', imageBounds = [
                                        [23.681434, 120.385973],
                                        [23.681964, 120.40168],
                                        [23.670271, 120.402131],
                                        [23.670488, 120.385931]
                                    ];
                                    var img = markers5.addLayer(leaflet__WEBPACK_IMPORTED_MODULE_1__["imageOverlay"](imageUrl, imageBounds)).addTo(map);
                                    //資料選擇
                                    var baseMaps = {
                                        "<font size='5'>OSM": OSM,
                                        "<font size='5'>OSM2": OSM2,
                                        "<font size='5'>OSM3": OSM3,
                                    };
                                    var overlay = {
                                        "<font size='5'; style='color: gray'>學校</font>": school,
                                        "<font size='5'>管線點位": pipe,
                                        "<font size='5'>沉陷量有圖片": set,
                                        "<font size='5'>沉陷量": setall,
                                        "<font size='5'>沉陷量圖": img,
                                        "<font size='5'>土庫鎮邊界": toku,
                                        "<font size='5'>AIJ邊界": aij,
                                        "<font size='5'>高潛勢": high,
                                        "<font size='5'>中潛勢": mid,
                                        "<font size='5'>低潛勢": low,
                                        "<font size='5'>鑽孔點位": twrenchpoint,
                                    };
                                    leaflet__WEBPACK_IMPORTED_MODULE_1__["control"].layers(baseMaps, overlay).addTo(map);
                                };
                                loadData();
                                //自我定位
                                map.locate({
                                    setView: true,
                                    watch: true,
                                    enableHighAccuracy: true,
                                    timeout: 100,
                                });
                                function onLocationFound(e) {
                                    leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"](e.latlng, { icon: buleIcon }).addTo(map)
                                        .bindPopup("我在這").openPopup();
                                    leaflet__WEBPACK_IMPORTED_MODULE_1__["circle"](e.latlng, {
                                        color: 'blue',
                                        fillColor: 'blue',
                                        fillOpacity: 0.1,
                                        opacity: 1,
                                        radius: 10
                                    }).addTo(map);
                                }
                                map.on('locationfound', onLocationFound);
                                function onLocationError(e) {
                                    alert(e.message);
                                }
                                map.on('locationerror', onLocationError);
                            };
                        };
                    };
                };
            });
        })(jquery__WEBPACK_IMPORTED_MODULE_8__);
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], decls: 16, vars: 0, consts: [["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"), "integrity", "sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==", "crossorigin", ""], ["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("/path/to/leaflet.css")], ["href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"), "rel", "stylesheet"], ["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://unpkg.com/leaflet-geosearch@2.6.0/assets/css/leaflet.css")], ["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://unpkg.com/leaflet-geosearch@3.0.0/dist/geosearch.css")], ["charset", "UTF-8"], ["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css")], ["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://cdn.jsdelivr.net/npm/leaflet.locatecontrol/dist/L.Control.Locate.min.css")], ["id", "mapid"], ["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://unpkg.com/leaflet@1.7.1/dist/leaflet.css")], ["id", "map"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "meta", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "link", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "link", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "link", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map