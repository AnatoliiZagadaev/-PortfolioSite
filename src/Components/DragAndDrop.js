/* eslint-disable func-names */
/* eslint-disable no-console */
import React from 'react';
import ReactDragList from 'react-drag-list';

const dataArray = [
  {
    list: 'I am a Photographer who likes everything ',
    gen: 'nature, people and travel'
  },
  {
    list: 'If you like my photos, call or write me.',
  },
  {
    list: 'Email: photo.jacobson@jmail.com',
  },
  {
    list: 'Phone: +01(111) 333-55-77',
  }
];

export default class DragAndDrop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: dataArray
    };
  }
  
  handleUpdate = function (event, updated) {
    console.log(event);
    console.log(updated);
  };

  render() {
    const { dataSource } = this.state;
    return (
      <ReactDragList
        dataSource={dataSource}
        rowKey="list"
        row={(record, index) => (
          <ul key={index}>
            <li>{record.list }</li>
            <span>{record.gen }</span>
          </ul>
        )}
        handles={false}
        onUpdate={this.handleUpdate}
      />
    );
  }
}
