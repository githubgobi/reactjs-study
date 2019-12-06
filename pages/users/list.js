import { Button} from 'react-bootstrap';
import { BrowserRouter, Route, Link } from "react-router-dom";

import Layout from '../comps/MyLayout';
import UserList from '../comps/user/List';
import UserCreate from '../comps/user/Create';
function CreateButton(){
    return (
        <>
            <Button variant="primary" onClick="/users/create">Create</Button>
        </>
    );
};

export default function List(){
    return (
        <Layout>
            <CreateButton />
            <UserList />
        </Layout>
    );
}

