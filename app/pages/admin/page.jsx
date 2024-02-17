'use client';
import * as React from 'react';
import AddBlog from './components/blogPopUp';
const Admin = ()=>{
    const [addBlogOpen, setAddBlogOpen] = React.useState(false);
    const handleOpenAddBlog = () => {
        setAddBlogOpen(true);
      };
    const handleCloseAddBlog =()=>{
        setAddBlogOpen(false);
    }
    return(
        <div className="p-4 font-dmsan">
            <button className="rounded-lg p-4 bg-cyan text-white" onClick={handleOpenAddBlog}>Add blog</button>
             <AddBlog open={addBlogOpen} handleAddBlogClose={handleCloseAddBlog}></AddBlog>
        </div>
    )
}
export default Admin;