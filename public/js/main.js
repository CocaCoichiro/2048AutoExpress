//最初に画面が表示されてからアニメーションが描画されるごとにサーバーから盤面の情報を取得する
document.addEventListener("DOMContentLoaded",function(){
	function drawGrid(){
		timer=window.requestAnimationFrame(drawGrid);
	}
	drawGrid();
});

