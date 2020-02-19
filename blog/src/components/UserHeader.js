import React from "react";
import {connect} from 'react-redux';
import {fetchUser} from "../actions";
class UserHeader extends React.Component{
    render() {
        if(!this.props.user){
            return null;
        }
        return <div>{this.props.user.data.name}</div>;
    };
    componentDidMount() {
        //not needed because of action creator `fetchPostsAndUsers`
        //this.props.fetchUser(this.props.userId)
    }
}
const mapStateToProps =(state, ownProps) =>{
    const user = state.users.find((user) => user.data.id === ownProps.userId);
    return {user: user}
}
export default connect(mapStateToProps, {fetchUser}) (UserHeader);
