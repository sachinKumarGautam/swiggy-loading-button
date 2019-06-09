import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Styles from "./style";

class Button extends Component {
    state = { isLoading: false };
    onClick = () => {
        this.setState({
            isLoading: true
        });
        let timer = setTimeout(e => {
            this.setState({
                isLoading: false
            });
        }, 3000);
    };

    componentWillUnmount() {
        clearTimeout(timer);
    }
    render() {
        const { classes } = this.props;
        return (
            <div
                onClick={this.onClick}
                className={`${classes.buttonWrapper} ${
                    this.state.isLoading ? classes.buttonSliderAnimation : ""
                }`}
            >
                {this.state.isLoading ? "Loading" : "Click me"}
            </div>
        );
    }
}

export default withStyles(Styles)(Button);
