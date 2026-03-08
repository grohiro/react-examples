import { createFileRoute } from '@tanstack/react-router'
import { PageContainer } from '../../components/layout/page-container'
import { Input } from '../../components/ui/input'
import { useEffect, useState } from 'react'
import { rpc } from '../../lib/api'

export const Route = createFileRoute('/orpc/')({
  component: OrpcComponent,
})

function OrpcComponent() {

  const [name, setName] = useState<string>("")
  const [greeting, setGreeting] = useState('')

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setName(e.target.value);
  };

  useEffect(() => {
    rpc.hello({
      name,
    })
      .then(res => setGreeting(res.message))
  }, [name])

  return (
    <PageContainer>
      <Input onChange={handleChangeName} className="w-80" />
      <div>
        {greeting}
      </div>
    </PageContainer>
  )
}
