export class LifeBare {
  id;
  life;
  color;

  constructor(life, color = "green") {
    this.id = Math.floor(Math.random() * 9999) + 1;
    this.life = life;
    this.color = color;
  }

  incrementLife() {
    if (this.life <= 90) {
      this.life = this.life + 10;

      if (this.life > 50) {
        this.color = "green";
      } else if (this.life <= 50 && this.life >= 20) {
        this.color = "orange";
      } else if (this.life < 20) {
        this.color = "red";
      }
    }
  }

  decrementLife() {
    if (this.life > 10) {
      this.life = this.life - 10;

      if (this.life > 50) {
        this.color = "green";
      } else if (this.life <= 50 && this.life >= 20) {
        this.color = "orange";
      } else if (this.life < 20) {
        this.color = "red";
      }
    }
  }

  updateLifeBareValue() {
    const htmlLifeBare = document.getElementById(this.id);
    htmlLifeBare.style.width = `${this.life}%`;
    htmlLifeBare.style.background = `${this.color}`;
  }

  createLifeBare() {
    const lifeBareContainer = document.createElement("div");
    lifeBareContainer.classList.add("lifeBareContainer");

    const lifeBare = document.createElement("div");
    lifeBare.classList.add("lifeBare");
    lifeBare.style.width = `${this.life}%`;
    lifeBare.style.background = `${this.color}`;
    lifeBare.id = this.id;

    lifeBareContainer.append(lifeBare);

    return lifeBareContainer;
  }

  createIncrementButton() {
    const incrementButton = document.createElement("button");
    incrementButton.innerText = "Augmenter +";
    incrementButton.addEventListener("click", () => {
      this.incrementLife();
      this.updateLifeBareValue();
    });

    return incrementButton;
  }

  createDecrementButton() {
    const decrementButton = document.createElement("button");
    decrementButton.innerText = "Diminuer -";
    decrementButton.addEventListener("click", () => {
      this.decrementLife();
      this.updateLifeBareValue();
    });

    return decrementButton;
  }

  injectIntoHtml(htmlTargetId) {
    const htmlTargetElement = document.getElementById(htmlTargetId);

    const lifeBare = this.createLifeBare();
    const incrementButton = this.createIncrementButton();
    const decrementButton = this.createDecrementButton();

    htmlTargetElement.append(lifeBare);
    htmlTargetElement.append(decrementButton);
    htmlTargetElement.append(incrementButton);
  }
}
