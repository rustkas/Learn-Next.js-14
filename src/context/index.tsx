const AppContext = createContext()

export function AppWrapper({children}: 
  {children: React.ReactNode}) {
  let [state, setState] = useState('Hello')

  return (
    <AppContext></AppContext>
  )
}