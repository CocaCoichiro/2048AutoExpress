//最初に画面が表示されてからアニメーションが描画されるごとにサーバーから盤面の情報を取得する
setInterval
document.addEventListener("DOMContentLoaded",function(){
	draw(grid);
	update(grid);
});


//grid自体の中身を描画する関数
function draw(grid){
	//grid-containerを取得する
	gridContainerHTML=document.querySelector('.grid-container');
	
	//grid-containerの中身を削除する
	while( gridContainerHTML.firstChild ){
		gridContainerHTML.removeChild( gridContainerHTML.firstChild );
	}

	//grid-rowとgrid-cellを記述する
	for(var i=0; i<grid.size; i++){
		//gridrowのHTML要素を作る
		var gridrowHTML = document.createElement('div');
		gridrowHTML.className="grid-row";
		
		for(var k=0; k<grid.size; k++){
			//gridcellのHTML要素を作る
			var gridcellHTML = document.createElement('div');
			gridcellHTML.className="grid-cell";
			//gridrowに追加する
			gridrowHTML.appendChild(gridcellHTML);
		}
		//gridContainerに追加する
		gridContainerHTML.appendChild(gridrowHTML);
	}

	//grid-cellのwidthとheightを取得する
	var width = window.getComputedStyle( document.getElementsByClassName('grid-cell').item(0)).width.split("px")[0];
	var height = window.getComputedStyle( document.getElementsByClassName('grid-cell').item(0)).height.split("px")[0];
	var margin = window.getComputedStyle( document.getElementsByClassName('grid-cell').item(0)).marginRight.split("px")[0];

	//game-containerの縦幅と横幅を変更する
	var gameContainer=document.getElementsByClassName("game-container");
	gameContainer.item(0).setAttribute("style","width:"+(width*grid.size+margin*grid.size +15)+"px"+";height:"+(height*grid.size+margin*grid.size +15)+"px");
}

//gridの中身を反映する関数
function update(grid){
	//gridの中身を反映する
	var gridRow = document.querySelectorAll('.grid-row');
	for(var i=0; i<grid.size; i++){
		var gridCell = gridRow.item(i).querySelectorAll('.grid-cell');
		for(var j=0; j<grid.size; j++){
			//0の場合は空白文字を入力する
			if(grid.matrix[i][j]){
				gridCell.item(j).innerHTML = grid.matrix[i][j];
				
				//桁数に応じて表示する文字の大きさを変更する
				digit = grid.matrix[i][j].toString(10).length;
				if(digit > 3){
					gridCell.item(j).style.fontSize = (180/digit) + 'px';
				}else{
					gridCell.item(j).style.fontSize = '60px';
				}
				
			}else{
				gridCell.item(j).innerHTML = "";
			}
		}
	}
	//スコアの中身を反映する
	var scoreContainer=document.querySelector('.score-container');
	scoreContainer.innerHTML = grid.score;
}