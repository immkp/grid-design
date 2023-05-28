import './globals.css'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Grid Design',
  description: 'next code template',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>{children}</body>
    </html>
  )
}
