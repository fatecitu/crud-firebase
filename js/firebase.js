const firebaseConfig = {
    apiKey: "AIzaSyDVitFRu6jvbLpASQkQzKiF7gBx7OS1SHk",
    authDomain: "gti-leme.firebaseapp.com",
    projectId: "gti-leme",
    storageBucket: "gti-leme.appspot.com",
    messagingSenderId: "742785623369",
    appId: "1:742785623369:web:6ae2a28a0e9c8021f8e698"
  };

  //Inicializando o Firebase
  firebase.initializeApp(firebaseConfig)
  //Definindo a URL padrão do site
  const urlApp = 'http://127.0.0.1:5500'

  function logaGoogle(){    
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
      window.location.href = 'menu.html'
    }).catch((error)=> {
        alert(`Erro ao efetuar o login: ${error.message}`)
    })
  }

  function verificaLogado(){
    firebase.auth().onAuthStateChanged(user => {
      if(user){ //Contém dados do login?
        //Salvamos o id do usuário localmente
        localStorage.setItem('usuarioId', user.uid)  
        
        //Inserindo a imagem do usuário      
        let imagem = document.getElementById('imagemUsuario')
        
        user.photoURL
        ? imagem.innerHTML += `<img src="${user.photoURL}" title="${user.displayName}" class="img rounded-circle" width="48" />`
        : imagem.innerHTML += '<img src="images/logo-google.svg" title="Usuário sem foto" class="img rounded-circle" width="32" />'

      } else {
        localStorage.removeItem('usuarioId') //Removemos o id salvo
        window.location.href = 'index.html' //direcionamos para o login        
      }
    })
  }

  function logoutFirebase(){
    firebase.auth().signOut()
    .then(function(){
      localStorage.removeItem('usuarioId')
      window.location.href = 'index.html'
    })
    .catch(function (error){
      alert(`Não foi possível efetuar o logout: ${error.message}`)
    })
  }