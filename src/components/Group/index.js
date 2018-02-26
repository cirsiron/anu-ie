require("./index.less");

const React = require("react");
const PushList = require("../PushList/index");

class Group extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
        }
        // this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount () {

    }

    render() {
        const TitleArr = {
            "0": "主诉",
            "1": "现病史",
            "2": "既往史",
            "3": "其他史",
            "4": "体征",
        };

        return (
            <div>
                <PushList title={TitleArr[0]}/>
                
                <PushList title={TitleArr[1]}/>
                
                <PushList title={TitleArr[2]}/>
                
                <PushList title={TitleArr[3]}/>
                
                <PushList title={TitleArr[4]}/>

            </div>
        )
    }
}

module.exports = Group;