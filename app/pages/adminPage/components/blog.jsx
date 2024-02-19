
import React from 'react';

const NewPage = () => {
  return (
    <div>
        <div className='mb-6'>
            <label for="first_name" class="block mb-2 text-sm font-medium text-black dark:text-black">Title Topic</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-black text-black text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black " placeholder="John" required />
        </div>
        <div class="mb-6">
            <label for="large-input" class="block mb-2 text-sm font-medium text-black dark:text-Black">Description</label>
            <input type="text" id="large-input" class="block w-full h-32 p-4 text-black border border-black rounded-lg bg-gray-50 text-base dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black "/>
        </div>

        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>


    </div>
  );
}

export default NewPage;