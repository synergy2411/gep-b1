const { BehaviorSubject } = require("rxjs");

const sub = new BehaviorSubject(123);

sub.next(456);

sub.subscribe(response => {
    console.log(response);
})


sub.next(789);
