import {
  collection,
  query,
  onSnapshot,
  orderBy,
  doc,
  updateDoc,
} from 'firebase/firestore';
// collection são o conjunto de post lá em narnia
import { db } from './config.js';

// exibPost
export function lerPosts(exibirPosts) {
// console.log('lendo posts');
  const q = query(collection(db, 'posts'), orderBy('data', 'asc')); // ordenar exibição de posts 

  const posts = [];
  // onSnapshot atualiza em tempo real
  onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((document) => { // pega cada um dos documentos que está em nárnia
      const obj = {
        dataDoPost: document.data().data,
        textoDoPost: document.data().text,
        idUser: document.id, // sequência de números e letras lá na collection que identifica o post
      };
      posts.push(obj);
    });
    // console.log('Posts', posts.join(''));
    console.log('Posts', posts);
    // são os posts que vieram de narnia e foram jogados numa array que está dentro da const linha 9
    exibirPosts(posts); // essa função exibe o post na tela, criar no feedjs
  });
}

// editPost
export async function editPost(userId, newText, dataPost) {
  await updateDoc(doc(db, 'posts', userId), {
    dataDoPost: dataPost,
    textoDoPost: newText,
    idUser: userId,
  });
}

// likePost (Aline)
// deletePost (Alycia)
