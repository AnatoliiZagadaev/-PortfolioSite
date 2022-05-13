import React, { useState } from 'react';



const EditableTable = ({ columns, rows, actions }) => {
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
          if (editedRow.lastName) row.lastName = editedRow.lastName;
          if (editedRow.gender) row.gender = editedRow.gender;
          if(editedRow.Age) row.Age=editedRow.Age;
        }

        return row;
      })

      setRowsState(newData);
      setEditedRow(undefined)
    }, 1000)
  }

  return (
    <table className='conteinerTablet'>
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
              ? <form type='text' defaultValue={editedRow ? editedRow.firstName : row.firstName}
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
                defaultValue={editedRow ? editedRow.lastName : row.lastName}
                id={row.id}
                name='lastName'
                onChange={ (e) => handleOnChangeField(e, row.id) }
              />
              : row.lastName
            }
          </td>
          <td>
            { isEditMode && rowIDToEdit === row.id
              ? <form onChange={e => handleOnChangeField(e, row.id)} name="gender" defaultValue={row.gender}>
                <option value='Man'>Man</option>
                <option value='Woman'>Woman</option>
              </form>
              : row.gender
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
          {actions &&
          <td>
            { isEditMode && rowIDToEdit === row.id
              ? <button onClick={ () => handleSaveRowChanges() } className='actionBtn' disabled={!editedRow}>Save</button>
              : <button  onClick={ () => handleEdit(row.id) } className='actionBtn'>Edit</button>
            }

            { isEditMode && rowIDToEdit === row.id
              ? <button onClick={() => handleCancelEditing()} className='actionBtn'>Editing</button>
              : <button onClick={() => handleRemoveRow(row.id)} className='actionBtn'>Remove</button>
            }
          </td>
          }
        </tr>
      })}
      </tbody>
    </table>
  );
};

export default EditableTable;