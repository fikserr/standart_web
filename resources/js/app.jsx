import './bootstrap';
import '../css/app.css';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import AdminLayout from './Layout/AdminLayout';
import UserLayout from './Layout/UserLayout';

// Hozircha static holatda (faqat AdminLayout ishlaydi)
const admin = true;

createInertiaApp({
  resolve: name => {
    // Pages papkasidagi barcha .jsx fayllarni olish
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });

    // Kiruvchi route nomi (masalan, 'admin/products') ga mos faylni topish
    const match = Object.keys(pages).find(key =>
      key.endsWith(`${name}.jsx`)
    );

    // Fayl topilmasa, xatolik chiqarish
    if (!match) {
      console.error(`[Inertia] Sahifa topilmadi: ${name}`);
      return;
    }

    const page = pages[match];
    const Component = page.default;

    // Hozircha: Barcha sahifalarda static layout (Admin yoki User)
    // Kelajakda: name.startsWith('admin/') orqali avtomatik layout tanlanadi
    Component.layout = Component.layout || ((page) =>
      admin
        ? <AdminLayout>{page}</AdminLayout>
        : <UserLayout>{page}</UserLayout>
    );

    return Component;
  },

  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});
