const Subject = require("./subject");
class ScoreRecord extends Subject{
    constructor(){
        super();
        this.scores = [];
    }
    addScore(score){
        this.scores.push(score);
        this.notifyObservers();
    }
}
module.exports = ScoreRecord;