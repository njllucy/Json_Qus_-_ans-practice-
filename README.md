# JSON:	

# Answer the following questions using the provided JSON 

Qus-1 : Write a function that takes a category (e.g., "Electronics") as input and returns an array of product names (strings) for that category, sorted alphabetically. 

Example output for "Electronics": ["Bluetooth Speaker", "Digital Camera", "Laptop Pro X", "Smart Watch", "Wireless Headphones"]

Qus-2 : Write a function that returns an array of objects containing each product’s name and its average rating (rounded to 2 decimal places) based on the reviews.

Example output: [{ name: "Laptop Pro X", avgRating: 4.00 }, { name: "Wireless Headphones", avgRating: 3.50 }, ...]

Qus-3 : Write a function that takes a feature keyword (e.g., "Bluetooth") and returns an array of product IDs for products whose features array contains that keyword (case-
insensitive). 

Example for "Bluetooth": ["P1002", "P1010"]

Qus-4 : Write a function that groups products into three categories based on stock: "Low" (< 50), "Medium" (50–100), and "High" (> 100). Return an object where each key is a
stock level and the value is an array of product names.

Example output: { Low: ["Cookbook: World Cuisine", "Digital Camera"], Medium: [...], High: ["Cotton T-Shirt"] }

Qus-5 : Write a function that returns all unique user IDs from the reviews across all products.

Example output: {"U101", "U102", "U103", ..., "U141"}

Qus-6 : Write a function that finds the top 3 products with the highest average ratings, but only includes products with at least 4 reviews. Return an array of objects with
product_id, name, and avgRating (sorted by avgRating descending). 

Example output: [{ product_id: "P1003", name: "Running Shoes", avgRating: 4.20 }, ...]

Qus-7 : Write a function that analyzes all review comments and returns an object where the keys are words (lowercase, no punctuation) and the values are the number of times
they appear across all comments. Ignore words shorter than 3 characters. 

Example output: {"great" => 6, "good" => 5, "comfortable" => 4, ...}


Qus-8 : Write a function that identifies products with "mixed reviews," defined as having at least one rating of 5 and at least one rating of 2 or lower. Return an array of
product names. 

Example output: ["Wireless Headphones", "Smart Watch"]


Qus-9 : Write a function that calculates the average price of products that have a specific feature (e.g., "Water Resistant") and compares it to the overall average price of
all products. Return an object with both averages and the difference. 

Example output for "Water Resistant": { featureAvg: 165.00, overallAvg: 242.80, difference: -77.80 }


Qus-10 : Write a function that categorizes products based on their review comments. For each product, count how many comments contain positive words ("great", "excellent",
"good", "amazing", "comfortable") versus negative words ("poor", "bad", "heavy", "complex"). 

Return an object like this { "P1001": { positiveCount: 3, negativeCount: 1 },
"P1002": { positiveCount: 2, negativeCount: 2 }, ... }

# Output
<img width="671" height="343" alt="Screenshot 2025-11-06 115331" src="https://github.com/user-attachments/assets/35579abc-a1a2-4eed-9734-74217e48b0f8" />
<img width="753" height="372" alt="Screenshot 2025-11-06 115337" src="https://github.com/user-attachments/assets/34e70b64-d9f0-483b-919e-3f77ea6175ba" />
<img width="925" height="383" alt="Screenshot 2025-11-06 115345" src="https://github.com/user-attachments/assets/6694376a-7632-4a82-983c-a4db1141c18a" />
<img width="1023" height="483" alt="Screenshot 2025-11-06 115355" src="https://github.com/user-attachments/assets/7b40bc1b-31f1-4eb1-8108-0526cc632dcf" />
<img width="922" height="734" alt="Screenshot 2025-11-06 115409" src="https://github.com/user-attachments/assets/9aa02a75-dc32-415f-b9b6-d5adaf0c69f4" />
<img width="865" height="452" alt="Screenshot 2025-11-06 115417" src="https://github.com/user-attachments/assets/6280e7db-2475-4c72-a049-ee85b9d53b11" />
<img width="808" height="405" alt="Screenshot 2025-11-06 115425" src="https://github.com/user-attachments/assets/63878e26-7edb-442e-933c-988ca7e9acea" />
<img width="928" height="375" alt="Screenshot 2025-11-06 115431" src="https://github.com/user-attachments/assets/5dab0110-9a2b-48e2-8f44-cb0f904d778c" />


