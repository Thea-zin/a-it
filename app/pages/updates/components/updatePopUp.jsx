'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FileUpload,{File} from 'react-material-file-upload';
import { useState } from 'react';
import  Chip from '@mui/material/Chip';
import Alert from '@mui/material/Alert';
import  Stack  from '@mui/material/Stack';
import { Reviews } from '@mui/icons-material';
export default function UpdateBlog({open,handleAddBlogClose,oldBlog}) {
  const [tags,setTags] = useState(oldBlog.tags);
  const [title,setTitle]=useState(oldBlog.title);
  const [content,setContent]=useState(oldBlog.content);
  const [image,setImage]=useState(oldBlog.imageRef);
  const [inputTag,setInputTags] = useState('');
  const [nullWarning,setNullWarning]=useState(false);
  const [errorMessage,setErrorMessage]=useState('');
  const [severity,setSeverity]=useState('');
  const handleAddTag=()=>{
    if(inputTag.trim() !== '' && !tags.includes(inputTag)){
      const updateTags = [...tags,inputTag]
      setTags(updateTags);
      setInputTags('');
      console.log(tags)

    }
  };
  const handleDeleteTag = (tagsToDelete)=>()=>{
      const updateTags = tags.filter((tag)=>tag !== tagsToDelete);
      setTags(updateTags);


  }
  const addBlog = async (e) =>{
    e.preventDefault();
    console.log(title)
    if (image==null){
        await setImage(oldBlog.imageRef)
    }
    if ((title != '') && (content != '') &&(tags!='') ){
        // setNullWarning(false)
        try{
            const form = new FormData();
            form.append('title',title);
            form.append('userID',"aaaaab@email.com");
            form.append('image',image);
            form.append('content',content)
            form.append('publishedAt',new Date())
            form.append('tags',tags)
            form.append('blogId',oldBlog.blogId)
            console.log(oldBlog.blogId)
            const response = await fetch('/api/updates/updateBlog', {
                method:'PUT',
                body:form
            })
            const message = await response.json()
            console.log(message)
            if (response.ok){
               
               await setNullWarning(true);
               await setErrorMessage('Successfuly added');
               await handleAddBlogClose();
               await setNullWarning(false);
               await setErrorMessage('');
                
            }else{
              await setSeverity("warning")
              await setNullWarning(true);
              await setErrorMessage(message['message'])
            }
        } catch(error){
          await setSeverity("warning")
          await setNullWarning(true);
          await setErrorMessage(error)
        }
    }else{
      await setNullWarning(true);
      await setErrorMessage("Field cant be null")
    }
}

  return (
    <div className='space-y-8'>
<React.Fragment>
      <Dialog   open={open} onClose={handleAddBlogClose} className="font-dmsan " maxWidth="md">
        <DialogTitle style={{fontFamily:'dmsan'}} >Add new blog</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please insert your blog to be publish here ! 


          </DialogContentText>
          <div >
          {nullWarning && (
                            <Alert severity="info" className="font-dmsan">{errorMessage}</Alert>
                        )}
          </div>

          <TextField value={title} onChange={(e)=>{setTitle(e.target.value)}}  color="secondary" style={{fontFamily:'dmsan',margin:'10px'}} margin="dense" id="name" label="Blog title" type="text" fullWidth variant="standard"/>
          {/* <FileUpload accept={['.jpg','.jpeg','.png']} value={image} onChange={(e)=>{setImage(}} ></FileUpload> */}
          <input className='m-[10px] font-dmsan bg-cyan' type="file"  onChange={(e)=>{setImage(e.target.files[0])}}></input>
         
          <TextField value={content} onChange={(e)=>{setContent(e.target.value)}} id="filled-multiline-static" style={{fontFamily:'dmsan',border:'1px',margin:'10px'}} margin="dense"  label="Blog content" type="text" multiline fullWidth  maxRows={30} variant="standard"/>
          <span style={{margin:'10px'}}>
            <label>Tags : </label>
            <span>
              {tags.map((tag,index)=>(
                  <Chip style={{margin:'10px'}} key={index} label={tag} onDelete={handleDeleteTag(tag)} color="primary" ></Chip>
                  
                ))}
              </span>
          </span>
         <TextField style={{margin:'10px'}} fullWidth label="Add tags" value={inputTag} onChange={(e)=>setInputTags(e.target.value)} onKeyPress={(e)=>{
          if(e.key==='Enter'){
                    e.preventDefault() 
                    handleAddTag()}}}></TextField>
              {/* <div>{tags}</div> */}
  
        </DialogContent>
        <DialogActions >
          <Button onClick={handleAddBlogClose} className="font-dmsan text-black">Cancel</Button>
          <Button onClick={addBlog} className="font-dmsan text-black">Add</Button>
        </DialogActions>
      </Dialog>
   
    </React.Fragment>
    </div>
    

  );
}