import { createFileRoute } from '@tanstack/react-router'
import { PageContainer } from '../../../components/layout/page-container'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/react-hooks/use-effect/')({
  component: ReactHooksUseEffectComponent,
})

function PrivacyContents() {
  return <>
    <div>
      これは個人情報です。
    </div>
  </>
}


function ReactHooksUseEffectComponent() {

  const [isActive, setActive] = useState(false)

  useEffect(() => {
    const focus = () => setActive(true)
    const blur = () => setActive(false)

    window.document.addEventListener('focus', focus)
    window.document.addEventListener('blur', blur)
    return () => {
      window.document.removeEventListener('focus', focus)
      window.document.removeEventListener('blur', blur)
    }
  })

  return (
    <PageContainer>
      <h1 className="text-4xl text-center">Demo: useEffect</h1>
      <div className="text-center text-xl py-5">
        {isActive ? (<PrivacyContents />) : '*************'}
      </div>
    </PageContainer >
  )
}
