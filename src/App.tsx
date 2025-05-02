import Sidebar from './components/sidebar';
import Content from './components/content';
import { useState } from 'react';
import { IApp } from './dto';

function App() {
  const [selectedFolder, setSelectedFolder] = useState<IApp>({
    path: '',
    type: undefined,
    name: '',
  });

  const handleSelectedFolder = (path: string) => {
    setSelectedFolder({
      path,
      type: path.includes('.') ? 'file' : 'folder',
      name: String(path.split('/').pop()),
    });
  };

  return (
    <div className="flex w-dvw h-dvh">
      <Sidebar
        handleSelectedFolder={handleSelectedFolder}
        selectedFolder={selectedFolder}
        setSelectedFolder={setSelectedFolder}
      />
      <Content />
    </div>
  );
}

export default App;
