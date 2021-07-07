import React from "react";

import {Home} from "./components/index"
import {Route} from "react-router-dom";
import {Personal, Software, School} from "./pages";

function App() {

    return (
        <>
            <Route path="/" component={Home} exact/>
            <Route path="/software-development" component={Software} exact/>
            <Route path="/personal-productivity" component={Personal} exact/>
            <Route path="/school-146" component={School} exact/>
        </>
)
}

export default App;
