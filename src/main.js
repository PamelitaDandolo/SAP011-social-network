// main apenas para rodar a SPA
import home from './pages/home/home.js'; // segunda ação criada
import about from './pages/about/about.js';
import feed from './pages/feed/feed.js';

const main = document.querySelector('#root'); // terceira ação feita, pega a main lá no index.html

const init = () => {
  window.addEventListener("hashchange", () => {
    main.innerHTML = "";
    switch (window.location.hash) {
      case " ":
        main.appendChild(home());
        break;
      case "#about":
        main.appendChild(about());
        break;
      case "#feed":
        main.appendChild(feed());
        break;
      default:
        main.appendChild(home());
    }
  })
}
window.addEventListener("load", () => {
  main.appendChild(home());
  init();
});

// firebase:

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
