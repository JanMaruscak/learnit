import React from "react";

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
class SubjectPage extends React.Component {
  render () {
      const ComponentToRender = require('./SubjectPages/Fyzika').default;
      return <ComponentToRender/>
  }
}

export default SubjectPage