import ChefImg from "./images/chef.png";
import RestaurantImg from "./images/cerro-san-cristobal.jpeg"

class AboutPage {
  constructor() {
    this.HTMLElement = document.createElement("div");
    this.build();
  }

  aboutChef() {
    const div = document.createElement("div");
    const wrapper = document.createElement("div");
    const h2 = document.createElement("h2");
    const figure = document.createElement("figure");
    const chefImg = new Image();
    const chefDesc = document.createElement("figcaption");
    const para = document.createElement("p");

    div.classList.add("section")

    wrapper.classList.add("wrappwrapperer");

    h2.textContent = "The Chef";

    chefImg.src = ChefImg;
    chefImg.alt = "A brown-skin Chef cutting vegetables with a knife"

    chefDesc.textContent = "Ramiro Serranicus is a multi-millionare, and the most famous chef from Peru. His specialty is 'Cuy a la Sarten'.";
    chefDesc.classList.add("img");

    para.textContent = "Ramiro was concieved in the center of a very humble family. \
      He was born one day when his mother was in the top of Cerro San Cristobal praying \
      to god Wiracocha. She was alone with nobody to aid her in labor. To this day, is a \
      mistery how do they survived and how Ramiro was born. What we know is that he came to \
      this world with a very special hand. He has cooked since 1 year old and save his family \
      from poverty."


    figure.appendChild(chefImg);
    figure.appendChild(chefDesc);

    wrapper.appendChild(h2);
    wrapper.appendChild(figure);

    div.appendChild(wrapper);
    div.appendChild(para);

    this.HTMLElement.appendChild(div);
  }

  aboutRestaurant() {
    const div = document.createElement("div");
    const wrapper = document.createElement("div");
    const h2 = document.createElement("h2");
    const restaurantImg = new Image();
    const para = document.createElement("p");

    div.classList.add("section")

    wrapper.classList.add("wrapper");

    h2.textContent = "The Restaurant"

    restaurantImg.src = RestaurantImg;
    restaurantImg.alt = "Cerro San Cristobal in the City of Lima"

    para.textContent = "Ramiro's Kitchen was funded in order to brign the essence of the famous Chef inside the mouth of mortals. \
      The restaurant is located in the middle of the city. \
      The restaurant has a wide variety of dishes and is known for its high quality ingredients and excellent service.";;

    wrapper.appendChild(h2);
    wrapper.appendChild(restaurantImg);

    div.appendChild(wrapper);
    div.appendChild(para);

    this.HTMLElement.appendChild(div);
  }

  build() {
    this.aboutChef();
    this.aboutRestaurant();
  }
}

export default AboutPage
