import AddCircleIcon from '@material-ui/icons/AddCircle';
import HomeIcon from '@material-ui/icons/Home';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import PageAdmin from './PageAdmin';
import PageCounter from './PageCounter';
import PageHome from './PageHome';
import PageUsers from './PageUsers';

const routeSwitch = {
  Admin: {
    component: PageAdmin,
    icon: LockIcon,
    path: '/admin'
  },
  Counter: {
    component: PageCounter,
    icon: AddCircleIcon,
    path: '/counter'
  },
  Home: {
    component: PageHome,
    icon: HomeIcon,
    path: '/home'
  },
  Users: {
    component: PageUsers,
    icon: PersonIcon,
    path: '/users'
  }
};

export default routeSwitch;
