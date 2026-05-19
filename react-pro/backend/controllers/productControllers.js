import Product from "../models/Product.js";

export const addProduct = async (req, res) => {
    try{
        let imageUrl;
        if(req.file) {
            imageUrl = `http://localhost:3000/uploads/${req.file.filename}`;
        }
        const {title, description, stock, price, category } = req.body;

        const newProduct = new Product({
            title,
            description,
            price,
            category,
            stock,
            ...(imageUrl && {image: imageUrl}),
        })

        await newProduct.save();

        res.status(201).json({
            message: "Product Saved Successfully",
            product: newProduct,
        })
 
       console.log("product added successfuly");
    } catch (err) {
        console.log(err);
    }
}



export const getProducts = async (req, res) => {
    try{
        const products = await Product.find();
        res.json(products);
    } catch (err){
        console.log(err);
        // res.status(500).json({error: err.message});
    }
}

export const deleteProducts = async (req, res) => {
    try{
        await Product.findByIdAndDelete(req.params.id);
        console.log("product deleted successfully");
        res.status(200).json({
            message: "product deleted"
})
    } catch (err) {
        console.log(err);
        // res.status(500).json({error: err.message});
    }

}