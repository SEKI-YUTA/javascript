const { resolveTxt } = require("dns");
const fetch = require("node-fetch");

const url = 'https://randomuser.me/api/';



  // fetch(url).then((response) => {
  //   return response.text();
  // }).then((text) => {
  //   console.log(text)
  // });


  // fetch(url).then(() => {
  //   console.log('')
  // }).catch(() => {
  //   console.log
  // })

  const asyncFunc = async(value) => {
    return fetch(url).then((result) => {
      console.log("これは非同期処理関数内の成功ログです");
      return "Finish!!";
    }).catch((err) => {
      console.log("これは非同期処理関数の失敗ログです");
      return "failed"
    });
  }

  const waitAsyncFunc = (async() => {
    const message = "非同期処理";
    const result = await asyncFunc(message);
    console.log(message + result);
  })();