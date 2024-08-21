import { useState } from 'react';
import { employeesData } from './data';
import { Add, Edit, Header, List } from './modules';
import Swal from 'sweetalert2';

function App() {
  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (id) => {
    const [employee] = employees.filter(employee => employee.id === id);

    setSelectedEmployee(employee);
    setIsEditing(true);
  }

  const handleDelete = (id) => {
    Swal.fire({
      icon: 'warning',
      title: `<h2 class="text-xl font-semibold text-yellow-600">Are you sure?</h2>`,
      html: `<p class="text-gray-700">You won't be able to revert this!</p>`,
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      customClass: {
        popup: 'rounded-lg shadow-lg p-6',
        confirmButton: 'bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200',
        cancelButton: 'bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-200',
      }
    }).then(result => {
      if (result.isConfirmed) {
        const [employee] = employees.filter(employee => employee.id === id);

        Swal.fire({
          icon: 'success',
          title: `<h2 class="text-xl font-semibold text-green-600">Deleted!</h2>`,
          html: `<p class="text-gray-700">${employee.firstName} ${employee.lastName}'s data has been deleted.</p>`,
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: 'rounded-lg shadow-lg p-6',
          }
        });

        setEmployees(employees.filter(employee => employee.id !== id));
      }
    });
  }


  return (
    <div className='m-auto'>
      {!isAdding && !isEditing && (
        <div>
          <Header setIsAdding={setIsAdding} />
          <List employees={employees} handleEdit={handleEdit} handleDelete={handleDelete} />
        </div>
      )}

      {isAdding && (
        <Add employees={employees} setEmployees={setEmployees} setIsAdding={setIsAdding} />
      )}

      {isEditing && (
        <Edit employees={employees} selectedEmployee={selectedEmployee} setEmployees={setEmployees} setIsEditing={setIsEditing} />
      )}
    </div>
  )
}

export default App
