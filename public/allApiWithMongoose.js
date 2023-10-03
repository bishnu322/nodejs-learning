const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/e-comm";

const main = async () => {
  await mongoose.connect(url);
  let ProductSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String,
  });

  //  Post operation inserting data in mongodb Database
  
  const ProductsModel = mongoose.model("products", ProductSchema);

  let data = new ProductsModel({
    name: "Realme 34",
    brand: "readme 10",
    price: 5000,
    category: "mobile ",
  });
  let result = await data.save();
  //   console.log(result);

  // Api to update data in mongodb

  const updateInDb = async () => {
    const ProductsModel = mongoose.model("products", ProductSchema);
    const data = await ProductsModel.updateOne(
      {
        name: "m40",
      },
      {
        $set: {
          price: 15000,
          brand: "Samsung",
          category: "mobile-phone",
        },
      }
    );
    //  console.log(data)
  };
  updateInDb();

  // delete data from mongodb database using mongoose
  const deleteInDb = async () => {
    const ProductModule = mongoose.model("products", ProductSchema);

    const data = await ProductModule.deleteMany({name:"Realme 34"});

    // console.log(data);
  };
  deleteInDb();

// read or find data from monogodb database using mongoose

const findInDb = async () =>{
    const ProductModule = mongoose.model("products", ProductSchema);

    const data = await ProductModule.find()

    // console.log(data) 
}
findInDb()

};

main();
