import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <p>
          Welcome to the Stencil App Starter.
          You can use this starter to build entire apps all with
          web components using Stencil!
          Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p>

        <stencil-route-link url='/profile/stencil'>
          <button>
            Clique para ver uma diretiva em ação
          </button>
        </stencil-route-link>

          <a href={'https://stencil-fiber-demo.firebaseapp.com/perf.html'}>
            Clique aqui para ver um exemplo mais avançado
          </a>

      </div>
    );
  }
}
