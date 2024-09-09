import { cardsData } from "./data";
import { Card } from "./components/card";
import "./App.css";
import { RotatingBorder } from "./components/rotating-border";
import { DynamicBorder } from "./components/dynamic-border";
import { H2, H3 } from "./components/typography";

function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-b from-gray-900 to-gray-950">
      <header className="flex justify-end px-8 py-4"></header>
      <section className="py-8 sm:py-16">
        <div className="flex flex-col gap-16 px-4 mx-auto sm:px-6 lg:px-8 max-w-3xl sm:gap-y-20">
          <div className="flex flex-col items-center text-center">
            <H2>
              <span>Awesome card hover</span>
            </H2>
          </div>
          <div className="flex flex-col items-center text-center gap-10">
            <H3 className="!text-primary">Rotating border</H3>
            <div className="grid grid-cols-1 gap-8 p-1 sm:grid-cols-2">
              {cardsData.map((card, index) => (
                <RotatingBorder key={index}>
                  <Card title={card.title} description={card.description} />
                </RotatingBorder>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-10">
            <H3 className="!text-primary">Dynamic border</H3>
            <div className="grid grid-cols-1 gap-8 p-1 sm:grid-cols-2">
              {cardsData.map((card, index) => (
                <DynamicBorder key={index}>
                  <Card title={card.title} description={card.description} />
                </DynamicBorder>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
