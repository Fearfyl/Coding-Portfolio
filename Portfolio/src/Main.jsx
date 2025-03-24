import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from './components/About.jsx';
import Error from './components/Error.jsx';
import Contact from './components/Contactform.jsx';
import Project from './components/Project.jsx';
import Portfolio from './components/Portfolio.jsx';
import Resume from './components/Resume.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: 'About',
                element: <About />,
            },
            {
                path: 'Portfolio',
                element: <Portfolio />,
            },
            {
                path: 'Contact',
                element: <Contact />,
            },
            {
                path: 'Resume',
                element: <Resume />,
            },
            {
                index: true, // default route
                element: <About />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
