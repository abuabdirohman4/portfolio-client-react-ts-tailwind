import Navbar from "./components/Navbar";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen w-full overflow-x-hidden px-5 pt-4 md:pt-8">
        <AppRoutes />
      </main>
    </>
  );
}

export default App;
