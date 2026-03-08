import { createFileRoute } from '@tanstack/react-router'
import { PageContainer } from '../../../components/layout/page-container'
import { Button } from '../../../components/ui/button'
import { useMemo, useState } from 'react'
import { RadioGroup, RadioGroupItem } from '../../../components/ui/radio-group'
import { Label } from '../../../components/ui/label'
import { Input } from '../../../components/ui/input'

export const Route = createFileRoute('/react-hooks/use-memo/')({
  component: ReactHooksUseMemoComponent,
})

function generateNumbers(n: number) {
  const numbers: number[] = []
  for (let i = 0; i < n; i++) {
    const n = Math.round(Math.random() * 100000)
    numbers.push(n)
  }
  return numbers
}

type LayoutStyle = "inline" | "list"
const DEFAULT_LAYOUT = "inline"

interface LayoutSwitchProps {
  onValueChange: (value: LayoutStyle) => void
}

// change layout, causes re-rendering
function LayoutSwitch(props: LayoutSwitchProps) {
  const handleChange = (value: string) => {
    switch (value) {
      case "list":
        props.onValueChange("list")
        break;
      case "inline":
        props.onValueChange("inline")
        break;
      default:
        props.onValueChange(DEFAULT_LAYOUT)
    }
  }

  return (<>
    <RadioGroup onValueChange={handleChange} defaultValue={DEFAULT_LAYOUT}>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3">
          <RadioGroupItem value="list" id="sw-list" />
          <Label htmlFor="sw-list">List</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="inline" id="sw-inline" />
          <Label htmlFor="sw-inline">Inline</Label>
        </div>
      </div>
    </RadioGroup>
  </>)
}

// slow sort
function bubbleSort(arr: number[]): number[] {
  const newArray = [...arr]
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const p = newArray[i]
      const q = newArray[j]
      if (p >= q) {
        newArray[i] = q
        newArray[j] = p
      }
    }
  }
  return newArray
}

function NumberList({ list, style }: { list: number[], style: LayoutStyle }) {
  console.log('Building...')
  return (<div className="mt-3">
    {list.map(n => style == "inline" ? <>{n.toString()},</> : <li>{n.toString()}</li>)}
  </div>
  )
}

function ReactHooksUseMemoComponent() {

  const [nums, setNums] = useState<number[]>([])
  const [newNumber, setNewNumber] = useState("")
  const [layoutStyle, setLayoutStyle] = useState<LayoutStyle>(DEFAULT_LAYOUT)

  const handleRegenerate = () => {
    console.log('Generating...')
    const newNumbers = generateNumbers(5000)
    setNums(newNumbers)
  }

  const handleSort = () => {
    console.log('Sorting...')
    return bubbleSort(nums)
  }

  const handleLayoutSwitchChange = (value: LayoutStyle) => {
    setLayoutStyle(value)
  }

  // Prevent unnecessary sorting
  const sorted = useMemo(
    () => handleSort(),
    [nums]
  )

  const handlePushNumber = () => setNums([...nums, parseInt(newNumber)])

  return (
    <PageContainer>
      <h1 className="text-4xl text-center">Demo: useMemo</h1>

      <div className="flex gap-3">
        <Button variant="outline" onClick={handleRegenerate}>Generate Numbers</Button>
        <LayoutSwitch onValueChange={handleLayoutSwitchChange} />
        <Input type="text" placeholder="Number" value={newNumber} onChange={(e) => setNewNumber(e.target.value)} className="w-20" />
        <Button variant="outline" onClick={handlePushNumber}>Add</Button>
      </div>

      <NumberList list={sorted} style={layoutStyle} />
    </PageContainer >
  )
}
