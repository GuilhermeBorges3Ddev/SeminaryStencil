import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-grupo9',
  styleUrl: 'grupo9.css',
  shadow: true
})
export class Grupo9 {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
