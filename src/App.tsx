import Header from "./components/Header";
import Hero from "./components/Hero";
import Overview from "./components/Overview";

function App() {
  return (
    <main className="py-10 container mx-auto relative flex flex-col gap-10 px-10 md:px-0">
      <Header />
      <Hero />
      <Overview />
    </main>
  );
}

export default App;
