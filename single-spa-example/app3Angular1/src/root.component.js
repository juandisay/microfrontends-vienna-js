import angular from 'angular';

angular
    .module('app')
    .component('root', {
        template: `
            <div class="card">
                        <div class="header">
                            <h2>List Statistics</h2>
                            <img class="header-logo" src="https://angular.io/assets/images/logos/angular/angular_solidBlack.svg">
                        </div>
                        <div class="container">
              This was rendered by App3 which is written in Angular 1.6
            
            <a href="#/app3/subroute1">Subroute 1</a>
            <a href="#/app3/subroute2">Subroute 2</a>
            
            <ui-view />
                        </div>
                    </div>
        `,
        controllerAs: 'vm',
        controller($timeout) {
            const vm = this;
        }
    });
