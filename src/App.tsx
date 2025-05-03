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

  return (
    <div className="flex w-dvw h-dvh">
      <Sidebar
        selectedFolder={selectedFolder}
        setSelectedFolder={setSelectedFolder}
      />
      <Content selectedFolder={selectedFolder} />
    </div>
  );
}

export default App;
