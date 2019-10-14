// 버튼을 누르면 램프의 불이 켜지는 프로그램을 커맨드 패턴으로 구현하였다.
// 버튼을 누르면 알람이 울리는 기능을 추가해보자 (hint: 인보커에 setCommand메소드를 추가한다)
// 시간 남으면 undo메소드 추가하여 실행해보자

//커맨드
class Command {
  constructor() {
    this.execute = this.execute;
  }
}

//인보커
class Button {
  constructor(command) {
    this.command = command;
  }

  pressed() {
    this.command.execute();
  }
}

//리시버
class Lamp {
  turnOn() {
    console.log("Lamp On");
  }
}

//컨크리트 커맨드
class LampOnCommand extends Command {
  constructor(lamp) {
    super();
    this.lamp = lamp;
  }
  execute() {
    this.lamp.turnOn();
  }
}

//클라이언트
function client() {
  const lamp = new Lamp();
  const lampOnCommand = new LampOnCommand(lamp);

  const button = new Button(lampOnCommand);
  button.pressed();
}

client();
