import model from "./model.js";
import controller from "./controller.js";

model.input.setRef();
model.span.setRef();

model.input.setInputEventHandler(controller.input.inputHandler);
