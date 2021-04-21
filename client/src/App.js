import "./App.css";
import Requests from "./components/Requests";
// Import homepage
// Import react router
// Define routes to homepage
// Define routes to unique dumps

function App() {
  return (
    <div>
      <h1>Request Dump</h1>
      <h2>Valid Routes</h2>
      <ul>
        <li>/api/myEndpoint</li>
        <li>/api/delay5seconds</li>
        <li>/api/delay100seconds</li>
      </ul>
      <Requests />
    </div>
  );
}

export default App;
