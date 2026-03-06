import { createFileRoute } from '@tanstack/react-router'
import { PageContainer } from '../components/layout/page-container'

export const Route = createFileRoute('/')({
  component: IndexComponent,
})

function IndexComponent() {
  return (
    <PageContainer>
      <h1 className="text-5xl text-center">React examples</h1>
      <div>
        <ul className="list-disc">
          <li>(none)</li>
        </ul>
      </div>
    </PageContainer>
  )
}
