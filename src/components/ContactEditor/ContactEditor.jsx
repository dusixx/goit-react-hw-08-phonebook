import { useState, useRef } from 'react';
import { TextField } from 'components/TextField';
import { Form } from './ContactEditor.styled';
import { fieldData } from 'data/fieldData';
import { useContacts } from 'redux/hooks';
import { toast } from 'react-toastify';
import { Block } from 'styles/shared';
import { useEffect } from 'react';
import { SubmitBtn } from './SubmitBtn';

import {
  formatNumber,
  formatName,
  isContactExists,
  isContactsEqual,
} from 'utils';

const ALREADY_EXISTS = `The contact with the same name or number already exists`;
const ADDED_SUCCESS = `The contact was successfully added `;
const UPDATED_SUCCESS = `The contact was successfully updated `;

//
// ContactEditor
//

export const ContactEditor = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [editedData, setEditedData] = useState(null);
  const nameFieldRef = useRef(null);
  const {
    items,
    editedId,
    setEditedId,
    pendingAction,
    addContactAsync,
    editContactAsync,
  } = useContacts();

  useEffect(() => {
    if (!name && !number) {
      setEditedId(null);
      setEditedData(null);
    }
  }, [name, number, setEditedId]);

  useEffect(() => {
    const found = items.find(itm => itm.id === editedId);
    if (!found) return;

    setEditedData(found);
    setName(found.name);
    setNumber(found.number);

    nameFieldRef.current?.focus();
    nameFieldRef.current?.scrollIntoView();

    return () => {
      setEditedId(null);
      setEditedData(null);
    };
  }, [editedId, items, setEditedId]);

  const resetForm = e => {
    setName('');
    setNumber('');
  };

  const addContact = data => {
    addContactAsync(data).then(() => {
      resetForm();
      toast.success(ADDED_SUCCESS);
    });
  };

  const editContact = data => {
    if (isContactsEqual(data, editedData)) return;

    editContactAsync({ id: editedId, data })
      .then(() => {
        setEditedId(null);
        resetForm();
        toast.success(UPDATED_SUCCESS);
      })
      .catch(toast.error);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      name: formatName(name),
      number: formatNumber(number),
    };

    if (editedId) return editContact(data);

    // можно вынести в condition для thunk-а addContact
    if (!isContactExists(items, data)) return addContact(data);
    toast.error(ALREADY_EXISTS);
  };

  return (
    <Block style={{ padding: '15px' }}>
      <Form onSubmit={handleSubmit}>
        <TextField
          ref={nameFieldRef}
          name="name"
          placeholder="name"
          height="var(--field-height)"
          autoComplete="off"
          pattern={fieldData.name.pattern}
          title={fieldData.name.title}
          icon={fieldData.name.icon}
          value={name}
          onChange={e => setName(e?.target.value ?? '')}
          required
        />

        <TextField
          name="number"
          placeholder="number"
          height="var(--field-height)"
          type="tel"
          autoComplete="off"
          pattern={fieldData.number.pattern}
          title={fieldData.number.title}
          icon={fieldData.number.icon}
          value={number}
          onChange={e => setNumber(e?.target.value ?? '')}
          required
        />

        <SubmitBtn
          loading={/(add|edit)/i.test(pendingAction)}
          adding={!editedId}
        />
      </Form>
    </Block>
  );
};
