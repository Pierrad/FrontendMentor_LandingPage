import * as SC from './AppStyled'

import FutureBlock from './components/FutureBlock/index'
import InfrastructureBlock from './components/InfrastructureBlock/index'
import ComputerBlock from './components/ComputerBlock/index'

function App() {
  return (
    <SC.Container>
      <SC.MyHeader />
      <FutureBlock />
      <InfrastructureBlock />
      <ComputerBlock />
      <SC.MyFooter />
    </SC.Container>
  )
}

export default App
