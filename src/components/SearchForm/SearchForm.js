import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const SearchForm = (props) => {
    const [userText, checkUserText] = useState('');
    const dispatch = useDispatch();
    dispatch({ type: 'UPDATE_SEARCHSTRING', payload: { userText } })

    return (
        <form className={styles.searchForm}>
            <TextInput placeholder={!props.children ?  'Search...' : props.children} value={userText} onChange={e => checkUserText(e.target.value)} />
            <Button><span className="fa fa-search" /> Search</Button>
        </form>
    );
};

export default SearchForm;