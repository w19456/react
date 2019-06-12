import React from 'react';
import Container from '../Container/Container';
import {infos, hero} from '../../data/dataStore';
import styles from "./Info.scss";
import Hero from "../Hero/Hero";

class Info extends React.Component {
    render() {
        return (
            <Container>

                <Hero title={hero.title} image={hero.image}/>
                <div>
                    <h2> {infos.title}</h2>

                    <img className={styles.image} alt="" src={infos.image}/>
                    <p>{infos.description}</p>
                </div>


                {/*<Hero title={title} image={image}/>*/}
                {/*<h2>Info</h2>*/}
                {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore*/}
                {/*    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut*/}
                {/*    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse*/}
                {/*    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in*/}
                {/*    culpa qui officia deserunt mollit anim id est laborum.</p>*/}
            </Container>
        )
            ;
    }
}

export default Info;