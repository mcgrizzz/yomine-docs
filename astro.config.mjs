// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from "@catppuccin/starlight";

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.yomine.dev',
  integrations: [
      starlight({
          title: '⚠️WIP⚠️',
          customCss: [
            './src/styles/global.css',
        ],
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
          sidebar: [
              {
                  label: 'Guides',
                  items: [
                      { label: 'Initial Setup', slug: 'guides/initial-setup'}
                  ],
              },
              {
                  label: 'Reference',
                  autogenerate: { directory: 'reference' },
              },
          ],
          plugins: [
              catppuccin()
          ]
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});