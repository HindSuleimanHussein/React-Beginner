import Student from './Student.jsx'
//http://localhost:5175/

function App() {
  return (
    <>
      <Student name="Hind" age="21" isStudent="false" />
      <Student name="Nada" age="21" isStudent="true" />
      <Student name="Ghaid" age="22" isStudent="true" />
      <Student age="21"/>
    </>
  );
}

export default App
