const root = document.querySelector("#root");
function App() {
  const [nama, setNama] = React.useState("");
  function submit(e) {
    e.preventDefault();
    console.log("nama: " + nama);
  }
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Nama:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "nama",
    value: nama,
    onChange: function (e) {
      setNama(e.target.value);
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Kirim"));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);