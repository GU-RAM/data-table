import './App.css';
import { BasicTable } from './components/Table/BasicTable';
import CopyAsync from './components/CopyPaste/CopyPasteAsyncClipboard';

function App() {
  return (
    <div className='App'>
      <CopyAsync />
      <BasicTable />
    </div>
  );
}

export default App;
