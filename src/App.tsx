import ListGroup from "./components/ListGroup"

ListGroup
function App() {
  let items = [
    'New York',
    'Tokyo',
    'London',
    'Khartoum',
]

  return <div><ListGroup items={items} heading='Cities' /></div>
}

export default App