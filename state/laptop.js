/*
노트북 전원이 켜져 있는 상태에서 전원 버튼을 누르면, 전원을 끌 수 있습니다.
노트북 전원이 꺼져 있는 상태에서 전원 버튼을 누르면, 절전모드가 됩니다.
노트북 절전모드 상태에서 전원 버튼을 누르면, 전원을 켤 수 있습니다.
*/

class Laptop {
  constructor(state) {
    this.state = state;
  }

  pushPowerBtn() {
    if (this.state === "TURNED_ON") {
      console.log("전원이 꺼집니다!");
      this.state = "TURNED_OFF";
    } else if (this.state === "TURNED_OFF") {
      console.log("절전 모드입니다!");
      this.state = "SAVING_MODE";
    } else if (this.state === "SAVING_MODE") {
      console.log("전원이 켜집니다.");
      this.state = "TURNED_ON";
    }
  }

  setState(state) {
    this.state = state;
  }
}

module.exports = Laptop;
