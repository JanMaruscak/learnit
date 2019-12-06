import React, { Component } from "react";
import {ReactComponent as Facebook} from '../icons/facebook.svg';
import {ReactComponent as Twitter} from '../icons/twitter.svg';
import {ReactComponent as Instagram} from '../icons/instagram.svg';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <p>Copyright &copy; 2019 Jan Maruščák.</p>
        <a href="https://www.instagram.com">
          <Instagram />
        </a>
        <a href="https://www.facebook.com">
          <Facebook />
        </a>
        <a href="https://www.twitter.com">
          <Twitter />
        </a>
      </footer>
    );
  }
}

export default Footer;
