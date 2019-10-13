class DependentPizzaStore {
    constructor() {

    }

    createPizza(style, type) {
        let pizza = undefined;

        if (style === "NY") {
            if (type === "cheese") {
                pizza = new NYStyleCheesePizza();
            } else if (type === "veggie") {
                pizza = new NYStyleVeggiePizza();
            } else if (type === "pepperoni") {
                pizza = new NYStylePepperoniPizza();
            }
        } else if (style === "Chicago") {
            if (type === "cheese") {
                pizza = new ChicagoStyleCheesePizza();
            } else if (type === "veggie") {
                pizza = new ChicagoStyleVeggiePizza();
            } else if (type === "pepperoni") {
                pizza = new ChicagoStylePepperoniPizza();
            }
        } else {
            return null;
        }
        return pizza;
    }
}