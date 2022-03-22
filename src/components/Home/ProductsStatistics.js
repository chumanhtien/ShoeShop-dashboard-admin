import React from "react";

const ProductsStatistics = () => {
  return (
    <div className="col-xl-12 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Products statistics</h5>
          <iframe 
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
              width:"100%",
              height: "400px"
            }} 
            width="640" 
            height="480" 
            src="https://charts.mongodb.com/charts-shoeshopecomerce-bkaof/embed/charts?id=6239e05b-38ca-4370-8eff-4566dd519680&maxDataAge=3600&theme=light&autoRefresh=true">
          </iframe>
        </article>
      </div>
    </div>
  )
  
};

export default ProductsStatistics;
