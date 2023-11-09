import { Link, NavLink, Outlet } from "react-router-dom";
import useProvider from "../../Hooks/useProvider";

const NavBar = () => {
  
    const {user,logOut,successNotify} = useProvider()
    const handleLogout=()=>{
      logOut()
      .then(()=>{
        successNotify('User Logged Out')
      })
      .catch(e=>console.error(e.message))
    }
    const menus = (
      <>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-5 border-[3px] transition-all border-accent py-2"
              : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-5 border-[3px] transition-all border-accent py-2"
              : ""
          }
          to={"/available-food"}
        >
          Available Foods
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-5 border-[3px] transition-all border-accent py-2"
              : ""
          }
          to={"/add-food"}
        >
          Add Food
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-5 border-[3px] transition-all border-accent py-2"
              : ""
          }
          to={"/manage-food"}
        >
          Manage Food
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-5 border-[3px] transition-all border-accent py-2"
              : ""
          }
          to={"/food-reqs"}
        >
          Food Requests
        </NavLink>
        {user?.email ? (
          <>
            <div className="join">
              <button className="px- border-[3px] border-accent rounded-sm join-item">
                <div className="avatar flex ">
                  <div className="w-10 h-10 rounded-none">
                    <img src={user?.photoURL} />
                  </div>
                </div>
              </button>
              <button onClick={handleLogout} className="bg-accent px-5 border-[3px] transition-all border-accent hover:bg-transparent hover:text-accent py-2 rounded-sm text-white">
                Logout
              </button>
            </div>
          </>
        ) : (
          <Link to={'/login'} className="bg-accent px-5 border-[3px] transition-all border-accent hover:bg-transparent hover:text-accent py-2 rounded-sm text-white">
                Login
              </Link>
        )}
      </>
    );
    return (
      <div className="drawer px-0">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="border-b-[1px] shadow-md border-accent">
          <div className="navbar mx-auto max-w-7xl -b-2 border-accent text-[#000]">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <Link to={'/'} className="flex-1 lg:justify-normal justify-center">
              <img className="w-40" src="/logo.png" alt="" />
            </Link>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal px-0 items-center text-base font-medium gap-x-5">
                {/* Navbar menu content here */}
               {menus}
              </ul>
            </div>
          </div>
          </div>
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu gap-y-3 p-4 w-[70%] h-full bg-[#000000af]">
            {/* Sidebar content here */}
           {menus}
          </ul>
        </div>
      </div>
    );
};

export default NavBar;