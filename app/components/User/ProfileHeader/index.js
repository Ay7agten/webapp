import React, { Component, PropTypes } from 'react';
import { gql, graphql } from 'react-apollo';

class ProfileHeader extends Component {
  render() {
    if(this.props.data.loading) {
      return <div>Loading...</div>;
    }
    console.log(this.props.data.user);
    return <div>{this.props.data.user.name}</div>;
  }
}

ProfileHeader.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object,
  }).isRequired,
};

// We use the gql tag to parse our query string into a query document
const CurrentUserForLayout = gql`
  query CurrentUserForLayout {
    user(_id: "5922d6446a972a28a8ec99ea") {
      name
      workExperiences {
        title
        company
      }
    }
  }
`;

export default graphql(CurrentUserForLayout)(ProfileHeader);
