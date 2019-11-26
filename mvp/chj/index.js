import model from "./model.js";
import presenter from "./presenter.js";

model.input.setRef();
model.span.setRef();

model.input.setInputEventHandler(presenter.input.inputHandler);
