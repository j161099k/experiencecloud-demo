import { LightningElement, track } from "lwc";
import getProjects from "@salesforce/apex/CompletedProjects.getProjects";

export default class CompletedProjects extends LightningElement {
  @track projects;
  @track error;

  connectedCallback() {
    getProjects().then((projects) => {
      // console.log(JSON.stringify(projects));
      this.projects = projects;
    })
    .catch((error) => {
      console.log(JSON.stringify(error));
      this.error = error;
    });
  }

  get upperCaseGreeting() {
    return this.greeting.toUpperCase();
  }

  handleChange(evt) {
    this.greeting = evt.target.value;
  }
}
