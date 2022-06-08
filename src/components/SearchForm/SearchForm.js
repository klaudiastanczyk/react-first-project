import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearchform } from '../../redux/store';

const SearchForm = (props) => {
    const [userText, checkUserText] = useState('');
    const dispatch = useDispatch();
    const changeHandler = e => {
        checkUserText(e.target.value);
        dispatch(updateSearchform(userText));
        }

    return (
        <form className={styles.searchForm}>
            <TextInput placeholder={!props.children ?  'Search...' : props.children} 
                value={userText} onChange={ changeHandler } />
            <Button><span className="fa fa-search" /> Search</Button>
        </form>
    );
};

export default SearchForm;