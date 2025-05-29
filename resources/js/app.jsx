import './bootstrap';
import '../css/app.css';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import AdminLayout from './Layout/AdminLayout';
import UserLayout from './Layout/UserLayout';

const admin = false;

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./**/*.jsx', { eager: true });
    const match = Object.keys(pages).find(key => key.endsWith(`/${name}.jsx`));

    if (!match) {
      console.error(`[Inertia] Sahifa topilmadi: ${name}`);
      return;
    }

    const page = pages[match];

    page.default.layout = page.default.layout || ((pageComponent) => (
      name.startsWith('admin-')
        ? <AdminLayout>{pageComponent}</AdminLayout>
        : <UserLayout>{pageComponent}</UserLayout>
    ));

    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});
