import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div>
        <header>
          <h1>
            <b>Seminário:</b> 
          </h1>
          <h1 class="titulo">Uma prática com Stencil App </h1>
        </header>
        
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/profile/:name' component='app-profile' />
            </stencil-route-switch>
          </stencil-router>
          <app-grupo9></app-grupo9>
        </main>
      </div>
    );
  }
}
