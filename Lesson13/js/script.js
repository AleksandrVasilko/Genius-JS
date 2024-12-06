const btn = document.querySelector(".js-get-data");

btn.addEventListener("click", getURL);

function getURL() {
  return fetch("https://api.monobank.ua/bank/currency");
}

// fetch

//let promise = fetch();

// async/await

async function a() {
  return true;
}

a().then(console.log);

//let value = await promise;

async function b() {
  let prom = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello"), 1000);
  });

  let result = await prom;

  console.log(result);
}

b();

// let response = await fetch("https://api.monobank.ua/bank/currency");

const monocurrency = async () => {
  let response = await fetch("https://api.monobank.ua/bank/currency");
  if (response.ok) {
    console.log("Ok");
  } else {
    console.log("Err: ", response.status);
  }
};

//monocurrency();

//Headers
const headers = new Headers({
  "Content-Type": "application/json",
  "X-Custom-Header": "custom value",
});

console.log(headers.has("Content-Type"));

//POST
const postTest = async () => {
  let user = {
    name: "Ivan",
    city: "Kiev",
  };

  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

//try catch

try {
  console.log("Start");
  abc;
  console.log("Finish");
} catch (err) {
  console.log("Err");
}

setTimeout(function () {
  try {
    abc;
  } catch (err) {
    console.log("Err");
  }
}, 1000);

try {
  abc;
} catch (err) {
  console.log(err.message);
}

let json = ``;
try {
  let user = JSON.parse(json);
} catch (err) {
  console.log("Err json");
}

let json1 = `{"name": "Ann"}`;
try {
  let user = JSON.parse(json1);
  console.log("user", user.name);
  if (!user.city) {
    throw new SyntaxError("Нема міста!");
  }
} catch (err) {
  console.log("Err", err.message);
} finally {
  console.log("finally");
}

//let socet = new WebSocket("wss://");

let socket = new WebSocket(
  "wss://javascript.info/article/websocket/demo/hello"
);

socket.onopen = function (e) {
  console.log("З'єднання встановленно");
  socket.send("Hello!");
};

socket.onmessage = function (e) {
  console.log("message", e.data);
};

socket.onclose = function (e) {
  if (e.wasClean) {
    console.log("Зупинено", e.code);
  } else {
    console.log("Розірвно");
  }
};

socket.onerror = function (err) {
  console.log(err);
};
