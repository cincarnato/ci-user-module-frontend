import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import DashboardPage from '../pages/DashboardPage'

const routes = [
    {name: "home", path: '/home', component: HomePage},
    { name: "login", path: '/login', component: LoginPage },
    { name: "securityDashboard", path: '/security/dashboard', component: DashboardPage}
]

export default routes;