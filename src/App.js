import { Provider } from "react-redux";
import store from "../src/redux/store";
import "./App.scss";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <VideoPlayer />
      </div>
    </Provider>
  );
}

export default App;
