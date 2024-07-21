import logo from "./logo.svg"

function App() {
  return (
    <div className="App">

      <img src="/logo192.png"></img> 
      <img src={logo}></img>
   </div>
  );
} // burada  ikinci imgdeki src kısmından aldık. o yüzden süslü parantezlerle ve import ettik.

export default App;
