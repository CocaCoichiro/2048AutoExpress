//各種モジュールの読み込み
var express = require('express');
var router = express.Router();
var cluster = require('cluster');
var fs = require('fs');
var jsonfile=require('jsonfile');

//各種jsファイルの読み込み
var gridContainer=require(__dirname+'/../public/js/gridContainer.js');

//各種静的設定値の設定
const GRID_LENGTH=20;
const GRID_PATH=__dirname+'/../public/json/grid.json';

//マスタープロセスの場合は子プロセスをforkする
if(cluster.isMaster){
	//numOfProcsで起動した
	cluster.fork();
	//ワーカープロセスが死んだときにpidを出力する
	cluster.on('exit',function(worker,code,signal){
		console.log('gridCalcurationWorker' + worker.process.pid + 'died');
	});

	//getリクエストに対する返答を記述する(httpを返す)
	router.get('/', function(req, res, next) {
		//grid関数を定義する
		var grid = new gridContainer();
		//マス目ファイルから現在の値を取得して返す
		if(fs.existsSync(GRID_PATH)){
			var gridTemp = JSON.parse(fs.readFileSync(GRID_PATH,'utf8'));
			grid.score = gridTemp.score;
			grid.size = gridTemp.size;
			grid.matrix = gridTemp.matrix;
		}else{
			grid.initiate(GRID_LENGTH);
			jsonfile.writeFileSync(GRID_PATH,grid);
		}
  		res.render('index', { grid : grid });
	});
	module.exports = router;
}else{
	//マス目を表す変数の定義
	var grid = new gridContainer();

	//gridの情報を取得して書き込む無限ループ
	while(1){
		//gridの情報を取得する
		if(fs.existsSync(GRID_PATH)){
				var gridTemp = JSON.parse(fs.readFileSync(GRID_PATH,'utf8'));
				grid.score = gridTemp.score;
				grid.size = gridTemp.size;
				grid.matrix = gridTemp.matrix;		
			}else{
			grid.initiate(GRID_LENGTH);
			jsonfile.writeFileSync(GRID_PATH,grid);
		}
		//実際に動かす戦略
		//引数directionの中身 0:Up 1:Right 2:Down 3:Left
		grid.move(3);
		grid.move(0);
		
		//gridの情報を書き込む
		jsonfile.writeFileSync(GRID_PATH,grid);
	}
}



