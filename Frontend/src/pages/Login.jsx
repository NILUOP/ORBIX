import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit_form = async (data) => {
    console.log(data);
    const response = await axios.post("http://localhost:5000/login", data);
    console.log(response);
    localStorage.setItem("token", response.data.token);
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
