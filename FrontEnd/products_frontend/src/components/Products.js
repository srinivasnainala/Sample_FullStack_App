
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function Products() {
   
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[prodid,setProdId]=useState(10)
    const[prodname,setProdName]=useState('')
    const[description,setDescription]=useState('')
    const[Products,setProducts]=useState([])
     const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const product={prodid,prodname,description}
    console.log(product)
    fetch("http://localhost:9099/addproduct",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(product)

  }).then(()=>{
    console.log("New Product added")
  })
}

useEffect(()=>{
  fetch("http://localhost:9099/products")
  .then(res=>res.json())
  .then((result)=>{
    setProducts(result);
  }
)
},[])


  return (
    <Container>
    <TextField id="outlined-basic" label="Search Product by Id" variant="outlined" style={{marginLeft:"820px",marginTop:"10px"}}
    
/>
<Button color="secondary" variant="contained" style={{marginTop:"18px",marginLeft:"5px"}} >Search</Button>
    
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Add Product</u></h1>

    <form className={classes.root} noValidate autoComplete="off">
    <TextField id="outlined-basic" label="Product ID" variant="outlined" fullWidth 
      value={prodid}
      onChange={(e)=>setProdId(parseInt(e.target.value,8))}/>
      <TextField id="outlined-basic" label="Product name" variant="outlined" fullWidth 
      value={prodname}
      onChange={(e)=>setProdName(e.target.value)}
      />
      <TextField id="outlined-basic" label="description" variant="outlined" fullWidth
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
      />
      <Button variant="contained" color="secondary" onClick={handleClick}>
  Submit
</Button>
    </form>
   
    </Paper>
    <h1 style={{marginLeft:"350px"}}>Available Products</h1>

    <Paper elevation={3} style={paperStyle}>

      {Products.map(product=>(
        <Paper elevation={30} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={product.id}>
         Id:{product.prodid}<br/>
         Product name:{product.prodname}<br/>
         Description:{product.description}

        </Paper>
      ))
}
    </Paper>
    </Container>
  );
}
