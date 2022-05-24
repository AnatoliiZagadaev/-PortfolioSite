import  React from "react";
import './TabletOfPersonal.css';

function Tables(props) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Product</td>
            <td>Count</td>
            <td>Delete</td>
            <td>Edit</td>
          </tr>
          {props.Products.map((item) => (
            <tr key={item.id}>
              <td>{item.name} </td>
              <td>{item.count}</td>
              <td>
                <button
                  onClick={() => {
                    props.delete(item);
                  }}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    props.edit(item);
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Tables;

/*const EditableTable = ({ columns, rows, actions }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [rowIDToEdit, setRowIDToEdit] = useState(undefined);
  const [rowsState, setRowsState] = useState(rows);
  const [editedRow, setEditedRow] = useState();

  const handleEdit = (rowID) => {
    setIsEditMode(true);
    setEditedRow(undefined);
    setRowIDToEdit(rowID);
  }

  const handleRemoveRow = (rowID) => {
    const newData = rowsState.filter(row => {
      return row.id !== rowID ? row : null
    });

    setRowsState(newData);
  }

  const handleOnChangeField = (e, rowID) => {
    const { name: fieldName, value } = e.target;

    setEditedRow({
      id: rowID,
      [fieldName]: value
    })
  }

  const handleCancelEditing = () => {
    setIsEditMode(false);
    setEditedRow(undefined);
  }

  const handleSaveRowChanges = () => {
    setTimeout(() => {
      setIsEditMode(false);

      const newData = rowsState.map(row => {
        if (row.id === editedRow.id) {
          if (editedRow.firstName) row.firstName = editedRow.firstName;
          if (editedRow.Surname) row.Surname = editedRow.Surname;
          if (editedRow.Age) row.Age = editedRow.Age;
          if (editedRow.gender) row.gender = editedRow.gender;
        }

        return row;
      })

      setRowsState(newData);
      setEditedRow(undefined)
    }, 1000)
  }

  return (
    <table>
      <thead>
      <tr>
        {columns.map((column) => {
          return <th key={column.field}>{ column.fieldName }</th>
        })}
      </tr>
      </thead>
      <tbody>
      {rowsState.map((row) => {
        return <tr key={row.id}>
          <td>
            {row.id}
          </td>
          <td>
            { isEditMode && rowIDToEdit === row.id
              ? <form
              
                type='text'
                defaultValue={editedRow ? editedRow.firstName : row.firstName}
                id={row.id}
                name='firstName'
                onChange={ (e) => handleOnChangeField(e, row.id) }
                
              />
              : row.firstName
            }
          </td>
          <td>
            { isEditMode && rowIDToEdit === row.id
              ? <form
                type='text'
                defaultValue={editedRow ? editedRow.Surname : row.Surname}
                id={row.id}
                name='Surname'
                onChange={ (e) => handleOnChangeField(e, row.id) }
              />
              : row.Surname
            }
          </td>
          <td>
            { isEditMode && rowIDToEdit === row.id
              ? <form
                type='text'
                defaultValue={editedRow ? editedRow.Age : row.Age}
                id={row.id}
                name='Age'
                onChange={ (e) => handleOnChangeField(e, row.id) }
              />
              : row.Age
            }
          </td>
          <td>
            { isEditMode && rowIDToEdit === row.id
              ? <form onChange={e => handleOnChangeField(e, row.id)} name="Gender" defaultValue={row.gender}>
                <select>
                   <option value='Man'>Man</option>
                   <option value='Women'>Woman</option>
                </select>
               
              </form>
              : row.gender
            }
          </td>
          {actions &&
          <td>
            { isEditMode && rowIDToEdit === row.id
              ? <button onClick={ () => handleSaveRowChanges() } className='actionBtn' disabled={!editedRow}>
                Save 
              </button>
              : <button  onClick={ () => handleEdit(row.id) } className='actionBtn'>
                Edit
              </button>
            }

            { isEditMode && rowIDToEdit === row.id
              ? <button onClick={() => handleCancelEditing()} className='actionBtn'>
                Editing
              </button>
              : <button onClick={() => handleRemoveRow(row.id)} className='actionBtn'>
                Remov
              </button>
            }
          </td>
          }
        </tr>
      })}
      </tbody>
   </table>
  )
}*/

