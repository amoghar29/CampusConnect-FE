import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./routes/router";
import { AuthProvider } from "./context/authContext";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ScrollToTop />
        <Router />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
