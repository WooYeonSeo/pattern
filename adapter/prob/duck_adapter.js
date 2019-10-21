// 신제품 칠면조 로봇을 개발했다.
// 오리 명령어로 칠면조로봇을 날려보자.
// 로봇은 개발이 완성된 상태여서 수정할 수 없다.
// turkeyAdapter 로 quack quack을 수행할 수 있어야 한다.
//interface
class Duck{ 
    quack(); 
    fly(); 
}


class MallardDuck extends Duck{ 
    quack() { 
        console.log("Quack! Quack!");
    } 
    
    fly(){ 
        console.log("FLYING!!!! 400m");
    }     
}


//interface
class Turkey{ 
    gobble(); 
    fly(); 
}

class WildTurkey extends Turkey{ 
    gobble(){ 
        console.log("WildTurkey! Gobble! Gobble!")
    }  
     fly(){ 
        console.log("FLYING!! 10m")
    } 
}

// edit!
class TurkeyAdapter { 

}

let testFlying = ()=>{
    const duck = new MallardDuck(); 
    const turkey = new WildTurkey(); 
    
    console.log("The turkey says..."); 
    turkey.gobble(); 
    turkey.fly();

    //duck test
    duck.fly();
    duck.quack();

    //turkeyAdapter 로 quack quack을 수행할 수 있어야 한다.
}
 // */