import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function DateFilter() {

    const [dateFilters, setDateFilters] = React.useState({
        startDate: new Date(),
        endDate: new Date()
    })

    function setStartDate(date) {
        setDateFilters({
            ...dateFilters,
            startDate: date
        })
    }

    function setEndDate(date) {
        setDateFilters({
            ...dateFilters,
            endDate: date
        })
    }

    React.useEffect(() => {
        console.log(dateFilters)
    }, [dateFilters])

    return (
        <div className='flex w-min gap-x-2 mb-6'>
            <DatePicker onChange={(e) => setStartDate(e)} selected={dateFilters.startDate} className="h-[36px] w-[150px] border border-gray-300 rounded-lg px-2" placeholderText='Select start date' />
            <DatePicker onChange={(e) => setEndDate(e)} selected={dateFilters.endDate} className="h-[36px] w-[150px] border border-gray-300 rounded-lg px-2" placeholderText='Select end date'/>
        </div>
    )
}
