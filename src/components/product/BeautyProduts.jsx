import React, { useEffect, useState } from "react";
import { getProducts } from "../../apis/productsApi";
import {
  BeautyBoxHeader,
  BeautyDescription,
  BeautyIdBox,
  BeautyImg,
  BeautyPrice,
  BeautyTitle,
} from "../BeautyProuts.style";

function BeautyProuts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <BeautyBoxHeader>
        <h2>Beauty Product List</h2>
        <p>다양한 뷰티 제품을 한눈에 확인하세요</p>
      </BeautyBoxHeader>
      {products.map(product => (
        <BeautyIdBox key={product.id}>
          <BeautyImg src={product.thumbnail} alt={product.title} />
          <div>
            <BeautyTitle>{product.title}</BeautyTitle>
            <BeautyPrice>＄{product.price}</BeautyPrice>
            <BeautyDescription>{product.description}</BeautyDescription>
          </div>
        </BeautyIdBox>
      ))}
    </div>
  );
}

export default BeautyProuts;
