//最初に画面が表示されてからアニメーションが描画されるごとにサーバーから盤面の情報を取得する
document.addEventListener("DOMContentLoaded",function(){
	function drawGrid(){
		console.log(1);
		timer=window.requestAnimationFrame(drawGrid);
	}
	drawGrid();
});


//もしAutoSolveボタンが押されたら自動でクリアさせる
/*
document.getElementsByClassName("auto-button").item(0).addEventListener("click",function(){

	//AI部分 requestAnimationFrameで実装
	function autoSolve(){
		AI(grid);
		grid.update();
		timer = window.requestAnimationFrame(autoSolve);
	}
	autoSolve();
});
*/
