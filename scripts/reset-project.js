const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const srcDir = path.join(rootDir, 'src');

// Elimina carpetas y archivos innecesarios de las plantillas de Expo
const pathsToRemove = [
  path.join(srcDir, 'components', 'ui'),
  path.join(srcDir, 'components', 'animated-icon.tsx'),
  path.join(srcDir, 'components', 'animated-icon.web.tsx'),
  path.join(srcDir, 'components', 'animated-icon.module.css'),
  path.join(srcDir, 'components', 'app-tabs.tsx'),
  path.join(srcDir, 'components', 'app-tabs.web.tsx'),
  path.join(srcDir, 'components', 'external-link.tsx'),
  path.join(srcDir, 'components', 'parallax-scroll-view.tsx'),
  path.join(srcDir, 'components', 'themed-text.tsx'),
  path.join(srcDir, 'components', 'themed-view.tsx'),
  path.join(srcDir, 'components', 'haptic-tab.tsx'),
  path.join(srcDir, 'components', 'collapsible.tsx'),
  path.join(srcDir, 'hooks', 'use-color-scheme.ts'),
  path.join(srcDir, 'hooks', 'use-color-scheme.web.ts'),
  path.join(rootDir, 'example')
];

pathsToRemove.forEach((p) => {
  if (fs.existsSync(p)) {
    fs.rmSync(p, { recursive: true, force: true });
    console.log(`🗑️ Eliminado: ${p}`);
  }
});

console.log('✅ ¡Proyecto limpiado con éxito!');
