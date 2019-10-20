class ScoreRecord{
    constructor(){
        this.scores = [];
        this.dataSheetView = undefined; 
    }
    addScore(score){
        this.scores.push(score);
        this.dataSheetView.update();
    }
}
module.exports = ScoreRecord;