import { makeAutoObservable } from "mobx";
import axios from "axios";

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  page = 1;

  nextPage = () => {
    this.page++;
  };

  backPage = () => {
    this.page--;
  }
}

export const storePage = new Store();
