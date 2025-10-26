import './App.css';
import { useState } from 'react';
import AddSkillForm from './components/AddSkillForm';
import SkillList from './components/SkillList';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleSkillAdded = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="App">
      <h1>SKILLSTACK TRACKER👩🏻‍💻📈</h1>
      <SkillList key={refresh} />
    </div>
  );
}

export default App;
