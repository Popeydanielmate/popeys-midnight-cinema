import Header from "./components/Header";
import Home from "./pages/Home";
import "./styles/global.css";

function App() {
  return (
    <div>
      <Header />
      <main className="main-content">
        <Home />
      </main>
    </div>
  );
}

export default App;



