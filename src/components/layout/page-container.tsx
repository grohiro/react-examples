
export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="container mx-auto py-6">
        {children}
      </div>
    </main>
  )
}
