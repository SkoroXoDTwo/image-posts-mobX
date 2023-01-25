import { makeObservable, observable, action, computed } from "mobx";

class Store {
  constructor() {
    makeObservable(this, {
      posts: observable,
      loadPosts: action,
      addPosts: action,
    });
  }

  posts = [];

  addPosts = (data) => {
    this.posts = data;
  };

  loadPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.addPosts(data);
      });
  };
}

export const storePosts = new Store();
