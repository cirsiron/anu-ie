require("./index.less");

const Header = require("../Header/index");
const Group = require("../Group/index");

const App = () =>
<div clasName="wrapper">
    <Header/>
    <div className="container">
        <Group/>  
    </div >
</div>;

module.exports = App;