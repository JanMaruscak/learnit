import React from "react";
import Default from './SubjectPages/Default'

// var page;
// export default function SubjectPage({match}) {
//   function TryGetPage() {
//     if(true){
//       page = require('./SubjectPages/Fyzika').default
//       return page;
//     }
//   }
//   const ComponentToRender = page;
//   TryGetPage()
//   return <ComponentToRender/>
// }

// if(ComponentToRender == null){
//   ComponentToRender == <main><h1>Error</h1></main>;
// }
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
      subject: props.match.params.name
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
