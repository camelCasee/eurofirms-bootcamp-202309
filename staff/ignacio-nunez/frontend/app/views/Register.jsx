function Register(props){
    function handleLoginClick(event){
        event.preventDefault()

        props.onLoginClick()
    }

    return <div id="register-view" className="view">
    <h1>Register</h1>

    <form id="register-form" className="form">
        <label className="label" htmlFor="name-input">Name</label>
        <input className="input" type="text" id="name-input" title="Name" required />

        <label className="label" htmlFor="email-input">E-mail</label>
        <input className="input" type="email" id="email-input" title="E-mail" required />

        <label className="label" htmlFor="password-input">Password</label>
        <input className="input" type="password" id="password-input" title="Password" required />

        <button className="button" type="submit">Register</button>
    </form>

    <a onClick={handleLoginClick} href="">Login</a>
</div>
}