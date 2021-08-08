/**
 * Tell Nextjs to fuck off and render the children on the client.
 * @param {Object} param0
 * @param {JSX} param0.children
 * @returns
 */
const Client = ({ children }) => {
  return <>{process.browser && { children }}</>;
};

export default Client;
