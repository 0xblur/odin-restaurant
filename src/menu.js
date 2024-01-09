// Images
import MenuData from "./menu.json"

class MenuPage {
  constructor() {
    this.pageContainer = document.createElement("div");
    this.pageContainer.classList.add("section");

    this.pageTitle = document.createElement("h2");
    this.pageTitle.textContent = "Menu";
  }
  insertMenuItem(name, description, imgSrc) {
    const wrapper = document.createElement("div");
    const h3 = document.createElement("h3");
    const img = new Image();
    const p = document.createElement("p");

    h3.textContent = name;
    img.src = imgSrc;
    p.textContent = description;

    wrapper.append(h3, img, p)
    this.pageContainer.append(wrapper)
  }

  display() {
    for (let item of MenuData) {
      const imgSrc = require(`./images/${item.image}`);
      this.insertMenuItem(item.name, item.description, imgSrc);

      const contentDiv = document.querySelector("#content");
      contentDiv.appendChild(this.pageContainer);
    }
  }
}

export default MenuPage
