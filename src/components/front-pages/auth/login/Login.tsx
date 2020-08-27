import React from 'react';

const Login = ()=> {
    return (
            <>
                <h1>Login</h1>
                <form>
                    <div>
                        <label>Mail
                            <input type="text" name={'mail'}/>
                        </label>
                    </div>

                    <div>
                        <label>Connexion
                            <input type="password" name={'mdp'}/>
                        </label>
                    </div>

                    <button type={'submit'}>Connexion</button>
                </form>
            </>
    );
}

export default Login;
