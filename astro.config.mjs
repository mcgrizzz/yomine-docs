// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from "@catppuccin/starlight";
import tailwindcss from '@tailwindcss/vite';
import starlightKbd from 'starlight-kbd'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.yomine.dev',
  integrations: [
      starlight({
          title: 'Yomine Docs [WIP] ',
          customCss: [
            './src/styles/global.css',
        ],
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/mcgrizzz/Yomine' }],
          sidebar: [
              {
                  label: 'Guides',
                  items: [
                      { label: 'Initial Setup', slug: 'guides/initial-setup'}
                  ],
              },
              {
                  label: 'Reference',
                  items: [
                      { label: 'Keybinds', slug: 'reference/keybinds'}
                  ]
              },
          ],
          plugins: [
              catppuccin(),
              starlightKbd({
                globalPicker: false,
                types: [
                  { id: 'windows', label: 'Windows', detector: 'windows', default: true},
                  { id: 'mac', label: 'macOS', detector: 'apple'},
                  { id: 'linux', label: 'Linux', detector: 'linux'},
                ],
              }),
          ]
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});