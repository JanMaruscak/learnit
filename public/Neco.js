import ReactDOM from 'react-dom';
var fs = require('fs');
var files = fs.readdirSync("./")

ReactDOM.render(<div></div>,document.getElementById('root'))