const root = document.querySelector('#root');
const element = /*#__PURE__*/React.createElement("div", {
  style: {
    width: '200px',
    height: '200px',
    backgroundColor: 'blue'
  }
}, "Hello");
ReactDOM.render(element, root);