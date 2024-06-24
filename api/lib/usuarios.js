//el modulo request esta deprecado, entiendo que seria mejor dejar de usarlo y se podria usar axios en su lugar
const axios = require('axios');
const url_users = 'https://jsonplaceholder.typicode.com/posts';
const id_users = 6;

//traigo los primeros 4 usuarios que coincidan con un userId
//idealmente haria que el id se pasara por parametro de modo que la ruta GET sería \api\traer-usuarios\6, pero respentando lo solicitado 
//estoy trayendo los primeros 4 con id=6 a la ruta especificada
async function getUsuariosPorId(){
  const usuarios = (Object.values(await getUsuarios()))
                            .filter(user => user.userId == id_users)
                            .slice(0,4);
  //test
  //console.log(usuarios);
  return JSON.stringify(usuarios);
};

//traigo todos los usuarios
async function getUsuarios(){
  const usuarios = axios.get(url_users)
          .then(function (res){
              return res.data;
          })
          .catch(function (err){
              console.log(err);
          });
  return usuarios;
};

//test
//getUsuariosPorId();

module.exports = { getUsuariosPorId }