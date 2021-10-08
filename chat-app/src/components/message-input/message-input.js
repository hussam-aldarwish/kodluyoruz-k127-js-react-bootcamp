import React, { useEffect } from "react";
import "./message-input.css";
import { useForm } from "react-hook-form";
import useLogin from "../../hooks/user";
import Button from "../Button";
import Input from "../Input";

export default function MessageInput() {
  const { register, reset, handleSubmit, formState } = useForm();

  const { sendMessage, selectedUser } = useLogin();

  function submitForm(data) {
    if (selectedUser) sendMessage(data.messageText);
    else alert("please choose a contact to send a message!");
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ messageText: "" });
    }
  }, [formState, reset]);

  return (
    <form className="input-message-from" onSubmit={handleSubmit(submitForm)}>
      <Input
        {...register("messageText", { required: true })}
        placeholder="Type a message then press enter."
      />
      <Button as="input" text="send" />
    </form>
  );
}
