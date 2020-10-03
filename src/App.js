import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { faPlus, faFileImport } from '@fortawesome/free-solid-svg-icons'
import FileSearch from './components/FileSearch'
import FileList from './components/FileList'
import BottomBtn from './components/BottomBtn'
import TabList from './components/TabList'
import defaultFiles from './utils/defaultFiles'

function App() {
  return (
    <div className="App container-fluid px-0">
      <div className="row no-gutters">
        <div className="col-3 left-panel">
          <FileSearch title="我的源文档" onFileSearch={(value) => { console.log(value) }} />
          <FileList
            files={defaultFiles}
            onFileClick={(id) => console.log(id)}
            onSaveEdit={(id) => console.log(id)}
            onFileDelate={(id) => console.log(id)}
          />
          <div className="row no-gutters">
            <div className="col">
              <BottomBtn text="新建" colorClass="btn-primary" icon={faPlus}></BottomBtn>
            </div>
            <div className="col">
              <BottomBtn text="导入" colorClass="btn-success" icon={faFileImport}></BottomBtn>
            </div>
          </div>
        </div>
        <div className="col-9 right-panel">
          <TabList
            files={defaultFiles}
            onTabClick={(id) => console.log("onTabClick", id)}
            activeId="1"
          ></TabList>
        </div>
      </div>
    </div>
  );
}

export default App;
