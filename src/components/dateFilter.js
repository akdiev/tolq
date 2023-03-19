import React from 'react'


export default function DateFilter(props) {

    const [yearOptions, setYearOptions] = React.useState([])

    const [dateFilters, setDateFilters] = React.useState({
        startYear: new Date().getFullYear(),
        endYear: new Date().getFullYear(),
        isFiltered: false
    })

    function setStartYear(startYear) {
        setDateFilters({
            ...dateFilters,
            startYear: startYear,
            isFiltered: true
        })
    }

    function setEndYear(endYear) {
        console.log(endYear)
        setDateFilters({
            ...dateFilters,
            endYear: endYear,
            isFiltered: true
        })
    }

    function handleDateFilter() {
        if (!dateFilters.isFiltered) return;
        if (Number(dateFilters.startYear) > Number(dateFilters.endYear)) {
            return setEndYear(dateFilters.startYear)
        }
        if (Number(dateFilters.endYear) < Number(dateFilters.startYear)) {
            return setStartYear(dateFilters.endYear)
        }
        props.filterItems(dateFilters)
    }

    React.useEffect(() => {
        console.log(dateFilters)
        handleDateFilter()

    }, [dateFilters])

    React.useEffect(() => {
        for (let i = 1900; i <= new Date().getFullYear(); i++) {
            setYearOptions(prev => [...prev, i])
        }
    }, [])

    return (
        <div className='flex w-min gap-x-2 mb-6'>
            <select onChange={(e) => setStartYear(e.target.value)} value={dateFilters.startYear} className="h-[36px] w-[150px] border border-gray-300 rounded-lg px-2" placeholder='Select start date'>
                {yearOptions.map((year, index) => (
                    <option key={index} value={year}>{year}</option>
                ))}
            </select>
            <select value={dateFilters.endYear} onChange={(e) => setEndYear(e.target.value)} className="h-[36px] w-[150px] border border-gray-300 rounded-lg px-2" placeholder='Select end date'>
                {yearOptions.map((year, index) => (
                    <option key={index} value={year}>{year}</option>
                ))}
            </select>
        </div>
    )
}

