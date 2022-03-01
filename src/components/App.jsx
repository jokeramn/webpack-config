import "../styles/index.scss";
import { Recipes } from "./Recipes";

const App = () => {
  return (
    <>
      <section className="hero">
        <main>
          <section>
            <h1>Oi Hai, React</h1>
          </section>
        </main>
      </section>
      <Recipes />
    </>
  );
};

export default App;
