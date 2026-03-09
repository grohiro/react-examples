import { createFileRoute, Link } from '@tanstack/react-router'
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
          <li>React with oRPC client</li>
          <li>Hono with oRPC server</li>
        </ul>
      </div>

      <h2 className="text-4xl my-5">Navigation</h2>

      <div>
        <ul className="list-disc">
          <li><Link to="/">Home (here)</Link></li>
          <li><Link to="/orpc">oRPC</Link></li>
          <li>React Hooks</li>
          <ul className="list-disc ml-5">
            <li><Link to="/react-hooks/use-effect">useEffect()</Link></li>
            <li><Link to="/react-hooks/use-memo">useMemo()</Link></li>
          </ul>
        </ul>
      </div>
    </PageContainer>
  )
}
