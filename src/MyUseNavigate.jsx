
import { useNavigate } from 'react-router-dom';

function MyUseNavigate() {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate('/transferlist');
  };

  
  return (
    <div>
      <h2>Test for usenavigate</h2>
      <button onClick={handleAboutClick}>Go to transfer list by action as part of a componenet</button>
    </div>
  );
}
export default MyUseNavigate;