export default function LoginForm() {
  return (
    <>
        <div className="login-container">
          <form  className="login-form">
            <h2>Login</h2>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
              />
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
