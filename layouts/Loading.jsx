import { useRouter } from 'next/router'
import { useState,useEffect } from 'react'

function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => { setLoading(true) }
    const handleStop = () => {
      setTimeout(() => {setLoading(false) }, 1000);
      if (window.innerWidth < 991) {
        document.querySelector(".navbar-toggler").click();
      }
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])
  
  return loading && (
    <div id="loading">
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Loading