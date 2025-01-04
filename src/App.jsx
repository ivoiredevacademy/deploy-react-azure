
import reactLogo from './assets/react.svg'
import CoderIcon from './assets/CoderIcon'
import azureImg from './assets/azure.png'

function App() {

  return (
    <div className="container mx-auto flex items-start">
      <div>
        <img src={azureImg} className="w-20" alt="Azure logo" />
        <h1 className="text-6xl font-semibold">Deployed in Microsoft Azure</h1>
        <p className="text-gray-500 text-lg">A react project deployed on Microsoft Azure, leveraging cloud-native technologies using <strong>VS Code</strong>.</p>
        <div className="flex justify-center ">
          <CoderIcon />
        </div>
      </div>
      <div className='flex justify-center w-1/2'>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-80" alt="React logo" />
        </a>
      </div>
    </div>
  )
}

export default App
