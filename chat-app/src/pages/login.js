import { Redirect } from "react-router";
import LoginForm from "../components/login-form/login-form";
import useLogin from "../hooks/user";

export default function Chat() {
  const { user } = useLogin();

  if (user) return <Redirect to="/chat" />;
  return <LoginForm />;
}
