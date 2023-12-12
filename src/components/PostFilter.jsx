import React from 'react';
import MySelect from './UI/select/MySelect';
import MyInput from './UI/inputs/MyInput';

const PostFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder={'Search...'}
                style={{ width: '100%',  margin: '25px 0 25px 0'}}
            />

            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                options={[
                    {type: 'title', name: 'by title'},
                    {type: 'body', name: 'by text'},
                    {type: 'date', name: 'by date'},
                ]}
                defaultValue={'sort off'}
            />
        </div>
    );
};

export default PostFilter;