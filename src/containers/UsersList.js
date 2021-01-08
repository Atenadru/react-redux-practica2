import React,{Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import selectUser from '../redux/rootActions/usersActions'

class UsersList extends Component{

    createListItems()
    {
     return this.props.users.map((user)=>{
         return(
             <li
              key={user.id} 
              onClick={()=>this.props.selectUser(user)}
              >
             {user.first} {user.last}
             </li>
         )
     })
    }

    render(){
        return(
        <div>
            <ul>
                {this.createListItems()}
            </ul>
        </div>
        )
    }
}

const mapStateToProps =(state) =>{
    return{
        users:state.users
    }
}

const matchDispatchToProps = (dispatch) =>{
    return bindActionCreators({selectUser:selectUser},dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(UsersList)