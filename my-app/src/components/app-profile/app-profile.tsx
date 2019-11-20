import { Component, Prop, h } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true
})
export class AppProfile {
  @Prop() match: MatchResults;

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }

  render() {
    if (this.match && this.match.params.name) {
      return (
        <div class="app-profile">
          <p>
            Bem-vindo! <br></br>
            Meu nome é {this.normalize(this.match.params.name)}. <br></br>
            Para ver seu nome na tela digite: <br></br>
            <u class="nome">http://localhost:3333/profile/seunome</u>
          </p>
        </div>
      );
    }
  }
}
