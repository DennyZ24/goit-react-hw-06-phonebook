import Section from 'components/Section/Section'
import Phonebook from "components/Phonebook/Phonebook";
import ContactsBook from 'components/ContactsBook/ContactsBook';
import Filter from "components/Filter/Filter";

const App = () => {
 
  return (
    <>
      <Section title='Phonebook'>
        <Phonebook />
      </Section>
        
      <Section title='Contacts'>
        <ContactsBook/>
      </Section>

      <Section>
        <Filter/>
      </Section>
    </>
  )
}

export default App;