import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import DashboardPage from '../pages/DashboardPage'
import UserManagementPage from '../pages/UserManagementPage'

const routes = [
    {name: "home", path: '/home', component: HomePage},
    { name: "login", path: '/login', component: LoginPage },
    { name: "securityDashboard", path: '/security/dashboard', component: DashboardPage},
    { name: "userManagement", path: '/security/user-management', component: UserManagementPage},

]

export default routes;