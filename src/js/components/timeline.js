import React from 'react';
import ReactDOM from 'react-dom';

import TimelineRow from './timelineRow';

class Timeline extends React.Component {
    
    render() {
        const rows = [];
        
        let i = 0;
        // this.props.data.forEach(function(col) {
        //     rows.push(<TimelineRow col={col} key={i} />);
        //     i++;
        // });

        return (
            <div>
                {rows}
            </div>
        );
    }
}

export default Timeline;