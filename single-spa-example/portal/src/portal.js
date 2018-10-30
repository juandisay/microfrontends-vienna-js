import 'zone.js';
import * as singleSpa from 'single-spa';
import { GlobalEventDistributor } from './globalEventDistributor'
import {hashPrefix, loadApp} from './helper';

async function init() {
    const globalEventDistributor = new GlobalEventDistributor();
    const loadingPromises = [];

    // The URLs /app1 - /app4 are redirected to different ports by the webpack proxy (webpack.config.js)
    loadingPromises.push(singleSpa.registerApplication('vueNavBar', () => SystemJS.import('/app4/singleSpaEntry.js'), () => true, null));
    loadingPromises.push(loadApp('app1', '/overview', '/app1/singleSpaEntry.js', '/app1/store.js', globalEventDistributor));

    // loadingPromises.push(loadApp('app2', '/app2', '/app2/singleSpaEntry.js', '/app2/store.js', globalEventDistributor));
    loadingPromises.push(loadApp('app3', '/overview', '/app3/singleSpaEntry.js', null, null)); // does not have a store, so we pass null

    // wait until all stores are loaded and all apps are registered with singleSpa
    await Promise.all(loadingPromises);

    singleSpa.start();
}

init();

