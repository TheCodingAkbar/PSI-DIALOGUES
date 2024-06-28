// src/components/Admin/earningsadmin/TabelEarning.jsx
// src/components/Admin/earningsadmin/TabelEarning.jsx
import React, { useState, useEffect } from 'react';
import { purchasedata } from '../../../data/purchasedata';

const TabelEarning = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('YOUR_API_ENDPOINT_HERE');
                if (response.ok) {
                    const data = await response.json();
                    setUsers(data);
                } else {
                    setUsers(purchasedata);
                }
            } catch (error) {
                setUsers(purchasedata);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold my-4">Subscribed User</h1>
            <table className="table-auto w-full border-collapse border border-gray-400">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">ID</th>
                        <th className="border border-gray-300 px-4 py-2">Username</th>
                        <th className="border border-gray-300 px-4 py-2">Subscription Type</th>
                        <th className="border border-gray-300 px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id_purchase}>
                            <td className="border border-gray-300 px-4 py-2">{user.id_purchase}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.username}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.subs_type}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.status || 'Active'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TabelEarning;


