import React from 'react';
import ReactDOM from 'react-dom';
import '../sass/core.scss';

import Timeline from './components/timeline';

class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <Timeline />
            </div>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);