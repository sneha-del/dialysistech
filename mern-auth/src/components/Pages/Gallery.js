const Gallery = () => {
    return (
        <div>
        <section className="gallery-title text-center">
          <div className="gallery-wrapper">
            <div className="container">
              <div className="row">
                <div>
                  <h1 className="headline">Our Gallery</h1>
                </div>
              </div>
              <div className="row">
                <div className="sub-headline">
                  <p>Lorem ipsum dolor sit amet, consectetur </p>
                </div>
              </div>	
            </div>
          </div>
        </section>
        <section className="gallery-content">
          <div className="container">
            <div className="row port">
              <div className="col-md-8 col-md-offset-2 text-center button-group" id="filters">
                <button type="button" className="gallery-btn btn-primary btn is-checked" data-filter="*">All</button>
                <button type="button" className="gallery-btn btn-primary btn" data-filter=".care">Care</button>
                <button type="button" className="gallery-btn btn-primary btn" data-filter=".treatment">Treatment</button>
                <button type="button" className="gallery-btn btn-primary btn" data-filter=".staff">Staff</button>
                <button type="button" className="gallery-btn btn-primary btn" data-filter=".donation">Donation</button>
                <button type="button" className="gallery-btn btn-primary btn" data-filter=".pharmacy">Pharmacy</button>
              </div>
            </div>	{/* row */}
            <div className="row">
              <div className="isotope" id="port-items">
                <div className="col-md-4 col-sm-6 col-xs-6 element-item care" data-category="care">
                  <img className="img-responsive center-block" src="assets/img/care1.jpg" alt="Image1" />
                  <div className="item-desc hidden-xs">
                    <div className="item-title">
                      <h3>Lorem Ipsum</h3>
                    </div>
                    <div className="item-tags">
                      <p>
                        Lorem ipsum dolor porro non delectus cupiditate a!
                      </p>
                    </div>
                  </div>{/* /.item-desc */}
                </div>
                <div className="col-md-4 col-sm-6 col-xs-6 element-item treatment" data-category="treatment">
                  <img className="img-responsive center-block" src="assets/img/treatment2.jpg" alt="Image2" />
                  <div className="item-desc hidden-xs">
                    <div className="item-title">
                      <h3>Lorem Ipsum</h3>
                    </div>
                    <div className="item-tags">
                      <p>
                        Lorem ipsum dolor assumenda minima sapiente eius cum 
                      </p>
                    </div>
                  </div>{/* /.item-desc */}
                </div>
                <div className="col-md-4 col-sm-6 col-xs-6 element-item staff" data-category="staff">
                  <img className="img-responsive center-block" src="assets/img/staff1.jpg" alt="Image3" />
                  <div className="item-desc hidden-xs">
                    <div className="item-title">
                      <h3>Lorem Ipsum</h3>
                    </div>
                    <div className="item-tags">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                      </p>
                    </div>
                  </div>{/* /.item-desc */}
                </div>
                <div className="col-md-4 col-sm-6 col-xs-6 element-item care" data-category="care">
                  <img className="img-responsive center-block" src="assets/img/care2.jpg" alt="Image4" />
                  <div className="item-desc hidden-xs">
                    <div className="item-title">
                      <h3>Lorem Ipsum</h3>
                    </div>
                    <div className="item-tags">
                      <p>
                        Lorem ipsum dolor sit natus beatae nobis temporibus sint
                      </p>
                    </div>
                  </div>{/* /.item-desc */}
                </div>
                <div className="col-md-4 col-sm-6 col-xs-6 element-item treatment" data-category="treatment">
                  <img className="img-responsive center-block" src="assets/img/treatment1.jpg" alt="Image5" />
                  <div className="item-desc hidden-xs">
                    <div className="item-title">
                      <h3>Lorem Ipsum</h3>
                    </div>
                    <div className="item-tags">
                      <p>
                        Lorem ipsum aperiam ipsam voluptas ipsum dolor sit quam.
                      </p>
                    </div>
                  </div>{/* /.item-desc */}
                </div>
                <div className="col-md-4 col-sm-6 col-xs-6 element-item staff" data-category="staff">
                  <img className="img-responsive center-block" src="assets/img/staff2.jpg" alt="Image6" />
                  <div className="item-desc hidden-xs">
                    <div className="item-title">
                      <h3>Lorem Ipsum</h3>
                    </div>
                    <div className="item-tags">
                      <p>
                        Lorem ipsum dolor sit amet, assumenda numquam tempora.
                      </p>
                    </div>
                  </div>{/* /.item-desc */}
                </div>
                <div className="col-md-4 col-sm-6 col-xs-6 element-item care" data-category="care">
                  <img className="img-responsive center-block" src="assets/img/care3.jpg" alt="Image7" />
                  <div className="item-desc hidden-xs">
                    <div className="item-title">
                      <h3>Lorem Ipsum</h3>
                    </div>
                    <div className="item-tags">
                      <p>
                        qui nihil ducimus nobis quidem sed a Sint, dolore.
                      </p>
                    </div>
                  </div>{/* /.item-desc */}
                </div>
                <div className="col-md-4 col-sm-6 col-xs-6 element-item treatment" data-category="treatment">
                  <img className="img-responsive center-block" src="assets/img/treatment4.jpg" alt="Image8" />
                  <div className="item-desc hidden-xs">
                    <div className="item-title">
                      <h3>Lorem Ipsum</h3>
                    </div>
                    <div className="item-tags">
                      <p>
                        Lorem atque quas laboriosam eaque neque expedita nisi.
                      </p>
                    </div>
                  </div>{/* /.item-desc */}
                </div>
                <div className="col-md-4 col-sm-6 col-xs-6 element-item staff" data-category="staff">
                  <img className="img-responsive center-block" src="assets/img/staff4.jpg" alt="Image9" />
                  <div className="item-desc hidden-xs">
                    <div className="item-title">
                      <h3>Lorem Ipsum</h3>
                    </div>
                    <div className="item-tags">
                      <p>
                        Lorem ipsum dolor sit ametident, facere, tempore rem 
                      </p>
                    </div>
                  </div>{/* /.item-desc */}
                </div>
                <div className="col-md-4 col-sm-6 col-xs-6 element-item donation" data-category="donation">
                  <img className="img-responsive center-block" src="assets/img/donation2.jpg" alt="Image10" />
                  <div className="item-desc hidden-xs">
                    <div className="item-title">
                      <h3>Lorem Ipsum</h3>
                    </div>
                    <div className="item-tags">
                      <p>
                        repellat dicta. Debitis dignissimos inventore pariatur.
                      </p>
                    </div>
                  </div>{/* /.item-desc */}
                </div>
                <div className="col-md-4 col-sm-6 col-xs-6 element-item pharmacy" data-category="pharmacy">
                  <img className="img-responsive center-block" src="assets/img/pharmacy1.jpg" alt="Image11" />
                  <div className="item-desc hidden-xs">
                    <div className="item-title">
                      <h3>Lorem Ipsum</h3>
                    </div>
                    <div className="item-tags">
                      <p>
                        distnctio atque ipsum illo magnam error perspiciatis ab!
                      </p>
                    </div>
                  </div>{/* /.item-desc */}
                </div>
                <div className="col-md-4 col-sm-6 col-xs-6 element-item staff" data-category="staff">
                  <img className="img-responsive center-block" src="assets/img/staff3.jpg" alt="Image12" />
                  <div className="item-desc hidden-xs">
                    <div className="item-title">
                      <h3>Lorem Ipsum</h3>
                    </div>
                    <div className="item-tags">
                      <p>
                        Debitis aliquam, cupiditate error nihil iure doloribus. 
                      </p>
                    </div>
                  </div>{/* /.item-desc */}
                </div>
                <div className="col-md-4 col-sm-6 col-xs-6 element-item donation" data-category="donation">
                  <img className="img-responsive center-block" src="assets/img/donation1.jpg" alt="Image13" />
                  <div className="item-desc hidden-xs">
                    <div className="item-title">
                      <h3>Lorem Ipsum</h3>
                    </div>
                    <div className="item-tags">
                      <p>
                        poris veniam dolores consequatur, quae dignissimos omnis.
                      </p>
                    </div>
                  </div>{/* /.item-desc */}
                </div>
                <div className="col-md-4 col-sm-6 col-xs-6 element-item pharmacy" data-category="pharmacy">
                  <img className="img-responsive center-block" src="assets/img/pharmacy2.jpg" alt="Image14" />
                  <div className="item-desc hidden-xs">
                    <div className="item-title">
                      <h3>Lorem Ipsum</h3>
                    </div>
                    <div className="item-tags">
                      <p>
                        voluptates odit quos, odio fuga in consectetur.
                      </p>
                    </div>
                  </div>{/* /.item-desc */}
                </div>
                <div className="col-md-4 col-sm-6 col-xs-6 element-item treatment" data-category="treatment">
                  <img className="img-responsive center-block" src="assets/img/treatment3.jpg" alt="Image15" />
                  <div className="item-desc hidden-xs">
                    <div className="item-title">
                      <h3>Lorem Ipsum</h3>
                    </div>
                    <div className="item-tags">
                      <p>
                        Eaque quos, veniam doloribus consectetur cum. Sunt 
                      </p>
                    </div>
                  </div>{/* /.item-desc */}
                </div>
              </div>	{/* isotope */}
            </div>	{/* row */}
          </div>
        </section>
      </div>
    )
}

export default Gallery
