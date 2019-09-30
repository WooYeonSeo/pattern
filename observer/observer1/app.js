const {Boss,Manager,Programmer} = require('./person');
const {Observer} = require('./observer');

const observer = new Observer();
const boss = new Boss(observer);
const manager = new Manager();
const programmer = new Programmer();

observer.register("bossSpeak", manager.listen, manager); //매니저는 귀담아 듣고 있습니다.
observer.register("bossSpeak", programmer.drop, programmer); //프로그래머는 한귀로 흘러버립니다.
boss.speak("안녕하세요"); //사장님이 말합니다.

