import Header from "./components/Header";
import Hero from "./components/Hero";
import Overview from "./components/Overview";

function App() {
  return (
    <main className="">
      <div className="absolute left-0 top-0 bg-light-top-bg dark:bg-dark-top-bg w-full h-[300px]"></div>
      <div className="absolute left-0 top-[300px] bg-light-bg dark:bg-dark-bg w-full h-[calc(100%-300px)]"></div>
      <div className="container mx-auto relative flex flex-col gap-10 mt-10 px-10 md:px-0">
        <Header />
        <Hero />
        <Overview />
      </div>
    </main>
  );
}

export default App;
