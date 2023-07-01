import { Button } from './ContactEditor.styled';
import { SpinnerLines } from 'components/SpinnerLines/SpinnerLines';
import { IconUserPlus } from 'styles/icons';

export const SubmitBtn = ({ loading = false, adding = true }) => {
  const btnCaption = !adding ? (
    'Save'
  ) : (
    <>
      <IconUserPlus size="20px" />
      Add
    </>
  );

  return (
    <Button type="submit">
      {loading ? <SpinnerLines width={20} strokeColor="white" /> : btnCaption}
    </Button>
  );
};
