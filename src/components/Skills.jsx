import React from 'react'
import { BiCheck } from "react-icons/bi";
import { IoStarHalf } from "react-icons/io5";

const Skills = () => {
  return (
    <>
      <div className='m-4'>
        <div className='container'>
            <h5 className='py-4 fs-1'>Skills</h5>
            <div className='row border rounded'>
                <div className='col-lg-12'>
                    <IoStarHalf className="my-3 fs-1 border p-2 rounded bg-body-tertiary"/>
                    <h3 className='text-xl font-medium pb-4'>The skills necessary for Web Development...</h3>
                    <hr />
                    <div className='skill gap-4'>
                      <h1 className='text-xl py-3'>Programming Language</h1>
                      <li><BiCheck style={{display:"inline-block"}}/>c#</li>
                      <hr />
                      <h1 className='text-xl py-3'>Frameworks</h1>
                      <li><BiCheck style={{display:"inline-block"}}/>asp.net</li>
                      <li><BiCheck style={{display:"inline-block"}}/>asp.net WebForms</li>
                      <li><BiCheck style={{display:"inline-block"}}/>asp.net core</li>
                      <li><BiCheck style={{display:"inline-block"}}/>Entity Framework</li>
                      <li><BiCheck style={{display:"inline-block"}}/>React</li>
                      <li><BiCheck style={{display:"inline-block"}}/>Bootstrap</li>
                      <li><BiCheck style={{display:"inline-block"}}/>Tailwind Css</li>
                      <hr />
                      <h1 className='text-xl py-3'>Tools</h1>
                      <li><BiCheck style={{display:"inline-block"}}/>Git</li>
                      <li><BiCheck style={{display:"inline-block"}}/>GitHub</li>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Skills
