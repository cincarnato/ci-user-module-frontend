import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import DashboardPage from '../pages/DashboardPage'
import UserManagementPage from '../pages/UserManagementPage'
import GroupManagementPage from '../pages/GroupManagementPage'
import RecoveryPage from '../pages/RecoveryPage'

const routes = [
    {name: "home", path: '/home', component: HomePage},
    { name: "login", path: '/login', component: LoginPage },
    { name: "securityDashboard", path: '/security/dashboard', component: DashboardPage},
    { name: "userManagement", path: '/security/user-management', component: UserManagementPage},
    { name: "groupManagement", path: '/security/group-management', component: GroupManagementPage},
    { name: "recovery", path: '/recovery', component: RecoveryPage},

]

export default routes;