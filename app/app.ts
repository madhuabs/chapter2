import {Component, View} from 'angular2/core';

@Component({
  selector: 'app'
})
@View({
  template: `
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">Stock Tracker</span>
        <div class="mdl-layout-spacer"></div>
        <nav class="mdl-navigation mdl-layout--large-screen-only">
          <a class="mdl-navigation__link">Dashboard</a>
          <a class="mdl-navigation__link">Manage</a>
        </nav>
      </div>
    </header>
    <main class="mdl-layout__content" style="padding: 20px;">

    </main>
  </div>
  `
})
export class App {
}