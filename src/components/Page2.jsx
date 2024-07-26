// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "./Page2.css";
// // import image from "./images/ring.avif";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
// // import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

// // function Page2({ addLike }) {
// //   const navigate = useNavigate();

// //   const rings = [
// //     {
// //       id: 1,
// //       name: "The Idamae Diamond Silver Ladies Ring",
// //       image: "https://www.brides.com/thmb/OPUCkkdHcXJGhbyekrZPRoFsUmE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sq-596f021e90a74f7d844713dbd362593e.jpg",
// //       otherImages: [
// //         "https://www.brides.com/thmb/OPUCkkdHcXJGhbyekrZPRoFsUmE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sq-596f021e90a74f7d844713dbd362593e.jpg",
// //         "https://another-image-link.com",
// //         "https://another-image-link.com"
// //       ],
// //       category: "pandal",
// //       item: "a3",
// //       material: "g2",
// //       gender: "male",
// //       rating: 4.7,
// //       price: 200,
// //     },
// //     {
// //       id: 2,
// //       name: "The Niko Diamond Silver Ladies Ring",
// //       image: "https://kinclimg9.bluestone.com/f_jpg,c_scale,w_1024,q_80,b_rgb:f0f0f0/giproduct/BICM0449R15-POSTER-V1-70515.jpg",
// //       otherImages: [
// //         "https://kinclimg9.bluestone.com/f_jpg,c_scale,w_1024,q_80,b_rgb:f0f0f0/giproduct/BICM0449R15-POSTER-V1-70515.jpg",
// //         "https://another-image-link.com",
// //         "https://another-image-link.com"
// //         ],
// //       category: "chain",
// //       item: "a2",
// //       material: "g2",
// //       gender: "female",
// //       rating: 5.0,
// //       price: 250,
// //     },
// //     {
// //       id: 3,
// //       name: "The Murl Diamond Silver Ladies Ring",
// //       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR48QiYQR44E5K4-4dL0BUt-5zkfHOaX24i_Q&s",
// //       otherImages: [
// //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR48QiYQR44E5K4-4dL0BUt-5zkfHOaX24i_Q&s",
// //         "https://another-image-link.com",
// //         "https://another-image-link.com"
// //         ],
// //       category: "ring",
// //       item: "a1",
// //       material: "g3",
// //       gender: "female",
// //       rating: 4.5,
// //       price: 100,
// //     },
// //     {
// //       id: 4,
// //       name: "The Caprice Diamond Silver Ladies Ring",
// //       image: "https://media.glamourmagazine.co.uk/photos/658303d757d8d832b6939b2a/1:1/w_1280,h_1280,c_limit/ENGAGEMENT%20RING%202024%20201223%20IMG_8678_L.jpg",
// //       otherImages:[
// //         "https://media.glamourmagazine.co.uk/photos/658303d757d8d832b6939b2a/1:1/w_1280,h_1280,c_limit/ENGAGEMENT%20RING%202024%20201223%20IMG_8678_L.jpg",
// //         "https://another-image-link.com",
// //         "https://another-image-link.com"
// //       ],
// //       category: "pandal",
// //       item: "a3",
// //       material: "g1",
// //       gender: "male",
// //       rating: 4.0,
// //       price: 50,
// //     },
// //   ];

// //   const [likedRings, setLikedRings] = useState([]);
// //   const [selectedCategory, setSelectedCategory] = useState("");
// //   const [selectedItem, setSelectedItem] = useState("");
// //   const [selectedMaterial, setSelectedMaterial] = useState("");
// //   const [selectedGender, setSelectedGender] = useState("");
// //   const [sortBy, setSortBy] = useState("");

// //   const toggleLike = (ring) => {
// //     if (likedRings.includes(ring.id)) {
// //       setLikedRings(likedRings.filter((id) => id !== ring.id));
// //     } else {
// //       setLikedRings([...likedRings, ring.id]);
// //     }
// //     addLike(ring);
// //   };

// //   const handleCategoryChange = (e) => {
// //     setSelectedCategory(e.target.value);
// //   };

// //   const handleItemChange = (e) => {
// //     setSelectedItem(e.target.value);
// //   };

// //   const handleMaterialChange = (e) => {
// //     setSelectedMaterial(e.target.value);
// //   };

// //   const handleGenderChange = (e) => {
// //     setSelectedGender(e.target.value);
// //   };

// //   const handleSortChange = (e) => {
// //     setSortBy(e.target.value);
// //   };

// //   const filteredRings = rings
// //     .filter(
// //       (ring) =>
// //         (selectedCategory === "" || ring.category === selectedCategory) &&
// //         (selectedItem === "" || ring.item === selectedItem) &&
// //         (selectedMaterial === "" || ring.material === selectedMaterial) &&
// //         (selectedGender === "" || ring.gender === selectedGender)
// //     )
// //     .sort((a, b) => {
// //       if (sortBy === "asc") {
// //         return a.price - b.price;
// //       } else if (sortBy === "desc") {
// //         return b.price - a.price;
// //       } else if (sortBy === "rating") {
// //         return b.rating - a.rating;
// //       } else {
// //         return 0;
// //       }
// //     });

// //   const handleRingClick = (ring) => {
// //     navigate(`/product/${ring.id}`, { state: { ring } });
// //   };

// //   return (
// //     <div className="page2">
// //       <div className="banner">
// //         <img src={image} alt="Rings Banner" className="banner-image" />
// //         <div className="banner-content">
// //           <h1>Rings</h1>
// //           <p>Let Love Greet you in a sparkly way</p>
// //         </div>
// //       </div>
// //       <div className="filter-selects">
// //         <div>
// //           <p>Filter: </p>
// //           <select onChange={handleCategoryChange} value={selectedCategory}>
// //             <option value="">All Categories</option>
// //             <option value="ring">ring</option>
// //             <option value="necklace">necklace</option>
// //             <option value="chain">chain</option>
// //             <option value="pandal">pandal</option>
// //           </select>
// //           <select onChange={handleItemChange} value={selectedItem}>
// //             <option value="">All Prices</option>
// //             <option value="a1">under 100</option>
// //             <option value="a2">100-500</option>
// //             <option value="a3">500 and above</option>
// //           </select>
// //           <select onChange={handleMaterialChange} value={selectedMaterial}>
// //             <option value="">All Gemstone</option>
// //             <option value="g1">Diamond</option>
// //             <option value="g2">Ruby</option>
// //             <option value="g3">Sapphire</option>
// //           </select>
// //           <select onChange={handleGenderChange} value={selectedGender}>
// //             <option value="">All Genders</option>
// //             <option value="male">Male</option>
// //             <option value="female">Female</option>
// //           </select>
// //         </div>
// //         <div>
// //           <p>Sort-By: </p>
// //           <select onChange={handleSortChange} value={sortBy}>
// //             <option value="">None</option>
// //             <option value="asc">Price: Low to High</option>
// //             <option value="desc">Price: High to Low</option>
// //             <option value="rating">Popularity</option>
// //           </select>
// //         </div>
// //       </div>
// //       <div className="rings-grid">
// //         {filteredRings.map((ring) => (
// //           <div key={ring.id} className="ring-card" onClick={() => handleRingClick(ring)}>
// //             <div className="ribbon">SHIPS FASTER</div>
// //             <div>
// //               <img src={ring.image} alt={ring.name} className="ring-image" />
// //             </div>
// //             <div className="ring-info">
// //               <h3>{ring.name}</h3>
// //             </div>
// //             <button className="like-button" onClick={(e) => { e.stopPropagation(); toggleLike(ring); }}>
// //               <FontAwesomeIcon
// //                 icon={likedRings.includes(ring.id) ? faHeartSolid : faHeartRegular}
// //               />
// //             </button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Page2;

// // const rings = [
// //   {
// //     id: 1,
// //     name: "The Idamae Diamond Silver Ladies Ring",
// //     image: "https://www.brides.com/thmb/OPUCkkdHcXJGhbyekrZPRoFsUmE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sq-596f021e90a74f7d844713dbd362593e.jpg",
// //     otherImages: [
// //       "https://www.brides.com/thmb/OPUCkkdHcXJGhbyekrZPRoFsUmE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sq-596f021e90a74f7d844713dbd362593e.jpg",
// //       "https://another-image-link.com",
// //       "https://another-image-link.com"
// //     ],
// //     category: "pandal",
// //     item: "a3",
// //     material: "g2",
// //     gender: "male",
// //     rating: 4.7,
// //     price: 200,
// //   },
// //   {
// //     id: 2,
// //     name: "The Niko Diamond Silver Ladies Ring",
// //     image: "https://kinclimg9.bluestone.com/f_jpg,c_scale,w_1024,q_80,b_rgb:f0f0f0/giproduct/BICM0449R15-POSTER-V1-70515.jpg",
// //     otherImages: [
// //       "https://kinclimg9.bluestone.com/f_jpg,c_scale,w_1024,q_80,b_rgb:f0f0f0/giproduct/BICM0449R15-POSTER-V1-70515.jpg",
// //       "https://another-image-link.com",
// //       "https://another-image-link.com"
// //       ],
// //     category: "chain",
// //     item: "a2",
// //     material: "g2",
// //     gender: "female",
// //     rating: 5.0,
// //     price: 250,
// //   },
// //   {
// //     id: 3,
// //     name: "The Murl Diamond Silver Ladies Ring",
// //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR48QiYQR44E5K4-4dL0BUt-5zkfHOaX24i_Q&s",
// //     otherImages: [
// //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR48QiYQR44E5K4-4dL0BUt-5zkfHOaX24i_Q&s",
// //       "https://another-image-link.com",
// //       "https://another-image-link.com"
// //       ],
// //     category: "ring",
// //     item: "a1",
// //     material: "g3",
// //     gender: "female",
// //     rating: 4.5,
// //     price: 100,
// //   },
// //   {
// //     id: 4,
// //     name: "The Caprice Diamond Silver Ladies Ring",
// //     image: "https://media.glamourmagazine.co.uk/photos/658303d757d8d832b6939b2a/1:1/w_1280,h_1280,c_limit/ENGAGEMENT%20RING%202024%20201223%20IMG_8678_L.jpg",
// //     otherImages:[
// //       "https://media.glamourmagazine.co.uk/photos/658303d757d8d832b6939b2a/1:1/w_1280,h_1280,c_limit/ENGAGEMENT%20RING%202024%20201223%20IMG_8678_L.jpg",
// //       "https://another-image-link.com",
// //       "https://another-image-link.com"
// //     ],
// //     category: "pandal",
// //     item: "a3",
// //     material: "g1",
// //     gender: "male",
// //     rating: 4.0,
// //     price: 50,
// //   },
// // ];

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Page2.css";
// import image from "./images/ring.avif";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
// import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

// function Page2({ addLike }) {
//   const navigate = useNavigate();

//   const rings = [
//     {
//       id: 1,
//       name: "The Idamae Diamond Silver Ladies Ring",
//       image:  "https://www.brides.com/thmb/OPUCkkdHcXJGhbyekrZPRoFsUmE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sq-596f021e90a74f7d844713dbd362593e.jpg",
//       otherImages: [
//         "https://www.brides.com/thmb/OPUCkkdHcXJGhbyekrZPRoFsUmE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sq-596f021e90a74f7d844713dbd362593e.jpg",
//         "https://another-image-link.com",
//         "https://another-image-link.com"
//       ],
//       category: "pandal",
//       item: "a3",
//       material: "g2",
//       gender: "male",
//       rating: 4.7,
//       price: 200,
//     },
//     {
//       id: 2,
//       name: "The Niko Diamond Silver Ladies Ring",
//       image: "https://kinclimg9.bluestone.com/f_jpg,c_scale,w_1024,q_80,b_rgb:f0f0f0/giproduct/BICM0449R15-POSTER-V1-70515.jpg",
//       otherImages: [
//         "https://kinclimg9.bluestone.com/f_jpg,c_scale,w_1024,q_80,b_rgb:f0f0f0/giproduct/BICM0449R15-POSTER-V1-70515.jpg",
//         "https://another-image-link.com",
//         "https://another-image-link.com"
//         ],
//       category: "chain",
//       item: "a2",
//       material: "g2",
//       gender: "female",
//       rating: 5.0,
//       price: 250,
//     },
//     {
//       id: 3,
//       name: "The Murl Diamond Silver Ladies Ring",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR48QiYQR44E5K4-4dL0BUt-5zkfHOaX24i_Q&s",
//       otherImages: [
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR48QiYQR44E5K4-4dL0BUt-5zkfHOaX24i_Q&s",
//         "https://another-image-link.com",
//         "https://another-image-link.com"
//         ],
//       category: "ring",
//       item: "a1",
//       material: "g3",
//       gender: "female",
//       rating: 4.5,
//       price: 100,
//     },
//     {
//       id: 4,
//       name: "The Caprice Diamond Silver Ladies Ring",
//       image: "https://media.glamourmagazine.co.uk/photos/658303d757d8d832b6939b2a/1:1/w_1280,h_1280,c_limit/ENGAGEMENT%20RING%202024%20201223%20IMG_8678_L.jpg",
//       otherImages:[
//         "https://media.glamourmagazine.co.uk/photos/658303d757d8d832b6939b2a/1:1/w_1280,h_1280,c_limit/ENGAGEMENT%20RING%202024%20201223%20IMG_8678_L.jpg",
//         "https://another-image-link.com",
//         "https://another-image-link.com"
//       ],
//       category: "pandal",
//       item: "a3",
//       material: "g1",
//       gender: "male",
//       rating: 4.0,
//       price: 50,
//     },
//   ];

//   const [likedRings, setLikedRings] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [selectedItem, setSelectedItem] = useState("");
//   const [selectedMaterial, setSelectedMaterial] = useState("");
//   const [selectedGender, setSelectedGender] = useState("");
//   const [sortBy, setSortBy] = useState("");

//   const toggleLike = (ring) => {
//     if (likedRings.includes(ring.id)) {
//       setLikedRings(likedRings.filter((id) => id !== ring.id));
//     } else {
//       setLikedRings([...likedRings, ring.id]);
//     }
//     addLike(ring);
//   };

//   const handleCategoryChange = (e) => {
//     setSelectedCategory(e.target.value);
//   };

//   const handleItemChange = (e) => {
//     setSelectedItem(e.target.value);
//   };

//   const handleMaterialChange = (e) => {
//     setSelectedMaterial(e.target.value);
//   };

//   const handleGenderChange = (e) => {
//     setSelectedGender(e.target.value);
//   };

//   const handleSortChange = (e) => {
//     setSortBy(e.target.value);
//   };

//   const filteredRings = rings
//     .filter(
//       (ring) =>
//         (selectedCategory === "" || ring.category === selectedCategory) &&
//         (selectedItem === "" || ring.item === selectedItem) &&
//         (selectedMaterial === "" || ring.material === selectedMaterial) &&
//         (selectedGender === "" || ring.gender === selectedGender)
//     )
//     .sort((a, b) => {
//       if (sortBy === "asc") {
//         return a.price - b.price;
//       } else if (sortBy === "desc") {
//         return b.price - a.price;
//       } else if (sortBy === "rating") {
//         return b.rating - a.rating;
//       } else {
//         return 0;
//       }
//     });

//   const handleRingClick = (ring) => {
//     navigate(`/product/${ring.id}`, { state: { ring } });
//   };

//   return (
//     <div className="page2">
//       <div className="banner">
//         <img src={image} alt="Rings Banner" className="banner-image" />
//         <div className="banner-content">
//           <h1>Rings</h1>
//           <p>Let Love Greet you in a sparkly way</p>
//         </div>
//       </div>
//       <div className="filter-selects">
//         <div>
//           <p>Filter: </p>
//           <select onChange={handleCategoryChange} value={selectedCategory}>
//             <option value="">All Categories</option>
//             <option value="ring">ring</option>
//             <option value="necklace">necklace</option>
//             <option value="chain">chain</option>
//             <option value="pandal">pandal</option>
//           </select>
//           <select onChange={handleItemChange} value={selectedItem}>
//             <option value="">All Prices</option>
//             <option value="a1">under 100</option>
//             <option value="a2">100-500</option>
//             <option value="a3">500 and above</option>
//           </select>
//           <select onChange={handleMaterialChange} value={selectedMaterial}>
//             <option value="">All Gemstone</option>
//             <option value="g1">Diamond</option>
//             <option value="g2">Ruby</option>
//             <option value="g3">Sapphire</option>
//           </select>
//           <select onChange={handleGenderChange} value={selectedGender}>
//             <option value="">All Genders</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//         </div>
//         <div>
//           <p>Sort-By: </p>
//           <select onChange={handleSortChange} value={sortBy}>
//             <option value="">None</option>
//             <option value="asc">Price: Low to High</option>
//             <option value="desc">Price: High to Low</option>
//             <option value="rating">Popularity</option>
//           </select>
//         </div>
//       </div>
//       <div className="rings-grid">
//         {filteredRings.map((ring) => (
//           <div key={ring.id} className="ring-card" onClick={() => handleRingClick(ring)}>
//             <div className="ribbon">SHIPS FASTER</div>
//             <div>
//               <img src={ring.image} alt={ring.name} className="ring-image" onError={(e) => { e.target.onerror = null; e.target.src = 'path/to/placeholder.jpg'; }} />
//             </div>
//             <div className="ring-info">
//               <h3>{ring.name}</h3>
//             </div>
//             <button className="like-button" onClick={(e) => { e.stopPropagation(); toggleLike(ring); }}>
//               <FontAwesomeIcon
//                 icon={likedRings.includes(ring.id) ? faHeartSolid : faHeartRegular}
//               />
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Page2;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Page2.css";
import image from "./images/ring.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

function Page2({ addLike }) {
  const navigate = useNavigate();

  const rings = [
    {
      id: 1,
      name: "The Idamae Diamond Silver Ladies Ring",
      image:  "https://www.brides.com/thmb/OPUCkkdHcXJGhbyekrZPRoFsUmE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sq-596f021e90a74f7d844713dbd362593e.jpg",
      otherImages: [
        "https://www.brides.com/thmb/OPUCkkdHcXJGhbyekrZPRoFsUmE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sq-596f021e90a74f7d844713dbd362593e.jpg",
        "https://images.unsplash.com/photo-1698138819865-88d3add4838f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
        "https://another-image-link.com"
      ],
      category: "pandal",
      item: "a3",
      material: "g2",
      gender: "male",
      rating: 4.7,
      price: 200,
    },
    {
      id: 2,
      name: "The Niko Diamond Silver Ladies Ring",
      image: "https://kinclimg9.bluestone.com/f_jpg,c_scale,w_1024,q_80,b_rgb:f0f0f0/giproduct/BICM0449R15-POSTER-V1-70515.jpg",
      otherImages: [
        "https://kinclimg9.bluestone.com/f_jpg,c_scale,w_1024,q_80,b_rgb:f0f0f0/giproduct/BICM0449R15-POSTER-V1-70515.jpg",
        "https://images.unsplash.com/photo-1721633616855-d483ff7c784a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
        "https://another-image-link.com"
        ],
      category: "chain",
      item: "a2",
      material: "g2",
      gender: "female",
      rating: 5.0,
      price: 250,
    },
    {
      id: 3,
      name: "The Murl Diamond Silver Ladies Ring",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR48QiYQR44E5K4-4dL0BUt-5zkfHOaX24i_Q&s",
      otherImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR48QiYQR44E5K4-4dL0BUt-5zkfHOaX24i_Q&s",
        "https://images.unsplash.com/photo-1721804975881-1768e59f46cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
        "https://another-image-link.com"
        ],
      category: "ring",
      item: "a1",
      material: "g3",
      gender: "female",
      rating: 4.5,
      price: 100,
    },
    {
      id: 4,
      name: "The Caprice Diamond Silver Ladies Ring",
      image: "https://media.glamourmagazine.co.uk/photos/658303d757d8d832b6939b2a/1:1/w_1280,h_1280,c_limit/ENGAGEMENT%20RING%202024%20201223%20IMG_8678_L.jpg",
      otherImages:[
        "https://media.glamourmagazine.co.uk/photos/658303d757d8d832b6939b2a/1:1/w_1280,h_1280,c_limit/ENGAGEMENT%20RING%202024%20201223%20IMG_8678_L.jpg",
        "https://images.unsplash.com/photo-1721297013384-ec6372912b88?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D",
        "https://another-image-link.com"
      ],
      category: "pandal",
      item: "a3",
      material: "g1",
      gender: "male",
      rating: 4.0,
      price: 50,
    },
  ];

  const [likedRings, setLikedRings] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [sortBy, setSortBy] = useState("");

  const toggleLike = (ring) => {
    if (likedRings.includes(ring.id)) {
      setLikedRings(likedRings.filter((id) => id !== ring.id));
    } else {
      setLikedRings([...likedRings, ring.id]);
    }
    addLike(ring);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleItemChange = (e) => {
    setSelectedItem(e.target.value);
  };

  const handleMaterialChange = (e) => {
    setSelectedMaterial(e.target.value);
  };

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const filteredRings = rings
    .filter(
      (ring) =>
        (selectedCategory === "" || ring.category === selectedCategory) &&
        (selectedItem === "" || ring.item === selectedItem) &&
        (selectedMaterial === "" || ring.material === selectedMaterial) &&
        (selectedGender === "" || ring.gender === selectedGender)
    )
    .sort((a, b) => {
      if (sortBy === "asc") {
        return a.price - b.price;
      } else if (sortBy === "desc") {
        return b.price - a.price;
      } else if (sortBy === "rating") {
        return b.rating - a.rating;
      } else {
        return 0;
      }
    });

  const handleRingClick = (ring) => {
    navigate(`/product/${ring.id}`, { state: { ring } });
  };

  return (
    <div className="page2">
      <div className="banner">
        <img src={image} alt="Rings Banner" className="banner-image" />
        <div className="banner-content">
          <h1>Rings</h1>
          <p>Let Love Greet you in a sparkly way</p>
        </div>
      </div>
      <div className="filter-selects">
        <div>
          <p>Filter: </p>
          <select onChange={handleCategoryChange} value={selectedCategory}>
            <option value="">All Categories</option>
            <option value="ring">ring</option>
            <option value="necklace">necklace</option>
            <option value="chain">chain</option>
            <option value="pandal">pandal</option>
          </select>
          <select onChange={handleItemChange} value={selectedItem}>
            <option value="">All Prices</option>
            <option value="a1">under 100</option>
            <option value="a2">100-500</option>
            <option value="a3">500 and above</option>
          </select>
          <select onChange={handleMaterialChange} value={selectedMaterial}>
            <option value="">All Gemstone</option>
            <option value="g1">Diamond</option>
            <option value="g2">Ruby</option>
            <option value="g3">Sapphire</option>
          </select>
          <select onChange={handleGenderChange} value={selectedGender}>
            <option value="">All Genders</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <p>Sort-By: </p>
          <select onChange={handleSortChange} value={sortBy}>
            <option value="">None</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
            <option value="rating">Popularity</option>
          </select>
        </div>
      </div>
      <div className="rings-grid">
        {filteredRings.map((ring) => (
          <div key={ring.id} className="ring-card" onClick={() => handleRingClick(ring)}>
            <div className="ribbon">SHIPS FASTER</div>
            <div>
              <img src={ring.image} alt={ring.name} className="ring-image" />
            </div>
            <div className="ring-info">
              <h3>{ring.name}</h3>
            </div>
            <button className="like-button" onClick={(e) => { e.stopPropagation(); toggleLike(ring); }}>
              <FontAwesomeIcon
                icon={likedRings.includes(ring.id) ? faHeartSolid : faHeartRegular}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page2;
