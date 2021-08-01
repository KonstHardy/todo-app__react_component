import { Component } from "react";

import styles from "./App.module.css";

import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  addPost(valueTitle, valueDesc) {
    const newPost = {
      id: new Date(),
      title: valueTitle,
      desc: valueDesc,
    };

    this.state.posts.push(newPost);

    this.setState({ posts: this.state.posts });
  }

  removePost(id) {
    this.setState({
      posts: [...this.state.posts].filter((post) => post.id !== id),
    });
  }

  render() {
    return (
      <div className={styles.App}>
        <div className={styles.App__wrapper}>
          <h1 className={styles.App__title}>TODO App</h1>
          <Form addPost={this.addPost.bind(this)} />
          <Posts
            posts={this.state.posts}
            removePost={this.removePost.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
