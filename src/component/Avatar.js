import React from 'react';

export class Avatar extends React.Component {
    render() {
        return <div className="UserInfo">
            <Avatar user={this.props.author}/>
            <div className="UserInfo-name">
                {this.props.author.name}
            </div>
        </div>

    }
}