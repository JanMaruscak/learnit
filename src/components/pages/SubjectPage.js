import React from "react";
import Default from "../Default";

const tryRequire = path => {
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
    const Page = tryRequire(`./SubjectPages/${this.state.subject}`)
      ? tryRequire(`./SubjectPages/${this.state.subject}`).default
      : Default;
    return <Page />;
  }
}

export default SubjectPage;
