const root = document.querySelector('#root');

const element = (
    <div style={{
        width: '200px',
        height: '200px',
        backgroundColor:'blue'
    }}>
        Hello
    </div>
)

ReactDOM.render(element, root)