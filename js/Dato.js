
  let agregarDato=()=> {
    let valor=parseInt(document.getElementById('Valor').value);
    let descripcion=(document.getElementById('descripcion').value);
    let tipo=document.getElementById('tipo').value;
    console.log(tipo);
    
    if(tipo=="ingreso") {
        let newboxent = document.createElement('div');
        newboxent.setAttribute('id','limpiar_estilo');
        newboxent.setAttribute('class','elemento limpiarEstilos');
        let nuevocontenedor = document.getElementById('lista-ingresos');
        nuevocontenedor.insertAdjacentElement('beforeend',newboxent);
        
       let newboxentdes = document.createElement('div');
        newboxent.innerText= descripcion;
        newboxent.setAttribute('class','elemento_descripcion');
        let contdesc = document.getElementById('Nuevo_Ingreso');
        contdesc.insertAdjacentElement('beforeend',newboxentdesc);

        let newboxentval = document.createElement('div');
        newboxentval.innerText= "+" + valor;
        newboxent.setAttribute('class','elemento_descripcion');
        let contval = document.getElementById('Nuevo_Ingreso');
        contval.insertAdjacentElement('beforeend',newboxentval);
    }
    else {
        let newboxent = document.createElement('div');
        newboxent.setAttribute('id','limpiar_estilo');
        newboxent.setAttribute('class','elemento limpiarEstilos');
        let nuevocontenedor = document.getElementById('lista-egresos');
        nuevocontenedor.insertAdjacentElement('beforeend',newboxent);
        
       let newboxentdesc = document.createElement('div');
        newboxent.innerText= descripcion;
        newboxent.setAttribute('class','elemento_descripcion');
        let contdesc = document.getElementById('Nuevo_Egreso');
        contdes.insertAdjacentElement('beforeend',newboxentdesc);

        let newboxentval = document.createElement('div');
        newboxentval.innerText= "+" + valor;
        newboxent.setAttribute('class','elemento_descripcion');
        let contval = document.getElementById('Nuevo_Egreso');
        contval.insertAdjacentElement('beforeend',newboxentval);   
    }
  }