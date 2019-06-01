import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from "react-html-parser";
import Card from '../Card/Card.js';
import {settings} from "../../data/dataStore";
import Creator from "../Creator/Creator";


class Column extends React.Component {
    state={
        title: this.props.title || '',
        cards: this.props.cards || [],
    };

    addCard(title){
        const newKey = this.state.cards.length>0 ? this.state.cards.length+1 :0;
        this.setState(state => (
            {
                cards: [
                    ...state.cards,
                    {
                        key: newKey,
                        title,
                    }
                ]
            }
        ));
    }

    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>{ReactHtmlParser(this.state.title)}</h3>
                {this.state.cards.map(({key, ...cardsProps}) => (<Card key={key} {...cardsProps} />))}
                <div className={styles.component}>
                    <Creator text={settings.cardCreatorText} action={this.addCard.bind(this)}/>
                </div>
            </section>
        )
    }
}

Column.propTypes = {
    title: PropTypes.node.isRequired,
};
export default Column;