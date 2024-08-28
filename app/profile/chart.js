import React from 'react'
import { AreaChart, Area ,ResponsiveContainer , XAxis ,YAxis ,CartesianGrid,Tooltip,Legend} from 'recharts'

const productCharts = [
    {
        name: "Jan",
        product1: 34,
        product2: 20,
    },
    {
        name: "Feb",
        product1: 78,
        product2: 90,
    },
    {
        name: "March",
        product1: 67,
        product2: 75,
    },
    {
        name: "Apr",
        product1: 93,
        product2: 84,
    },
    {
        name: "May",
        product1: 23,
        product2: 34,
    },
    {
        name: "Jun",
        product1: 56,
        product2: 60,
    },
    {
        name: "Aug",
        product1: 34,
        product2: 30,
    },
    {
        name: "sep",
        product1: 90,
        product2: 99,
    },
    {
        name: "Oct",
        product1: 76,
        product2: 56,
    },
    {
        name: "Nov",
        product1: 80,
        product2: 64,
    },
]

const chart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart width="100%" height="100%" data={productCharts} >
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <XAxis dataKey="name"/>
        <CartesianGrid strokeDasharray="5 5"/>
            <Area type="monotone" dataKey="product1" stroke='#2563eb' fill='#3b82f6' stackId="1" />
            <Area type="monotone" dataKey="product2" stroke='#7c3aed' fill='#D85FDB' stackId="1"/>
        </AreaChart>
        </ResponsiveContainer>

    )
}

export default chart
