import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

class Hero extends React.Component {
    render() {
        return (
            <header className={styles.component}>
                <h2 className={styles.title}>{ReactHtmlParser(this.props.title)}</h2>
                <img className={styles.image} alt="" src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"/>
            </header>
        )
    }
}

Hero.propTypes = {
    title: PropTypes.node.isRequired,
};
export default Hero;