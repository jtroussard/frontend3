import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';

import Login from './components/Login';
import Register from './components/Register';
import LinkPage from './components/LinkPage';
import Unauthorized from './components/Unauthorized';

import Home from './components/Home';
import Technician from './components/Technician';
import Supervisor from './components/Supervisor';
import Admin from './components/Admin';

import Lounge from './components/Lounge';
import Missing from './components/Missing';

import { Routes, Route } from 'react-router-dom';

// TODO refactor to use role codes instead of role names to obfuscate the roles from the client
const ROLES = {
  'User': 'ROLE_USER',
  'Technician': 1984,
  'Supervisor': 'ROLE_SUPERVISOR',
  'Admin': 1337
}

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Technician]} />}>
          <Route path="technician" element={<Technician />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Supervisor]} />}>
          <Route path="supervisor" element={<Supervisor />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Technician, ROLES.Admin]} />}>
          <Route path="lounge" element={<Lounge />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;