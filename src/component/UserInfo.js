import React from 'react';

export class UserInfo extends React.Component {
    render() {
        return <img className="Avatar"
                    src={this.props.user.avatarUrl}
                    alt={this.props.user.name}/>

    }
}