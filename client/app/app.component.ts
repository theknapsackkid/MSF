import { Component } from 'angular2/core';
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  
])
export class AppComponent {
  
}