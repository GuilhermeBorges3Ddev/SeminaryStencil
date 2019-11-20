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
          Essa é a cara de um Stencil App Starter...
          Esta versão está preparada para a criação de Web Components!
          Leia a documentação do site <a href='https://stenciljs.com'>stenciljs.com</a> para iniciar.
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
