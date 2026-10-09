// Re-export from LanguageProvider so existing imports don't break.
// The real implementation is in LanguageProvider.tsx — it uses React
// Context to share state across all components.
export { useLanguage, LanguageProvider } from './LanguageProvider';