import { useState } from 'react'
import BTN from './BTN'
import List from './List'
import CD from './ColoredDiv'
import RC from './ReactCard'
import OnChangeComp from './OnChangeComp'
import ColorPicker from './ColorPicker'
import ArrayUpdate from './ArrayUpdate'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const bodyStyle = {
                    display : 'flex',
                    flexDirection :'row',
                    flexWrap:'wrap',
                    justifyContent :'space-between',
                    padding : "auto auto"
                    } 
  return (
    <>
    <div style={bodyStyle}>
      <RC RCName = "Event button" Rcomp = {<BTN />}/>
      <RC RCName = "Ordered list" Rcomp = {<List />}/>
      <RC RCName = "useState" Rcomp = {<CD />}/>
      <RC RCName = "On Change" Rcomp = {<OnChangeComp/>}/>
      <RC RCName = "Color Picker" Rcomp = {<ColorPicker/>}/>
      <RC RCName = "Array Update" Rcomp = {<ArrayUpdate/>}/>
    </div>
    </>
  )
}

export default App
