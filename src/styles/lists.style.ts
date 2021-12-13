import { createGlobalStyle } from 'styled-components';

const ListsStyle = createGlobalStyle`
  ul {
    list-style: circle inside;
  }
  ol {
    list-style: decimal inside;
  }
  ol,
  ul {
    padding-left: 0;
    margin-top: 0;
  }
  ul ul,
  ul ol,
  ol ol,
  ol ul {
    margin: 1.5rem 0 1.5rem 3rem;
    font-size: 90%;
  }
  li {
    margin-bottom: 1rem;
  }
`;

export default ListsStyle;
