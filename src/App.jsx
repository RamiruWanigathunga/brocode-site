import Hero from './components/Hero';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-gray-200 font-sans flex flex-col items-center justify-center px-6">
      <main className="w-full max-w-4xl space-y-16 md:space-y-12">
        <Hero />
        <Team />
      </main>
      <div className="pt-16 md:pt-12 w-full max-w-4xl">
        <Footer />
      </div>
    </div>
  );
}

export default App;
