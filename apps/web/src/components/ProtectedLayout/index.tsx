import { useAuth } from "../../context/AuthProvider/useAuth";

const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  if (!auth.username) {
    return <h1 className="title">Faça o login</h1>;
  }
  return children;
};

export default ProtectedLayout;
