import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchUsers } from '../actions';

class UsersList extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map((user) => {
            return <li key={user.id}>{ user.name }</li>;
        });
    }

    render() {
        return (
            <div>
                Here is a big list of users:
                <ul>
                    { this.renderUsers() }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

UsersList.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
};

export default connect(mapStateToProps, { fetchUsers })(UsersList);
