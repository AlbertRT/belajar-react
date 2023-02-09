const root = document.querySelector('#root');

function click(msg) {
    alert(msg)
}

const element = <button onClick={click.bind(this, "Hello, aku di klik")} >Click me</button>

ReactDOM.render(element, root)