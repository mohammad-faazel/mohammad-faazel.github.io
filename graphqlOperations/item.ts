import { gql } from "@apollo/client";

export default {
  Queries: {
    getLinkItems: gql`
      query GetLinkItems {
        linkItems {
          id
          title
          link
        }
      }
    `,
  },
};
