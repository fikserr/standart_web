import './bootstrap';
import '../css/app.css';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import AdminLayout from './Layout/AdminLayout';
import UserLayout from './Layout/UserLayout';
import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

createInertiaApp({
  resolve: async (name) => {
    const pages = import.meta.glob('./Pages/**/*.jsx');

    const importPage = pages[`./Pages/${name}.jsx`];
    if (!importPage) {
      console.error(`[Inertia] Sahifa topilmadi: ${name}`);
      return;
    }

    const page = await importPage();
    const Component = page.default;

    // Sahifaga dynamic layout biriktirish (admin yoki user)
    Component.layout = (pageProps) => {
      const isAdmin = pageProps.props?.auth?.user?.is_admin;
      return isAdmin
        ? <AdminLayout>{pageProps}</AdminLayout>
        : <UserLayout>{pageProps}</UserLayout>;
    };

    return Component;
  },

  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});
