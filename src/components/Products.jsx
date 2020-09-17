import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Products extends Component {
    render() {
        return (
            <section className='product-section wrapper'>
                <div className="title-container">
                    <div className="sub-title">SHOP</div>
                    <h2 className="product-section-title">
                        Surfboards
                    </h2>
                </div>

                <div className="product-list">
                    <article className="product">
                        <div className="grey-bg"></div>
                        <div className="product-image">
                            <img src={require('./../assets/img/board1.png')} alt="surf board"/>
                        </div>
                        <div className="product-info">
                            <div className="board-title-box">
                                <div className="board-cat">FUNBOARDS</div>
                                <div className="board-title">Chilli Rare Bird</div>
                            </div>
                            <div className="board-price-box">
                                <div className="board-price">$890</div>
                                <div className="board-buy">BUY</div>
                            </div>
                        </div>
                    </article>
                    <article className="product">
                    <div className="grey-bg"></div>
                        <div className="product-image">
                            <img src={require('./../assets/img/board2.png')} alt="surf board"/>
                        </div>
                        <div className="product-info">
                            <div className="board-title-box">
                                <div className="board-cat">SURFBOARDS</div>
                                <div className="board-title">Emery NEM XF</div>
                            </div>
                            <div className="board-price-box">
                                <div className="board-price">$950</div>
                                <div className="board-buy">BUY</div>
                            </div>
                        </div>
                    </article>
                    <article className="product">
                    <div className="grey-bg"></div>
                        <div className="product-image">
                            <img src={require('./../assets/img/board3.png')} alt="surf board"/>
                        </div>
                        <div className="product-info">
                            <div className="board-title-box">
                                <div className="board-cat">FUNBOARDS</div>
                                <div className="board-title">Agency GROM</div>
                            </div>
                            <div className="board-price-box">
                                <div className="board-price">$670</div>
                                <div className="board-buy">BUY</div>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="more">
                    <Link to="/" className="link">SHOW ALL</Link>
                </div>
            </section>
        )
    }
}
 
export default Products;