/*
[err, user] = await to(UserModel.findById(1));
*/

const to = (promise) => promise.then((data) => [null, data]).catch((err) => [err]);

export default to;
