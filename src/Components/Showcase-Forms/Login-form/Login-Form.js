import React from "react";
function LoginForm({ send }) {
  return (
    <>
      <h1 style={{ textAlign: "center" }} className="p-1">
        Login In
      </h1>

      <form>
        <div className="form-control">
          <input
            type="text"
            name="name"
            placeholder="Username"
            autoComplete="off"
            required
          />
        </div>

        <div className="form-control">
          <input
            type="password"
            name="pass"
            placeholder="Password"
            autoComplete="off"
            required
          />
        </div>
        <input type="submit" value="Login" className="btn btn-primary" />
        <input
          type="button"
          value="Sign"
          className="btn btn-outline my-1 event-changer"
          style={{ marginLeft: 1 + "rem" }}
          onClick={() => send(false)}
        />
      </form>
    </>
  );
}

export default LoginForm;
