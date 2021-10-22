const contentPopUp ={
        error:(errorData,letterUpdateError)=>({
            name:'alert-circle',
            headingText:'Warning !!!',
            content:errorData==='duplicate'?
            `The record is existed in the database. You need check and change some information`:
            errorData ==='errorInsertOrUpdate'?
            `You can not ${letterUpdateError?letterUpdateError:'insert'} data. Check it again!!!`
            :
            `Can you check it again please, you missed any the required field.`,
            color:'#CF000F'
         }),
         success:(editContent)=>({
             name:'checkmark-circle',
             headingText:'Succesfull',
             content:editContent ==='edit'?`You update successfully!!!`:`You successfully created a new record, you can easily see that in Catalog.`,
             color:'rgb(0, 230, 64)'
         })
}
export default contentPopUp