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
  render() {
    const Page = tryRequire(`./ArticlePages/${this.props.match.params.articleName}`) ? tryRequire(`./ArticlePages/${this.props.match.params.articleName}`).default 
   : Default;
    return (<Page />);
  }
}

export default ArticlePage;
