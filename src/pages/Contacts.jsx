import { toast } from 'react-toastify';
import { Container, Title } from './Contacts.styled';
import { ContactEditor } from 'components/ContactEditor';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { SpinnerLines } from 'components/etc/SpinnerLines/SpinnerLines';
import { useFetchedContacts } from 'hooks/useFetchedContacts';

const NO_CONTACTS = 'You have not added any contacts yet';
const Error = ({ message }) => void toast.error(message);

//
// Contacts
//

const Contacts = () => {
  const { items, pendingAction, error } = useFetchedContacts();

  const contactsList =
    items.length > 0 ? (
      <>
        <Filter />
        <ContactList rowHeight={40} controlsHeight="60%" />
      </>
    ) : (
      NO_CONTACTS
    );

  return (
    <Container>
      <Error message={error} />
      <Title>Your contacts</Title>
      <ContactEditor />
      {/* 
        Пока идет загрузка списка для текущего пользователя - 
        НЕ показываем список предыдущего (если он был). 
      */}
      {/contacts/i.test(pendingAction) ? <SpinnerLines /> : contactsList}
    </Container>
  );
};

export default Contacts;
