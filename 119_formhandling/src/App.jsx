import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    // await delay(2);
    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await r.text();
    console.log(data, res);
    // if (data.username !== "shubham") {
    //   setError("myform", {
    //     message: "your form is not good order because credential is invalid",
    //   });
    // }
    // if (data.username === "rohan") {
    //   setError("blocked", {
    //     message: "Sorry this user is blocked",
    //   });
    // }
  };

  return (
    <>
      {isSubmitting && <div>loading...</div>}
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("username", {
              required: { value: true, message: "this field is required" },
              minLength: { value: 3, message: "min length is 3" },
              maxLength: { value: 8, message: "min length is 8" },
            })}
            placeholder="username"
          />
          {errors.username && (
            <div className="red">{errors.username.message}</div>
          )}
          <br />
          <input
            type="password"
            {...register("password", {
              minLength: { value: 7, message: "min length of password is 3" },
            })}
            placeholder="password"
          />
          {errors.password && (
            <div className="red">{errors.password.message}</div>
          )}
          <br />
          <input disabled={isSubmitting} type="submit" value="submit" />
          {errors.myform && <div className="red">{errors.myform.message}</div>}
          {errors.blocked && (
            <div className="red">{errors.blocked.message}</div>
          )}
        </form>
      </div>
    </>
  );
}

export default App;
