const root = document.querySelector('#root');
function click(msg) {
  alert(msg);
}
const element = /*#__PURE__*/React.createElement("button", {
  onClick: click.bind(this, "Hello, aku di klik")
}, "Click me");
ReactDOM.render(element, root);