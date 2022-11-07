//////////////////DOCUMENTATION///////////////////

This app was build by using:
- React, Typescript
- React Hooks
- Redux toolkit, Redux Async Thunk
- REST API

Entry point of this app is job list page. All jobs generetes from API. First load of the page calls async request to API. After that API data is written to Redux store. Until we get a response from API - Loader will be displayed. At the bottom located custom pagination. Current page number is also written to Redux store, so when we get back to job list page - last opened page will be displayed. After clicking on job card, [id] of this item will be transferred to params (/job/[id]). After we got a job title page, using hook useParams we get current item [id] and find element in our store. If we dont have data in store - async request to API will be called. 
