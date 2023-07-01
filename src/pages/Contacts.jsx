import { toast } from 'react-toastify';
import { Container, Title } from './Contacts.styled';
import { ContactEditor } from 'components/ContactEditor';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { SpinnerLines } from 'components/SpinnerLines/SpinnerLines';
import { useFetchedContacts } from 'hooks/useFetchedContacts';

const NO_CONTACTS = 'There are no contacts in the phone book yet';
const Error = ({ message }) => void toast.error(message);

//
// App
//

const Contacts = () => {
  const { items, pendingAction, error } = useFetchedContacts();

  return (
    <Container>
      <Error message={error} />
      <Title>Your contacts</Title>
      <ContactEditor />

      {items.length > 0 && (
        <>
          <Filter />
          <ContactList rowHeight={40} controlsHeight="60%" />
        </>
      )}

      {items.length === 0 &&
        (/fetchAll/i.test(pendingAction) ? <SpinnerLines /> : NO_CONTACTS)}
    </Container>
  );
};

export default Contacts;
