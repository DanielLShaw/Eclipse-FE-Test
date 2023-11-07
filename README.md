# Eclipse-FE-Test

Dan Shaw's submission to Eclipse's front end interview tech test.

## How to install

`TBD`

## How to run

`TBD`

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

## Mid implementation thoughts and decisions

`TDB`

## Post implementation thoughts

`TBD`
