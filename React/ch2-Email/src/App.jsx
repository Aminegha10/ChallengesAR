import Email from "./Email_React";
import "./App.css";
function nbrhours() {
  return 5;
}
  
export default function App() {
  return (
    <>
      <Email name="amine" nbh={nbrhours()} p={4} />
    </>
  );
}
