import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chat from "./components/chat/ChatIndex";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:id" element={<Chat />} />
        <Route path="/" element={<Chat />} />
      </Routes>
    </Router>
  );
};

export default App;
