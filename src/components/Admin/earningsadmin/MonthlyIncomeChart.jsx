import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { purchasedata } from '../../../data/purchasedata';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MonthlyIncomeChart = () => {
    const [monthlyIncomeData, setMonthlyIncomeData] = useState(Array(12).fill(0));

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('YOUR_API_ENDPOINT_HERE');
                if (response.ok) {
                    const data = await response.json();
                    const income = Array(12).fill(0);
                    data.forEach(purchase => {
                        const month = new Date(purchase.start_date).getMonth();
                        income[month] += purchase.price;
                    });
                    setMonthlyIncomeData(income);
                } else {
                    const income = Array(12).fill(0);
                    purchasedata.forEach(purchase => {
                        const month = new Date(purchase.start_date).getMonth();
                        income[month] += purchase.price;
                    });
                    setMonthlyIncomeData(income);
                }
            } catch (error) {
                const income = Array(12).fill(0);
                purchasedata.forEach(purchase => {
                    const month = new Date(purchase.start_date).getMonth();
                    income[month] += purchase.price;
                });
                setMonthlyIncomeData(income);
            }
        };

        fetchData();
    }, []);

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Monthly Income 2024 (in IDR)',
                data: monthlyIncomeData,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: true, position: 'top' },
            title: { display: true, text: 'Monthly Income' },
        },
    };

    return <Bar data={data} options={options} />;
};

export default MonthlyIncomeChart;

