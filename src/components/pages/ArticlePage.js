import React from "react";
import Default from './SubjectPages/Default'
const tryRequire = (path) => {
  try {
   return require(`${path}`);
  } catch (err) {
   return null;
  }
};

class SubjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: props.match.params.subjectName
    };
  }
 
  render() {
    // var Variable = require(`./SubjectPages/${this.state.subject}`)
    // .default;
    // if(Variable == null)
    //   Variable = <main></main>
    // var file = `./SubjectsPage/${this.state.subject}`;
    // if (file.exists()) {
    //   return null;
    // }
    
    const Page = tryRequire(`./SubjectPages/${this.state.subject}`) ? tryRequire(`./SubjectPages/${this.state.subject}`).default 
   : Default;
    //const Page = require(`./SubjectPages/${this.state.subject}`).default;
    return (<Page />);
  }
}

export default SubjectPage;
