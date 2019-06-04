import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from "react-html-parser";
import Card from '../Card/Card.js';
import {settings} from "../../data/dataStore";
import Creator from "../Creator/Creator";
import Icon from "../Icon/Icon";


class Column extends React.Component {
    static defaultProps = {
        icon: settings.defaultColumnIcon,
    }
    // state = {
    //     title: this.props.title || '',
    //     cards: this.props.cards || [],
    // };
    //
    // addCard(title) {
    //     const newKey = this.state.cards.length > 0 ? this.state.cards.length + 1 : 0;
    //     this.setState(state => (
    //         {
    //             cards: [
    //                 ...state.cards,
    //                 {
    //                     key: newKey,
    //                     title,
    //                 }
    //             ]
    //         }
    //     ));
    // }

    render() {
        const {title, icon, cards, addCard} = this.props;
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>
                    <span className={styles.icon}>
                        <Icon name={icon}/>
                    </span>
                    {ReactHtmlParser(title)}
                </h3>
                <div>
                    {cards.map(cardsData => (
                        <Card key={cardsData.id} {...cardsData} />
                    ))} </div>
                {/*{this.state.cards.map(({key, ...cardsProps}) => (<Card key={key} {...cardsProps} />))}*/}
                <div className={styles.component}>
                    <Creator text={settings.cardCreatorText} action={addCard}/>
                </div>
            </section>
        )
    }
}

Column.propTypes = {
    title: PropTypes.node.isRequired,
    addCard: PropTypes.func,
};
export default Column;