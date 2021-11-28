const handleCreateProduct = (e, name, product, setProduct) => {
    e.preventDefault();
    const value = name === "image" ? e.target.files[0] : e.target.value;
    setProduct({
            ...product,
            [name]: value
        }
    );
}

export {
    handleCreateProduct
};