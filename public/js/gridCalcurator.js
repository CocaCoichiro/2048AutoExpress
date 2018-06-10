//各種モジュールの読み込み
var fs=require('fs');
var jsonfile=require('jsonfile');

//各種jsファイルの読み込み
var gridContainer=require(__dirname+'/gridContainer.js');

//gridの大きさ
const GRID_LENGTH=20;

//gridを読み込むパス
const GRID_PATH = __dirname+'/../json/grid.json'

//まずgridを初期化する
var grid=new gridContainer();


//無限ループでマス目を移動させてその状態をJSONで書き込む
while(1){
	//gridの情報を取得する
	if(fs.existsSync(GRID_PATH)){
		gridTemp=require(GRID_PATH);
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
	
	console.log(grid);
	
	//gridの情報を書き込む
	jsonfile.writeFileSync(GRID_PATH,grid);
}
