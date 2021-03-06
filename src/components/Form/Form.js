import { Component } from "react";

import styles from "./Form.module.css";

import Subtitle from "../Subtitle/Subtitle";
import FormInput from "../FormInput/FormInput";
import BtnSubmit from "../BtnSubmit/BtnSubmit";

class Form extends Component {
  state = {
    title: "",
    description: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (
      this.state.title.trim() !== "" &&
      this.state.description.trim() !== ""
    ) {
      const newPost = {
        id: Date.now(),
        title: this.state.title,
        description: this.state.description,
      };

      this.props.addPost(newPost);

      this.setState({ title: "", description: "" });
    }
  };

  render() {
    return (
      <>
        <Subtitle message="Your post:" />
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <FormInput
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Title"
          />
          <FormInput
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            placeholder="Description"
          />
          <BtnSubmit />
        </form>
      </>
    );
  }
}

export default Form;
