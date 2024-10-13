
import './App.css';

function Header(){
  return (
      <>
      <h2>I am Header</h2>
      <Title/>
      </>
  )
}
function Footer(){
  return (
      <>
      <h2>I am Footer</h2>
      <Title/>
      </>
  )
}
function Content(){
  return (
      <>
      <h2>I am Content </h2>
      <Title/>
      </>
  )
}
function Title(){
  return (

      <h3>Title</h3>

  )
}

function App() {
  return (
      <div className="App">
        <Header/>
        <Content/>
        <Footer/>
        <Title/>
      </div>
  );
}

export default App;
