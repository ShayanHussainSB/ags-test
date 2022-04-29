import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, redirectTo }) {
  const { wallet } = useSelector((state) => state.walletReducer);

  return Object.keys(wallet).length > 0 ? children : <Navigate to={redirectTo} />;
}

export default ProtectedRoute;
