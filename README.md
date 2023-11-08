# Eclipse-FE-Test

Dan Shaw's submission to Eclipse's front end interview tech test.

## How to install

`npm install`

## How to run

`npm run dev`

## Thoughts on brief

https://www.figma.com/file/hwbiC8rI7JsPFfAC9cwCWd/Experience-Interview-Tests-(Developer)-(Logic-3)

Just documenting initial thought process when faced by the requirements and potential problems.

_Design_

- Layout should match the provided designs
  - No notes - designs are simple enough
  - Should be able to use CSS flex layout and split alot of the design up into single purpose design blocks
- Site should use responsive techniques to ensure it works on a range of devices
  - Mobile heading/rating is in a different flex order compared to the desktop design
  - Lack of tablet design, will make a light touch adaptation of the wider desktop design, although it should squish up okay (potential problem with long product names going over multiple lines)

_Data_

- Use https://dummyjson.com for product data.
  - Quick glance at their docs, should be easy to return _just_ 10 products, not sure about "random" ones though.
  - definately don't need to fetch all products when only 10 are needed.
- Most parts of the API response are self-explanatory (e.g title, description, rating).However a couple hints for the more difficult ones;
  - ok
- The stock value relates to the stock bar - you decide the threshold for ‘In stock’ vs ‘Last few left’
  - ok
- The pricing should be based on the price and discountPercentage values
  - ok
- This API may not give you all the data you require - so some parts of your card data will need to be dummy/static data (e.g PayPal credit available text) you add somehow
  - ok

_Required logic_

- Show exactly 10 products at random
  - random is a bit vague, maybe the API returns a random list, or I will have to randomise it, or its just unclear spec - Follow up via email
- Exclude all products where brand is Apple
  - done via API
- Order products by the average review score descending
  - might be achievable via api, otherwise will do client side
- 1 image per product (selected from the image array)
  - Okay, wonder if there are different sizes in the API
  - does every product have an image array?
  - definately have a fallback image...
- Clicking on ‘Add to basket’ should log to console the product ID and price
  - okay
- If a user refreshes the page after 3 minutes then get fresh product data (following rules above, 10 products at random, no Apple products etc).
  - will be using `@tanstack/react-query`, so this is can just use `staleTime`
- If a user refreshes the page after less than 3 minutes the same products currently on page should show
  - same as above
- To achieve the above you will need to store data somehow. The data stored should only be the values used in the UI (e.g there is no category)
  - again `@tanstack/react-query` will handle this
- The countdown timer on each product card ‘Order in the next xx:xx:xx’ should count down until the data becomes stale (meaning a page refresh would get fresh product data)
  - store timestamp when react-query successfully returns to be used in UI
- Only the product(s) with the highest rating should have the ‘Eclipse recommended’ badge, pink border, the price in red and the ‘Save £xxx’ badge
  - just sort the list by rating and find the productId so it can get highlighted

## Planned approach

1. investigate dummy data api (to gather if it can filter/sort server side)
1. get product list
1. filter out brand = Apple
1. randomise
1. sort by review score
1. display 10
1. sort out caching with react-query
1. refetching
1. mobile UI implementation
1. desktop UI implementation

## Mid implementation thoughts and decisions

I got too into it and forgot to actually note any down!

## Post implementation thoughts

Overall I am pleased with the end result but overall I spent slighty more time than I had anticipated.

I would revisit the following if I had more time:

### Responsiveness

I threw some functional, but basic responsiveness together at 800px wide, but with more time, there would be several more breakpoints and designs to cater for a wider range of devices.

### Data fetching

I feel that I havent actually fulfilled this completely. Although `react-query` does a lot of the heavy lifting in terms of caching the response, I was asked to control what was stored ( react-query saves the entire response ), and also randomise the response on subsequent requests.

If I were to spend more time on it, would have removed `react-query` and done it with basic fetch apis.

Rough outline of the approach I could have taken:

1. fetch data with `skip`\* set to 0 (fetching the first 10 products)
1. store `productList` , `expiryDate` and `skip`\ in localStorage
1. use `expiryDate` to change the countdown clock
1. on page refresh, check if `skip` and `expiryDate` have been set in localStorage
   - if available and expiryDate is before current time, generate a new value for `skip`. this would be a number between 0 and 290 (as there seems to be 300 items in the dummydata endpoint)
   - if available but expiryDate is after current time, retrieve `productList`

\* `skip` is the pointer used in the dummyjson endpoint to indicate where you want to grab the product list from. Randomising this between 0 and 290 should give a new list of items back, albeit always in the same order. If the products then needed to be even more random, the product list array could have been shuffled.

### ‘Eclipse recommended’ badge

Re-reading the brief, it states that there could be multiple products with the same high rating. My implementation is very coarse and just highlights the first element in the list, as it was sorted by rating anyways.

To allow more than one, I would access the list and gather the highest rating, then check the products rating against that to achieve the request result.
