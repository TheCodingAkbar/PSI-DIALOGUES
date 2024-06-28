// src/components/Admin/earningsadmin/SubscriptionTypeChart.jsx
// src/components/Admin/earningsadmin/SubscriptionTypeChart.jsx
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { purchasedata as dummyData } from '../../../data/purchasedata';

ChartJS.register(ArcElement, Tooltip, Legend);

const SubscriptionTypeChart = () => {
    const [subscriptionCounts, setSubscriptionCounts] = useState({
        Perunggu: 0,
        Perak: 0,
        Emas: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('YOUR_API_ENDPOINT_HERE');
                if (response.ok) {
                    const data = await response.json();
                    const counts = { Perunggu: 0, Perak: 0, Emas: 0 };
                    data.forEach(purchase => {
                        counts[purchase.subs_type]++;
                    });
                    setSubscriptionCounts(counts);
                } else {
                    const counts = { Perunggu: 0, Perak: 0, Emas: 0 };
                    dummyData.forEach(purchase => {
                        counts[purchase.subs_type]++;
                    });
                    setSubscriptionCounts(counts);
                }
            } catch (error) {
                const counts = { Perunggu: 0, Perak: 0, Emas: 0 };
                dummyData.forEach(purchase => {
                    counts[purchase.subs_type]++;
                });
                setSubscriptionCounts(counts);
            }
        };

        fetchData();
    }, []);

    const data = {
        labels: ['Perunggu', 'Perak', 'Emas'],
        datasets: [
            {
                label: 'Subscription Type',
                data: [subscriptionCounts.Perunggu, subscriptionCounts.Perak, subscriptionCounts.Emas],
                backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className='border border-gray-400 rounded-md p-4' style={{ width: '340px', height: '380px' }}>
            <h1 className='font-bold text-red-500 border border-red-500 rounded-md text-center p-2'>Subscription Type</h1>
            <Pie data={data} />
        </div>
    );
};

export default SubscriptionTypeChart;





