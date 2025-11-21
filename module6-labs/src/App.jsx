import Greeting from "./components/Greeting";
import BigCats from "./components/BigCats";
import Emoji from "./components/Emoji";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div>
      <Greeting />
      <Greeting name="John" />
      <Greeting name="children">
        Welcome to the site, children!
      </Greeting>
      <BigCats />
      <Emoji />
      <Calculator />
    </div>
  );
}

export default App;