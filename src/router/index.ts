import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
  type RouteLocationNormalized
} from 'vue-router';
import { routes } from '@/menu-elements';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

/**
 * При помощи JS обновляем мета-заголовок страницы.
 */
router.beforeEach(
  (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ): void => {
    document.title =
      (to.meta.title ? to.meta.title + " -- " : "") + "Vue.js 3 and Firebase";
    next();
  }
);

export default router
