import "../styles/index.scss";
import { Recipes } from "./Recipes";
import kek from "../images/hqdefault.jpg";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oi Hai, React</h1>
        </section>
        <img src={kek} alt="jkek" width="250" />
        <Recipes />
      </main>
    </>
  );
};

export default App;
