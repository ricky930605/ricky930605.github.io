import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet.markercluster';
import * as GeoJSON from 'geojson';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import Vue from 'vue';
import 'node_modules/leaflet-geosearch/dist/geosearch.css';
import { icon, Marker } from 'leaflet';
import "leaflet/dist/images/marker-shadow.png";
import * as $ from 'jquery';
import { Feature } from 'geojson';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

 (function($){
 $(document).ready(function(){




    var map = L.map('map', { center: [23.657733, 120.402603], zoom: 16 });
    const OSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      maxZoom: 18,
    }
    ).addTo(map);




//其他地圖底圖
    const OSM2 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    {
      maxZoom: 18,
      attribution: '<a>TEST2</a>'
    })
    const OSM3 = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    {
      maxZoom: 18,
    })



// 建立一個新圖層，為了開啟關閉特效
    const markers  = new L.MarkerClusterGroup().addTo(map);
    const markers2 = L.layerGroup().addTo(map);
    const markers3 = L.layerGroup().addTo(map);
    const markers4 = new L.MarkerClusterGroup().addTo(map);
    const markers5 = L.layerGroup().addTo(map);
    const markers6 = L.layerGroup().addTo(map);
    const markers7 = L.layerGroup().addTo(map);
    const markers8 = L.layerGroup().addTo(map);
    const markers9 = L.layerGroup().addTo(map);
    const markers10 = L.layerGroup().addTo(map);
    const markers11 = L.layerGroup().addTo(map);


// ICON配色資料，要新增要看配色盤
    const greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
    const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
    const yellowIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
//藍色ICON
const buleIcon =L.icon({
  iconUrl:'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  iconSize:[1,1],
  iconAnchor:[16,16],
})
//房子Icon
const publicIcon =L.icon({
  iconUrl:'https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/home-512.png',
  iconSize:[20,20],
  iconAnchor:[16,16],
})
//尺
const publicblueIcon =L.icon({
  iconUrl:'http://www.shejiye.com/uploadfile/icon/2017/0203/shejiyeicon3oyiifm3u3b.png',
  iconSize:[40,40],
  iconAnchor:[16,16],
})
//橘色Icon
const orangeIcon =L.icon({
  iconUrl:'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})
//閃電Icon
const lightning =L.icon({
  iconUrl:'http://www.shejiye.com/uploadfile/icon/2017/0203/shejiyeiconc3yuwefvmir.png',
  iconSize: [25, 25],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})
//水Icon
const water =L.icon({
  iconUrl:'https://png.pngtree.com/element_our/20190529/ourmid/pngtree-flat-water-drop-icon-download-image_1196947.jpg',
  iconSize: [25, 25],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})
//電信Icon
const tele =L.icon({
  iconUrl:'https://image.flaticon.com/icons/png/512/101/101769.png',
  iconSize: [25, 25],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})
//板手Icon
const twrench =L.icon({
  iconUrl:'http://www.shejiye.com/uploadfile/icon/2017/0203/shejiyeicon32dhpkmhiuk.png',
  iconSize: [20, 20],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})
//鑽頭icon
const drill  =L.icon({
  iconUrl:'https://png.pngtree.com/png-vector/20191028/ourlarge/pngtree-drill-icon-for-your-project-png-image_1904963.jpg',
  iconSize: [20, 20],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const provider = new OpenStreetMapProvider();
const searchControl = new GeoSearchControl({
  provider: provider})
map.addControl(searchControl);



// 測試學校座標
    var data  = [
      {name: '台師大', lat: 25.009313789255614, lng: 121.53596483148128, pl: 16},
      {name: 'NTU', lat: 25.017560449410382, lng: 121.53717811800294, pl: 0},
      {name: 'NTUST', lat: 25.01297632890122, lng: 121.54056089768035, pl: 2},
      {name: '公館', lat: 25.01342504318944, lng: 121.5344778907865, pl: 13,
    }
    ];
    for (let i = 0; data.length > i; i++)
    {
      let liquefaction;
      // 因不同PL值 顯示不同低中高
      if (data[i].pl < 5){
       liquefaction = '低';
      }
      else if (data[i].pl >= 15){
        liquefaction = '高';
       }
      else{
       liquefaction = '中';
      }
// 因PL值顯示不同顏色icon
      let liquefactionicon;
      if (data[i].pl < 5)
      {
        liquefactionicon = greenIcon;
       }
      else  if (data[i].pl > 15){
         liquefactionicon = redIcon;
        }
       else{
        liquefactionicon = yellowIcon;
       }
       var picURL = 'https://i.ibb.co/xqPcNPc/20200704002959.jpg';

      var school= markers.addLayer ( L.marker ( [data[i].lat, data[i].lng], {icon: liquefactionicon} )
      .bindPopup('<h1>' + data[i].name + '</h1>' + '<p>' + liquefaction +"\r\n"+'<p>' +"<img src='" + picURL + "'" + " class=popupImage " + "/>"+'<object data="https://www.youtube.com/embed/8KU5Bp0QSE4" width="315" height="315"></object>', {
        maxWidth : 560
    }));
    }


    const xhr = new XMLHttpRequest();
    xhr.open('get', 'http://www.json-generator.com/api/json/get/cfvwGUHyJK?indent=2');
    xhr.send();
    xhr.onload = function()
{
 var data1 = JSON.parse (xhr.responseText).features;
 console.log(data1);
 for (let i = 0; data1.length > i; i++){
// 因PL值顯示不同顏色icon
let pipeicon;
if (data1[i].properties.管線 == "台電")
{
  pipeicon = lightning;
 }
else  if (data1[i].properties.管線 == "台水"){
  pipeicon = water;
  }
 else{
  pipeicon = tele;
 }
var pipe =markers2.addLayer(L.marker([data1[i].geometry.coordinates[1], data1[i].geometry.coordinates[0]], {icon: pipeicon})
.bindPopup('<h1>' + data1[i].properties.編號 + '</h1>' + '<font size="5">層數 : ' + data1[i].properties.層數+'<p>' + '</font>'+ '<font size="5">屋齡 : ' + data1[i].properties.屋齡+'<p>'
+ '<font size="5">型態 : ' + data1[i].properties.型態+'<p>' + '<font size="5">管線 : ' + data1[i].properties.管線+'<p>' ));
 }
 map.addLayer(markers2);




//房屋6 個點
const xhr2 = new XMLHttpRequest();
 xhr2.open('get', 'http://www.json-generator.com/api/json/get/cpmOhyyfTm?indent=2');
 xhr2.send();
 xhr2.onload = function()
 {
  var data2 = JSON.parse (xhr2.responseText).features;
  console.log(data2);
  for (let j = 0; data2.length > j; j++){
 let liquefactionicon;
 if (data2[j].properties.GF <= 1 ,data2[j].properties.TF = 0)
 {
   liquefactionicon = greenIcon;
  }
  else if (data2[j].properties.GF == 3,data2[j].properties.TF == 3){
    liquefactionicon = redIcon;
   }
   else if (data2[j].properties.TF == 1,data2[j].properties.GF < 3){
    liquefactionicon = yellowIcon;
   }
  else{
   liquefactionicon = orangeIcon;
  }
if(data2[j].properties.img ==null)
{
  data2[j].properties.img  = '';
}
var set =markers3.addLayer(L.marker([data2[j].geometry.coordinates[1], data2[j].geometry.coordinates[0]], {icon: liquefactionicon})
 .bindPopup('<h1>' + data2[j].properties.field_19 + '</h1>' + '<font size="5">GF : ' + data2[j].properties.GF + '<p></p>'+ '</font>'
 + '<font size="5">TF : ' + data2[j].properties.TF+ '<p></p>' + '</font>'+ '<font size="5">房屋健康等級 : ' + data2[j].properties.field_22+ '<p></p>' + '</font>'+ '<font size="5"> 傾角 : ' + data2[j].properties.min_degree + '<p></p>'+  '</font>'
 +"\r\n"+'<p>'+ '<font size="5" >沉陷量 : (m) ' + data2[j].properties.SET_m + '<p></p>'+ '</font>' +"\r\n" +"<img src='" + data2[j].properties.img  + "'" + " class=popupImage " + "/>"
 +'<object data="" width="350" height="20"></object>',
  {maxWidth : 560}));}
  map.addLayer(markers3);


  const xhr3 = new XMLHttpRequest();
  // 房屋
  xhr3.open('get', 'http://www.json-generator.com/api/json/get/cgyQvJHfIi?indent=2');
  xhr3.send();
  xhr3.onload = function()
  {var data2 = JSON.parse (xhr3.responseText).features;
   console.log(data2);
   for (let j = 0; data2.length > j; j++){
 if(data2[j].properties.img ==null)
 {
   data2[j].properties.img  = '';
 }
  markers10.addLayer(L.marker([data2[j].geometry.coordinates[1], data2[j].geometry.coordinates[0]], {icon: twrench})
  .bindPopup('<h1>' + data2[j].properties.case+ '</h1>' + '<font size="5">GF : ' + data2[j].properties.GF + '<p></p>'+ '</font>'
  + '<font size="5">TF : ' + data2[j].properties.TF+ '<p></p>' + '</font>'+ '<font size="5">房屋健康等級 : ' + data2[j].properties.field_11+ '<p></p>' + '</font>'+ '<font size="5"> 傾角 : ' + data2[j].properties.angle + '<p></p>'+  '</font>'
  +"\r\n"+'<p>'+ '<font size="5" >沉陷量 : (m) ' + data2[j].properties.SET_m + '<p></p>'+ '</font>' +"\r\n" +"<img src='" + data2[j].properties.img  + "'" + " class=popupImage " + "/>"
  +'<object data="" width="350" height="20"></object>',
   {maxWidth : 560}));}
   map.addLayer(markers10);

var setall = markers10

// 鑽孔
xhr3.open('get', 'http://www.json-generator.com/api/json/get/cfVzNQhPuG?indent=2');
xhr3.send();
xhr3.onload = function()
{var data2 = JSON.parse (xhr3.responseText).features;
 console.log(data2);
 for (let j = 0; data2.length > j; j++){
if(data2[j].properties.img ==null)
{
 data2[j].properties.img  = '';
}
if(data2[j].properties.img2 ==null)
{
 data2[j].properties.img2  = '';
}
markers11.addLayer(L.marker([data2[j].geometry.coordinates[1], data2[j].geometry.coordinates[0]], {icon: drill})
.bindPopup('<h1>' + data2[j].properties.No+ '</h1>' + '<font size="5">NCEER : ' + data2[j].properties.NCEER + '<p></p>'+ '</font>'
+ '<font size="5">NJRA : ' + data2[j].properties.NJRA+ '<p></p>' + '</font>'+ '<font size="5">TY : ' + data2[j].properties.TY+ '<p></p>' + '</font>'+ '<font size="5"> AIJ : ' + data2[j].properties.AIJ + '<p></p>'+  '</font>'
+"\r\n"+'<p>'+ '<font size="5" >HBF ' + data2[j].properties.HBF + '<p></p>'+ '</font>' +"\r\n" + '<font size="5" >HBF2 ' + data2[j].properties.HBF2 + '<p></p>'+ '</font>'
+ '<font size="5" >AvgSet ' + data2[j].properties.avgset + '<p></p>'+ '</font>' +"\r\n" +"\r\n" +"<img src='" + data2[j].properties.img  + "'" + " class=popupImage " + "/>"+"<img src='" + data2[j].properties.img2  + "'" + " class=popupImage " + "/>"
+'<object data="" width="350" height="20"></object>',
 {maxWidth : 560}));}
 map.addLayer(markers11);


var twrenchpoint = markers11

//滑鼠點擊跑出當前座標
var popup = L.popup();
function onMapClick(e: { latlng:L.LatLngLiteral | L.LatLngTuple; }) {
    popup
        .setLatLng(e.latlng)
        .setContent("點擊的座標是 " + e.latlng.toString())
        .openOn(map);
}
map.on('click', onMapClick);

//圓圈測試
var circle = L.circle([25.01342504318944, 121.5344778907865], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 50
})

//多邊形測試
var polygon = L.polygon([
  [25.017560449410382,121.53717811800294 ],
      [ 25.01297632890122,121.54056089768035],
      [25.009313789255614,121.53596483148128],
      [ 25.01342504318944,121.5344778907865]],
      {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
      })




//上傳液化地區圖 向量
var loadData = function (){
  $.ajax("https://www.geologycloud.tw/api/v1/zh-tw/liquefaction?area=%E9%9B%B2%E6%9E%97&classify=%E9%AB%98%E6%BD%9B%E5%8B%A2&all=true"
  ,{dataType: "json",
      success: function(geojsonFeature){
          geojsonFeature = geojsonFeature;
          var geojsonOptions = {
              radius: 1,
              fillColor: "red",
              color: "green",
              weight: 1,
              opacity: 0.1,
              fillOpacity: 0.1,
          };
          markers9.addLayer( L.geoJSON(geojsonFeature, {style: geojsonOptions}).addTo(map));}});}
              loadData();
              var high = markers9

var loadData = function (){
  $.ajax("https://www.geologycloud.tw/api/v1/zh-tw/liquefaction?area=%E9%9B%B2%E6%9E%97&classify=%E4%B8%AD%E6%BD%9B%E5%8B%A2&all=true"
  ,{dataType: "json",
      success: function(geojsonFeature){
          geojsonFeature = geojsonFeature;
          var geojsonOptions = {
              radius: 1,
              fillColor: "yellow",
              color: "green",
              weight: 1,
              opacity: 0.1,
              fillOpacity: 0.1,
          };
          markers8.addLayer( L.geoJSON(geojsonFeature, {style: geojsonOptions}).addTo(map));}});}
              loadData();
var mid = markers8
              var loadData = function (){
                $.ajax("https://www.geologycloud.tw/api/v1/zh-tw/liquefaction?area=%E9%9B%B2%E6%9E%97&classify=%E4%BD%8E%E6%BD%9B%E5%8B%A2&all=true"
                ,{dataType: "json",
                    success: function(geojsonFeature){
                        geojsonFeature = geojsonFeature;
                        var geojsonOptions = {
                            radius: 1,
                            fillColor: "green",
                            color: "green",
                            weight: 1,
                            opacity: 0.1,
                            fillOpacity: 0.1,
                        };
                        markers7.addLayer(L.geoJSON(geojsonFeature, {style: geojsonOptions}).addTo(map));}});}
                            loadData();
var low =markers7

 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 // AIJ 邊界
 var loadData = function (){
  $.ajax("http://www.json-generator.com/api/json/get/cfaMqIxQVu?indent=2"
  ,{dataType: "json",
      success: function(geojsonFeature){
          var geojsonOptions = {
              radius: 1,
              fillColor: "green",
              color: "red",
              weight: 1,
              opacity: 1,
              fillOpacity: 0,
          };
          markers6.addLayer(L.geoJSON(geojsonFeature, {style: geojsonOptions}).addTo(map));}});
          var aij = markers6
// 土庫鎮邊界
  $.ajax("http://www.json-generator.com/api/json/get/cehtFCgRlu?indent=2"
  ,{dataType: "json",
      success: function(geojsonFeature){
          var geojsonOptions = {
              radius: 1,
              fillColor: "green",
              color: "black",
              weight: 1,
              opacity: 1,
              fillOpacity: 0, };
              markers4.addLayer( L.geoJSON(geojsonFeature, {style: geojsonOptions})).addTo(map)
        }})
        var toku = markers4

          // img定位
        var imageUrl = 'https://i.ibb.co/wz9ZPzF/7.png',
        imageBounds: L.LatLngBoundsExpression = [
          [23.681434, 120.385973],
          [23.681964, 120.40168],
          [23.670271, 120.402131],
          [23.670488, 120.385931]
        ];
        var img =markers5.addLayer(L.imageOverlay(imageUrl, imageBounds)).addTo(map);


//資料選擇

var baseMaps = {
  "<font size='5'>OSM":OSM,
  "<font size='5'>OSM2":OSM2,
  "<font size='5'>OSM3":OSM3,
}
var overlay = {
  "<font size='5'; style='color: gray'>學校</font>":school,
  "<font size='5'>管線點位":pipe,

  "<font size='5'>沉陷量有圖片":set,
  "<font size='5'>沉陷量":setall,
  "<font size='5'>沉陷量圖":img,
  "<font size='5'>土庫鎮邊界":toku,
  "<font size='5'>AIJ邊界":aij,
  "<font size='5'>高潛勢":high,
  "<font size='5'>中潛勢":mid,
  "<font size='5'>低潛勢":low,
  "<font size='5'>鑽孔點位":twrenchpoint,

}
L.control.layers(baseMaps,overlay).addTo(map);
}
loadData();

//自我定位

map.locate({
  setView: true,
  watch: true,
  enableHighAccuracy: true,
  timeout: 100,
});
function onLocationFound(e: { latlng: L.LatLngLiteral | L.LatLngTuple; }) {
L.marker(e.latlng, {icon: buleIcon}).addTo(map)
    .bindPopup("我在這").openPopup();
L.circle(e.latlng, {
  color: 'blue',
  fillColor: 'blue',
  fillOpacity: 0.1,
  opacity: 1,
  radius: 10
}).addTo(map);}
map.on('locationfound', onLocationFound);
function onLocationError(e: { message: any; }) {
alert(e.message);
}
map.on('locationerror', onLocationError);



}}}}})})($)}}
