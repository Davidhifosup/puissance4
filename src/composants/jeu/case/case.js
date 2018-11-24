import React,{Component} from "react";
import classes from "./case.scss";
import PropTypes from "prop-types"

class Case extends Component {
    render(){
    let cases = null;

    if (this.props.type === "case"){
        cases= <div className={classes.case}></div>
    }
    return cases
    }
}

Case.PropTypes= {
    type: PropTypes.string.isRequired
}
export default Case