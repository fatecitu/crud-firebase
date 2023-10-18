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
    //alert('você clicou!😀') //Tecla Windows + . para inserir o emoji
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
        alert(`logou!`)
    }).catch((error)=> {
        alert(`Erro ao efetuar o login: ${error.message}`)
    })
  }