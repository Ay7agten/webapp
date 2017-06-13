import React, { PropTypes } from 'react';
import { gql, graphql } from 'react-apollo';

const ProfileHeader = ({ data }) => (
  <div>
    {
      data.user &&
      <div>{data.user.name}</div>
    }
  </div>
);

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
