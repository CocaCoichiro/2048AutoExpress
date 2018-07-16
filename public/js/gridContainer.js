//基本的にGridの中身を色々やりとりするクラス
var gridContainer = function(){
	//最高点を保持する
	this.bestscore = 0;
	//点数を保存する
	this.score = 0;
	//マトリクスの大きさを定義する
	this.size = 0;
	//マトリクスを作成する
	this.matrix = new Array();
	
};

//sizeのセット関数
gridContainer.prototype.setSize = function (matrixSize){
	this.size = matrixSize;
}

//初期化するメソッド
gridContainer.prototype.initiate = function(matrixSize){
	//スコアの初期化
	this.score=0;
	
	//サイズの初期化
	this.size=matrixSize;
		
	//配列の初期化
	this.matrix=new Array();
	
	//数字を格納するmatrix配列を定義する
	this.matrix.length=this.size;
	this.matrix.fill(0);
	
	//matrixの数字を全て0に初期化する
	for(var i=0; i<this.size; i++){
		this.matrix[i]=new Array(this.size);
		this.matrix[i].length=this.size;
		this.matrix[i].fill(0);
	}

	//ランダムに一つの関数に対して2を代入する
	var x= Math.floor(Math.random()*this.size);
	var y= Math.floor(Math.random()*this.size);
	this.matrix[x][y]=2;

	//今の点数と比較し，最高点を更新していた場合は最高点を更新する
	if(this.score > this.bestscore){
		this.bestscore = this.score;
	}
}


//Gridの中身を動かすメソッド
//引数directionの中身 0:Up 1:Right 2:Down 3:Left
gridContainer.prototype.move = function(direction){
	//上方向に移動させる
	if(direction==0){
		//まず0がある場合はその方向に移動させる
		for (var k=0; k<this.size; k++){
			for (var i=0; i<this.size; i++){
				for(var j=0; j<(this.size-1); j++){
					if(this.matrix[j][i] == 0){
						this.matrix[j][i] = this.matrix[j+1][i];
						this.matrix[j+1][i] = 0;
					}
				}
			}
		}
		//次に同じ数字が連続している場合はその方向の数字と結合させる
		for (var i=0; i<this.size; i++){
			for(var j=0; j<(this.size-1); j++){
				if(this.matrix[j][i] == this.matrix[j+1][i]){
					this.score = this.score+this.matrix[j][i];
					this.matrix[j][i] = this.matrix[j+1][i]*2;
					this.matrix[j+1][i] = 0;
				}
			}
		}
		//また0がある場合はその方向に移動させる
		for (var k=0; k<this.size; k++){
			for (var i=0; i<this.size; i++){
				for(var j=0; j<(this.size-1); j++){
					if(this.matrix[j][i] == 0){
						this.matrix[j][i] = this.matrix[j+1][i];
						this.matrix[j+1][i] = 0;
					}
				}
			}
		}
	}
	
	//右方向に移動させる
	if(direction==1){
		//まず0がある場合はその方向に移動させる
		for (var k=0; k<this.size; k++){
			for (var i=0; i<this.size; i++){
				for(var j=0; j<(this.size-1); j++){
					if(this.matrix[i][this.size-j-1] == 0){
						this.matrix[i][this.size-j-1] = this.matrix[i][this.size-j-2];
						this.matrix[i][this.size-j-2] = 0;
					}
				}
			}
		}
		//次に同じ数字が連続している場合はその方向の数字と結合させる
		for (var i=0; i<this.size; i++){
			for(var j=0; j<(this.size-1); j++){
				if(this.matrix[i][this.size-j-1] == this.matrix[i][this.size-j-2]){
					this.score = this.score+this.matrix[i][this.size-j-1];
					this.matrix[i][this.size-j-1] = this.matrix[i][this.size-j-2]*2;
					this.matrix[i][this.size-j-2] = 0;
				}
			}
		}
		//また0がある場合はその方向に移動させる
		for (var k=0; k<this.size; k++){
			for (var i=0; i<this.size; i++){
				for(var j=0; j<(this.size-1); j++){
					if(this.matrix[i][this.size-j-1] == 0){
						this.matrix[i][this.size-j-1] = this.matrix[i][this.size-j-2];
						this.matrix[i][this.size-j-2] = 0;
					}
				}
			}
		}
	}
	
	//下方向に移動させる
	if(direction==2){
		//まず0がある場合はその方向に移動させる
		for (var k=0; k<this.size; k++){
			for (var i=0; i<this.size; i++){
				for(var j=0; j<(this.size-1); j++){
					if(this.matrix[this.size-j-1][i] == 0){
						this.matrix[this.size-j-1][i] = this.matrix[this.size-j-2][i];
						this.matrix[this.size-j-2][i] = 0;
					}
				}
			}
		}
		//次に同じ数字が連続している場合はその方向の数字と結合させる
		for (var i=0; i<this.size; i++){
			for(var j=0; j<(this.size-1); j++){
				if(this.matrix[this.size-j-1][i] == this.matrix[this.size-j-2][i]){
					this.score = this.score+this.matrix[this.size-j-1][i];
					this.matrix[this.size-j-1][i] = this.matrix[this.size-j-2][i]*2;
					this.matrix[this.size-j-2][i] = 0;
				}
			}
		}
		//まず0がある場合はその方向に移動させる
		for (var k=0; k<this.size; k++){
			for (var i=0; i<this.size; i++){
				for(var j=0; j<(this.size-1); j++){
					if(this.matrix[this.size-j-1][i] == 0){
						this.matrix[this.size-j-1][i] = this.matrix[this.size-j-2][i];
						this.matrix[this.size-j-2][i] = 0;
					}
				}
			}
		}
	}
	
	//左方向に移動させる
	if(direction==3){
		//まず0がある場合はその方向に移動させる
		for (var k=0; k<this.size; k++){
			for (var i=0; i<this.size; i++){
				for(var j=0; j<(this.size-1); j++){
					if(this.matrix[i][j] == 0){
						this.matrix[i][j] = this.matrix[i][j+1];
						this.matrix[i][j+1] = 0;
					}
				}
			}
		}
		//次に同じ数字が連続している場合はその方向の数字と結合させる
		for (var i=0; i<this.size; i++){
			for(var j=0; j<(this.size-1); j++){
				if(this.matrix[i][j] == this.matrix[i][j+1]){
					this.score = this.score+this.matrix[i][j];
					this.matrix[i][j] = this.matrix[i][j+1]*2;
					this.matrix[i][j+1] = 0;
				}
			}
		}
		//また0がある場合はその方向に移動させる
		for (var k=0; k<this.size; k++){
			for (var i=0; i<this.size; i++){
				for(var j=0; j<(this.size-1); j++){
					if(this.matrix[i][j] == 0){
						this.matrix[i][j] = this.matrix[i][j+1];
						this.matrix[i][j+1] = 0;
					}
				}
			}
		}
	}
	
	//0のセルがあるかどうかを検索してあった場合に2を挿入する
	var count=0;
	this.matrix.forEach(function(val){
		val.forEach(function(val2){
			if(val2 == 0){
				count++;
			}
		});
	});
	if(count != 0){
		while(1){
			var x= Math.floor(Math.random()*this.size);
			var y= Math.floor(Math.random()*this.size);
			if(this.matrix[x][y] == 0){
				this.matrix[x][y] = 2;
				break;
			}
		}
	}
	
	//最高点を更新している場合は最高点を更新する
	if(this.score>this.bestscore){
		this.bestscore=this.score;
	}
}

//gridの中身が死んでいるかどうかを確認する関数
gridContainer.prototype.checkDeath = function(){
	for(var i=0; i<this.size; i++){
		for(var j=0; j<this.size;j++){
			if(this.matrix[i][j]==0){
				return false;
			}
		}
	}
	return true;
}



//エクスポートする
module.exports=gridContainer;
