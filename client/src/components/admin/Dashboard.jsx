import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import '../../css/admin.css';

const Dashboard = () => {
    const token = localStorage.getItem('x-access-token');
    const [user, setUser] = useState('');
    
    useEffect(() => {
        if (!token) return;
        const payload = JSON.parse(atob(token.split('.')[1]));
        const userId = payload.id
        fetch(`http://localhost:5000/api/user/${userId}`).then(res => res.json()).then(data => setUser(data)).catch(err => console.error(err));
    },[]);

    console.log(user.name);
    
    return (
            <div className='columns ml-3 mt-3'>
                <div className='column is-2 '>
                    {user && <Sidebar user={user} />}
                </div>
                <div className='column'>
                    
                </div>
            </div>
    );
};

export default Dashboard;