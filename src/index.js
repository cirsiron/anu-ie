require('./assets/styles/base.less');

const React = require('react');
const ReactDOM = require('react-dom');
const App = require("./components/Index/index.js");

ReactDOM.render(
    <App/> ,
   document.getElementById('root')
)