import './App.css';
import { BasicTable } from './components/Table/BasicTable';
import GroupedTable from './components/Table/GroupedTable';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function App() {
  return (
    <div className='App'>
      <Tabs>
        <TabList>
          <Tab>Basic Table</Tab>
          <Tab>Grouped Table</Tab>
        </TabList>

        <TabPanel>
          <h2>
            <BasicTable />
          </h2>
        </TabPanel>
        <TabPanel>
          <h2>
            <GroupedTable />
          </h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
