import React from "react";
import "./css/Productsell.css";

const Productsell = () => {
    return (
        <div className="productsell">
            <div className="product-info" style={{ marginLeft: "20px" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <h3 style={{ marginTop: "5px" }}> ProductSell</h3>
                    <input type="text" placeholder="search"
                        style={{
                            backgroundColor: " #f0f5f5 ", marginTop: "5px", marginLeft: "650px",
                            height: "20px", border: "none", color: "#b3cccc"
                        }} />
                    <p style={{ marginLeft: "15px", color: "#b3cccc" }}>Last 30 Days</p>
                </div>
                <table>
                    <thead>
                        <tr style={{ color: " #b3cccc" }}>
                            <th >Product Name</th>
                            <div className=" " style={{ marginLeft: "440px", marginRight: "15px", display: "flex", flexDirection: "row", }} >
                                <th style={{ marginLeft: "40px" }}>Stock</th>
                                <th style={{ marginLeft: "40px" }}>Price</th>
                                <th style={{ marginLeft: "40px" }}> Total Sale </th>
                            </div>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="" style={{ width: "300px", height: " 40px", }}>

                                    <img style={{ width: "60px", height: " 40px", borderRadius: "5px", float: "left", marginRight: "15px" }} src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWRhhpy-fc4_JRYa6c3C2zCaNYEEQ1yV8Vrw&usqp=CAU" alt="image not found" />
                                    <p>
                                        Abstract 3D <br />
                                        <span style={{ color: "#b3cccc", fontSize: "12px" }}> This is a product This is a product</span>
                                    </p>

                                </div> </td>
                            <div className=" " style={{ marginLeft: "420px", display: "flex", flexDirection: "row", }}>
                                <td style={{ marginLeft: "40px" }}> 45 in Stock</td>
                                <td style={{ marginLeft: "35px" }}> $ 86 </td>
                                <td style={{ marginLeft: "40px" }}> 56</td>
                            </div>
                        </tr>
                        <tr>
                            <td>
                                <div className="" style={{ width: "300px", height: " 40px", }}>

                                    <img style={{ width: "60px", height: " 40px", borderRadius: "5px", float: "left", marginRight: "15px" }}
                                        src=" https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image not found" />
                                    <p>
                                        Sarphans illustration <br />
                                        <span style={{ color: "#b3cccc", fontSize: "12px" }}> This is a product This is a product</span>
                                    </p>

                                </div> </td>
                            <div className=" " style={{ marginLeft: "420px", display: "flex", flexDirection: "row", }}>
                                <td style={{ marginLeft: "40px" }}> 45 in Stock</td>
                                <td style={{ marginLeft: "35px" }}> $ 86 </td>
                                <td style={{ marginLeft: "40px" }}> 56</td>
                            </div>
                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Productsell;


// import React from "react";
// import "./css/Productsell.css";

// // Define the Productsell functional component
// const Productsell = () => {
//     return (
//         <div className="productsell">
//             {/* Product Information Section */}
//             <div className="product-info" style={{ marginLeft: "20px" }}>
//                 {/* Search and Filter Section */}
//                 <div style={{ display: "flex", flexDirection: "row" }}>
//                     <h3 style={{ marginTop: "5px" }}>ProductSell</h3>
//                     <input
//                         type="text"
//                         placeholder="Search"
//                         style={{
//                             backgroundColor: "#f0f5f5",
//                             marginTop: "5px",
//                             marginLeft: "62%", // Adjusted for better alignment
//                             height: "20px",
//                             border: "none",
//                             color: "#b3cccc",
//                         }}
//                     />
//                     <p style={{ marginLeft: "15px", color: "#b3cccc" }}>
//                         Last 30 Days
//                     </p>
//                 </div>

//                 {/* Table Section */}
//                 <table>
//                     <thead>
//                         <tr style={{ color: "#b3cccc" }}>
//                             <th>Product Name</th>
//                             <span style={{ marginLeft: "450px" }}>
//                             <th style={{ marginRight: "40px" }}>Stock</th>
//                             <th style={{ marginLeft: "40px" }}>Price</th>
//                             <th style={{ marginLeft: "40px" }}>Total Sale</th>
//                             </span>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {/* Product Rows */}
//                         <tr>
//                             <td>
//                                 {/* Product Image and Description */}
//                                 <div
//                                     className=""
//                                     style={{
//                                         width: "300px",
//                                         height: "40px",
//                                     }}
//                                 >
//                                     <img
//                                         style={{
//                                             width: "60px",
//                                             height: "40px",
//                                             borderRadius: "5px",
//                                             float: "left",
//                                             marginRight: "15px",
//                                         }}
//                                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWRhhpy-fc4_JRYa6c3C2zCaNYEEQ1yV8Vrw&usqp=CAU"
//                                         alt="Product 1"
//                                     />
//                                     <p>
//                                         Abstract 3D <br />
//                                         <span
//                                             style={{
//                                                 color: "#b3cccc",
//                                                 fontSize: "12px",
//                                             }}
//                                         >
//                                             This is a product This is a product
//                                         </span>
//                                     </p>
//                                 </div>
//                             </td>
//                             {/* Stock, Price, Total Sale */}
//                             <td style={{ marginLeft: "40px" }}>45 in Stock</td>
//                             <td style={{ marginLeft: "35px" }}>$86</td>
//                             <td style={{ marginLeft: "40px" }}>56</td>
//                         </tr>
//                         {/* Repeat similar structure for additional products */}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// // Export the component
// export default Productsell;

