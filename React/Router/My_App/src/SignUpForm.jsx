export default function LoginForm() {
  return (
    <>
      <div className="login-container">
        <form className="login-form">
          <h2>SignUp</h2>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}
