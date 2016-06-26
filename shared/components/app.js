const React = require('react');
const actions = require('../mainActions');
const connect = require('react-redux').connect;
const Link = require('react-router').Link;
const needs = [actions.test];

class App extends React.Component {

    static get needs() {
        return needs;
    }

    constructor(props) {
        super(props);
        setTimeout(()=> {
            this.props.dispatch(actions.setTest("Loaded on client"));
        }, 1000);
    }

    render() {
        return (
            <div>
                <h1>App: {this.props.test}</h1>
                <div>
                    <ul>
                        <li>
                            <Link to={`/`}>Home</Link>
                        </li>
                        <li>
                            <Link to={`/foo`}>Foo</Link>
                        </li>
                    </ul>
                </div>
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
