import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: IndexComponent,
})

function IndexComponent() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-5xl text-center">React examples</h1>
      <div>
        <ul className="list-disc">
          <li>(none)</li>
        </ul>
      </div>
    </div>
  )
}
