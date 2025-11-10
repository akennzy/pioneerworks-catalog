export const t = (key) => {
  const lang = localStorage.getItem('lang') || 'pt'
  const dict = {
    pt: { catalog: 'Catálogo', login: 'Login' },
    en: { catalog: 'Catalog', login: 'Login' },
    es: { catalog: 'Catálogo', login: 'Iniciar sesión' }
  }
  return dict[lang][key] || key
}