
import { FormBuilder } from '@daohaus/form-builder'
import { ExampleComponent } from './components/ExampleComponent'
import { APP_FORM } from './legos/forms'

function App() {

  return (
    <>
    <ExampleComponent />
      
    <FormBuilder
      form={APP_FORM.TEST_FORM}
    />
    </>
  )
}

export default App
