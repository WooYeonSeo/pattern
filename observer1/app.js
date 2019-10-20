const {Boss,Manager,Programmer} = require('./person');
const {Observer} = require('./observer');

const observer = new Observer();
const boss = new Boss(observer);
const manager = new Manager();
const programmer = new Programmer();

observer.register("bossSpeak", manager.listen, manager);
observer.register("bossSpeak", programmer.drop, programmer);
boss.speak("안녕하세요");

