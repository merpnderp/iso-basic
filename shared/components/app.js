const React = require('react');
const actions = require('../mainActions');
const connect = require('react-redux').connect;

const needs = [actions.test];

class App extends React.Component{

    static get needs(){
        return needs;
    }

    constructor(props){
        super(props);
    }


    render(){
        console.log("------App render");
        console.log(this.props.test)
        return(
            <div>
                <h1>App: {this.props.test}</h1>
                {this.props.children}
            </div>
        )
    }
}
const mapStateToProps = (state/*, props*/) => {
    return {
        test: state.main.test
    }
}

module.exports = connect(mapStateToProps)(App)
