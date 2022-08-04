import React, { Component } from 'react';


function CreateProject() {
    
    
  return (
    <div className="container">
                <form  className="white">
                    <h5 className="grey-text text-darken-3">Create new project</h5>
                    <div className="input-fields">
                        <lebel htmlFor="title">Title</lebel>
                        <input type="text" id="title"  />
                    </div>
                    <div className="input-fields">
                        <lebel htmlFor="content">Project Content</lebel>
                        <textarea id="content" className="materialize-textarea" />
                    </div>
                    <div className="input-fields">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
  )
}

export default CreateProject

//đây là sự khác nhau giưuax function và class nếu e muốn đổi từ class sang function thif nhìn cấu trúc mà đổi sang thôi

// class CreateProject extends Component {
//     state = {
//         title: '',
//         content: '',
//     }
//     handleChange = (e) => {
//         this.setState({
//             [e.target.id]: e.target.value
//         })
//     }
//     handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(this.state);
//     }
//     render() {
//         return (
//             <div className="container">
//                 <form onSubmit={this.handleSubmit} className="white">
//                     <h5 className="grey-text text-darken-3">Create new project</h5>
//                     <div className="input-fields">
//                         <lebel htmlFor="title">Title</lebel>
//                         <input type="text" id="title" onChange={this.handleChange} />
//                     </div>
//                     <div className="input-fields">
//                         <lebel htmlFor="content">Project Content</lebel>
//                         <textarea id="content" className="materialize-textarea" onChange={this.handleChange} />
//                     </div>
//                     <div className="input-fields">
//                         <button className="btn pink lighten-1 z-depth-0">Create</button>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }

// export default CreateProject