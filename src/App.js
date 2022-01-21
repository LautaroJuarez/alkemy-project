import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import "./general.scss";

function App() {
  return (
    <div className="general-container">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
