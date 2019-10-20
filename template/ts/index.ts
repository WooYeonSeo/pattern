class _RasberryBeer{
    constructor(){

    }
    create(){
        this.addIngredient();
        this.stir();
        this.ferment();
        if(this.test())
            this.distribute();
    }
    addIngredient(){
        console.log("홉 추가");
        console.log("라즈베리 추가")
    }
    stir(){
        console.log("나무 숟가락으로 15번 젓는다.")
    }
    ferment(){
        console.log("발효한다.")
    }
    test():Boolean{
        console.log("맥주 한컵을 따라 맛을 본다.");
        console.log("맥주가 붉은색을 띄는지 확인한다.")
        return true;
    }

    distribute(){
        console.log("50L 통으로 맥주를 옮긴다.")
    }
}
class _MangoBeer{
    create(){
        this.addIngredient();
        this.stir();
        this.ferment();
        if(this.test())
            this.distribute();
    }
    addIngredient(){
        console.log("홉 추가");
        console.log("망고 추가")
    }
    stir(){
        console.log("나무 숟가락으로 15번 젓는다.")
    }
    ferment(){
        console.log("발효한다.")
    }
    test():Boolean{
        console.log("맥주 한컵을 따라 맛을 본다.");
        console.log("맥주가 망고색인지 확인한다.")
        return true;
    }

    distribute(){
        console.log("50L 통으로 맥주를 옮긴다.")
    }
}