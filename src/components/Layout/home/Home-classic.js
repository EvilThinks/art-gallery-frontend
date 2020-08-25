import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
class Home extends Component {
  render() {
    return (
      <main>
        <div className="bsSlidViv">
          <Carousel>
            <Carousel.Item>
              <div>
                <article
                  className="introBannerBlock introBannerBlockViv hdIsViv w-100 text-center text-white position-relative d-flex bgCover"
                  style={{
                    backgroundImage: "url(http://placehold.it/1920x900)",
                  }}
                >
                  <div className="ibbAlignHolder w-100 d-flex align-items-center">
                    <div className="ibbHolder w-100 py-6">
                      <div className="container holder position-relative">
                        <div className="row">
                          <div className="col-12 col-sm-10 offset-sm-1">
                            <strong className="d-block fontSerif mainHeadingTitle font-weight-normal mb-5">
                              Welcome To The Museum
                            </strong>
                            <h1 className="text-white ibbHeading ibbHeadingViv mb-4 mb-lg-8">
                              Experience 2,000 Years of Art at The Muzze
                            </h1>
                            <a
                              href="#"
                              className="btn btn-dark btnDarkInverse align-top btnMdMinWidth"
                            >
                              Plan Your Visit
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <article
                  className="introBannerBlock introBannerBlockViv hdIsViv w-100 text-center text-white position-relative d-flex bgCover"
                  style={{
                    backgroundImage: "url(http://placehold.it/1920x900)",
                  }}
                >
                  <div className="ibbAlignHolder w-100 d-flex align-items-center">
                    <div className="ibbHolder w-100 py-6">
                      <div className="container holder position-relative">
                        <div className="row">
                          <div className="col-12 col-sm-10 offset-sm-1">
                            <strong className="d-block fontSerif mainHeadingTitle font-weight-normal mb-5">
                              Explore the Natural History
                            </strong>
                            <h1 className="text-white ibbHeading ibbHeadingViv mb-4 mb-lg-8">
                              Biggest & Oldest Museum in The Local Area
                            </h1>
                            <a
                              href="#"
                              className="btn btn-dark btnDarkInverse align-top btnMdMinWidth"
                            >
                              Explore More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <article
                  className="introBannerBlock introBannerBlockViv hdIsViv w-100 text-center text-white position-relative d-flex bgCover"
                  style={{
                    backgroundImage: "url(http://placehold.it/1920x900)",
                  }}
                >
                  <div className="ibbAlignHolder w-100 d-flex align-items-center">
                    <div className="ibbHolder w-100 py-6">
                      <div className="container holder position-relative">
                        <div className="row">
                          <div className="col-12 col-sm-10 offset-sm-1">
                            <strong className="d-block fontSerif mainHeadingTitle font-weight-normal mb-5">
                              It's a Place of Living Ideas
                            </strong>
                            <h1 className="text-white ibbHeading ibbHeadingViv mb-4 mb-lg-8">
                              Dive into the World of Unseen Oceans
                            </h1>
                            <a
                              href="#"
                              className="btn btn-dark btnDarkInverse align-top btnMdMinWidth"
                            >
                              Purchase Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <aside className="calloutAside text-center bg-warning text-gray1b1d1f pt-2 pb-2 pt-lg-6 pb-lg-6">
          <div className="container">
            <time datetime="2011-01-12">
              <i
                className="far fa-clock icn align-middle mr-1"
                aria-hidden="true"
              ></i>
              Open today from 9:30 am - 6:00 pm.
            </time>
            . 2270 S Real Camino Lake, US.
            <a href="#" className="text-gray1b1d1f">
              Buy tickets now
            </a>
            <span className="d-block d-lg-inline">
              <a
                href="tel:16179876543"
                className="calloutBtn btn btn-dark btnDarkInverse rounded-pill mx-5 mt-2 mt-lg-0"
              >
                Call: 1 (617) 987-6543
              </a>
            </span>
          </div>
        </aside>
        <article className="bg-grayf8f8f8 hasBdr aboutOnviewBlock pt-7 pb-10 pt-lg-13 pb-lg-16 pt-xl-15 pb-xl-21">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 order-md-2 pt-lg-5 pt-xl-11">
                <h2 className="h2Medium mb-4">About Our Museum</h2>
                <div className="eabDescrText mb-5">
                  <p>
                    Muzze art &amp; history museum is committed to producing
                    distinctive exhibitions and public programming on historical
                    contemporary Japanese and Asian art.
                  </p>
                </div>
                <p className="mb-7">
                  We use our unique collections and unrivalled expertise to
                  tackle the biggest challenges facing the world today. We care
                  for more than 200 thousand exhibits spanning billions of years
                  and welcome more than five million visitors annually.
                </p>
                <a
                  href="#"
                  className="btn btnGre5 btnGre5Outline bdr2 btnMdMinWidth"
                >
                  Learn More
                </a>
              </div>
              <div className="col-12 col-md-6 order-md-1">
                <div className="imgHolder text-center position-relative overflow-hidden mx-auto mx-md-0 mt-5 mt-md-0">
                  <img
                    src="http://placehold.it/575x840"
                    className="img-fluid ml-xl-7"
                    alt="image description"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>
        <aside className="position-relative onviewMuseumAside mt-n11 mt-md-n7 mt-lg-n22 pb-3 pb-md-7 pb-lg-12">
          <div className="container">
            <div className="rounded bg-secondary shadow px-6 pt-6 pb-6 px-lg-12 pt-lg-13 pb-lg-12">
              <div className="row">
                <div className="col-12 col-md-4 pt-1">
                  <h3 className="text-white h3">On View At Museum</h3>
                </div>
                <div className="col-12 col-md-8">
                  <ul className="list-unstyled bulletList isBgDark bulletListViv listHasColumns mb-0 textAaa">
                    <li>Middle Eastern Art</li>
                    <li>Artifacts and Antiquities</li>
                    <li>Traditional Art</li>
                    <li>Western &amp; Non-Western cultures</li>
                    <li>Photography</li>
                    <li>Emerging Design</li>
                    <li>East Asian Art</li>
                    <li>War History</li>
                    <li>Latin American Art</li>
                    <li>Gardens</li>
                    <li>20th Century Design</li>
                    <li>Contemporary Design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <section className="upcomingEveBlock pt-4 pb-6 pt-lg-8 pb-md-10 pb-lg-14 pb-xl-20">
          <div className="container">
            <header className="topHeadingHead text-center mb-7 mb-lg-12">
              <h1>Upcoming Events</h1>
            </header>
            <div className="row">
              <div className="col-12 col-lg-6">
                <article className="ueEveColumn d-sm-flex w-100 position-relative border mb-6 mb-lg-10">
                  <time
                    datetime="2011-01-12"
                    className="ueecTimeTag position-absolute text-uppercase d-flex bg-white text-secondary"
                  >
                    <strong className="day d-flex align-items-center font-weight-normal bg-warning text-white px-1">
                      01
                    </strong>
                    <span className="d-flex align-items-center px-2">
                      MAR 2019
                    </span>
                  </time>
                  <div className="imgHolder flex-shrink-0">
                    <img
                      src="http://placehold.it/270x240"
                      className="w-100 h-100 imgFit"
                      alt="image description"
                    />
                  </div>
                  <div className="descrWrap pt-5 pb-7 pl-5 pr-3">
                    <h2 className="h2Small h2SmallViv mb-2">
                      <a href="single-events.html">
                        Rough Cut: Independent Japanese Antiquity
                      </a>
                    </h2>
                    <address className="mb-6">
                      <time datetime="2011-01-12">12:30pm - 1:00pm</time>
                      <span>/</span>32 Quincy Street, Cambridge, MA
                    </address>
                    <a
                      href="single-events.html"
                      className="btn btnGre5 btnGre5Outline bdr2 btnSmMinWidth btn-sm"
                    >
                      Details
                    </a>
                  </div>
                </article>
              </div>
              <div className="col-12 col-lg-6">
                <article className="ueEveColumn d-sm-flex w-100 position-relative border mb-6 mb-lg-10">
                  <time
                    datetime="2011-01-12"
                    className="ueecTimeTag position-absolute text-uppercase d-flex bg-white text-secondary"
                  >
                    <strong className="day d-flex align-items-center font-weight-normal bg-warning text-white px-1">
                      03
                    </strong>
                    <span className="d-flex align-items-center px-2">
                      MAR 2019
                    </span>
                  </time>
                  <div className="imgHolder flex-shrink-0">
                    <img
                      src="http://placehold.it/270x240"
                      className="w-100 h-100 imgFit"
                      alt="image description"
                    />
                  </div>
                  <div className="descrWrap pt-5 pb-7 pl-5 pr-3">
                    <h2 className="h2Small h2SmallViv mb-2">
                      <a href="single-events.html">
                        Rojo Y Negro Latin American Art
                      </a>
                    </h2>
                    <address className="mb-6">
                      <time datetime="2011-01-12">12:00pm - 5:00pm</time>
                      <span>/</span>Western Avenue, Allston, MA
                    </address>
                    <a
                      href="single-events.html"
                      className="btn btnGre5 btnGre5Outline bdr2 btnSmMinWidth btn-sm"
                    >
                      Details
                    </a>
                  </div>
                </article>
              </div>
              <div className="col-12 col-lg-6">
                <article className="ueEveColumn d-sm-flex w-100 position-relative border mb-6 mb-lg-10">
                  <time
                    datetime="2011-01-12"
                    className="ueecTimeTag position-absolute text-uppercase d-flex bg-white text-secondary"
                  >
                    <strong className="day d-flex align-items-center font-weight-normal bg-warning text-white px-1">
                      08
                    </strong>
                    <span className="d-flex align-items-center px-2">
                      MAR 2019
                    </span>
                  </time>
                  <div className="imgHolder flex-shrink-0">
                    <img
                      src="http://placehold.it/270x240"
                      className="w-100 h-100 imgFit"
                      alt="image description"
                    />
                  </div>
                  <div className="descrWrap pt-5 pb-7 pl-5 pr-3">
                    <h2 className="h2Small h2SmallViv mb-2">
                      <a href="single-events.html">
                        Naive Painting Of The 19th Century
                      </a>
                    </h2>
                    <address className="mb-6">
                      <time datetime="2011-01-12">12:30pm - 1:00pm</time>
                      <span>/</span>32 Quincy Street, Cambridge, MA
                    </address>
                    <a
                      href="single-events.html"
                      className="btn btnGre5 btnGre5Outline bdr2 btnSmMinWidth btn-sm"
                    >
                      Details
                    </a>
                  </div>
                </article>
              </div>
              <div className="col-12 col-lg-6">
                <article className="ueEveColumn d-sm-flex w-100 position-relative border mb-6 mb-lg-10">
                  <time
                    datetime="2011-01-12"
                    className="ueecTimeTag position-absolute text-uppercase d-flex bg-white text-secondary"
                  >
                    <strong className="day d-flex align-items-center font-weight-normal bg-warning text-white px-1">
                      08
                    </strong>
                    <span className="d-flex align-items-center px-2">
                      MAR 2019
                    </span>
                  </time>
                  <div className="imgHolder flex-shrink-0">
                    <img
                      src="http://placehold.it/270x240"
                      className="w-100 h-100 imgFit"
                      alt="image description"
                    />
                  </div>
                  <div className="descrWrap pt-5 pb-7 pl-5 pr-3">
                    <h2 className="h2Small h2SmallViv mb-2">
                      <a href="single-events.html">
                        Adam Green Cartoon and Complaint
                      </a>
                    </h2>
                    <address className="mb-6">
                      <time datetime="2011-01-12">12:00pm - 5:00pm</time>
                      <span>/</span>Western Avenue, Allston, MA
                    </address>
                    <a
                      href="single-events.html"
                      className="btn btnGre5 btnGre5Outline bdr2 btnSmMinWidth btn-sm"
                    >
                      Details
                    </a>
                  </div>
                </article>
              </div>
            </div>
            <footer className="btnHolder text-center">
              <a
                href="single-events.html"
                className="d-inline-block align-top teeSeeAllBtn mt-2"
              >
                See All Exhibitions{" "}
                <i className="icomoon-arrowCircleRight align-middle icn ml-1">
                  <span className="sr-only">icon</span>
                </i>
              </a>
            </footer>
          </div>
        </section>
        <section className="bg-grayf8f8f8 hasBdr border-bottom-0 ourGalleryBlock pt-6 pt-xl-10">
          <div className="container">
            <header className="teeSideHead mb-3 mb-md-7 mb-xl-13 text-center text-md-left">
              <div className="row align-items-end">
                <div className="col-12 col-md-4">
                  <h1 className="text-capitalize mb-3 mb-md-0">Our Gallery</h1>
                </div>
                <div className="col-12 col-md-8 text-right">
                  <ul className="list-unstyled isoFiltersList ogFiltersList d-flex flex-wrap justify-content-center justify-content-md-end mb-0 mb-md-2">
                    <li className="active">
                      <a href="#">Show All</a>
                    </li>
                    <li>
                      <a href="#" data-filter=".objects">
                        Objects
                      </a>
                    </li>
                    <li>
                      <a href="#" data-filter=".art">
                        Art
                      </a>
                    </li>
                    <li>
                      <a href="#" data-filter=".pictures">
                        Pictures
                      </a>
                    </li>
                    <li>
                      <a href="#" data-filter=".installation">
                        Installation
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </header>
          </div>
          <div className="container-fluid px-0">
            <div className="row no-gutters isoContentHolder">
              <div className="col-12 col-sm-4 col-md-3 isoCol installation">
                <figure className="galFig galFigII mb-0 position-relative mx-auto mx-md-0">
                  <a data-fancybox="gallery" href="http://placehold.it/480x420">
                    <img
                      src="http://placehold.it/480x420"
                      className="img-fluid"
                      alt="image description"
                    />
                  </a>
                  <div className="gafCaption inaccessible d-flex align-items-center justify-content-center text-center text-white w-100 h-100">
                    <div className="wrap w-100 p-4">
                      <i className="rounded-circle icnWrap icomoon-search bg-brown d-flex align-items-center justify-content-center mx-auto mb-2">
                        <span className="sr-only">icon</span>
                      </i>
                      <h3 className="text-white mb-0">Germanian Grothery</h3>
                    </div>
                  </div>
                </figure>
              </div>
              <div className="col-12 col-sm-4 col-md-3 isoCol objects">
                <figure className="galFig galFigII mb-0 position-relative mx-auto mx-md-0">
                  <a data-fancybox="gallery" href="http://placehold.it/480x420">
                    <img
                      src="http://placehold.it/480x420"
                      className="img-fluid"
                      alt="image description"
                    />
                  </a>
                  <div className="gafCaption inaccessible d-flex align-items-center justify-content-center text-center text-white w-100 h-100">
                    <div className="wrap w-100 p-4">
                      <i className="rounded-circle icnWrap icomoon-search bg-brown d-flex align-items-center justify-content-center mx-auto mb-2">
                        <span className="sr-only">icon</span>
                      </i>
                      <h3 className="text-white mb-0">Germanian Grothery</h3>
                    </div>
                  </div>
                </figure>
              </div>
              <div className="col-12 col-sm-4 col-md-3 isoCol art">
                <figure className="galFig galFigII mb-0 position-relative mx-auto mx-md-0">
                  <a data-fancybox="gallery" href="http://placehold.it/480x420">
                    <img
                      src="http://placehold.it/480x420"
                      className="img-fluid"
                      alt="image description"
                    />
                  </a>
                  <div className="gafCaption inaccessible d-flex align-items-center justify-content-center text-center text-white w-100 h-100">
                    <div className="wrap w-100 p-4">
                      <i className="rounded-circle icnWrap icomoon-search bg-brown d-flex align-items-center justify-content-center mx-auto mb-2">
                        <span className="sr-only">icon</span>
                      </i>
                      <h3 className="text-white mb-0">Germanian Grothery</h3>
                    </div>
                  </div>
                </figure>
              </div>
              <div className="col-12 col-sm-4 col-md-3 isoCol pictures">
                <figure className="galFig galFigII mb-0 position-relative mx-auto mx-md-0">
                  <a data-fancybox="gallery" href="http://placehold.it/480x420">
                    <img
                      src="http://placehold.it/480x420"
                      className="img-fluid"
                      alt="image description"
                    />
                  </a>
                  <div className="gafCaption inaccessible d-flex align-items-center justify-content-center text-center text-white w-100 h-100">
                    <div className="wrap w-100 p-4">
                      <i className="rounded-circle icnWrap icomoon-search bg-brown d-flex align-items-center justify-content-center mx-auto mb-2">
                        <span className="sr-only">icon</span>
                      </i>
                      <h3 className="text-white mb-0">Germanian Grothery</h3>
                    </div>
                  </div>
                </figure>
              </div>
              <div className="col-12 col-sm-4 col-md-3 isoCol objects">
                <figure className="galFig galFigII mb-0 position-relative mx-auto mx-md-0">
                  <a data-fancybox="gallery" href="http://placehold.it/480x420">
                    <img
                      src="http://placehold.it/480x420"
                      className="img-fluid"
                      alt="image description"
                    />
                  </a>
                  <div className="gafCaption inaccessible d-flex align-items-center justify-content-center text-center text-white w-100 h-100">
                    <div className="wrap w-100 p-4">
                      <i className="rounded-circle icnWrap icomoon-search bg-brown d-flex align-items-center justify-content-center mx-auto mb-2">
                        <span className="sr-only">icon</span>
                      </i>
                      <h3 className="text-white mb-0">Germanian Grothery</h3>
                    </div>
                  </div>
                </figure>
              </div>
              <div className="col-12 col-sm-4 col-md-3 isoCol pictures">
                <figure className="galFig galFigII mb-0 position-relative mx-auto mx-md-0">
                  <a data-fancybox="gallery" href="http://placehold.it/480x420">
                    <img
                      src="http://placehold.it/480x420"
                      className="img-fluid"
                      alt="image description"
                    />
                  </a>
                  <div className="gafCaption inaccessible d-flex align-items-center justify-content-center text-center text-white w-100 h-100">
                    <div className="wrap w-100 p-4">
                      <i className="rounded-circle icnWrap icomoon-search bg-brown d-flex align-items-center justify-content-center mx-auto mb-2">
                        <span className="sr-only">icon</span>
                      </i>
                      <h3 className="text-white mb-0">Germanian Grothery</h3>
                    </div>
                  </div>
                </figure>
              </div>
              <div className="col-12 col-sm-4 col-md-3 isoCol objects">
                <figure className="galFig galFigII mb-0 position-relative mx-auto mx-md-0">
                  <a data-fancybox="gallery" href="http://placehold.it/480x420">
                    <img
                      src="http://placehold.it/480x420"
                      className="img-fluid"
                      alt="image description"
                    />
                  </a>
                  <div className="gafCaption inaccessible d-flex align-items-center justify-content-center text-center text-white w-100 h-100">
                    <div className="wrap w-100 p-4">
                      <i className="rounded-circle icnWrap icomoon-search bg-brown d-flex align-items-center justify-content-center mx-auto mb-2">
                        <span className="sr-only">icon</span>
                      </i>
                      <h3 className="text-white mb-0">Germanian Grothery</h3>
                    </div>
                  </div>
                </figure>
              </div>
              <div className="col-12 col-sm-4 col-md-3 isoCol installation">
                <figure className="galFig galFigII mb-0 position-relative mx-auto mx-md-0">
                  <a data-fancybox="gallery" href="http://placehold.it/480x420">
                    <img
                      src="http://placehold.it/480x420"
                      className="img-fluid"
                      alt="image description"
                    />
                  </a>
                  <div className="gafCaption inaccessible d-flex align-items-center justify-content-center text-center text-white w-100 h-100">
                    <div className="wrap w-100 p-4">
                      <i className="rounded-circle icnWrap icomoon-search bg-brown d-flex align-items-center justify-content-center mx-auto mb-2">
                        <span className="sr-only">icon</span>
                      </i>
                      <h3 className="text-white mb-0">Germanian Grothery</h3>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className="visitorsSayBlock pt-7 pb-7 pt-lg-14 pb-lg-13 pt-xl-20 pb-xl-19">
          <div className="container">
            <header className="topHeadingHead text-center mb-6 mb-lg-11">
              <h1>What Our Visitors Say!</h1>
            </header>
            <div className="row d-block px-sm-16 px-xlwd-0">
              <div className="vsQuoteSlider">
                <div>
                  <div className="col-12">
                    <blockquote className="vsQuote text-gray777 mb-0 pl-12 pl-xl-22 pr-11 pt-6 pt-xl-10 pb-4 pb-xl-8 position-relative">
                      <q className="d-block mb-4">
                        We provide programs for young people that build
                        motivation, so I decided to arrange a party for them
                        Everything went smoothly, and all the kids were very
                        much excited!
                      </q>
                      <cite className="d-flex align-items-center">
                        <span className="rounded-circle vsqImage d-block flex-shrink-0 mr-3">
                          <img
                            src="http://placehold.it/60x60"
                            className="rounded-circle img-fluid"
                            alt="image description"
                          />
                        </span>
                        <span className="citeWrap d-block">
                          <strong className="d-block font-weight-normal fontSerif text-capitalize text-secondary mb-1">
                            Gregory Benford -{" "}
                            <span className="text-gray777">Visitor</span>
                          </strong>
                          <span className="ratingStarListSpan d-flex">
                            <span className="rslsItem d-block">
                              <i className="fas fa-star text-yellowClr5">
                                <span className="sr-only">icon</span>
                              </i>
                            </span>
                            <span className="rslsItem d-block">
                              <i className="fas fa-star text-yellowClr5">
                                <span className="sr-only">icon</span>
                              </i>
                            </span>
                            <span className="rslsItem d-block">
                              <i className="fas fa-star text-yellowClr5">
                                <span className="sr-only">icon</span>
                              </i>
                            </span>
                            <span className="rslsItem d-block">
                              <i className="fas fa-star text-yellowClr5">
                                <span className="sr-only">icon</span>
                              </i>
                            </span>
                            <span className="rslsItem d-block">
                              <i className="fas fa-star text-yellowClr5">
                                <span className="sr-only">icon</span>
                              </i>
                            </span>
                          </span>
                        </span>
                      </cite>
                    </blockquote>
                  </div>
                </div>
                <div>
                  <div className="col-12">
                    <blockquote className="vsQuote text-gray777 mb-0 pl-12 pl-xl-22 pr-11 pt-6 pt-xl-10 pb-4 pb-xl-8 position-relative">
                      <q className="d-block mb-4">
                        My girl loves this place! I have heard so many positive
                        things about the arts and when we finally arrived here,
                        it all happened to be true! Thank you for the amazing
                        works!
                      </q>
                      <cite className="d-flex align-items-center">
                        <span className="rounded-circle vsqImage d-block flex-shrink-0 mr-3">
                          <img
                            src="http://placehold.it/60x60"
                            className="rounded-circle img-fluid"
                            alt="image description"
                          />
                        </span>
                        <span className="citeWrap d-block">
                          <strong className="d-block font-weight-normal fontSerif text-capitalize text-secondary mb-1">
                            Leando Dalvincy -{" "}
                            <span className="text-gray777">Visitor</span>
                          </strong>
                          <span className="ratingStarListSpan d-flex">
                            <span className="rslsItem d-block">
                              <i className="fas fa-star text-yellowClr5">
                                <span className="sr-only">icon</span>
                              </i>
                            </span>
                            <span className="rslsItem d-block">
                              <i className="fas fa-star text-yellowClr5">
                                <span className="sr-only">icon</span>
                              </i>
                            </span>
                            <span className="rslsItem d-block">
                              <i className="fas fa-star text-yellowClr5">
                                <span className="sr-only">icon</span>
                              </i>
                            </span>
                            <span className="rslsItem d-block">
                              <i className="fas fa-star text-yellowClr5">
                                <span className="sr-only">icon</span>
                              </i>
                            </span>
                            <span className="rslsItem d-block">
                              <i className="fas fa-star text-yellowClr5">
                                <span className="sr-only">icon</span>
                              </i>
                            </span>
                          </span>
                        </span>
                      </cite>
                    </blockquote>
                  </div>
                </div>
                <div>
                  <div className="col-12">
                    <blockquote className="vsQuote text-gray777 mb-0 pl-12 pl-xl-22 pr-11 pt-6 pt-xl-10 pb-4 pb-xl-8 position-relative">
                      <q className="d-block mb-4">
                        We provide programs for young people that build
                        motivation, so I decided to arrange a party for them
                        Everything went smoothly, and all the kids were very
                        much excited!
                      </q>
                      <cite className="d-flex align-items-center">
                        <span className="rounded-circle vsqImage d-block flex-shrink-0 mr-3">
                          <img
                            src="http://placehold.it/60x60"
                            className="rounded-circle img-fluid"
                            alt="image description"
                          />
                        </span>
                        <span className="citeWrap d-block">
                          <strong className="d-block font-weight-normal fontSerif text-capitalize text-secondary mb-1">
                            Gregory Benford -{" "}
                            <span className="text-gray777">Visitor</span>
                          </strong>
                          <span className="ratingStarListSpan d-flex">
                            <span className="rslsItem d-block">
                              <i className="fas fa-star text-yellowClr5">
                                <span className="sr-only">icon</span>
                              </i>
                            </span>
                            <span className="rslsItem d-block">
                              <i className="fas fa-star text-yellowClr5">
                                <span className="sr-only">icon</span>
                              </i>
                            </span>
                            <span className="rslsItem d-block">
                              <i className="fas fa-star text-yellowClr5">
                                <span className="sr-only">icon</span>
                              </i>
                            </span>
                            <span className="rslsItem d-block">
                              <i className="fas fa-star text-yellowClr5">
                                <span className="sr-only">icon</span>
                              </i>
                            </span>
                            <span className="rslsItem d-block">
                              <i className="fas fa-star text-yellowClr5">
                                <span className="sr-only">icon</span>
                              </i>
                            </span>
                          </span>
                        </span>
                      </cite>
                    </blockquote>
                  </div>
                </div>
                <div>
                  <div className="col-12">
                    <blockquote className="vsQuote text-gray777 mb-0 pl-12 pl-xl-22 pr-11 pt-6 pt-xl-10 pb-4 pb-xl-8 position-relative">
                      <q className="d-block mb-4">
                        My girl loves this place! I have heard so many positive
                        things about the arts and when we finally arrived here,
                        it all happened to be true! Thank you for the amazing
                        works!
                      </q>
                      <cite className="d-flex align-items-center">
                        <span className="rounded-circle vsqImage d-block flex-shrink-0 mr-3">
                          <img
                            src="http://placehold.it/60x60"
                            className="rounded-circle img-fluid"
                            alt="image description"
                          />
                        </span>
                        <span className="citeWrap d-block">
                          <strong className="d-block font-weight-normal fontSerif text-capitalize text-secondary mb-1">
                            Leando Dalvincy -{" "}
                            <span className="text-gray777">Visitor</span>
                          </strong>
                          <span className="ratingStarListSpan d-flex">
                            <span className="rslsItem d-block">
                              <i className="fas fa-star text-yellowClr5">
                                <span className="sr-only">icon</span>
                              </i>
                            </span>
                            <span className="rslsItem d-block">
                              <i className="fas fa-star text-yellowClr5">
                                <span className="sr-only">icon</span>
                              </i>
                            </span>
                            <span className="rslsItem d-block">
                              <i className="fas fa-star text-yellowClr5">
                                <span className="sr-only">icon</span>
                              </i>
                            </span>
                            <span className="rslsItem d-block">
                              <i className="fas fa-star text-yellowClr5">
                                <span className="sr-only">icon</span>
                              </i>
                            </span>
                            <span className="rslsItem d-block">
                              <i className="fas fa-star text-yellowClr5">
                                <span className="sr-only">icon</span>
                              </i>
                            </span>
                          </span>
                        </span>
                      </cite>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <aside className="sponsorsAside bg-secondary text-white pt-5 pb-5 pt-md-8 pb-md-8 pt-lg-13 pb-lg-13 pt-xl-20 pb-xl-19">
          <div className="container">
            <div className="logosSlider text-center">
              <div>
                <div className="spLogoWrap w-100 d-flex align-items-center">
                  <span className="d-block w-100 px-3">
                    <img
                      src="http://placehold.it/150x100"
                      className="img-fluid"
                      alt="greateVillage"
                    />
                  </span>
                </div>
              </div>
              <div>
                <div className="spLogoWrap w-100 d-flex align-items-center">
                  <span className="d-block w-100 px-3">
                    <img
                      src="http://placehold.it/150x100"
                      className="img-fluid"
                      alt="dilly"
                    />
                  </span>
                </div>
              </div>
              <div>
                <div className="spLogoWrap w-100 d-flex align-items-center">
                  <span className="d-block w-100 px-3">
                    <img
                      src="http://placehold.it/150x100"
                      className="img-fluid"
                      alt="walkers"
                    />
                  </span>
                </div>
              </div>
              <div>
                <div className="spLogoWrap w-100 d-flex align-items-center">
                  <span className="d-block w-100 px-3">
                    <img
                      src="http://placehold.it/150x100"
                      className="img-fluid"
                      alt="hispster"
                    />
                  </span>
                </div>
              </div>
              <div>
                <div className="spLogoWrap w-100 d-flex align-items-center">
                  <span className="d-block w-100 px-3">
                    <img
                      src="http://placehold.it/150x100"
                      className="img-fluid"
                      alt="amelie"
                    />
                  </span>
                </div>
              </div>
              <div>
                <div className="spLogoWrap w-100 d-flex align-items-center">
                  <span className="d-block w-100 px-3">
                    <img
                      src="http://placehold.it/150x100"
                      className="img-fluid"
                      alt="walkers"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <section className="upcomingEventsBlock text-center pt-7 pb-5 pt-md-10 pt-lg-13 pb-lg-10 pt-xl-20 pb-xl-14">
          <div className="container">
            <header className="topHeadingHead mb-6 mb-lg-11">
              <h1>One Museum, Three Locations</h1>
            </header>
            <div className="row mx-xl-n4 justify-content-center">
              <div className="col-12 col-md-6 col-lg-4 px-xl-4">
                <article className="upcEveColumn border position-relative py-8 px-4 mb-6 mb-xl-8 mx-auto mx-md-0">
                  <div className="imgHolder mb-5 overflow-hidden">
                    <a href="visit-us-block.html">
                      <img
                        src="http://placehold.it/365x200"
                        className="img-fluid w-100"
                        alt="image description"
                      />
                    </a>
                  </div>
                  <h2 className="mb-0">
                    <a href="visit-us-block.html">Modern Homestead</a>
                  </h2>
                  <time
                    datetime="2011-01-12"
                    className="simupTime d-block text-gray777 mb-2"
                  >
                    Open Daily 10AM-9PM
                  </time>
                  <address className="mb-5">
                    <p className="mb-0">
                      <i
                        className="fas fa-map-marker-alt icn"
                        aria-hidden="true"
                      >
                        <span className="sr-only">icon</span>
                      </i>{" "}
                      11 West 52 Street, Mangatha
                    </p>
                  </address>
                  <a
                    href="visit-us-block.html"
                    className="btn btnGre5 btnGre5Outline bdr2 btnMdMinWidth btn-sm"
                  >
                    Plan Your Visit
                  </a>
                </article>
              </div>
              <div className="col-12 col-md-6 col-lg-4 px-xl-4">
                <article className="upcEveColumn border position-relative py-8 px-4 mb-6 mb-xl-8 mx-auto mx-md-0">
                  <div className="imgHolder mb-5 overflow-hidden">
                    <a href="visit-us-block.html">
                      <img
                        src="http://placehold.it/365x200"
                        className="img-fluid w-100"
                        alt="image description"
                      />
                    </a>
                  </div>
                  <h2 className="mb-0">
                    <a href="visit-us-block.html">The Max Sixth Avenue</a>
                  </h2>
                  <time
                    datetime="2011-01-12"
                    className="simupTime d-block text-gray777 mb-2"
                  >
                    Open Daily 10AM-9PM
                  </time>
                  <address className="mb-5">
                    <p className="mb-0">
                      <i
                        className="fas fa-map-marker-alt icn"
                        aria-hidden="true"
                      >
                        <span className="sr-only">icon</span>
                      </i>{" "}
                      22 Max Sixth Avenue, Queens
                    </p>
                  </address>
                  <a
                    href="visit-us-block.html"
                    className="btn btnGre5 btnGre5Outline bdr2 btnMdMinWidth btn-sm"
                  >
                    Plan Your Visit
                  </a>
                </article>
              </div>
              <div className="col-12 col-md-6 col-lg-4 px-xl-4">
                <article className="upcEveColumn border position-relative py-8 px-4 mb-6 mb-xl-8 mx-auto mx-md-0">
                  <div className="imgHolder mb-5 overflow-hidden">
                    <a href="visit-us-block.html">
                      <img
                        src="http://placehold.it/365x200"
                        className="img-fluid w-100"
                        alt="image description"
                      />
                    </a>
                  </div>
                  <h2 className="mb-0">
                    <a href="visit-us-block.html">Uvan-Muzze Center</a>
                  </h2>
                  <time
                    datetime="2011-01-12"
                    className="simupTime d-block text-gray777 mb-2"
                  >
                    Open Daily 10AM-9PM
                  </time>
                  <address className="mb-5">
                    <p className="mb-0">
                      <i
                        className="fas fa-map-marker-alt icn"
                        aria-hidden="true"
                      >
                        <span className="sr-only">icon</span>
                      </i>{" "}
                      143 Chantilly, Virginia 20151
                    </p>
                  </address>
                  <a
                    href="visit-us-block.html"
                    className="btn btnGre5 btnGre5Outline bdr2 btnMdMinWidth btn-sm"
                  >
                    Plan Your Visit
                  </a>
                </article>
              </div>
            </div>
          </div>
        </section>
        <aside className="newsletterAside newsletterAsideViv bg-warning pt-5 pb-5 pt-lg-9 pb-lg-9 text-center text-lg-left">
          <div className="container">
            <div className="d-lg-flex align-items-lg-center justify-content-lg-between">
              <h3 className="text-white mb-3 mb-lg-0">Subscribe Newsletter</h3>
              <form action="#">
                <div className="form-row justify-content-center mx-n2">
                  <div className="form-group px-2 mb-2 mb-md-0">
                    <input
                      type="text"
                      className="form-control d-block"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group px-2 mb-2 mb-md-0">
                    <input
                      type="email"
                      className="form-control d-block"
                      placeholder="Your Email Address"
                    />
                  </div>
                  <div className="form-group px-2 mb-2 mb-md-0">
                    <input
                      type="submit"
                      className="btn btn-secondary text-uppercase"
                      value="sign up!"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </aside>
      </main>
    );
  }
}

export default Home;
