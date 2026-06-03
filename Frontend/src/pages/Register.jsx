import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit_form = async (data) => {
    console.log(data);
    const response = await axios.post("http://localhost:5000/register", data);
    console.log(response);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit_form)}>
        <input
          type="text"
          {...register("username", { required: true })}
          id="username"
          placeholder="username"
        />
        <br />
        <input
          type="password"
          {...register("password", { required: true })}
          id="password"
          placeholder="password"
          autoComplete="orbix-password"
        />
        <br />
        <input
          type="email"
          {...register("email", { required: true })}
          id="email"
          placeholder="email"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
