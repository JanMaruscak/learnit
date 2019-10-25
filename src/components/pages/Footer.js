import React, { Component } from "react";
import Facebook from '../../images/facebook.svg'
import Twitter from '../../images/twitter.svg'
import Instagram from '../../images/instagram.svg'

export class Footer extends Component {
  render() {
    return (
      <footer>
        <p>Copyright &copy; 2019 Jan Maruščák.</p>
        <img src={Instagram} alt="instagram-logo"/>
        <img src={Facebook} alt="facebook-logo"/>
        <img src={Twitter} alt="twitter-logo"/>
      </footer>
    );
  }
}

export default Footer;
