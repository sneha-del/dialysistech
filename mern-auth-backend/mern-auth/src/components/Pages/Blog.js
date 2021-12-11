import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
    return (
        <div>
        <section className="blog-title text-center">
          <div className="blog-wrapper">
            <div className="container">
              <div className="row">	
                <h1 className="headline">Our Blog</h1>
              </div>
              <div className="row">
                <div className="sub-headline">
                  <p>Full of important information</p>
                </div>
              </div>	
            </div>
          </div>
        </section>
        <section className="blog-content">
          <div className="container">
            <div className="row">
              <main className="blog1col col-md-9">
                <div className="archive">						
                  <article className="row">
                    <div className="col-md-4 col-sm-4">
                      <img src="assets/img/blog1.jpg" className="img-responsive center-block img-padder" alt="Medical Theme Health and Care" />
                    </div>
                    <div className="col-md-8 col-sm-8">
                      <h4>
                        <Link to="#">
                          Use the images in the posts
                        </Link>
                      </h4>
                      <ul className="list-inline info">
                        <li><i className="fa fa-user-md" /> Marco Nardi</li>
                        <li><i className="fa fa-calendar" /> March 17, 2014</li>
                        <li><i className="fa fa-tag" /> <Link to="#">News</Link></li>
                        <li><i className="fa fa-comment" /> One Comment</li>
                      </ul>
                      <p>
                        Quisque Eget Odio Ac Lectus Vestibulum Faucibus Eget In Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus. Hendrerit arcu sed erat molestie vehicula. Sed auctor…  
                        <Link to="#" className="service-rm-btn btn btn-primary">
                          Continue reading <i className="fa fa-caret-right" /></Link>
                      </p>
                    </div>
                  </article>
                  <article className="row">
                    <div className="col-md-4 col-sm-4">
                      <img src="assets/img/blog2.jpg" className="img-responsive center-block img-padder" alt="Medical Theme Health and Care" />
                    </div>
                    <div className="col-md-8 col-sm-8">
                      <h4>
                        <Link to="#">We’r doctors!</Link>
                      </h4>
                      <ul className="list-inline info">
                        <li><i className="fa fa-user-md" /> Marco Nardi</li>
                        <li><i className="fa fa-calendar" /> November 20, 2013</li>
                        <li><i className="fa fa-tag" /> <Link to="#">Data</Link></li>
                        <li><i className="fa fa-comment" /> 8 Comments</li>
                      </ul>
                      <p>
                        Curabitur Vulputate, Ligula Lacinia Scelerisque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus. Hendrerit arcu sed erat molestie vehicula. Sed auctor neque…  
                        <Link to="#" className="service-rm-btn btn btn-primary">
                          Continue reading <i className="fa fa-caret-right" /></Link>
                      </p>
                    </div>
                  </article>
                  <article className="row">
                    <div className="col-md-4 col-sm-4">
                      <img src="assets/img/blog3.jpg" className="img-responsive center-block img-padder" alt="Medical Theme Health and Care" />
                    </div>
                    <div className="col-md-8 col-sm-8">
                      <h4>
                        <Link to="#">Breathe mountain air is good for your health?</Link>
                      </h4>
                      <ul className="list-inline info">
                        <li><i className="fa fa-user-md" /> Marco Nardi</li>
                        <li><i className="fa fa-calendar" /> July 17, 2013</li>
                        <li><i className="fa fa-tag" /> <Link to="#">News</Link></li>
                        <li><i className="fa fa-comment" /> 4 Comments</li>
                      </ul>
                      <p>
                        Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum…  
                        <Link to="#" className="service-rm-btn btn btn-primary">
                          Continue reading <i className="fa fa-caret-right" /></Link>
                      </p>
                    </div>
                  </article>
                  <article className="row">
                    <div className="col-md-4 col-sm-4">
                      <img src="assets/img/blog4.jpg" className="img-responsive center-block img-padder" alt="Medical Theme Health and Care" />
                    </div>
                    <div className="col-md-8 col-sm-8">
                      <h4>
                        <Link to="#">Food and shopping in medical real world and its consequence</Link>
                      </h4>
                      <ul className="list-inline info">
                        <li><i className="fa fa-user-md" /> Marco Nardi</li>
                        <li><i className="fa fa-calendar" /> May 19, 2013</li>
                        <li><i className="fa fa-tag" /> <Link to="#">Lesti</Link></li>
                        <li><i className="fa fa-comment" /> 5 Comments</li>
                      </ul>
                      <p>
                        Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus…  
                        <Link to="#" className="service-rm-btn btn btn-primary">
                          Continue reading <i className="fa fa-caret-right" /></Link>
                      </p>
                    </div>
                  </article>
                  <article className="row">
                    <div className="col-md-4 col-sm-4">
                      <img src="assets/img/blog5.jpg" className="img-responsive  center-block img-padder" alt="Medical Theme Health and Care" />
                    </div>
                    <div className="col-md-8 col-sm-8">
                      <h4>
                        <Link to="#">Demo post 11</Link>
                      </h4>
                      <ul className="list-inline info">
                        <li><i className="fa fa-user-md" /> Marco Nardi</li>
                        <li><i className="fa fa-calendar" /> May 17, 2013</li>
                        <li><i className="fa fa-tag" /> <Link to="#">News</Link></li>
                        <li><i className="fa fa-comment" /> No Comments</li>
                      </ul>
                      <p>
                        Header Level 2 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam tincidunt mauris eu risus. Definition list Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut…  
                        <Link to="#" className="service-rm-btn btn btn-primary">
                          Continue reading <i className="fa fa-caret-right" /></Link>
                      </p>
                    </div>
                  </article>
                  <article className="row">
                    <div className="col-md-4 col-sm-4">
                      <img src="assets/img/blog6.jpg" className="img-responsive center-block img-padder" alt="iStock_000008003914XLarge" />
                    </div>
                    <div className="col-md-8 col-sm-8">
                      <h4>
                        <Link to="#">We care about every patient</Link>
                      </h4>
                      <ul className="list-inline info">
                        <li><i className="fa fa-user-md" /> Marco Nardi</li>
                        <li><i className="fa fa-calendar" /> May 7, 2013</li>
                        <li><i className="fa fa-tag" /> <Link to="#">Data</Link></li>
                        <li><i className="fa fa-comment" /> 9 Comments</li>
                      </ul>
                      <p>
                        Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus…  
                        <Link to="#" className="service-rm-btn btn btn-primary">
                          Continue reading <i className="fa fa-caret-right" /></Link>
                      </p>
                    </div>
                  </article>
                  <article className="row">
                    <div className="col-md-4 col-sm-4">
                      <img src="assets/img/blog7.jpg" className="img-responsive center-block img-padder" alt="Medical Theme Health and Care" />
                    </div>
                    <div className="col-md-8 col-sm-8">
                      <h4>
                        <Link to="#">Recommended foods for optimal health</Link>
                      </h4>
                      <ul className="list-inline info">
                        <li><i className="fa fa-user-md" /> Marco Nardi</li>
                        <li><i className="fa fa-calendar" /> December 10, 2011</li>
                        <li><i className="fa fa-tag" /> <Link to="#">Data</Link></li>
                        <li><i className="fa fa-comment" /> 4 Comments</li>
                      </ul>
                      <p>
                        Lorem Ipsum Dolor Sit Amet, Consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus…  
                        <Link to="#" className="service-rm-btn btn btn-primary">
                          Continue reading <i className="fa fa-caret-right" /></Link>
                      </p>
                    </div>
                  </article>
                  <article className="row">
                    <div className="col-md-4 col-sm-4">
                      <img src="assets/img/blog8.jpg" className="img-responsive center-block img-padder" alt="Medical Theme Health and Care" />
                    </div>
                    <div className="col-md-8 col-sm-8">
                      <h4>
                        <Link to="#">Demo post 1</Link>
                      </h4>
                      <ul className="list-inline info">
                        <li><i className="fa fa-user-md" /> Marco Nardi</li>
                        <li><i className="fa fa-calendar" /> October 20, 2011</li>
                        <li><i className="fa fa-tag" /> <Link to="#">Data</Link></li>
                        <li><i className="fa fa-comment" /> 2 Comments</li>
                      </ul>
                      <p>
                        Header Level 3 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam tincidunt mauris eu risus. Header Level 2 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam tincidunt…  
                        <Link to="#" className="service-rm-btn btn btn-primary">
                          Continue reading <i className="fa fa-caret-right" /></Link>
                      </p>
                    </div>
                  </article>
                  <article className="row">
                    <div className="col-md-4 col-sm-4">
                      <img src="assets/img/blog9.jpg" className="img-responsive center-block img-padder" alt="fisioterapia4" />
                    </div>
                    <div className="col-md-8 col-sm-8">
                      <h4>
                        <Link to="#">Demo post 6</Link>
                      </h4>
                      <ul className="list-inline info">
                        <li><i className="fa fa-user-md" /> Marco Nardi</li>
                        <li><i className="fa fa-calendar" /> September 7, 2011</li>
                        <li><i className="fa fa-tag" /> <Link to="#">Data</Link></li>
                        <li><i className="fa fa-comment" /> 4 Comments</li>
                      </ul>
                      <p>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam…  
                        <Link to="#" className="service-rm-btn btn btn-primary">
                          Continue reading <i className="fa fa-caret-right" /></Link>
                      </p>
                    </div>
                  </article>
                  <article className="row">
                    <div className="col-md-4 col-sm-4">
                      <img src="assets/img/blog10.jpg" className="img-responsive center-block img-padder" alt="Fotolia_29513120_Subscription_XL" />
                    </div>
                    <div className="col-md-8 col-sm-8">
                      <h4>
                        <Link to="#">Clinical significance versus statistical significance</Link>
                      </h4>
                      <ul className="list-inline info">
                        <li><i className="fa fa-user-md" /> Marco Nardi</li>
                        <li><i className="fa fa-calendar" /> August 27, 2011</li>
                        <li><i className="fa fa-tag" /> <Link to="#">Data</Link></li>
                        <li><i className="fa fa-comment" /> 8 Comments</li>
                      </ul>
                      <p>
                        Header Level 3 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam tincidunt mauris eu risus. Nullam In Dui Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris…  
                        <Link to="#" className="service-rm-btn btn btn-primary">
                          Continue reading <i className="fa fa-caret-right" /></Link>
                      </p>
                    </div>
                  </article>
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 text-center">
                      <ul className="pagination">
                        <li className="disabled"><Link to="#">&gt;&gt;</Link></li>
                        <li className="active"><Link to="#">1 <span className="sr-only">(current)</span></Link></li>
                        <li><Link to="#">2</Link></li>
                        <li><Link to="#">3</Link></li>
                        <li><Link to="#">4</Link></li>
                        <li><Link to="#">5</Link></li>
                        <li><Link to="#">&gt;&gt;</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>  {/* end of archive */}
              </main>
              <aside className="col-md-3 ">
                <div className="widget widget_categories" id="categories-3">
                  <h4><span>Categories</span></h4>
                  <ul>
                    <li className="cat-item cat-item-4">
                      <Link to="#" title="View all posts filed under Data">Data</Link>
                    </li>
                    <li className="cat-item cat-item-3">
                      <Link to="#" title="View all posts filed under Lesti">Lesti</Link>
                    </li>
                    <li className="cat-item cat-item-5">
                      <Link to="#" title="View all posts filed under Nean condimentum">Nean condimentum</Link>
                    </li>
                    <li className="cat-item cat-item-1">
                      <Link to="#" title="View all posts filed under News">News</Link>
                    </li>
                    <li className="cat-item cat-item-21">
                      <Link to="#" title="View all posts filed under Slide">Slide</Link>
                    </li>
                  </ul>
                </div>
                <div className="widget widget_iw_last_posts" id="iw_last_posts-3">
                  <h4><span>Last posts whit image</span></h4>		
                  <div className="row">
                    <div className="col-md-4 col-xs-3">
                      <Link to="#">
                        <img src="assets/img/blog1_min.jpg" className="img-responsive h5 wp-post-image" alt="Medical Theme Health and Care" />
                      </Link>
                    </div>
                    <div className="col-md-8 col-xs-9">
                      <h5>
                        <Link to="#">Use the images in the posts</Link>
                      </h5>
                      <p>
                        <time dateTime="2014-03-17">March 17, 2014</time>
                        <br />
                      </p>
                    </div>
                  </div>{/* /.row */}
                  <hr />
                  <div className="row">
                    <div className="col-md-4 col-xs-3">
                      <Link to="#">
                        <img src="assets/img/blog2_min.jpg" className="img-responsive h5 wp-post-image" alt="Medical Theme Health and Care" />
                      </Link>
                    </div>
                    <div className="col-md-8 col-xs-9">
                      <h5>
                        <Link to="#">We’r doctors!</Link>
                      </h5>
                      <p>
                        <time dateTime="2013-11-20">November 20, 2013</time><br />
                      </p>
                    </div>
                  </div>{/* /.row */}
                  <hr />
                  <div className="row">
                    <div className="col-md-4 col-xs-3">
                      <Link to="#">
                        <img src="assets/img/blog3_min.jpg" className="img-responsive h5 wp-post-image" alt="Medical Theme Health and Care" />
                      </Link>
                    </div>
                    <div className="col-md-8 col-xs-9">
                      <h5>
                        <Link to="#">Breathe mountain air is good for your health?
                        </Link>
                      </h5>
                      <p>
                        <time dateTime="2013-07-17">July 17, 2013</time><br />
                      </p>
                    </div>
                  </div>{/* /.row */}
                  <hr />
                  <div className="row">
                    <div className="col-md-4 col-xs-3">
                      <Link to="#">
                        <img src="assets/img/blog4_min.jpg" className="img-responsive h5 wp-post-image" alt="Medical Theme Health and Care" />
                      </Link>
                    </div>
                    <div className="col-md-8 col-xs-9">
                      <h5>
                        <Link to="#">Food and shopping in medical real world and its consequence</Link>
                      </h5>
                      <p>
                        <time dateTime="2013-05-19">May 19, 2013</time><br />
                      </p>
                    </div>
                  </div>{/* /.row */}
                  <hr />
                  <div className="row">
                    <div className="col-md-4 col-xs-3">
                      <Link to="#">
                        <img src="assets/img/blog5_min.jpg" className="img-responsive h5 wp-post-image" alt="Medical Theme Health and Care" />
                      </Link>
                    </div>
                    <div className="col-md-8 col-xs-9">
                      <h5>
                        <Link to="#">Demo post 11</Link>
                      </h5>
                      <p>
                        <time dateTime="2013-05-17">May 17, 2013</time><br />
                      </p>
                    </div>
                  </div>{/* /.row */}
                  <hr />
                </div>
                <div className="widget widget_text" id="text-3">
                  <h4>
                    <span>Text widget</span>
                  </h4>
                  <div className="textwidget">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
                <div className="widget widget_tag_cloud" id="tag_cloud-3">
                  <h4><span>Tags</span></h4>
                  <div className="tagcloud">
                    <Link to="#" title="2 topics" style={{fontSize: '16.4pt'}}>care</Link>
                    <Link to="#" title="2 topics" style={{fontSize: '16.4pt'}}>data</Link>
                    <Link to="#" title="2 topics" style={{fontSize: '16.4pt'}}>demo</Link>
                    <Link to="#" title="2 topics" style={{fontSize: '16.4pt'}}>healthcare</Link>
                    <Link to="#" title="1 topic" style={{fontSize: '8pt'}}>heart</Link>
                    <Link to="#" title="1 topic" style={{fontSize: '8pt'}}>insert</Link>
                    <Link to="#" title="3 topics" style={{fontSize: '22pt'}}>medicals</Link>
                    <Link to="#" title="2 topics" style={{fontSize: '16.4pt'}}>post</Link>
                    <Link to="#" title="2 topics" style={{fontSize: '16.4pt'}}>premium</Link>
                    <Link to="#" title="1 topic" style={{fontSize: '8pt'}}>theme</Link>
                    <Link to="#" title="3 topics" style={{fontSize: '22pt'}}>wordpress</Link>
                  </div>
                </div>
              </aside>
            </div>  {/* end of row */}
          </div>  {/* end of container */}
        </section>
      </div>
    )
}

export default Blog
