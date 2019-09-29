class DataSheetView{
    constructor(scoreRecord, viewCount){
        this.scoreRecord = scoreRecord;
        this.viewCount = viewCount;
    }
    update(){
        const record = this.scoreRecord.scores;
        this.displayScore(record,this.viewCount);
    }
    displayScore(record, viewCount){
        console.log("List of "+viewCount + " entries : ");
        record.sort((a,b)=> {return b-a});
        for(let i=0;i<viewCount && i<record.length;i++){
            console.log(record[i]);
        }
    }
}
module.exports = DataSheetView;