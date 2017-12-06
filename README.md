# Thành Quân Shop

**Thành viên:**
- Mạnh Linh
- Hà Đăng
- Quang Tuyên
- Thành Đạt (Hỗ trợ đẩy tiến độ + đồ án)

**Công nghệ:**
- Backend: Node.js
- Frontend: React.js
- Database: MongoDB

## Mongo

#### Các kiểu dữ liệu trong MongoDB

```javascript
var schema = new Schema({
  name:    String,
  binary:  Buffer,
  living:  Boolean,
  updated: { type: Date, default: Date.now },
  age:     { type: Number, min: 18, max: 65 },
  mixed:   Schema.Types.Mixed,
  _someId: Schema.Types.ObjectId,
  array:      [],
  ofString:   [String],
  ofNumber:   [Number],
  ofDates:    [Date],
  ofBuffer:   [Buffer],
  ofBoolean:  [Boolean],
  ofMixed:    [Schema.Types.Mixed],
  ofObjectId: [Schema.Types.ObjectId],
  ofArrays:   [[]]
  ofArrayOfNumbers: [[Number]]
  nested: {
    stuff: { type: String, lowercase: true, trim: true }
  }
})

// example use

var Thing = mongoose.model('Thing', schema);

var m = new Thing;
m.name = 'Statue of Liberty';
m.age = 125;
m.updated = new Date;
m.binary = new Buffer(0);
m.living = false;
m.mixed = { any: { thing: 'i want' } };
m.markModified('mixed');
m._someId = new mongoose.Types.ObjectId;
m.array.push(1);
m.ofString.push("strings!");
m.ofNumber.unshift(1,2,3,4);
m.ofDates.addToSet(new Date);
m.ofBuffer.pop();
m.ofMixed = [1, [], 'three', { four: 5 }];
m.nested.stuff = 'good';
m.save(callback);
```

### Tham khảo

Viết theo Model - Controller của a Hải [Xem](https://github.com/haivx/connect-mongodb-express/tree/master/Example%203)

### Lưu ý

1) Mọi người làm phần nào thì nhớ viết docs nhé (Nhớ viết luôn đừng để làm xong đồ án mới viết)

