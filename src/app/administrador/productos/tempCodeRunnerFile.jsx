const readData = async () => {
    const res = await fetch('/api/read_productos');
    const resJSON = await res.json();
    setProductos(JSON.parse(resJSON));
    console.log(resJSON);
  };

  const readMarcas = async () => {
    const res = await fetch('/api/read_marcas_admin');
    const resJSON = await res.json();
    setMarcas(JSON.parse(resJSON));
    console.log(resJSON);
  };