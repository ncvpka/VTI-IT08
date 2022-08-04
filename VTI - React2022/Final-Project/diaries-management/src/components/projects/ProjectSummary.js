import React, { useEffect, useRef, useState, useContext } from "react";
import { Context } from "../../App";

const ProjectSummary = () => {
    const {data, setStatus, status} = useContext(Context)
    const [show, setShow] = useState(false);
    const[indexP, setIndex] = useState();
    const title_new = useRef()
    const content_new = useRef()
    const [list, setList] = useState([])

  useEffect(() => {
    setList(data)
  },[status])
  const handleDeleteProduct = (index) => { 
    delete data[index];
    setStatus(!status)
  }

  const handleEdit = (index) =>{
  
   data.splice(index, 1)
    const product = {
        title: title_new.current.value,
        content: content_new.current.value
    }
    data.unshift(product)
  //   setStatus(!status)
    setShow(false)
  }
  return (
    <div className="card z-depth-0 project-summary">
      {list &&
        list.map((product, index) => {
          return (
            <div key={index} className="card-content grey-text text-darken-3">
              <p>Poster</p>
              <div className="tile-content">
                <span className="card-title">{product.title}</span>
                <div className="btns">
                  <button className="btn_edit" onClick={(() => {setIndex(index); setShow(true)})}>Edit</button>
                  <button className="btn_delete" onClick={() => handleDeleteProduct(index)}>Delete</button>
                </div>
              </div>
              
              <textarea className="grey-text" value={product.content}/>
              <input type="datetime" className="date" placeholder="Ngày viết nhật ký"/>
            </div>
          );
        })}
        {
            show && <div className="modal_edit">
                <div className="modal_content">
                    <input style={{paddingLeft: "20px"}} ref={title_new} className="modal_title" defaultValue={data[indexP].title}></input>
                    <textarea style={{width: "100%"}} ref={content_new} className="modal_modal_content" defaultValue={data[indexP].content}/>
                    <div className="modal_btns">
                      <button style={{marginRight:"20px"}} className="btn_save" onClick={() => handleEdit(indexP)}>Save</button>
                      <button className="btn_save" onClick={() => setShow(false)}>Close</button>
                    </div>
                </div>
            </div>
        }
    </div>
    
  );
};

export default ProjectSummary;
