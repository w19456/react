import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from "react-html-parser";


class Column extends React.Component {

    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>{ReactHtmlParser(this.props.titleText)}</h3>
            </section>
        )
    }
}

Column.propTypes = {
    titleText: PropTypes.node.isRequired,
};
export default Column;