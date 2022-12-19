import Navbar from "./components/Navbar";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-8">
        <AppRoutes />
      </main>
    </>
  );
}

export default App;
