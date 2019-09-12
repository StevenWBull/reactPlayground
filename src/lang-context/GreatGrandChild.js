import React, { Component } from 'react'
import languageSpecificCopy from './languageSpecificCopy';
import { copyFile } from 'fs';

export default class GreatGrandChild extends Component {
  render() {
    const copy = languageSpecificCopy['en-US'] || {};
    return (
      <section>
        <h2>copy.title</h2>
        <p>{copy.body}</p>
      </section>
    )
  }
}