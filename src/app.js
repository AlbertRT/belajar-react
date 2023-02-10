const root = document.querySelector("#root");

function App() {
  const [login, setLogin] = React.useState(false);
  const judulRef = React.useRef(null)

  React.useEffect(function() {
     // const judul = document.getElementById("judul")
     // setTimeout(function() {
     //      judul.textContent = "Application";
     // }, 1000)
     judulRef.current.textContent = 'Aplikasi'
  }, [])

  return (
    <>
      <h1 ref={judulRef}>Judul</h1>
    </>
  );
}

ReactDOM.render(<App />, root);
