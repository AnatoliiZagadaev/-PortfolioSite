
import React from "react";
import ReactDOM from "react-dom";
import ReactDragList from "react-drag-list";


const dataArray = [
    {
        list:'I am a Photographer who likes everything ',
        gen:'nature, people and travel'
      },
      {
        list:'If you like my photos, call or write me.',
      },
      {
        list:'Email: photo.jacobson@jmail.com',
      },
      { 
        list:'Phone: +01(111) 333-55-77',
      }      
];

export default class DragAndDrop extends React.Component {
  state = {
    dataSource: dataArray
  };

  handleUpdate = (event, updated) => {
    console.log(event); 
    console.log(updated);
  };

  render() {
    return (
      <section>
        <ReactDragList
          dataSource={this.state.dataSource}
          rowKey="list"
          row={(record, index) => (
            <div key={index}>
             <span>{record.list }</span>
            <span>{record.gen }</span>
            </div>
          )}
          handles={false}
          onUpdate={this.handleUpdate}
        />
      </section>
    );
  }
}
ReactDOM.render(<DragAndDrop/>, document.getElementById("root"));