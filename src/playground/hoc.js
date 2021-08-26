//Higher Order Component i.e. HOC is a component that renders another component
//Reuse code
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
);

// const withAdminWarning = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             {props.isAdmin && <p>This is private info. Please don't share.</p>}
//             <WrappedComponent {...props} />
//         </div>
//     );
// };

// const AdminInfo = withAdminWarning(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="These are the details." />, document.getElementById('app'));

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ?
                <WrappedComponent {...props} />
                :
                <p>Please login to use this functionality.</p>
            }
        </div>
    );
};

const AdminInfo = requireAuthentication(Info);

ReactDOM.render(<AdminInfo isAuthenticated={false} info="Welcome to the Application." />, document.getElementById('app'));
