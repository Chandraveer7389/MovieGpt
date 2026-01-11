import { Provider } from 'react-redux'
import Body from './components/Body.jsx'
import appStore from './utility/appStore.js'

function App() {
  return (
    <Provider store={appStore} >
   <div>
    <Body/>
   </div>
   </Provider>
  )
}

export default App
