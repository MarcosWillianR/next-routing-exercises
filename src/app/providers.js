'use client'
import ToastProvider from '../components/ToastProvider';

export function Providers({ children }) {
  return (
    <ToastProvider>
      {children}
    </ToastProvider>
  )
}