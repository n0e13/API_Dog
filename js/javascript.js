// 1. Quiero un perrito, pero no se qué raza escoger, ¿me ayudas?
// En este ejercicio utilizaremos la API de https://dog.ceo/dog-api/. Leyendo su documentación, deberás hacer lo siguiente:

// ¿Y si ahora te pidieramos que podamos poner otra raza en la url para que nos busque otras imágenes? Adapta las urls que ya tenías para que puedas pasarle argumentos.

// Recuerda que para estos ejercicios deberás utilizar fetch. Al haber conseguido que se imprima por consola, el siguiente paso será que se muestren en pantalla con las herramientas que nos ofrece el arbol DOM.

// Imprimir por consola la lista de razas de todos los perros.
/* fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(breeds => {
        (Object.keys(breeds.message)).forEach(breed => console.log(breed))
    });

// Imprimir por consola una imagen random de una raza.
fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(img => console.log(img.message));
            
// Imprimir por consola todas las imágenes de una raza concreta.
fetch('https://dog.ceo/api/breed/pitbull/images')
    .then(res => res.json())
    .then(img => console.log(img.message)); */



// Cuando pulse mostrar razas
document.querySelector('form[class="show_breeds"]').addEventListener('click', function(event) {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(breeds => {
        let btnBreed = document.getElementById("btn_breeds");
        btnBreed.innerHTML = "<p>Escoge la raza de la que quieras ver imágenes:</p>";
        (Object.keys(breeds.message)).forEach(breed => {
            btnBreed.innerHTML += `<input type="button" id="${breed}" value="${breed}" name="${breed}" class="btn_breed">`;
        });
    });
});

// Cuando seleccione cualquier raza
document.querySelector('form[class="list_breeds"]').addEventListener('click', function(event) { 
    let imgBreed = document.getElementById("img_breed");
    imgBreed.innerHTML = `<p>Imágenes de la raza ${event.target.value}</p>` ;
    fetch(`https://dog.ceo/api/breed/${event.target.value}/images`)
    .then(res => res.json())
    .then(img => {
        img.message.forEach(img => {
            imgBreed.innerHTML += `<img src="${img}" width="150px" class="img_breed"></img>`
        });
    });
});

