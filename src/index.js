//Components
import CloseButton from "./components/CloseButton/CloseButton";
import SubmitButton from "./components/SubmitButton/SubmitButton";
import AddButton from "./components/AddButton/AddButton";
import Snackbar from "./components/Snackbar/Snackbar";
import ToolbarDialogCard from "./components/ToolbarDialogCard/ToolbarDialogCard";

//Pages
import UserManagementPage from './pages/UserManagementPage'
import RoleManagementPage from './pages/RoleManagementPage'
import GroupManagementPage from './pages/GroupManagementPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ActivationPage from './pages/ActivationPage'
import RecoveryPage from './pages/RecoveryPage'
import ProfilePage from './pages/ProfilePage'
import DashboardPage from './pages/DashboardPage'

//Resources
import i18nMessages from './i18n/messages'
import UserModuleStore from './store/UserModule'

export {
    //Components
    CloseButton,
    SubmitButton,
    AddButton,
    Snackbar,
    ToolbarDialogCard,

    //Pages
    UserManagementPage,
    RoleManagementPage,
    GroupManagementPage,
    LoginPage,
    RegisterPage,
    ActivationPage,
    RecoveryPage,
    ProfilePage,
    DashboardPage,

    //Resources
    i18nMessages,
    UserModuleStore,

}
