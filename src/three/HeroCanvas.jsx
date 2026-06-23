import { Suspense, lazy, useEffect, useRef, useState } from 'react'

const ConstructionScene = lazy(() => import('./ConstructionScene'))

// Detect WebGL support once.
function hasWebGL() {
  try {
    const c = document.createElement('canvas')
    return !!(window.WebGLRenderingContext && (c.getContext('webgl') || c.getContext('experimental-webgl')))
  } catch {
    return false
  }
}

export default function HeroCanvas({ scrollRef }) {
  const [enabled, setEnabled] = useState(false)
  const [mount, setMount] = useState(false)
  const holder = useRef(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setEnabled(hasWebGL() && !reduced)
    // Defer mounting heavy canvas slightly so first paint is fast.
    const id = requestAnimationFrame(() => setMount(true))
    return () => cancelAnimationFrame(id)
  }, [])

  if (!enabled) {
    // Static blueprint fallback for no-WebGL / reduced-motion users.
    return (
      <div className="absolute inset-0 blueprint-grid bg-ink">
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
      </div>
    )
  }

  return (
    <div ref={holder} className="absolute inset-0">
      {mount && (
        <Suspense
          fallback={<div className="absolute inset-0 blueprint-grid bg-ink" />}
        >
          <ConstructionScene scrollRef={scrollRef} />
        </Suspense>
      )}
    </div>
  )
}
