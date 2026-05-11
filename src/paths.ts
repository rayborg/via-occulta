export function withBase(path = ''): string {
  if (/^[a-z][a-z\d+.-]*:/i.test(path) || path.startsWith('//')) return path;

  const base = import.meta.env.BASE_URL;
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  if (!path || path === '/') return normalizedBase ? `${normalizedBase}/` : '/';

  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;

  return normalizedBase ? `${normalizedBase}/${normalizedPath}` : `/${normalizedPath}`;
}
