/* eslint no-console:0 */
// import {install as offlineInstall} from 'offline-plugin/runtime'
import {onLoad} from './app.mjs'
import {$on} from './helpers.mjs'


$on(window, 'load', onLoad)
$on(window, 'hashchange', onLoad)
// if (process.env.NODE_ENV === 'production') {
//   offlineInstall()
// }
