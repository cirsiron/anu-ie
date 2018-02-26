/** 按钮
 * Created by DELL on 2018/2/26.
 */
require("Button.less");

var React = require("react");

class Button extends React.Component {
    render(){
        const text = this.props.text;
        const clazz = this.props.className;
        return (
            <div className="btn-wrapper">
                <button className={clazz}>{text}</button>
            </div>
        )
    }
}

module.export = Button;