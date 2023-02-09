const root = document.querySelector("#root");
function App() {
  const [diklik, setKlik] = React.useState(false);
  const [count, setCount] = React.useState(0);
  React.useEffect(function () {
    console.log('exec');
    return function () {
      console.log('destroy');
    };
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    id: "judul"
  }, "Hello, ini adalah judul"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setKlik(true);
    }
  }, "Klik saya"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count + 1);
    }
  }, "Tambah"), "nilai saat ini: ", count);
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);