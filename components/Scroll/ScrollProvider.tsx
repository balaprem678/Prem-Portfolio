// @ts-nocheck
'use client'

import { useEffect } from 'react'

type Props = {
  children: React.ReactNode
}

export default function ScrollProvider({ children }: Props) {
  useEffect(() => {
    let lenis: any = null
    let rafId = 0

    async function init() {
      try {
        // dynamic import to load Lenis at runtime
        const mod = await import('lenis')
        const Lenis = mod?.default ?? mod
        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smooth: true,
          direction: 'vertical',
          gestureOrientation: 'vertical',
        })

        function raf(time: number) {
          lenis.raf(time)
          rafId = requestAnimationFrame(raf)
        }

        rafId = requestAnimationFrame(raf)
      } catch (err) {
        // Lenis not installed or failed to load — silently fail
        // console.warn('Lenis failed to load', err)
      }
    }

    init()

    return () => {
      cancelAnimationFrame(rafId)
      if (lenis && typeof lenis.destroy === 'function') lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
