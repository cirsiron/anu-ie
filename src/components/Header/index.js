require("./index.less");

const React = require("react");
const Img = {
    headerBg: require('../../assets/img/header-bg.jpg')
};

class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <img className="header-bg" src={Img.headerBg}/>
                <div className="header-logo"></div>
            </div>
        )
    }
}

module.exports = Header;