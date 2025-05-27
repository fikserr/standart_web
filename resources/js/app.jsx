import './bootstrap';
import '../css/app.css';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import Layout from './Layout/UserLayout';

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./**/*.jsx', { eager: true });

    const match = Object.keys(pages).find(key => key.endsWith(`/${name}.jsx`));

    if (!match) {
      console.error(`[Inertia] Sahifa topilmadi: ${name}`);
      return;
    }

    const page = pages[match];
    page.default.layout = page.default.layout || ((page) => <Layout children={page} />);
    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});
