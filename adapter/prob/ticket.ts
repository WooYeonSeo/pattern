// A티켓 시스템이 B회사에 팔렸음
// A 시스템에서 B회사 시스템이 지원되게 고쳐보자!
// 요구사항 : const ticketB = new TicketSystemA();  //이게 되야함

interface TicketA {
    choice(token:number):void;
    print():void;
    buy():void;
}
 

class TicketSystemA implements TicketA {

    choice(token:number):void {
        console.log("ticket type : ",token);   
    }
    print():void {
        console.log("print ticket~  ");   
    }
 
    buy():void {
        console.log("buy ticket~  ");  
    }
    
}


interface TicketB {
    choice(token:number):void;
    print():void;
    buy():void;
    buyOnline():void;
}
 

class TicketSystemB implements TicketB {

    choice(token:number):void {
        console.log("ticket type : ",token);   
    }
    print():void {
        console.log("print ticket~  ");   
    }
 
    buy():void {
        console.log("buy ticket~  ");  
    }

    buyOnline():void{
        console.log("buy ticket online ");  
    }
}

(()=>{
    const ticketA = new TicketSystemA();
    ticketA.choice(1);
    ticketA.buy();
    ticketA.print();
    
    const ticketB = new TicketSystemB();
    ticketB.choice(1);
    ticketB.buyOnline();
    ticketB.print();
})();
