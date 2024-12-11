import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './css/paste.css'
const Paste = () => {

  const paste = useSelector((state) => state.paste.paste);
  const [searchTerm,setSearchTerm] = useState('')

  const dispatch = useDispatch();

  const filteredata = paste.filter((paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <div>
      <input type="search" 
      placeholder='Search Here' 
      value={searchTerm} 
      onChange={(e)=>setSearchTerm(e.target.value)}/>

      <div className='flex flex-col gap-5 mt-6'>
        {
          filteredata.length > 0 &&
          filteredata.map(
            (paste) => {
              return(
                <div className='border rounded-2xl p-3 flex flex-col gap-5'>
                  <div className="title">
                    {paste.title}
                  </div>
                  <div className="content">
                    {paste.content}
                  </div>
                  <div className="buttons flex flex-row place-content-evenly">
                    <button>
                    <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button>
                    <i class="fa-solid fa-eye"></i>
                    </button>
                    <button>
                    <i class="fa-solid fa-share"></i>
                    </button>
                    <button onClick={() => handleDelete(paste?._id)}>
                    <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              )
            }
          )
        }
      </div>

    </div>
  )
}
export default Paste