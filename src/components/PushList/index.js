require("./index.less");

const React = require("react");
const axios = require("axios");

class PushList extends React.Component {
    constructor (props) {
        super(props);
        this.handleInput.bind(this);
        this.handleClick.bind(this);
    }
    
    componentDidMount() {

        // axios.get(`http://www.reddit.com/r/reactjs.json`)

        // .then(res => {

        //     const posts = res.data.data.children.map(obj => obj.data);

        //     this.setState({ posts });

        // });

    }
    handleInput(e) {
        console.log(e.currentTarget.value);
    } 
    handleClick(e) {

    }
    render() {
        const title = this.props.title;
        return (
            <div className="group">
                <label>{title}</label>
                <div className="group-wrapper">
                    <input className="group-wrapper--text" onClick={this.handleClick} onInput={this.handleInput}/>
                </div>
            </div>
        )
    }
}
// PushList.defaultProps = {
//     title: "主诉"
// }

module.exports = PushList