import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import FileSearch from './components/FileSearch'
import FileList from './components/FileList'
import defaultFiles from './utils/defaultFiles'

function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col left-panel">
          <FileSearch title="我的源文档" onFileSearch={(value) => { console.log(value) }} />
          <FileList
            files={defaultFiles}
            onFileClick={(id) => console.log(id)}
            onSaveEdit={(id) => console.log(id)}
            onFileDelate={(id) => console.log(id)}
          />
        </div>
        <div className="col bg-primary right-panel">
          <h1>right</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
