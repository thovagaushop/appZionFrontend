import React, { useEffect, useState } from "react";

const Home = () => {
  return (
    <section className="py-5 text-white home-page">
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="display-4" style={{fontWeight: "bolder"}}>WELCOME, GOD BLESS YOU</h1>
            <p className="lead mb-0">
              Trang web dành cho người giúp việc Mẹ trên trời từ hội thánh Ba Đình.{" "}
            </p>
          </div>
        </div>

        <div className="row  d-flex flex-column align-items-center">
          <div className="banner-img"><img alt="Banner" src="/banner.jpg"/></div>
          
        </div>
      </div>
    </section>
  );
};

export default Home;
