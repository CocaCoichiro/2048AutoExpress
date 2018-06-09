//各種モジュールの読み込み
var fs=require('fs');
var jsonfile=require('jsonfile');

//gridの大きさ
const GRID_LENGTH=20;

//gridを読み込むパス
const GRID_PATH = __dirname+'/../json/grid.json'

//無限ループでマス目を移動させてその状態をJSONで書き込む
while(1){
	//gridの情報を取得する
	var grid= require(GRID_PATH);
	
	//gridの内容を出力す
	if(grid.gridLength == undefined){
		grid.gridLength = GRID_LENGTH;
	}
	
	//gridの情報を書き込む
	var data = jsonfile.writeFileSync(GRID_PATH,grid);
}