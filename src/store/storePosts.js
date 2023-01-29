import { makeAutoObservable } from "mobx";
import axios from "axios";

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  posts = {
    status: "idle",
    list: [],
    error: null,
  };

  addPosts = (data) => {
    this.posts.list = data;
  };

  setStatus = (status) => {
    this.posts.status = status;
  };

  setError = (err) => {
    this.posts.error = err;
  };

  loadPosts = async (page) => {
    this.setStatus("loading");
    this.setError(null);

    try {
      this.setStatus("resolved");
      const posts = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      this.addPosts(posts.data);
    } catch (err) {
      this.setStatus("rejected");
      this.setError(err);
      console.log(err.message);
    }
  };
}

export const storePosts = new Store();
