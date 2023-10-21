// funções de autenticação e armazenamento (storage) do firebase
import {
  // entrar com google
  // entrgar com google
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,

  // onAuthStateChanged, avisa o status do usuário (online ou não)

} from 'firebase/auth';

import { app } from './config.js';

// função autenticação

// função para cadastrar usuário
export function registerEmail(email, password) {
  const auth = getAuth(app);
  return createUserWithEmailAndPassword(auth, email, password);
}

// função login
export function login(email, password) {
  const auth = getAuth(app);
  return signInWithEmailAndPassword(auth, email, password);
}
