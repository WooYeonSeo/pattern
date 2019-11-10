// 대통령
class BlueHouse {
    constructor() {

    }

    speack() {
        return '청와대의 입장은 xxx입니다.';
    }
}

// 정부 대변인
class GovermentSpokesman {
    constructor() {

    }

    speack() {
        return '정부의 공식 입장은 이렇습니다.';
    }
}

const blueHouse = new BlueHouse();
const govermentSpokesman = new GovermentSpokesman();

// 프록시 패턴을 이용하여, 정부 대변인이 청와대의 입장을 포함해서 말하도록 수정해보세요!
console.log(govermentSpokesman.speack());