// src/components/Admin/useradmin/UserList.jsx
import React, { useEffect, useState } from 'react';
import { allUsersData } from '../../../data/alluserdata';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('YOUR_API_ENDPOINT_HERE');
                if (response.ok) {
                    const data = await response.json();
                    setUsers(data);
                } else {
                    setUsers(allUsersData);
                }
            } catch (error) {
                setUsers(allUsersData);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='mt-8'>
            <h1 className="text-2xl font-bold my-4">User List</h1>
            <table className="table-auto w-full border-collapse border border-gray-400">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">ID</th>
                        <th className="border border-gray-300 px-4 py-2">Username</th>
                        <th className="border border-gray-300 px-4 py-2">Email</th>
                        <th className="border border-gray-300 px-4 py-2">Prog-Lvl</th>
                        <th className="border border-gray-300 px-4 py-2">Prog-Word</th>
                        <th className="border border-gray-300 px-4 py-2">Prog-Mentoring</th>
                        <th className="border border-gray-300 px-4 py-2">N-Listening</th>
                        <th className="border border-gray-300 px-4 py-2">N-Grammar</th>
                        <th className="border border-gray-300 px-4 py-2">N-Pronounce</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.nama}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.prog_lvl}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.prog_word}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.prog_mentoring}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.n_listening}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.n_grammar}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.n_pronounce}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;

