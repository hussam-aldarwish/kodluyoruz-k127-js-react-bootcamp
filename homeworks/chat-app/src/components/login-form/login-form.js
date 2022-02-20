import Button from "../Button";
import Input from "../Input";
import "./login-form.css";
import { useForm } from "react-hook-form";
import useLogin from "../../hooks/user";

export default function LoginForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { login } = useLogin();

  function submitForm(data) {
    login(data.userName, data.firstName, data.lastName);
  }
  return (
    <form className="login-form" onSubmit={handleSubmit(submitForm)}>
      <h3>Login to your account</h3>
      <Input
        error={errors.userName}
        {...register("userName", { required: true })}
        placeholder="User Name"
      />
      <Input
        error={errors.firstName}
        {...register("firstName", { required: true })}
        placeholder="First Name"
      />
      <Input
        error={errors.lastName}
        {...register("lastName", { required: true })}
        placeholder="Last Name"
      />

      <Button as="input" text="login" />
    </form>
  );
}
