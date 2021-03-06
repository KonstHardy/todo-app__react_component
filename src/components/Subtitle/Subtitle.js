import { Component } from "react";

import styles from "./Subtitle.module.css";

class Subtitle extends Component {
  render() {
    return <h2 className={styles.root}>{this.props.message}</h2>;
  }
}

export default Subtitle;
