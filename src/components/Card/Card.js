import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from "react-html-parser";

class Card extends React.Component {
    state = {
        title: this.props.title || '',

    };
    static propTypes = {
        title: PropTypes.node.isRequired,
    };


    render() {
        const {title} = this.props;
        return (
            <h3 className={styles.component}>{ReactHtmlParser(title)}</h3>

        )
    }


}

export default Card;