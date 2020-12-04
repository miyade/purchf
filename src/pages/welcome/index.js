import React from 'react';
import { Container} from 'reactstrap';
import './index.css'


import 'bootstrap/dist/css/bootstrap.min.css';

export default function Welcome({history}){


    const handleSubmit = async () => {
            history.push('/categories')
    }

    return (
        <Container>
         <div className="wrapper">
            <button onClick={() => handleSubmit()} className="button">Get Started</button>
        </div>
        </Container>
    );
}