import { Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation.component";
import Home from "./components/screens/home/Home.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
