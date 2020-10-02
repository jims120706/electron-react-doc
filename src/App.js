import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { faPlus, faFileImport } from '@fortawesome/free-solid-svg-icons'
import FileSearch from './components/FileSearch'
import FileList from './components/FileList'
import BottomBtn from './components/BottomBtn'
import defaultFiles from './utils/defaultFiles'

function App() {
  return (
    <div className="App container-fluid px-0">
      <div className="row no-gutters">
        <div className="col left-panel">
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
        <div className="col bg-primary right-panel">
          <h1>right</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
