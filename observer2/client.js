const ScoreRecode = require('./scorerecode');
const DataSheetView = require('./datasheetview');

const scoreRecode = new ScoreRecode();
const dataSheetView = new DataSheetView(scoreRecode,3);

scoreRecode.dataSheetView = dataSheetView;

for(let i =1;i<=5;i++){
    let score = i * 10;
    console.log("Adding"+ score);
    scoreRecode.addScore(score);
}