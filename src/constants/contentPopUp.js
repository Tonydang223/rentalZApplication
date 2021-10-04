const contentPopUp ={
        error:{
            name:'alert-circle',
            headingText:'Warning !!!',
            content:`Can you check it again please, you missed any the required field.`,
            color:'#CF000F'
         },
         success:(editContent)=>({
             name:'checkmark-circle',
             headingText:'Succesfull',
             content:editContent ==='edit'?`You update successfully!!!`:`You successfully created a new record, you can easily see that in Catalog.`,
             color:'rgb(0, 230, 64)'
         })
}
export default contentPopUp