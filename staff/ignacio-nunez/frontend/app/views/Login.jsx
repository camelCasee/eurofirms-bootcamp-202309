function Login(props){
    function handleRegisterClick(event){
        event.preventDefault()

        props.onRegisterClick()
    }

    return <div id="login-view" className="view">
    <h1>Login</h1>

    <form id="login-form" className="form">
        <label className="label" htmlFor="email-input">E-mail</label>
        <input className="input" type="email" id="email-input" title="E-mail" required />

        <label className="label" htmlFor="password-input">Password</label>
        <input className="input" type="password" id="password-input" title="Password" required />

        <button className="button" type="submit">Login</button>
    </form>

    <a onClick={handleRegisterClick} href="">Register</a>
</div>
}