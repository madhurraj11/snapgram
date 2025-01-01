import { Outlet, Navigate } from "react-router-dom";
const AuthLayout = () => {
  const isAuthenticatd = false;

  return (
    <>
      {isAuthenticatd ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flexcol py-10">
            <Outlet />
          </section>

          <img 
            src="/assets/images/side-image.avif"
            alt="logo"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  )
}

export default AuthLayout