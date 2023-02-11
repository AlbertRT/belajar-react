const root = document.querySelector("#root");

function App() {
  const [nama, setNama] = React.useState("");

  function submit(e) {
    e.preventDefault();

    console.log("nama: " + nama);
  }
  return (
    <form onSubmit={submit}>
      <div>
        <label>Nama:</label>
        <input
          type="text"
          name="nama"
          value={nama}
          onChange={function (e) {
            setNama(e.target.value);
          }}
        />
      </div>
      <button type="submit">Kirim</button>
    </form>
  );
}

ReactDOM.render(<App />, root);
