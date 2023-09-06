import { useState } from 'react';
import List from './components/List';
import Title from './components/Title';
import people from './data';
import Button from './components/Button';

const App = () => {
  const [list, setList] = useState(people);

  const handleClick = () => {
    setList([]);
  };
  return (
    <main>
      <section className="container">
        <Title title="5 Birthdays Today" />
        <List people={list} />
        <Button name="Clear All" onClick={handleClick} />
      </section>
    </main>
  );
};
export default App;
