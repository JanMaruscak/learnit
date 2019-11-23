import React from "react";
import Default from '../Default'
const tryRequire = (path) => {
  try {
   return require(`${path}`);
  } catch (err) {
   return null;
  }
};
class ArticlePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: props.match.params.articleName
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
 
    console.log(this.state.article)
    console.log("article")
    const Page = tryRequire(`./ArticlePages/${this.state.article}`) ? tryRequire(`./ArticlePages/${this.state.article}`).default 
   : Default;
    //const Page = require(`./SubjectPages/${this.state.subject}`).default;
    return (<Page />);
  }
}

export default ArticlePage;
