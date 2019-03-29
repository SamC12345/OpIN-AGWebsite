import React, { Component } from "react";
import {Pagination} from "react-bootstrap";
import ReactPageScroller from "react-page-scroller";
import Contact from "./Contact";
import SliderPage1 from "./SliderPage1";
import SliderPage2 from "./SliderPage2";
import SliderPage3 from "./SliderPage3";
import Zoom from 'react-reveal/Zoom';
 
// goToPage = (pageNumber) => {
//   this.reactPageScroller.goToPage(pageNumber);
// }

// class Stuff extends Component {
//   render() {
//     return (
//       <div>
//         <h2>STUFF</h2>
//         <p>Mauris sem velit, vehicula eget sodales vitae,
//         rhoncus eget sapien:</p>
//         <ol>
//           <li>Nulla pulvinar diam</li>
//           <li>Facilisis bibendum</li>
//           <li>Vestibulum vulputate</li>
//           <li>Eget erat</li>
//           <li>Id porttitor</li>
//         </ol>
//       </div>
//     );
//   }
// }
 
// export default Stuff;

export default class Stuff extends React.Component {
  constructor(props) {
      super(props);
      this.state = {currentPage: 1};
      this._pageScroller = null;
  }

  goToPage = (eventKey) => {
      this._pageScroller.goToPage(eventKey);
  };

  pageOnChange = (number) => {
      this.setState({currentPage: number});
  };

  getPagesNumbers = () => {

      const pageNumbers = [];

      for (let i = 1; i <= 5; i++) {
          pageNumbers.push(
              // <Pagination.Item key={i} eventKey={i - 1} >{i}</Pagination.Item>
              <Pagination.Item key={i} active={i === 1} onSelect={this.goToPage}>
              {i}
            </Pagination.Item>,
          )
      }

      return [...pageNumbers];
  };

  render() {

      // const pagesNumbers = this.getPagesNumbers();
      let active = 2;
      let items = [];
      for (let number = 1; number <= 5; number++) {
        items.push(
          <Pagination.Item key={number} active={number === active}>
            {number}
          </Pagination.Item>,
        );
      }

      return <React.Fragment>
           {/* <Pagination>{items}</Pagination> */}
          {/* <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}> */}
            <Zoom>
              <SliderPage1/>
              <SliderPage2/>
              <SliderPage3/>
            </Zoom>
          {/* </ReactPageScroller> */}
      </React.Fragment>
  }
}