import React from 'react';

class Icon extends React.Component {
    render() {
        return (
            <i className={`fas fa-${this.props.name}`}/>)
    }
};

export default Icon;
