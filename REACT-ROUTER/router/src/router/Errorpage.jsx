import { useRouterError } from 'react-router-dom';



/*trabalhando error*/
const Errorpage = () => {
    const error = useRouterError();

  return (
    <div>
      <h1>Error Page</h1>
      <p>Temos um problema.</p>
    </div>
  )
};

export default Errorpage
