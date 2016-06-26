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
        setTimeout(()=>{
            this.props.dispatch(actions.setTest("Loaded on client"));
        },1000);
    }

    render(){
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
