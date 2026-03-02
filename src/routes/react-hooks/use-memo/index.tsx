import { createFileRoute } from '@tanstack/react-router'
import { PageContainer } from '../../../components/layout/page-container'

export const Route = createFileRoute('/react-hooks/use-memo/')({
  component: ReactHooksUseMemoComponent,
})

function ReactHooksUseMemoComponent() {
  return (
    <PageContainer>
      <div>useMemo</div>
    </PageContainer>
  )
}
