// utility functions for the builder
export const sanitizeMD = (md: string) => md.replace("<", "&lt;").replace(">", "&gt;")
export const infoLog = (message: string) => console.log(`[INFO] ${message}`)
export const warnLog = (message: string) => console.warn(`[WARN] ${message}`)