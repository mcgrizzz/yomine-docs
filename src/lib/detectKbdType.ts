export type KbdTypeId = 'windows' | 'mac' | 'linux';

export function detectKbdType(): KbdTypeId {
  if (typeof navigator === 'undefined') return 'windows';

  const platform =
    (navigator as any).userAgentData?.platform || navigator.platform || '';
  const ua = navigator.userAgent || '';

  const p = platform.toLowerCase();
  const u = ua.toLowerCase();

  // macOS (+ iOS/iPadOS if you want them to use ⌘)
  if (p.startsWith('mac') || /iphone|ipad|ipod/.test(u)) return 'mac';

  // Windows
  if (p.startsWith('win')) return 'windows';

  // Linux / X11
  if (p.includes('linux') || p.includes('x11')) return 'linux';

  // Fallback
  return 'windows';
}
