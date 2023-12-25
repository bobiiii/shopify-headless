export const getMenuQuery = /* GraphQL */ `
  query getMenu($handle: String!) {
    menu(handle: $handle) {
      items {
        id
        resourceId
        title
        url
        tags
        type
        items{
          id
          title
        }
        
      }
    }
  }
`;
