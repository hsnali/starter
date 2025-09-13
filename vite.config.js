var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig, coverageConfigDefaults } from 'vitest/config';
// https://vitejs.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
var dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));
// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
    server: {
        port: 3000
    },
    resolve: {
        alias: {
            '@': '/src'
        }
    },
    plugins: [react(), svgr(), tsconfigPaths()],
    test: {
        coverage: {
            provider: 'istanbul',
            reportsDirectory: './coverage/vite',
            exclude: __spreadArray(__spreadArray([], coverageConfigDefaults.exclude, true), ['public/**', 'src/tests/**'], false)
        },
        environment: 'jsdom',
        projects: [
            {
                // Unit tests
                extends: true,
                test: {
                    name: 'Unit',
                    include: ['src/**/*.test.{ts,tsx}'],
                    setupFiles: ['./src/tests/setup.ts']
                }
            },
            {
                // Storybook tests
                extends: true,
                plugins: [
                    // The plugin will run tests for the stories defined in your Storybook config
                    // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
                    storybookTest({
                        configDir: path.join(dirname, '.storybook'),
                        storybookScript: 'storybook --ci'
                    })
                ],
                test: {
                    name: 'Storybook',
                    browser: {
                        enabled: true,
                        headless: true,
                        provider: 'playwright',
                        instances: [
                            {
                                browser: 'chromium'
                            }
                        ]
                    },
                    setupFiles: ['.storybook/vitest.setup.ts']
                }
            }
        ]
    }
});
