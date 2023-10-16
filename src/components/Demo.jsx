import React, {useEffect, useState} from 'react'
import {FiLink2} from 'react-icons/fi'
import {BiSearchAlt} from 'react-icons/bi'

function Demo() {
  return (
    <section className='mt-16 w-full max-w-xl'>
      <div className='flex flex-col w-full gap-2'>
        <form action="" className='relative flex justify-center items-center' onSubmit={() => {}}>
          <FiLink2 className='absolute left-0 my-2 ml-3 w-5'/>
          <input type="url" 
          placeholder="Enter a URL"
          value=''
          onChange={() => {}}
          required
          className='url_input peer'
          />
          <button
          type='submit'
          className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700'
          >
            <BiSearchAlt/>
          </button>
        </form>
        
      </div>

    </section>
  )
}

export default Demo