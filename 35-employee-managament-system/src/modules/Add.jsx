import { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';

const Add = ({ employees, setEmployees, setIsAdding }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [salary, setSalary] = useState('');
    const [date, setDate] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !salary || !date) {
            return Swal.fire({
                icon: 'error',
                title: `<h2 class="text-xl font-semibold text-red-600">Error</h2>`,
                html: `<p class="text-gray-700">All fields are required.</p>`,
                showConfirmButton: true,
                confirmButtonText: 'OK',
                customClass: {
                    popup: 'rounded-lg shadow-lg p-6',
                    confirmButton: 'bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition'
                }
            });
        }

        const id = employees.length + 1;
        const newEmployee = {
            id,
            firstName,
            lastName,
            email,
            salary,
            date,
        }

        employees.push(newEmployee);
        setEmployees(employees);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: `<h2 class="text-xl font-semibold text-green-600">Added!</h2>`,
            html: `<p class="text-gray-700">${firstName} ${lastName}'s data has been added.</p>`,
            showConfirmButton: false,
            timer: 1500,
            customClass: {
                popup: 'rounded-lg shadow-lg p-6',
            }
        });

    }

    return (
        <div className="h-[100vh] w-[100vw]  flex justify-center items-center bg-white p-6 rounded-lg shadow-md">
            <form onSubmit={handleAdd} className="space-y-4 w-[70vw] lg:w-[30vw]">
                <h1 className="text-2xl font-bold text-center">Add Employee</h1>

                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700"> First Name </label>
                    <input id="firstName" type="text" ref={textInput} name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700"> Last Name </label>
                    <input id="lastName" type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Email </label>
                    <input id="email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <div>
                    <label htmlFor="salary" className="block text-sm font-medium text-gray-700">Salary ($)</label>
                    <input id="salary" type="number" name="salary" value={salary} onChange={(e) => setSalary(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700"> Date </label>
                    <input id="date" type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <div className="mt-6 flex justify-between">
                    <input type="submit" value="Add" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200" />
                    <input type="button" value="Cancel" onClick={() => setIsAdding(false)} className="ml-4 w-full bg-gray-500 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600 transition duration-200" />
                </div>
            </form>
        </div>

    )
}

export default Add