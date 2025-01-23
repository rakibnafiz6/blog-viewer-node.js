
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";



const Navbar = async() => {
    const links = <>
   <li className="btn btn-xs mr-2">Home</li>
   <li className="btn btn-xs">Profile</li>
  </>

const {isAuthenticated} = getKindeServerSession();
const isUserAuthenticated = await isAuthenticated();

    return (
        <div className="navbar bg-slate-400">
            <div className="navbar-start pl-5">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="font-bold text-xl">Blog Viewer</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end pr-5">
            {isUserAuthenticated?<LogoutLink>
                <button className="btn">Logout</button>
                </LogoutLink>: <LoginLink>
                <button className="btn">Login</button>
                </LoginLink>}
               
                

            </div>
        </div>
    );
};

export default Navbar;