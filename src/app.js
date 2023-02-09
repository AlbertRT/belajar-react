const root = document.querySelector("#root");

function App() {
     const [diklik, setKlik] = React.useState(false)
     const [count, setCount] = React.useState(0)

  React.useEffect(function () {
    console.log('exec');

    return function() {
     console.log('destroy')
    }
  });

  return (
     <>
     <h1 id="judul">Hello, ini adalah judul</h1>
     <button onClick={function() {
          setKlik(true)
     }}>Klik saya</button>
     <button onClick={function() {
          setCount(count + 1)
     }}>Tambah</button>
     nilai saat ini: {count}
     </>
  );
}

ReactDOM.render(<App />, root);