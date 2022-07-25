import UserModel from "Models/user-model";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { authStore } from "Redux/Store";
import "./AuthMenu.css";

function AuthMenu(): JSX.Element {

    const [user, setUser] = useState<UserModel>();

    useEffect(() => {
        setUser(authStore.getState()?.user);

    }, [])

    return (
        <div className="AuthMenu">
            {!user &&
                <>
                    <span>Hello Guest</span>
                    <br />
                    <NavLink to="/auth/login">Login</NavLink>
                    <span>|</span>
                    <NavLink to="/auth/register">register</NavLink>
                </>
            }
            {user && 
                <>
                    <span>Hello {user.firstName + " " + user.lastName}</span><br />
                    <NavLink to="/logout">Logout</NavLink>
                </>
            }
        </div>
    );
}

export default AuthMenu;
