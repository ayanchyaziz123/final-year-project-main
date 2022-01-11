import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from 'recharts';

const pdata = [
    {
        name: 'Python',
        student: 13,
        fees: 10
    },
    {
        name: 'Java',
        student: 10,
        fees: 11
    },
    {
        name: 'Php',
        student: 20,
        fees: 12
    },
    {
        name: 'Java Script',
        student: 80,
        fees: 20
    },
    {
        name: 'Web',
        student: 100,
        fees: 80
    },
    {
        name: 'C++',
        student: 40,
        fees: 20
    }

]

const ProductCompareChart = () => {
    return (
        <div className="mt-5 mb-5">
            <h4 className="mb-3">Lates Price graph </h4>
            <div className="mt-4">
                <ResponsiveContainer width="100%" aspect={3}>
                    <LineChart data={pdata}>
                        <XAxis dataKey="name" interval={'preserveStartEnd'} />
                        <YAxis />
                        <Line dataKey="student" />
                        <Line dataKey="fees" />
                    </LineChart>

                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default ProductCompareChart;