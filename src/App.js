import logo from "./logo.svg";
import "./App.scss";
import Button from "./components/button/Button";
import Card from "./components/carrd/Card";

function App() {
  return (
    <div className="App">
      <Button value="FER201m" />
      <Button value="FER201m" />
      <Button value="FER201m" />
      <Button value="FER201m" />
      <hr />
      <div className="list-card" style={{padding: "30px"}}>
        <Card title="Test" />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
