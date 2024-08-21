import React from 'react'

const List = ({ employees, handleEdit, handleDelete }) => {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: null
    });

    return (
        <div className="overflow-x-auto no-scrollbar pt-16">
            <div className="">
                <table className="w-full bg-[rgb(241,245,248)] shadow-md rounded-lg">
                    <thead className="relative bg-blue-600 text-white">
                        <tr className='text-[10px] lg:text-base'>
                            <th className="p-3 text-left">No.</th>
                            <th className="p-3 text-left">First Name</th>
                            <th className="p-3 text-left">Last Name</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-left">Salary</th>
                            <th className="p-3 text-left">Date</th>
                            <th colSpan={2} className="p-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {employees.length > 0 ? (
                            employees.map((employee, i) => (
                                <tr key={employee.id} className="border-b hover:bg-gray-100 text-[12px] lg:text-base">
                                    <td className="p-3">{i + 1}</td>
                                    <td className="p-3">{employee.firstName}</td>
                                    <td className="p-3">{employee.lastName}</td>
                                    <td className="p-3">{employee.email}</td>
                                    <td className="p-3">{formatter.format(employee.salary)}</td>
                                    <td className="p-3">{employee.date}</td>
                                    <td className="p-3 text-right">
                                        <button onClick={() => handleEdit(employee.id)} className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500 transition">  Edit </button>
                                    </td>
                                    <td className="p-3 text-left">
                                        <button onClick={() => handleDelete(employee.id)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"> Delete </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={8} className="p-3 text-center">No Employees </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default List