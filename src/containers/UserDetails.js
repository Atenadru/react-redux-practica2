import React,{Component} from 'react'
import {connect} from 'react-redux'


class UsersList extends Component{
    render(){
        if(!this.props.user){
            return <h2>Selecione un Usuario...</h2>
        }
        return(
            <div>
                <img src={this.props.user.thumbnail} alt={this.props.user.first}/>
                <h2>{this.props.user.first} {this.props.user.last}</h2>
                <h3>Age: {this.props.user.age}</h3>
                <h3>Descriptions: {this.props.user.description}</h3>
            </div>
        )
    }
}

const mapStateToProps =(state) =>{
    return{
        user:state.activeUser
    }
}


export default connect(mapStateToProps)(UsersList)