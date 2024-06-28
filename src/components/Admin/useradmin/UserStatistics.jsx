import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { purchasedata } from '../../../data/purchasedata';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const UserStatistics = () => {
    const [userCounts, setUserCounts] = useState(Array(12).fill(0));

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('YOUR_API_ENDPOINT_HERE');
                if (response.ok) {
                    const data = await response.json();
                    const counts = Array(12).fill(0);
                    data.forEach(purchase => {
                        const startMonth = new Date(purchase.start_date).getMonth();
                        const endMonth = new Date(purchase.end_date).getMonth();
                        for (let i = startMonth; i <= endMonth; i++) {
                            counts[i]++;
                        }
                    });
                    setUserCounts(counts);
                } else {
                    countUsersPerMonth(purchasedata);
                }
            } catch (error) {
                countUsersPerMonth(purchasedata);
            }
        };

        const countUsersPerMonth = (data) => {
            const counts = Array(12).fill(0);
            data.forEach(purchase => {
                const startMonth = new Date(purchase.start_date).getMonth();
                const endMonth = new Date(purchase.end_date).getMonth();
                for (let i = startMonth; i <= endMonth; i++) {
                    counts[i]++;
                }
            });
            setUserCounts(counts);
        };

        fetchData();
    }, []);

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Subscribed User each Month',
                data: userCounts,
                borderColor: '#000',
                backgroundColor: '#000',
                borderWidth: 2,
                pointBackgroundColor: '#000',
                pointBorderColor: '#000',
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Subscribed User each Month',
                font: {
                    size: 18,
                    weight: 'bold'
                },
                padding: {
                    top: 10,
                    bottom: 30
                }
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: '#000',
                },
            },
            y: {
                grid: {
                    borderDash: [8, 4],
                },
                ticks: {
                    color: '#000',
                },
                min: 0,
                max: 15,
            },
        },
    };

    return (
        <div className="border border-gray-400 rounded-md p-4 w-full">
            <Line data={data} options={options} />
        </div>
    );
};

export default UserStatistics;



