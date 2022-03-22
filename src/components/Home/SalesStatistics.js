import React from "react";

const SaleStatistics = () => {
  return (
    <div className="col-xl-12 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Sale statistics</h5>
          <iframe 
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
              width: "100%",
              height: "400px"
            }}
            width="640" 
            height="480" 
            src="https://charts.mongodb.com/charts-shoeshopecomerce-bkaof/embed/charts?id=6239deea-e005-4df9-8331-02cbb40932be&maxDataAge=300&theme=light&autoRefresh=true"></iframe>
        </article>
      </div>
    </div>
  );
};

export default SaleStatistics;
