const root = document.querySelector("#root");
function App() {
  const [login, setLogin] = React.useState(false);
  const judulRef = React.useRef(null);
  React.useEffect(function () {
    // const judul = document.getElementById("judul")
    // setTimeout(function() {
    //      judul.textContent = "Application";
    // }, 1000)
    judulRef.current.textContent = 'Aplikasi';
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    ref: judulRef
  }, "Judul"));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);