import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        title: {
            type:String,
            required:true,
            trim: true,
        },
        image: {
            type:String,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: String, 
            required: true,
            enum: ["fruits", "vegetables", "dairy", "dry-fruits", "juices"],
        },
        stock: {
            type: Number,
            required: true,
            default: 0,
        },
        // owner: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "User",
        //     required: true,
        // },
    },
    {timestamps: true},
);

const Product = mongoose.model("Product", productSchema);

export default Product;