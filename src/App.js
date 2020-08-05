import React from "react";
import { Provider } from "react-redux";
import { Events } from "./containers";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Events />
      </div>
    </Provider>
  );
}

export default App;
