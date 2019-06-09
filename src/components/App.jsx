import React, { Component } from "react";
import withRoot from "../withRoot.js";

import Button from "./button";
class App extends Component {
    render() {
        return (
            <div>
                <Button />
            </div>
        );
    }
}

export default withRoot(App);
