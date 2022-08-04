import React, { Component, useEffect, useRef, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { Context } from "../../App";
function CreateProject() {
    const titleRef = useRef()
    const contentRef = useRef()
    const {data } = useContext(Context)
    const navigate = useNavigate()

    const handleCreateProject = () => {
        const product = {
            title: titleRef.current.value,
            content: contentRef.current.value
        }
        data.unshift(product)
         titleRef.current.value = ""
         contentRef.current.value = ""
         navigate('/')
    }
    
  return (
    <div className="container">
                <div  className="white">
                    <h5 className="grey-text text-darken-3">Create new project</h5>
                    <div className="input-fields">
                        <label htmlFor="title">Title</label>
                        <input ref={titleRef} type="text" id="title" />
                    </div>
                    <div className="input-fields">
                        <label htmlFor="content">Project Content</label>
                        <textarea ref={contentRef} id="content" className="materialize-textarea" />
                    </div>
                    <div className="input-fields">
                        <button onClick={() => handleCreateProject()} className="btn pink lighten-1 z-depth-0" >Create</button>
                    </div>
                </div>
        </div>
  )
}

export default CreateProject