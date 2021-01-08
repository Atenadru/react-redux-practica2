import React from 'react'
import UsersList from '../containers/UsersList';
import UserDetails from '../containers/UserDetails';

 const App = () =>{
     return(
        <div>
            <h2>Lista de Usuarios</h2>
            <UsersList/>
            <hr/>
            <h2>Perfil de Usuairo</h2>
            <UserDetails/>
        </div>
     )
 }

 export default App