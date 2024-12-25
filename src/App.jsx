/** @format */
import Routers from "./routes/route";

function App() {
  return (
    <>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about-us'>About</a>
        </li>
      </ul>
      <Routers />
    </>
  );
}

export default App;
