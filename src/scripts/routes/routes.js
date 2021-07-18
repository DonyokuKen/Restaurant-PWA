import listResto from '../views/pages/listresto';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': listResto, // default page
  '/listresto': listResto,
  '/detail/:id': Detail,
  '/like': Like,
};
export default routes;
