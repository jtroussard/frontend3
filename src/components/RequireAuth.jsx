import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth(); // Get auth state (user + roles).
    const location = useLocation(); // Capture current location for redirects.

    function hasRequiredRole(auth, allowedRoles) {
        console.log(`auth: ${JSON.stringify(auth)}`);
        console.log(`auth?.roles: ${JSON.stringify(auth?.roles)}`);
        console.log(`allowedRoles: ${JSON.stringify(allowedRoles)}`);
        return auth?.roles?.some(role => allowedRoles?.includes(role));
      }

    return (
        hasRequiredRole(auth, allowedRoles)
            ? <Outlet /> 
            // `Outlet` acts as a placeholder for the first matching child route.
            // React Router finds the first child `<Route>` inside `<RequireAuth>`.
            // If the current URL matches one of those child routes, it replaces `<Outlet />` with that component.

            : auth?.user
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                // If the user is logged in but lacks access, they are redirected to `/unauthorized`.
                // `state={{ from: location }}` stores their previous location for reference.

                : <Navigate to="/login" state={{ from: location }} replace />
                // If no user is logged in, redirect them to `/login`.
                // `state={{ from: location }}` ensures they can be redirected back after login.
    );
}

export default RequireAuth;
