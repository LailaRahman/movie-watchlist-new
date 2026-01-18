import Badge from "./components/Badge";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Reusable Badge Component</h1>

      <Badge label="Course" value="React" />
      <Badge label="Week" value="1" />
      <Badge label="Topic" value="Props" />
      <Badge label="Difficulty" value="Beginner" />
    </div>
  );
}

export default App;
