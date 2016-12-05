

exports.get = function* (uid, next) {
    this.body = "user id" + uid + '\npathRegexp:' + exports.post.pathRegexp;

    yield* next;
}

exports.post = function* (uid, next) {

    console.log("[uid]", uid);

    console.log("[body]", this.request.body);

    console.log("this.request", this.request);

    this.body = { data: { user: 'ddd' } }

    console.log("this.request", this.response);

    yield* next;


}