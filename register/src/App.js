import PasswordGenerator from './Components/PasswordGenerator'
import TextForm from './Components/ColForm'
const App = () =>
{
  return(
    <>
    <h1><center><u>User Registration</u></center></h1>
    <form>
      <TextForm />
      <PasswordGenerator />
    </form>
    </>
   )  
}

export default App