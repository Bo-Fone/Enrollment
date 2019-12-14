import React, { Component } from 'react';
import CartHead from './components/CartHead';
import CartBody from './components/CartBody';
import './App.css';
import jsonRaw from './components/events.json';

const reducer = (accumulator, item) => accumulator + item.value;
const jsonData = JSON.parse(JSON.stringify(jsonRaw));

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: jsonData.events,
        };
        this.handleEnrollButton = this.handleEnrollButton.bind(this);
        this.handleRemoveButton = this.handleRemoveButton.bind(this);
        this.handleResetButton = this.handleResetButton.bind(this);
    }

    handleEnrollButton = event => {
        const tmpEvents = [...this.state.events];
        const i = tmpEvents.indexOf(event);
        tmpEvents[i] = { ...event };
        tmpEvents[i].value++;
        this.setState({ events: tmpEvents });
    };

    handleRemoveButton = eventId => {
        const tmpEvents = this.state.events.filter(c => c.id !== eventId);
        this.setState({ events: tmpEvents });
    };

    handleResetButton = () => {
        const tmpEvents = this.state.events.map(ct => {
            ct.value = 0;
            return ct;
        });
        this.setState({ events: tmpEvents });
        window.location.reload(true);
    };

    render() {
        return (
            <>
                <div className='table-responsive'>
                    <table className='table'>
                        <CartHead
                            totalItems={this.state.events.reduce(reducer, 0)}
                            onReset={this.handleResetButton}
                        />
                        <CartBody
                            events={this.state.events}
                            onRemove={this.handleRemoveButton}
                            onIncrement={this.handleEnrollButton}
                        />
                    </table>
                </div>
            </>
        );
    }
}

export default App;
