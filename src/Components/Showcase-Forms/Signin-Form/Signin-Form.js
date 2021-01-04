import React from "react";

function SigninForm({ send }) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Sign up</h1>

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
            type="email"
            name="email"
            placeholder="Email"
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
        <input type="submit" value="Sign Up" className="btn btn-primary" />
        <input
          type="button"
          value="Login"
          className="btn btn-outline my-1 event-changer"
          style={{ marginLeft: 1 + "rem" }}
          onClick={() => send(true)}
        />
      </form>
    </div>
  );
}

export default SigninForm;
