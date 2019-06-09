import styles from "./Container.scss";
import React from "react";


class Container extends React.Component {

    render() {
        const {children} = this.props;
        return (
            <div className={styles.component}>
                {children}
            </div>

        )
    }
}

export default Container;