const persons = [
  {
    name: "Ben Gorr",
    photo: "ben.jpg",
    title: "VP of Space Engineering",
    bio:
      "<p>Ben was previously the chief engineer of the AggieSat Satellite Laboratory at Texas A&M. He is aiding the team part-time and provides support on interfacing with the International Space Station to set up experiments.</p>",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/ben-gorr-903764134"
    }
  },
  {
    name: "Lewis Jones",
    photo: "lewis.jpg",
    title: "CEO/Founder",
    bio:'<p>Lewis brings perspective and technical skills having worked on 7 different spacecraft at 4 different space businesses including NASA and SpaceX. He holds degrees in mechanical engineering and economics from Caltech, and leads business strategy and operations at Demeter Space.</p>',
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/lewis-c-jones/"
    }
  },
  {
    name: "Jack Caldwell",
    photo: "jack.jpg",
    title: "VP of Product Engineering",
    bio:
      "<p>Jack was previously a research engineer on the Costar team for the DARPA subterranean competition. He has a varied background developing high-pressure fluid systems for rockets as well as research in biology, mathematics, physics, and robotics. He leads the fermentation process engineering and product development.</p>",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/jack-caldwell-038538179/"
    }
  },

];

const app = new Vue({
  el: "#app",
  data() {
    return {
      persons: persons,
      selectedPersonIndex: null,
      isSelected: false,
      selectedPerson: null,
      inlineStyles: null,
      isReady: false,
      isOk: false,
      selectedPersonData: {
        name: null,
        title: null,
        photo: null,
        social: {
          facebook: null,
          twitter: null,
          linkedin: null
        }
      }
    };
  },
  methods: {
    selectPerson(index, el) {
      if (!this.isOk) {
        this.selectedPersonIndex = index;
        this.isSelected = true;
        el.target.parentElement.className == "person-details"
          ? (this.selectedPerson = el.target.parentElement.parentElement)
          : (this.selectedPerson = el.target.parentElement);

        this.selectedPerson.classList.add("person-selected");
        this.selectedPerson.setAttribute(
          "style",
          `width:${this.selectedPerson.offsetWidth}px;`
        );
        this.selectedPersonData = this.persons[index];
        window.setTimeout(() => {
          this.inlineStyles = `width:${this.selectedPerson
            .offsetWidth}px;height:${this.selectedPerson
            .offsetHeight}px;left:${this.selectedPerson.offsetLeft}px;top:${this
            .selectedPerson.offsetTop}px;position:fixed`;
          this.selectedPerson.setAttribute("style", this.inlineStyles);
        }, 400);
        window.setTimeout(() => {
          this.isReady = true;
          this.isOk = true;
        }, 420);
      } else {
        this.reset();
      }
    },
    reset() {
      this.isReady = false;
      window.setTimeout(() => {
        this.selectedPerson.classList.add("person-back");
      }, 280);
      window.setTimeout(() => {
        this.selectedPerson.setAttribute("style", "");
      }, 340);
      window.setTimeout(() => {
        this.isSelected = false;
        this.selectedPerson.classList.remove("person-back", "person-selected");
        this.isOk = false;
      }, 400);
    }
  }
});
