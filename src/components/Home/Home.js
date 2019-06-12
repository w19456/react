import React from 'react';
import styles from './Home.scss';
import List from '../List/ListContainer.js';
// import Creator from "../Creator/Creator";
import PropTypes from 'prop-types';
import Search from '../Search/SearchContainer.js';
import Hero from "../Hero/Hero";
import Container from "../Container/Container";

class Home extends React.Component {
    static propTypes = {
        title: PropTypes.node,
        subtitle: PropTypes.node,
        lists: PropTypes.array,
    }

    render() {
        const {title, subtitle, lists} = this.props;
        return (
            <Container>
                <Hero title={lists[0].title} image={lists[0].image}/>
                <main className={styles.component}>
                    <h1 className={styles.title}>{title}</h1>
                    <h2 className={styles.subtitle}>{subtitle}</h2>
                    <Search/>
                    {/*<List {...listData}/>*/}
                    {lists.map(listData => (
                        <List key={listData.id} {...listData} />
                    ))}
                </main>
            </Container>
        )
    }
}

export default Home;
