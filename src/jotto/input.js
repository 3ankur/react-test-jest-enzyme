import React,{Component} from "react";
import {connect} from "react-redux";
class Input extends Component{
    render(){
        const content = this.props.success ? null :
        (
            <form>
                <input  data-test="input-box" className="form-control" id="word-guess" type="text" />
                <button data-test="submitButton" name="submit" value="submit">Submit</button>
            </form>
        )

        return (
            <div data-test="component-input">
                {content}
            </div>
        )
    }
}

const mapStateToProps = ({success})=>{
    return {success};
}

export default  connect(mapStateToProps)(Input);