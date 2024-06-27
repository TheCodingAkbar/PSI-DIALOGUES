// src/components/Sidebar-Admin.jsx
import React from 'react';

const Sidebar = ({ setCurrentPage, currentPage }) => {
    const handleNavigation = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="md:fixed top-0 left-0 bottom-0 w-1/12 bg-[#ffffff] flex flex-col items-center p-3 pt-10 pb-10 justify-between">
            <div className="flex flex-col gap-5 text-gray-400 text-xs">
                <div className='flex justify-center items-center'>
                    <button onClick={() => handleNavigation('dashboard_a')} className={`hover:bg-neutral-200 rounded-xl p-3 items-center flex flex-col ${currentPage === 'home' ? 'bg-neutral-200' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="black" className="size-9 mb-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        Dashboard
                    </button>
                </div>

                <div className='flex justify-center'>
                    <button onClick={() => handleNavigation('earnings_a')} className={`hover:bg-neutral-200 rounded-xl p-3 flex flex-col items-center ${currentPage === 'mentoring' ? 'bg-neutral-200' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="black" className="size-9 mb-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        Earnings
                    </button>
                </div>

                <div className='flex justify-center'>
                    <button onClick={() => handleNavigation('user_a')} className={`hover:bg-neutral-200 rounded-xl p-3 flex flex-col items-center ${currentPage === 'social' ? 'bg-neutral-200' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="black" className="size-9 mb-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                        </svg>
                        User
                    </button>
                </div>

                <div className='flex justify-center'>
                    <button onClick={() => handleNavigation('mentor_a')} className={`hover:bg-neutral-200 rounded-xl p-3 flex flex-col items-center ${currentPage === 'mentoring' ? 'bg-neutral-200' : ''}`}>
                    <svg className='mb-2' xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="m12 22l-2-6H2l2 6zm0 0h4m-4-9v-.5c0-1.886 0-2.828-.586-3.414S9.886 8.5 8 8.5s-2.828 0-3.414.586S4 10.614 4 12.5v.5m15 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-9-9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4 13.5h6a2 2 0 0 1 2 2v.5a2 2 0 0 1-2 2h-1" color="currentColor"></path></svg>
                        Mentor
                    </button>
                </div>


            </div>

            <div className="flex justify-center text-gray-400">
                <button onClick={() => handleNavigation('settings')} className={`hover:bg-neutral-200 rounded-xl p-3 flex flex-col items-center ${currentPage === 'settings' ? 'bg-neutral-200' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="black" className="w-9 h-9 mb-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <span className="text-xs text-gray-400">Settings</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
