import {
  lerPosts,
  createPost,
  editPost,
  deletePost,
  likePost,
} from '../../firebase/firestore.js';
import { exit } from '../../firebase/firebase.js';
import editbutton from '../../img/editbutton.png';
import favoritebutton from '../../img/favorite.png';
import deletebutton from '../../img/delete.png';

export default () => {
  const container = document.createElement('div');

  const template = `
<head> 
<link href="https://fonts.googleapis.com/css2?family=Material+Icons&display=swap" rel="stylesheet">
<p>
<i class="material-icons custom-icon">
<a href="/#home">home</a></i> <!-- Ícone da página cadastrar-->
<i class="material-icons custom-icon">
<a href="/#about">favorite</a></i> <!-- Ícone para ir ao about-->
<i class="material-icons custom-icon">
onclick="irParaExit()">exit_to_app</i> <!-- Ícone para ir ao login -->
</head>
<p>
<button id="about-btn" type="submit">Sobre</button> 
<button id="exit-btn" type="submit">Sair</button> 
</header>

<label>Nome</label>
<p>
<textarea id="new-post-txt" placeholder="Digite seu post aqui..." minlength="20"
maxlength="200" rows=5 cols=20>
</textarea>
<p>
<button id="post-btn" type="submit">Postar</button>/
<p>
<i class="material-icons custom-icon like" id="like">
<a href="/#feed">favorite</a></i> <!-- Ícone de like do post -->
<p>

<section id ='posts'></section>
      `;

  container.innerHTML = template;

  container.querySelector('#post-btn').addEventListener('click', () => {
    const newPost = container.querySelector('#new-post-txt').value;
    createPost(newPost);
  });

  // printPost(element); // toda estrutura html 
  function exibirPost(posts) {
    const postsExibir = container.querySelector('#posts');
    postsExibir.innerHTML = ' '; // limpa a tela e começa a colocar os posts em tela
    posts.forEach((element) => { //cada postagem estamos chamando de 'element'
      const containerPosts = `
      <label id="container-posts"></label>
      <textarea id="container-posts" minlength="20" maxlength="200" rows=5 cols=20 readonly>${element.textoDoPost}</textarea>
      <img class="btn-edit-all" id="edit-btn" alt="botão editar" src="${editbutton}" data-postid="${element.idPost}"/>
      <img class="btn-favorite-all" id="favorite-btn" alt="curtida coração" src="${favoritebutton}" data-postid="${element.idPost}"/>
      <img class="btn-delete-all" id="delete-btn" alt="apagar postagem" class="delete-btn" src="${deletebutton}" data-postid="${element.idPost}"/>
      `;
  
      postsExibir.innerHTML += containerPosts;

      const editAllButtons = container.querySelectorAll('.btn-edit-all'); // armazena numa array e add um event de click em cada btn
      editAllButtons.forEach((editButton) => {
        console.log('testando All');
        editButton.addEventListener('click', (event) => {
          console.log('chamando o ícone botão de editar');
          console.log(event.target.dataset.postid);
          const novoTexto = 'Novo texto do post da Narooka!'; // habilitar o text area
          editPost(event.target.dataset.postid, novoTexto);
        });
        // método para habilitar edição na textarea
        // pegar o novo valor da textarea
      });

      const favoriteAllButtons = container.querySelectorAll('.btn-favorite-all');
      favoriteAllButtons.forEach((favoritebutton) => {
      favoritebutton.addEventListener('click', (event) => {
      console.log('vamo mo fi')
      likePost(event.target.dataset.postid);
      console.log('amém')
      });
      });
     
      console.log('desenhando novos posts');
    });
  }

  lerPosts(exibirPost);

  // botão sair
  const exitBtn = container.querySelector('#exit-btn');
  exitBtn.addEventListener('click', exit);

  // editPost
 /* const buttonEdit = container.querySelector('#edit-btn').addEventListener('click', () => {
      editPost(newText, dataPost)
      .then(() => {

      })
        // botão clicado, linkar com qual caixa de texto? a externa ou a interna?
        // pego o texto a ser editado pelo id?

      .catch((error) => {
        alert('erro ao atualizar postagem', error);
      })
  });*/
  return container;
};

// armazenar no firebase
// adição(addDoc), leitura (getDoc), atualizar (UpdateDoc), deletar (deletDoc) metódos do firestore
// adição precisa de um id, firebase cria com getDoc

// printar o post em tela
// firebase lê o banco de dados e armazena na array, depois printa
