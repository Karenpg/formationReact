import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore} from 'react-router-redux';
// On importe les routes de l'application
import routes from './routes.js';
// Création du store Redux... (voir page précédente)
// On crée un historique synchronisé avec le store
// (browserHistory = Historique basé sur l'URL du navigateur)
let history = syncHistoryWithStore(browserHistory, store);
// A la place du composant principal on utilise
// le composant "Router" de 'react-router'

ReactDOM.render((
  <div class="container">
    {this.props.children}
  </div>
 ),
 document.getElementById( 'app' )
);
