//各種モジュールの読み込み
var express = require('express');
var fs = require('fs');
var router = express.Router();

//各種jsファルの読み込み
var gridContainer=require(__dirname+'/../public/js/gridContainer.js');

//各種静的設定値の設定
const GRID_LENGTH=20;
const GRID_PATH=__dirname+'/../public/json/grid.json';

/* GET users listing. */
router.get('/', function(req, res, next) {
  //gridの情報を取得する
  var grid = new gridContainer();
  if(fs.existsSync(GRID_PATH)){
    var gridTemp = JSON.parse(fs.readFileSync(GRID_PATH,'utf8'));
    grid.bestscore=gridTemp.bestscore;
    grid.score = gridTemp.score;
    grid.size = gridTemp.size;
    grid.matrix = gridTemp.matrix;
  }else{
    grid.initiate(GRID_LENGTH);
    jsonfile.writeFileSync(GRID_PATH,grid);
  }
  //gridの情報を変装する
  res.header('Content-Type','application/json; charset=utf-8');
  res.send(grid);
});

module.exports = router;
