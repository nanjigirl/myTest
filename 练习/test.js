var name1 = 'hjg'
var obj = {
  name1: 'abc',
  a: {
    name1: 'bsd',
    c: function () {
      console.log(this.name1)
    }
  }
}
obj.a.c()
var d = obj.a.c
d()