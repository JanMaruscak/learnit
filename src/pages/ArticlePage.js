import React from "react";
import Default from '../components/Default'
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
    const Page = tryRequire(`./ArticlePages/${this.state.article}`) ? tryRequire(`./ArticlePages/${this.state.article}`).default 
   : Default;
    return (<Page />);
  }
}

export default ArticlePage;
