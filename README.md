# cleaningexpress

List of Routes:

1- router.get("/maids", controller.maidList) 
 - this route show the list of maids registered in the app 

2- router.post("/maid_info", auth.verifyJWT, controller.registerMaid)
 - This route register a maid based by user id

3- router.get("/maid_info/:id", auth.verifyJWT, controller.maidInfo)
 - This route shows the specifc maid by id

4- router.post("/cust_info", auth.verifyJWT, controller.registerCust)
 - This route reguster an user based by user id

5- router.get("/cust_info/:id", auth.verifyJWT, controller.custInfo)
 -  This route shows the specifc user by id

6- router.post("/maidChoice",auth.verifyJWT, controller.maidChoice)
 - This route shows what type of service the maid provide

7- router.post("/profileMatch", auth.verifyJWT, controller.match)
 - This route match the user with maid


 LONG WAY TO GO!