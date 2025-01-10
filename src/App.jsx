import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./routes/router";
import { AuthProvider } from "./context/authContext";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
