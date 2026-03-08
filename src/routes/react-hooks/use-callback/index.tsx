import { createFileRoute } from '@tanstack/react-router'
import { PageContainer } from '../../../components/layout/page-container'
import { useState, useCallback, memo } from 'react'
import { Checkbox } from '../../../components/ui/checkbox'
import { Label } from '../../../components/ui/label'
import clsx from 'clsx'

export const Route = createFileRoute('/react-hooks/use-callback/')({
  component: ReactHooksUseCallbackComponent,
})

function shuffle(arr: number[]) {
  return [...arr].sort(() => Math.random() - 0.5)
}

const RandomNumberDisplay = memo(function({ generator }: { generator: () => number[] }) {
  const numbers = generator()

  return (<>
    <div className="py-5">
      {numbers.map(n => <>{n},</>)}
    </div>
  </>)
})

function ReactHooksUseCallbackComponent() {

  const [bold, setBold] = useState(false)

  const generateNumbers = useCallback(() => {
    console.log('Generating...')
    const list = []
    for (let i = 0; i < 10; i++) {
      list.push(0 + i)
    }
    return shuffle(list)
  }, [])

  return (
    <PageContainer>
      <h1 className="text-4xl text-center">Demo: useCallback</h1>
      <div className="flex gap-3">
        <Checkbox checked={bold} onCheckedChange={setBold} /> <Label>Bold</Label>
      </div>
      <div className={clsx(bold && 'font-bold')}>
        <RandomNumberDisplay generator={generateNumbers} />
      </div>
    </PageContainer >
  )
}
