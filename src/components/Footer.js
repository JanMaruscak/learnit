import React, { Component } from "react";
// import Facebook from '../../images/facebook.svg'
// import Twitter from '../../images/twitter.svg'
// import Instagram from '../images/instagram.svg'

export class Footer extends Component {
  render() {
    return (
      <footer>
        <p>Copyright &copy; 2019 Jan Maruščák.</p>
        <a href="https://www.instagram.com">
          <span className="fab fa-instagram fa-2x"></span>
        </a>
        <a href="https://www.facebook.com">
          <span className="fab fa-facebook fa-2x"></span>
        </a>
        <a href="https://www.twitter.com">
          <span className="fab fa-twitter fa-2x"></span>
        </a>
      </footer>
    );
  }
}

export default Footer;
