const products = [
  {
    ID: "P101",
    Name: "Laptop",
    Price: 80000,
    category: "Electronics",
    avgRating: 4.123,
    features: [
      "WiFi",
      "Water Resistant",
      "Bluetooth",
      "SSD",
      "Backlit Keyboard",
    ],
    stock: 50,
    reviews: [
      {
        userID: "U101",
        rating: 4,
        comments: [
          "Excellent",
          "Amazing camera",
          "Very fast",
          "Highly recommended",
          "heavy",
        ],
      },
      {
        userID: "U103",
        rating: 2,
        comments: [
          "poor",
          "Amazing camera",
          "Very fast",
          "Highly recommended",
          "heavy",
        ],
      },
      {
        userID: "U104",
        rating: 5,
        comments: [
          "Excellent",
          "Amazing camera",
          "Very fast",
          "Highly recommended",
          "complex",
        ],
      },
    ],
  },
  {
    ID: "P102",
    Name: "Smartphone",
    Price: 50000,
    category: "Electronics",
    avgRating: 5.0,
    features: ["Bluetooth", "Water Resistant", "Touchscreen", "4G", "Camera"],
    stock: 30,
    reviews: [
      {
        userID: "U101",
        rating: 5,
        comments: [
          "Amazing camera",
          "Very fast",
          "Highly recommended",
          "complex",
        ],
      },
    ],
  },
  {
    ID: "P103",
    Name: "Desk Chair",
    Price: 15000,
    category: "Furniture",
    avgRating: 3.234,
    features: ["Ergonomic", "Adjustable Height", "Swivel"],
    stock: 60,
    reviews: [
      {
        userID: "U102",
        rating: 3,
        comments: ["Comfortable", "Average quality", "Good for office"],
      },
    ],
  },
  {
    ID: "P104",
    Name: "Smart Watch",
    Price: 500,
    category: "Electronics",
    avgRating: 3.335,
    features: [
      "Bluetooth",
      "Water Resistant",
      "Heart Rate Monitor",
      "Waterproof",
      "heavy",
    ],
    stock: 90,
    reviews: [
      {
        userID: "U103",
        rating: 2,
        comments: [
          "Lightweight",
          "Good",
          "Very fast",
          "Screen small",
          "Affordable",
          "complex",
        ],
      },
    ],
  },
  {
    ID: "P105",
    Name: "Digital Camera",
    Price: 7000,
    category: "Electronics",
    avgRating: 4.437,
    features: ["WiFi", "Zoom Lens", "HD Video"],
    stock: 120,
    reviews: [
      {
        userID: "U104",
        rating: 4,
        comments: ["poor", "Easy to use", "Value for money"],
      },
    ],
  },
  {
    ID: "P106",
    Name: "Bluetooth Speaker",
    Price: 3000,
    category: "Electronics",
    avgRating: 4.019,
    features: ["Bluetooth", "Portable", "Rechargeable", "Waterproof"],
    stock: 101,
    reviews: [
      {
        userID: "U102",
        rating: 4,
        comments: ["Portable", "Good sound", "Battery lasts long"],
      },
    ],
  },
  {
    ID: "P107",
    Name: "E-book Reader",
    Price: 12000,
    category: "Electronics",
    avgRating: 2.458,
    features: ["WiFi", "Touchscreen", "Backlight", "Long Battery Life"],
    stock: 70,
    reviews: [
      {
        userID: "U105",
        rating: 2,
        comments: [
          "Excellent",
          "Screen glare issue",
          "Slow response",
          "Lightweight and portable",
        ],
      },
      {
        userID: "U108",
        rating: 5,
        comments: [
          "Excellent",
          "Screen glare issue",
          "Slow response",
          "Lightweight and portable",
        ],
      },
    ],
  },
];

//Qus-1
/*
Write a function that takes a category (e.g., "Electronics") as input and returns an array of product names (strings) for that category, sorted alphabetically. Example output for "Electronics": ["Bluetooth Speaker", "Digital Camera", "Laptop Pro X", "Smart Watch", "Wireless Headphones"]
*/
function getProductsBycategory(category) {
  const prodName = products
    .filter((p) => p.category == category)
    .map((x) => x.Name);
  prodName.sort();
  return prodName;
}

// const category = prompt("Enter a product category : ");
const prodName = getProductsBycategory("Electronics");
console.log("\nOutput For Question No.1\n");
console.log("\nProducts With Category");
console.log(prodName);

//Qus-2
/*
Write a function that returns an array of objects containing each product’s name and its average rating (rounded to 2 decimal places) based on the reviews. Example output: [{ name: "Laptop Pro X", avgRating: 4.00 }, { name: "Wireless Headphones", avgRating: 3.50 }, ...]
*/
function getProductsByRatings() {
  const prodWithRating = products.reduce(function (acc, curr) {
    acc.push({
      Name: curr.Name,
      avgRating: curr.avgRating.toFixed(2),
    });
    return acc;
  }, []);
  return prodWithRating;
}

const prodWithRatings = getProductsByRatings();
console.log("\nOutput For Question No.2\n");
console.log("\nProducts With Ratings");
console.log(prodWithRatings);

//Qus-3
/*
Write a function that takes a feature keyword (e.g., "Bluetooth") and returns an array of product IDs for products whose features array contains that keyword (case-insensitive). Example for "Bluetooth": ["P1002", "P1010"]
*/

function featureKeyword(keyword) {
  const prodID = products
    .filter((x) => x.features.includes(keyword))
    .map((x) => x.ID);
  return prodID;
}

const prodID = featureKeyword("Bluetooth");
console.log("\nOutput For Question No.3\n");
console.log("\nProduct ID's that contains Feature name Bluetooth");

console.log(prodID);

//Qus-4
/*
Write a function that groups products into three categories based on stock: "Low" (< 50), "Medium" (50–100), and "High" (> 100). Return an object where each key is a stock level and the value is an array of product names. Example output: { Low: ["Cookbook: World Cuisine", "Digital Camera"], Medium: [...], High: ["Cotton T-Shirt"] }
*/

function stock() {
  const in_stock = products.reduce(
    function (acc, p) {
      if (p.stock < 50) acc.Low.push(p.Name);
      else if (p.stock <= 100) acc.Medium.push(p.Name);
      else acc.High.push(p.Name);
      return acc;
    },
    { Low: [], Medium: [], High: [] }
  );
  return in_stock;
}

const in_stock = stock();
console.log("\nOutput For Question No.4\n");
console.log("\nProducts in Stock", in_stock);

//Qus-5
/*
Write a function that returns all unique user IDs from the reviews across all products. Example output: {"U101", "U102", "U103", ..., "U141"}
*/

const unique_id = [
  ...new Set(products.flatMap((x) => x.reviews.map((review) => review.userID))),
];
console.log("\nOutput For Question No.5\n");
console.log("\nUnique User ID's : ", unique_id);

//Qus-6
/*
Write a function that finds the top 3 products with the highest average ratings, but only includes products with at least 4 reviews. Return an array of objects with product_id, name, and avgRating (sorted by avgRating descending). Example output: [{ product_id: "P1003", name: "Running Shoes", avgRating: 4.20 }, ...]
*/

function Top3() {
  const top3Product = products.reduce(function (acc, p) {
    if (p.avgRating >= 4) {
      acc.push({
        "Product ID": p.ID,
        "Product Name": p.Name,
        Rating: p.avgRating,
      });
    }
    return acc;
  }, []);
  return top3Product.sort((a, b) => b["Rating"] - a["Rating"]).slice(0, 3);
}
console.log("\nOutput For Question No.6\n");
console.log("\nTop 3 Products With AvgRating\n", Top3());

//Qus-7
/*
Write a function that analyzes all review comments and returns an object where the keys are words (lowercase, no punctuation) and the values are the number of times they appear across all comments. Ignore words shorter than 3 characters. Example output: {"great" => 6, "good" => 5, "comfortable" => 4, ...}
*/
function reviews() {
  const wordCount = {};
  for (const product of products) {
    for (const review of product.reviews) {
      for (const cmnt of review.comments) {
        const words = cmnt
          .toLowerCase()
          .replaceAll(",", "")
          .replaceAll(".", "")
          .replaceAll("!", "")
          .replaceAll("?", "")
          .split(" ")
          .filter(Boolean);
        for (const word of words) {
          if (word.length > 2) {
            wordCount[word] = (wordCount[word] || 0) + 1;
          }
        }
      }
    }
  }
  console.log("\nOutput For Question No.7\n");
  console.log("\nAll Words\n");
  console.log(wordCount);
}
reviews();

//Qus-8
/*
Write a function that identifies products with "mixed reviews," defined as having at least one rating of 5 and at least one rating of 2 or lower. Return an array of product names. Example output: ["Wireless Headphones", "Smart Watch"]
*/
function prodWithMixedReviws() {
  const mixedProduct = [];
  for (const product of products) {
    const hasFive = product.reviews.some((r) => r.rating === 5);
    const hasLow2 = product.reviews.some((r) => r.rating <= 2);
    if (hasFive && hasLow2) {
      mixedProduct.push(product.Name);
    }
  }
  console.log("\nOutput For Question No.8\n");
  console.log("\nList of Mixed Ratings product\n", mixedProduct);
}
prodWithMixedReviws();
//Qus-9
/*
Write a function that calculates the average price of products that have a specific feature (e.g., "Water Resistant") and compares it to the overall average price of all products. Return an object with both averages and the difference. Example output for "Water Resistant": { featureAvg: 165.00, overallAvg: 242.80, difference: -77.80 }
*/

function product_with_feature_water_resistant() {
  let allProdPrice = 0;
  for (const product of products) {
    allProdPrice += product.Price;
  }
  const avgOfAllProdPrice = allProdPrice / products.length;
  let specificFeatureProdPrice = 0;
  let count = 0;
  for (const item of products) {
    if (item.features.some((f) => f.includes("Water Resistant"))) {
      specificFeatureProdPrice += item.Price;
      count++;
    }
  }
  const avgFeaturePrice = count > 0 ? specificFeatureProdPrice / count : 0;
  const result = {
    featureAvg: Number(avgFeaturePrice).toFixed(2),
    overallAvg: Number(avgOfAllProdPrice).toFixed(2),
    difference: Number(avgFeaturePrice - avgOfAllProdPrice).toFixed(2),
  };
  console.log("\nOutput For Question No.9\n");
  console.log("\nWater Resistant\n", result);
}
product_with_feature_water_resistant();

//Qus-10
/*
Write a function that categorizes products based on their review comments. For each product, count how many comments contain positive words ("great", "excellent", "good", "amazing", "comfortable") versus negative words ("poor", "bad", "heavy", "complex"). Return an object like this { "P1001": { positiveCount: 3, negativeCount: 1 }, "P1002": { positiveCount: 2, negativeCount: 2 }, ... }
*/
const positiveComments = [
  "great",
  "excellent",
  "good",
  "amazing",
  "comfortable",
];
const negativeComments = ["poor", "bad", "heavy", "complex"];

function categorizeProductWithReviews() {
  const result = {};
  for (const product of products) {
    let positive_count = 0;
    let negative_count = 0;

    const allComments = product.reviews.flatMap((r) => r.comments);

    for (const cmnt of allComments) {
      const words = cmnt
        .toLowerCase()
        .replaceAll(",", "")
        .replaceAll(".", "")
        .replaceAll("!", "")
        .replaceAll("?", "")
        .split(" ")
        .filter(Boolean);
      for (const word of words) {
        if (positiveComments.includes(word)) positive_count++;
        if (negativeComments.includes(word)) negative_count++;
      }
    }
    result[product.ID] = { positive_count, negative_count };
  }
  console.log("\nOutput For Question No.10\n");
  console.log("\nProducts with positive and negamive comments\n", result);
}
categorizeProductWithReviews();
