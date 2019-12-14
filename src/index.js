import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

class Index extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <meta charSet='utf-8' />
                    <title>Enrollment</title>
                    <meta name='description' content='Enrollment cart' />
                    <meta name='keywords' content='Enrollment, Cart' />
                </Helmet>
                <div className='px-4 px-lg-0'>
                    <header className='container text-white py-5 text-center'>
                        <h1 className='display-4'>Working with ReactJS</h1>
                        <p className='lead mb-0'>
                            Please enroll your interested events and courses.
                        </p>
                        <p className='lead'>Made with Bootstrap 4</p>
                    </header>
                    <div className='container pb-5'>
                        <div className='row '>
                            <div className='col-lg-12 p-5 bg-white rounded shadow-lg mb-5'>
                                <App />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
