import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsReducer';


const ColumnForm = props => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const dispatch = useDispatch();
  const listId = props.id;

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addColumn({ title, icon, listId }));
    setTitle('');
    setIcon('');
  };

	return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <span className={styles.text}>Title</span>
      <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <span className={styles.text}>Icon</span>
      <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
      <Button>Add column</Button>
    </form>
	);
};

export default ColumnForm;